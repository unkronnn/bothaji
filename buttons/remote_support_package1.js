const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'remote_support_package1',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🖥️ PACKAGE 1 - Basic Remote Support')
            .setDescription(`
### 🧾**Pricing**
**Basic Remote Support**
**IDR 50.000**

### 📝**What You Get:**
✅ Personalized 1-on-1 remote support
✅ Basic setup and installation assistance
✅ Troubleshooting for common issues
✅ Step-by-step guidance
✅ Time-saving setup process

### 🔧**Service Details:**
• Remote desktop connection support
• Software installation and configuration
• Basic troubleshooting and fixes
• Product setup and activation
• User guidance and training

### ⏱️**Service Duration:**
• 30-60 minutes session
• Basic issue resolution
• Standard priority support

### 📋**Perfect For:**
• First-time users
• Basic setup requirements
• Common troubleshooting
• Installation guidance

---
**Need more comprehensive support? Check out our Premium Package!**`)
            .addFields(
                {
                    name: '`⚠️` IMPORTANT',
                    value: 'Package selection will be determined by the Admin based on your specific needs and case complexity. This package is suitable for basic setup and troubleshooting.'
                },
                {
                    name: '`📞` Next Steps',
                    value: 'Contact our support team to schedule your remote support session.'
                }
            )
            .setColor('#00BFFF')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Basic Remote Support - Quick and Efficient Setup',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};