const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'remote_support_package2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🖥️ PACKAGE 2 - Premium Remote Support')
            .setDescription(`
### 🧾**Pricing**
**Premium Remote Support**
**IDR 150.000**

### 📝**What You Get:**
✅ Priority 1-on-1 remote support
✅ Advanced setup and configuration
✅ Complex troubleshooting and fixes
✅ Complete system optimization
✅ Comprehensive user training
✅ Priority service with minimal waiting time
✅ Follow-up support included

### 🔧**Service Details:**
• Advanced remote desktop connection
• Complete software installation and optimization
• Complex issue resolution
• Advanced configuration and customization
• System performance tuning
• In-depth training and guidance
• 24-hour follow-up support

### ⏱️**Service Duration:**
• 2-3 hours session
• Complex issue resolution
• Priority support with minimal waiting
• Extended support window

### 📋**Perfect For:**
• Complex setup requirements
• Advanced troubleshooting
• Multiple software configurations
• System optimization needs
• Professional users
• Business applications

---
**Get the best support experience with our Premium Package!**`)
            .addFields(
                {
                    name: '`⚠️` IMPORTANT',
                    value: 'Package selection will be determined by the Admin based on your specific needs and case complexity. This premium package provides comprehensive support for complex scenarios.'
                },
                {
                    name: '`📞` Next Steps',
                    value: 'Contact our premium support team to schedule your priority remote support session.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Premium Remote Support - Comprehensive Service',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};