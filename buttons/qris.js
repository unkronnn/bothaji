const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
  customId: 'qris',
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('✨ QRIS & Lainnya')
      .setDescription('📱 **Pembayaran Modern & Mudah!** 📱\n\n' +
        '🔲 **Scan QR Code di bawah ini untuk pembayaran:**')
      .addFields(
        { name: '📸 **QRIS**', value: '**a/n CAHAYA TEKNIK**\n\n💡 *Cara bayar:* \n1. Buka aplikasi e-wallet/banking\n2. Pindai QR Code di atas\n3. Masukkan nominal pembayaran\n4. Konfirmasi pembayaran', inline: false }
      )
      .setColor('#9B59B6')
      .setThumbnail('https://cdn-icons-png.flaticon.com/512/2909/2909790.png')
      .setImage("https://media.discordapp.net/attachments/1412314599637651477/1435587110269878353/QRIS-Haji-Utong.png?ex=690c822f&is=690b30af&hm=59790bcace59964d8de95b719cc456adc260926e18729c20cea3e0669662c546&=&format=webp&quality=lossless&width=1280&height=1804")
      .setFooter({
        text: '🌟 QRIS - Scan & Pay Instantly 🌟',
        iconURL: interaction.client.user.displayAvatarURL()
      });

    await interaction.reply({ embeds: [embed], components: [], flags: [64] });
  },
};