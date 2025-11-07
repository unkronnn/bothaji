const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_pubg',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('✨ Lexy : PUBG - Elite Premium External Solution')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 161.000 / $9.50
**7 DAY**   — IDR 849.250 / $50.00
**30 DAY**  — IDR 1.496.750 / $89.00

A premium product for the game PUBG Steam from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 💎**Feature List:**
• **Please check the available media for a list of features!**

### 💎**Lexy Advantages:**
✅ **Elite Premium Quality** - Professional-grade external software
✅ **Built-in HWID Spoofer** - Complete protection suite included
✅ **StreamProof Functionality** - Safe for live streaming
✅ **Regular Updates** - Latest game version compatibility
✅ **24/7 Customer Support** - Always available assistance
✅ **Elite Customer Service** - Premium support experience
✅ **Professional Interface** - Clean and intuitive design
✅ **Advanced Security** - Maximum protection features

### 🎮**Perfect For:**
• Elite PUBG competitors
• Users demanding premium quality
• Players requiring maximum protection
• Streamers needing comprehensive safety
• Those wanting elite customer service
• Users seeking the best performance
• Players wanting peace of mind

### 🏆**PUBG Features:**
• **Battle Royale** - 100-player survival combat
• **Realistic Weapons** - Authentic firearm mechanics
• **Large Maps** - Diverse tactical environments
• **Vehicle Combat** - Mobile warfare tactics
• **Survival Gameplay** - Resource management

### 🎯**Key Features:**
• **Elite Premium Quality** - Professional-grade software
• **Built-in Spoofer** - Complete protection integration
• **StreamProof** - Safe for live streaming
• **Regular Updates** - Latest compatibility
• **24/7 Support** - Always available assistance

---
**Elite premium external cheat with built-in spoofer and comprehensive protection for ultimate PUBG performance!**`)
            .addFields(
                {
                    name: '`👑` ELITE PREMIUM',
                    value: 'Professional-grade external software with industry-leading quality and performance.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete HWID spoofer integrated for maximum security and protection.'
                },
                {
                    name: '`🎥` STREAMPROOF',
                    value: 'Advanced safety features making it completely safe for live streaming.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy PUBG elite premium cheat.'
                }
            )
            .setColor('#FF69B4')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy PUBG • External • Elite Premium • Built-in Spoofer & StreamProof',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};