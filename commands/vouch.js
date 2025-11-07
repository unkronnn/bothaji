// Import modul yang diperlukan
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ChannelType } = require('discord.js');
const config = require('../config/config.json');
const fs = require('fs'); 
const path = require('path'); 

const dbPath = path.join(__dirname, '..', 'data', 'feedback', 'feedback_data.json'); 

const animatedStarEmoji = '⭐'; 
const staticStarFull = '⭐'; 
const staticStarEmpty = '☆'; 

// --- Fungsi Helper untuk Database Lokal ---

function ensureDbDirectoryExists() {
 const dir = path.dirname(dbPath);
 if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Direktori database dibuat: ${dir}`);
 }
}

function readDatabase() {
 ensureDbDirectoryExists(); 
 try {
  if (!fs.existsSync(dbPath)) {
   console.log(`File database tidak ditemukan di ${dbPath}, membuat file baru.`);
   const defaultData = { feedbackCount: 0 };
   fs.writeFileSync(dbPath, JSON.stringify(defaultData, null, 2));
   return defaultData;
  }
  const rawData = fs.readFileSync(dbPath);
  return JSON.parse(rawData);
 } catch (error) {
  console.error('Gagal membaca atau membuat file database:', error);
  return { feedbackCount: 0 };
 }
}

function writeDatabase(data) {
 ensureDbDirectoryExists(); 
 try {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2)); 
 } catch (error) {
  console.error('Gagal menulis ke file database:', error);
 }
}


function generateAnimatedStarRating(rating) {
 // Pastikan rating 0-5
 const roundedRating = Math.max(0, Math.min(5, Math.round(rating)));
 return animatedStarEmoji.repeat(roundedRating);
}

function generateStaticStarRating(rating) {
 const roundedRating = Math.max(0, Math.min(5, Math.round(rating)));
 return staticStarFull.repeat(roundedRating) + staticStarEmpty.repeat(5 - roundedRating);
}

function getEmbedColorByRating(rating) {
 if (rating >= 4) return '#00FF00'; // Hijau untuk rating bagus (4-5)
 if (rating >= 3) return '#FFFF00'; // Kuning untuk rating sedang (3)
 return '#FF0000'; // Merah untuk rating kurang (1-2)
}

function formatVouchedAtTime(date) {
 const pad = (num) => String(num).padStart(2, '0');
 const year = date.getFullYear();
 const month = pad(date.getMonth() + 1); 
 const day = pad(date.getDate());
 const hours = pad(date.getHours());
 const minutes = pad(date.getMinutes());
 const seconds = pad(date.getSeconds());
 return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Fungsi untuk format waktu untuk footer (Today at HH:mm:ss)
function formatFooterTime(date) {
 const pad = (num) => String(num).padStart(2, '0');
 const hours = pad(date.getHours());
 const minutes = pad(date.getMinutes());
 const seconds = pad(date.getSeconds());
 return `Today at ${hours}:${minutes}:${seconds}`;
}


function createFeedbackEmbed(data) {
 const embedColor = getEmbedColorByRating(data.rating); // Warna dinamis

 const embed = new EmbedBuilder()
  .setColor(embedColor) // Gunakan warna dinamis
  .setTitle(`Submited ${config.server.name} Vouch!`)

  .addFields(
   {
    name: 'Vouch :',
    value: `${data.review}\n${generateAnimatedStarRating(data.rating)}`, // Review + Bintang di baris baru
    inline: false // Gunakan baris penuh untuk review
   },
   ...(data.productChannel ? [{
    name: 'Product/Service Channel :', // Atau nama lain yang Anda inginkan
    value: `<#${data.productChannel.id}>`,
    inline: false
   }] : []),
   {
    name: 'Vouch No :',
    value: `${data.feedbackNumber}`,
    inline: true // Inline agar bersebelahan jika muat
   },
   {
    name: 'Vouched by :',
    value: `|| <@${data.author.id}> ||`, // Mention user dengan spoiler tag
    inline: true // Inline agar bersebelahan jika muat
   },
   {
    name: 'Vouched at :',
    value: `\`${formatVouchedAtTime(data.timestamp)}\``, // Gunakan backticks untuk gaya code block
    inline: false // Baris penuh
   }
  );

  embed.setThumbnail(data.author.displayAvatarURL({ dynamic: true }));
  embed.setFooter({
   text: `Thanks For Vouching Us! • ${formatFooterTime(data.timestamp)}`,
   iconURL: config.server.logoURL
  });

 return embed;
}

