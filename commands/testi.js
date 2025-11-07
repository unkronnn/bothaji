const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

const EMOJI = {
  SUCCESS: '✅',
  ERROR: '❌',
  INFO: 'ℹ️',
  WARNING: '⚠️',
  SELLER: '👤',
  BUYER: '🛒',
  PRODUCT: '📦',
  PRICE: '💰',
  PAYMENT: '💳',
  STATUS: {
    PAID: '💰',
    PENDING: '💳'
  },
  DOT: '•'
};

const EMBED_STYLE = {
  COLORS: {
    SUCCESS: 0x2ECC71,
    ERROR: 0xFF0000,
    WARNING: 0xFFAA00,
    INFO: 0x3498DB,
    DEFAULT: 0x2B2D31
  },
  THUMBNAIL_SIZE: 300
};

const PAYMENT_STATUS = [
  { name: '✅ Dibayar', value: 'paid' },
  { name: '⏳ Belum Dibayar', value: 'unpaid' }
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('testimonial')
    .setDescription('📈 | Buat testimonial transaksi penjualan')
    .addUserOption(option => option
      .setName('seller')
      .setDescription('Tag penjual produk')
      .setRequired(true))
    .addUserOption(option => option
      .setName('buyer')
      .setDescription('Tag pembeli produk')
      .setRequired(true))
    .addChannelOption(option => option
      .setName('product')
      .setDescription('Channel produk yang dibeli')
      .setRequired(true))
    .addStringOption(option => option
      .setName('price')
      .setDescription('Harga produk (contoh: 100k)')
      .setRequired(true))
    .addStringOption(option => option
      .setName('payment_method')
      .setDescription('Metode pembayaran yang digunakan')
      .setRequired(true))
    .addAttachmentOption(option => option
      .setName('transaction_proof')
      .setDescription('Bukti foto pengiriman produk')
      .setRequired(true))
    .addStringOption(option => option
      .setName('testimonial_number')
      .setDescription('Nomor urut testimonial')
      .setRequired(true))
    .addStringOption(option => option
      .setName('payment_status')
      .setDescription('Status pembayaran')
      .setRequired(true)
      .addChoices(...PAYMENT_STATUS))
    .addAttachmentOption(option => option
      .setName('additional_proof')
      .setDescription('Bukti pembayaran tambahan (opsional)')
      .setRequired(false)),

  async execute(interaction) {
    try {
      await interaction.deferReply({ flags: [64] });

      if (!await validatePermissions(interaction)) {
        return;
      }

      const testimonialChannel = await getTestimonialChannel(interaction);
      if (!testimonialChannel) {
        return;
      }

      const data = collectInputData(interaction);
      if (!await validateInputData(interaction, data)) {
        return;
      }

      const testimonialEmbed = createTestimonialEmbed(data);
      await testimonialChannel.send({ embeds: [testimonialEmbed] });

      const roleResult = await assignBuyerRole(interaction, data);
      await sendFeedbackMessage(interaction, data.buyer);
      await sendDirectMessage(interaction, data.buyer);
      await promptFeedbackCommand(interaction, data.buyer);

      await interaction.editReply(createResponseEmbed({
        title: 'Testimonial Dibuat',
        description: `Testimonial #${data.testimonialNumber} berhasil dibuat!`,
        fields: roleResult.fields || []
      }));

    } catch (error) {
      console.error('Kesalahan dalam perintah testimonial:', error);
      await handleError(interaction, 'Terjadi kesalahan tak terduga saat membuat testimonial.');
    }
  }
};

async function validatePermissions(interaction) {
  const hasPermission = interaction.member.roles.cache.has(config.roles.access);

  if (!hasPermission) {
    await interaction.editReply(createResponseEmbed({
      type: 'ERROR',
      title: 'Izin Ditolak',
      description: 'Anda tidak memiliki izin untuk menggunakan perintah ini.',
      footer: 'Diperlukan: Peran Akses'
    }));
    return false;
  }
  return true;
}

