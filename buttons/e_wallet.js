const { EmbedBuilder } = require('discord.js');

module.exports = {
  customId: 'e_wallets',
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('💰 Dompet Digital')
      .setDescription('🚀 **Pembayaran Cepat, Praktis & Mudah!** 🚀\n\n' +
        '💳 **Silakan transfer ke salah satu e-wallet di bawah ini:**')
      .addFields(
        { name: '🟢 **Gopay**', value: '```\n085701678313\n```a/n Syukron Maulana', inline: true },
        { name: '🟠 **ShopeePay**', value: '```\n085701678313\n```a/n Syukron Maulana', inline: true },
        { name: '🔵 **Dana**', value: '```\n085701678313\n```a/n Syukron Maulana', inline: true },
        { name: '🟣 **OVO**', value: '```\n085701678313\n```a/n Syukron Maulana', inline: true }
      )
      .setColor('#00FF00')
      .setThumbnail('https://cdn-icons-png.flaticon.com/512/888/888879.png')
      .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
      .setFooter({
        text: '⚡ E-Wallet Payment - Instant & Secure ⚡',
        iconURL: interaction.client.user.displayAvatarURL()
      });

      await interaction.reply({ embeds: [embed], components: [], flags: [64] });
    },
};
