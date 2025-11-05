const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
  customId: 'bank_transfers',
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('🔥 Transfer Bank')
      .setDescription('🏦 **Pembayaran Aman & Terpercaya!** 🏦\n\n' +
        '💼 **Silakan transfer ke rekening bank kami di bawah ini:**')
      .addFields(
        { name: '🏛️ **Bank BRI**', value: '```\n660101000865507\n```a/n Syukron Maulana', inline: true }
      )
      .setColor('#FF6B35')
      .setThumbnail('https://cdn-icons-png.flaticon.com/512/2817/2817885.png')
      .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
      .setFooter({
        text: '🔒 Bank Transfer - Secure & Reliable 🔒',
        iconURL: interaction.client.user.displayAvatarURL()
      });

      await interaction.reply({ embeds: [embed], components: [], ephemeral: true });
    },
};