async function getTestimonialChannel(interaction) {
  const channel = interaction.guild.channels.cache.get(config.channels.testimonial);
  if (!channel) {
    await handleError(interaction, 'Channel testimonial tidak ditemukan! Silakan hubungi administrator.');
    return null;
  }
  return channel;
}

async function validateInputData(interaction, data) {
  const validationRules = [
    {
      condition: data.price.match(/^\d+(\.\d{1,2})?\s?(k|jt|ribu|ratus)?$/i),
      message: 'Format harga tidak valid. Silakan gunakan format seperti "100k", "1jt", "500 ribu", atau "100000"'
    },
    {
      condition: data.testimonialNumber.match(/^\d+$/),
      message: 'Nomor testimonial harus berupa angka yang valid'
    }
  ];

  for (const rule of validationRules) {
    if (!rule.condition) {
      await handleError(interaction, rule.message);
      return false;
    }
  }
  return true;
}

async function assignBuyerRole(interaction, data) {
  const feedbackMessages = {
    userNotFound: (buyer) => `Kesalahan: Tidak dapat menemukan pengguna ${buyer.tag} di server.`,
    alreadyHasRole: (buyer, roleName) => `Catatan: ${buyer} sudah memiliki peran ${roleName}.`,
    roleAdded: (buyer, roleName) => `Sukses: Menambahkan peran ${roleName} ke ${buyer}.`,
    genericError: 'Terjadi kesalahan tak terduga selama penugasan peran.'
  };

  try {
    const roleId = config.roles.buyer;

    const member = await interaction.guild.members.fetch(data.buyer.id).catch(() => null);
    if (!member) {
      console.error(`Pengambilan anggota gagal untuk ID: ${data.buyer.id}`);
      return {
        success: false,
        fields: [{
          name: '\`❌\` Penugasan Peran',
          value: feedbackMessages.userNotFound(data.buyer)
        }]
      };
    }

    const role = interaction.guild.roles.cache.get(roleId);
    if (!role) {
      console.error(`Peran dengan ID ${roleId} tidak ditemukan di guild`);
      return {
        success: false,
        fields: [{
          name: '\`❌\` Penugasan Peran',
          value: `Kesalahan: Peran tidak dapat ditemukan di server.`
        }]
      };
    }

    if (member.roles.cache.has(roleId)) {
      return {
        success: true,
        fields: [{
          name: '\`ℹ️\` Status Peran',
          value: feedbackMessages.alreadyHasRole(data.buyer, role.name)
        }]
      };
    }

    await member.roles.add(roleId);
    console.log(`Peran ${role.name} (${roleId}) berhasil ditambahkan ke pengguna ${member.user.tag}`);
    
    return {
      success: true,
      fields: [{
        name: '\`✅\` Penugasan Peran',
        value: feedbackMessages.roleAdded(data.buyer, role.name)
      }]
    };

  } catch (error) {
    console.error('Kesalahan penugasan peran:', error);
    return {
      success: false,
      fields: [{
        name: '\`❌\` Penugasan Peran',
        value: feedbackMessages.genericError
      }]
    };
  }
}

async function handleError(interaction, message) {
  await interaction.editReply(createResponseEmbed({
    type: 'ERROR',
    title: 'Kesalahan',
    description: message,
    footer: 'Silakan coba lagi atau hubungi administrator'
  }));
}

