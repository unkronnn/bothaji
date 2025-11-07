const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_gzw',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌟 Lexy : GZW - External with Built-in Spoofer & Premium Features')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 161.000 / $9.50
**7 DAY**   — IDR 849.250 / $50.00
**30 DAY**  — IDR 1.496.750 / $89.00

A premium product for the game Gray Zone Warfare from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🌟**Lexy Advantages:**
✅ **Built-in Spoofer** - Complete hardware protection
✅ **External Safety** - Minimal detection risk
✅ **Premium Quality** - High-end implementation
✅ **Stream Protection** - Content creator safe
✅ **Universal Compatibility** - All system formats supported
✅ **Professional Features** - Advanced functionality
✅ **Premium Pricing** - Premium tier options

### ⚔️**Perfect For:**
• Players seeking premium external quality
• Users requiring built-in spoofer protection
• Streamers needing safety features
• Competitive players requiring reliability
• Users with diverse system configurations
• Those wanting professional features
• Players seeking premium quality investment

### 🎮**Gray Zone Warfare Features:**
• **Tactical Combat** - Realistic military operations
• **Team-based Gameplay** - Squad coordination
• **Strategic Elements** - Mission planning
• **Realistic Ballistics** - Authentic weapon mechanics
• **Combat Zones** - Various operational areas

### ⚙️**Technical Excellence:**
• **External Implementation** - Safe and undetectable
• **Built-in Spoofer** - Complete hardware protection
• **Universal Compatibility** - All system configurations
• **StreamProof Technology** - Safe for content creation
• **Premium Quality** - High-end development standards

### 🎯**Key Features:**
• **Built-in Spoofer** - Complete hardware protection system included
• **External Design** - Safe and undetectable external implementation
• **Premium Quality** - High-end development with professional features
• **Universal Compatibility** - Support for all Windows versions and system formats

### 💎**Premium Benefits:**
• **Complete Protection** - Hardware spoofer integrated
• **External Safety** - Minimal detection risk with external design
• **Professional Support** - Premium quality implementation
• **Multi-system Support** - Universal compatibility across configurations

---
**Premium external cheat with built-in spoofer and high-end professional features for complete Gray Zone Warfare tactical mastery!**`)
            .addFields(
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security and safety.'
                },
                {
                    name: '`🌟` PREMIUM QUALITY',
                    value: 'High-end external implementation with professional features and reliable performance.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Minimal detection risk with safe and undetectable external design implementation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy Gray Zone Warfare premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy Gray Zone Warfare • External • Built-in Spoofer • Premium Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};