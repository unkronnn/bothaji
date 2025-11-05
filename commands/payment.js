const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pembayaran')
    .setDescription('💸 | Lihat metode pembayaran yang tersedia'),
  async execute(interaction) {
    console.log('Payment command triggered!');
    try {
      await interaction.deferReply();

      // Embed Utama
      const embed = new EmbedBuilder()
        .setTitle('💎 Metode Pembayaran')
        .setDescription(
          `🎉 **Terima kasih telah memilih layanan kami!** 🎉\n\n` +
          `💳 **Berikut adalah metode pembayaran yang tersedia:**\n\n` +
          `👇 **Klik tombol di bawah untuk melihat detail setiap kategori:**\n\n` +
          `💰 **Dompet Digital** - Cepat & Praktis\n` +
          `🔥 **Transfer Bank** - Aman & Terpercaya\n` +
          `✨ **QRIS** - Modern & Mudah`
        )
        .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
        .setColor(config.appearance.embedColor)
        .setThumbnail('https://cdn-icons-png.flaticon.com/512/3135/3135715.png')
        .setFooter({
          text: '🔒 Pembayaran Aman dan Terpercaya 💯',
          iconURL: interaction.client.user.displayAvatarURL()
        });

      // Tombol untuk Kategori
      const buttons = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId('e_wallets')
          .setLabel('💳 Dompet Digital')
          .setStyle(ButtonStyle.Primary)
          .setEmoji('💰'),
        new ButtonBuilder()
          .setCustomId('bank_transfers')
          .setLabel('🏦 Transfer Bank')
          .setStyle(ButtonStyle.Success)
          .setEmoji('🔥'),
        new ButtonBuilder()
          .setCustomId('qris')
          .setLabel('📱 QRIS & Lainnya')
          .setStyle(ButtonStyle.Secondary)
          .setEmoji('✨')
      );

      // Kirim respons awal
      await interaction.editReply({ embeds: [embed], components: [buttons] });

    } catch (error) {
      console.error('Terjadi kesalahan pada perintah pembayaran:', error);
      await interaction.editReply({
        content: '❌ | Terjadi kesalahan saat memproses perintah pembayaran.',
        ephemeral: true,
      });
    }
  },
};