function createTestimonialEmbed(data) {
  const description = `
\`🌟\` **Testimonial Sukses #${data.testimonialNumber}**
\`📦\` **Transaksi Berhasil!**

**• Penjual:** ${data.seller}
**• Pembeli:** ${data.buyer}
**• Produk:** ${data.product}
**• Harga:** \`${data.price}\`
**• Pembayaran:** \`${data.paymentMethod}\`
**• Status:** ${data.paymentStatus === 'paid' ? 'Dibayar ' + EMOJI.STATUS.PAID : 'Tertunda ' + EMOJI.STATUS.PENDING}

\`📋\` **Transaksi telah dicatat dalam sistem**
\`💝\` Terima kasih telah berbelanja di ${config.server.name}!`;

  const embed = new EmbedBuilder()
    .setColor(config.appearance.embedColor || EMBED_STYLE.COLORS.SUCCESS)
    .setDescription(description)
    .setThumbnail(config.server.logoURL)
    .setImage(data.transactionProof.url)
    .setFooter({ 
      text: `${config.server.name} • ${formatDate(new Date())}` 
    })
    .addFields({ 
      name: '\`📞\` Butuh bantuan?', 
      value: 'Buka tiket untuk menghubungi tim dukungan kami' 
    });

  if (data.additionalProof) {
    embed.addFields({
      name: '\`📑\` Bukti Tambahan',
      value: `[Klik untuk melihat](${data.additionalProof.url})`
    });
  }

  return embed;
}

function createResponseEmbed({ type = 'INFO', title, description, fields = [], footer }) {
  const embed = new EmbedBuilder()
    .setColor(EMBED_STYLE.COLORS[type])
    .setTitle(`${EMOJI[type]} ${title}`)
    .setDescription(description);

  if (fields.length > 0) {
    embed.addFields(fields);
  }

  if (footer) {
    embed.setFooter({ text: footer });
  }

  return { embeds: [embed], flags: [64] };
}

async function sendFeedbackMessage(interaction, buyer) {
  const embed = new EmbedBuilder()
    .setColor(EMBED_STYLE.COLORS.DEFAULT)
    .setAuthor({
      name: config.server.name,
      iconURL: interaction.guild.iconURL()
    })
    .setDescription(`Hi ${buyer}! \`👋\`\nTerimakasih Telah Berbelanja di **${config.server.name}**! \`🎉\``)
    .setFooter({ text: "Sistem Testimonial" });

  await interaction.channel.send({
    embeds: [embed],
    allowedMentions: { users: [buyer.id] }
  });
}

async function sendDirectMessage(interaction, buyer) {
  try {
    const dmEmbed = new EmbedBuilder()
      .setColor(config.appearance.embedColor || EMBED_STYLE.COLORS.SUCCESS)
      .setTitle('\`🎉\` Terima Kasih atas Pembelian Anda!')
      .setDescription(`
  Hai ${buyer}!

  Terima kasih telah berbelanja di **${config.server.name}**! 
  Kami sangat menghargai kepercayaan Anda.

  \`🌟\` **Berikan Feedback Anda!**
  Gunakan perintah \`/vouch rating\` di server untuk membagikan pengalaman Anda.

  \`💫\` Kami berharap dapat melayani Anda kembali!
      `)
      .setFooter({ 
      text: `${config.server.name} • ${formatDate(new Date())}` 
      });

    await buyer.send({ embeds: [dmEmbed] });
  } catch (error) {
    console.error('Gagal mengirim DM ke pembeli:', error);
  }
}

async function promptFeedbackCommand(interaction, buyer) {
  const feedbackPrompt = new EmbedBuilder()
    .setColor(EMBED_STYLE.COLORS.INFO)
    .setDescription(`${buyer}, gunakan \`/vouch rating\` pada <#1434067685682970654> untuk memberikan penilaian Anda! \`🌟\``);

  await interaction.channel.send({
    embeds: [feedbackPrompt],
    allowedMentions: { users: [buyer.id] }
  });
}

function collectInputData(interaction) {
  return {
    seller: interaction.options.getUser('seller'),
    buyer: interaction.options.getUser('buyer'),
    product: interaction.options.getChannel('product'),
    price: interaction.options.getString('price'),
    paymentMethod: interaction.options.getString('payment_method'),
    transactionProof: interaction.options.getAttachment('transaction_proof'),
    additionalProof: interaction.options.getAttachment('additional_proof'),
    testimonialNumber: interaction.options.getString('testimonial_number'),
    paymentStatus: interaction.options.getString('payment_status')
  };
}

function formatDate(date) {
  return date.toLocaleDateString('id-ID', { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}