async function sendThankYouMessage(interaction, data) {
 const thankYouEmbed = new EmbedBuilder()
  .setColor(getEmbedColorByRating(data.rating)) 
  .setTitle('🎉 Terima Kasih atas Masukan Anda! 🎉') 
  .setDescription(
`Hai <@${data.author.id}>!

Terima kasih telah meluangkan waktu untuk memberikan masukan (#${data.feedbackNumber}).
Kontribusi Anda sangat berharga dan membantu kami untuk terus meningkatkan kualitas layanan.

**Detail Masukan Anda:**
**Nomor Vouch**: \`${data.feedbackNumber}\`
**Penilaian Anda**: ${generateStaticStarRating(data.rating)} (${data.rating}/5)
${data.productChannel ? `**Produk/Layanan**: <#${data.productChannel.id}>\n` : ''}**Ulasan Anda**: \`${data.review.substring(0, 200)}${data.review.length > 200 ? '...' : ''}\`
${data.image ? '\n📸 Gambar Anda telah dilampirkan pada masukan di channel.' : ''}
`) 

  .setFooter({
   text: `Masukan Anda Diproses • ${formatFooterTime(new Date())}`, 
   iconURL: config.server.logoURL
  });

 await interaction.followUp({
  embeds: [thankYouEmbed],
  flags: [64]
 });
}

module.exports = {
 data: new SlashCommandBuilder()
  .setName('vouch')
  .setDescription('📝 | Kirimkan masukan Anda tentang layanan kami')
  .addNumberOption(option =>
   option.setName('rating')
    .setDescription('Berikan penilaian dari 1-5 bintang')
    .setMinValue(1)
    .setMaxValue(5)
    .setRequired(true))
  .addStringOption(option =>
   option.setName('review')
    .setDescription('Tulis ulasan atau masukan Anda (maks 1000 karakter)')
    .setMaxLength(1000) // Batasi panjang review
    .setRequired(true))
  .addChannelOption(option => // Opsi baru untuk channel produk
   option.setName('product_channel')
    .setDescription('Pilih channel produk/layanan yang Anda review (opsional)')
    .addChannelTypes(ChannelType.GuildText) // Hanya izinkan channel teks
    .setRequired(false)) // Buat opsional
  .addAttachmentOption(option =>
   option.setName('image')
    .setDescription('Unggah gambar untuk mendukung masukan Anda (opsional, maks 8MB)')
    .setRequired(false)),

 async execute(interaction) {
  try {
   await interaction.deferReply({ flags: [64] });

   const hasBuyerRole = interaction.member.roles.cache.has(config.roles.buyer);
   if (!hasBuyerRole) {
    return interaction.editReply({
     content: '`❌` | Hanya pembeli yang dapat mengirimkan masukan!',
    });
   }

   const feedbackChannel = interaction.guild.channels.cache.get(config.channels.feedback);
   if (!feedbackChannel) {
    return interaction.editReply({
     content: '`❌` | Saluran masukan tidak ditemukan! Mohon konfirmasi ID channel di `config.json`.',
    });
   }

   const attachment = interaction.options.getAttachment('image');
   if (attachment) {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validImageTypes.includes(attachment.contentType)) {
     return interaction.editReply({
      content: '`❌` | Jenis file tidak valid! Harap unggah hanya gambar (JPEG, PNG, GIF, atau WEBP).',
     });
    }
    if (attachment.size > 8 * 1024 * 1024) { // 8 MB limit
     return interaction.editReply({
      content: '`❌` | Ukuran file gambar terlalu besar! Ukuran maksimum adalah 8MB.',
     });
    }
   }

   const dbData = readDatabase();
   const currentFeedbackCount = dbData.feedbackCount || 0; // Ambil count, default 0 jika tidak ada
   const nextFeedbackNumber = currentFeedbackCount + 1;

   const feedbackData = {
    author: interaction.user,
    rating: interaction.options.getNumber('rating'),
    review: interaction.options.getString('review'),
    productChannel: interaction.options.getChannel('product_channel'), // Ambil channel produk
    timestamp: new Date(), 
    image: attachment,
    feedbackNumber: nextFeedbackNumber 
   };

   const feedbackEmbed = createFeedbackEmbed(feedbackData);

   try {
    const messagePayload = { embeds: [feedbackEmbed] };
    if (feedbackData.image) {
      messagePayload.files = [{ attachment: feedbackData.image.url, name: feedbackData.image.name }];
    }
    await feedbackChannel.send(messagePayload);

    // Update database HANYA JIKA pengiriman berhasil
    dbData.feedbackCount = nextFeedbackNumber; // Update count di objek data
    writeDatabase(dbData); // Simpan data baru ke file JSON
    console.log(`Feedback #${nextFeedbackNumber} berhasil dikirim dan database diperbarui.`);

   } catch (sendError) {
    console.error(`Gagal mengirim feedback #${nextFeedbackNumber} ke channel:`, sendError);
    // Jangan update database jika pengiriman gagal
    return interaction.editReply({
      content: '`❌` | Gagal mengirim masukan Anda ke channel tujuan. Mohon coba lagi atau hubungi admin.',
    });
   }

   // Kirim pesan terima kasih ke pengguna (ephemeral follow-up)
   await sendThankYouMessage(interaction, feedbackData);

   // Konfirmasi sukses ke pengguna (edit reply awal)
   return interaction.editReply({
    content: `\`✅\` | Masukan Anda (#${nextFeedbackNumber}) telah berhasil diproses! Embed masukan telah dikirimkan ke channel ${feedbackChannel}!`,
   });

  } catch (error) {
   console.error('Terjadi kesalahan pada perintah vouch:', error);
   if (interaction.deferred || interaction.replied) {
    return interaction.editReply({
     content: '`❌` | Terjadi kesalahan internal saat memproses masukan Anda.',
     flags: [64]
    });
   } else {
    return interaction.reply({
     content: '`❌` | Terjadi kesalahan internal saat memproses masukan Anda.',
     flags: [64]
    });
   }
  }
 }
};
