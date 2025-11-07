const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'dx9ware_roblox',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎮 DX9Ware : Roblox - External Advanced Features with Lifetime Access')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 65.000 / $3.50
**30 DAY**  — IDR 199.500 / $12.00
**90 DAY**  — IDR 382.000 / $23.00
**Lifetime** — IDR 1.245.750 / $75.00

A premium product for the game Roblox from DX9Ware group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Roblox Launcher
• **Built-in Spoofer:** No
• **Software Type:** External

### 💎**Feature List:**
• **Please check the available media for a list of features!**

### 💎**DX9Ware Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Advanced Features** - Professional-grade functionality
✅ **StreamProof** - Safe for streaming
✅ **Multi-Resolution Support** - Works with all display modes
✅ **Lifetime Option** - Best long-term value
✅ **Regular Updates** - Latest compatibility
✅ **Premium Quality** - Industry-leading features
✅ **Roblox Platform** - Works across all Roblox games

### 🎮**Perfect For:**
• Roblox platform enthusiasts
• Users wanting lifetime access
• Players requiring advanced features
• Streamers needing safety
• Multi-game Roblox players
• Users seeking best value
• Players wanting comprehensive features

### 🎮**Roblox Features:**
• **Massive Platform** - Millions of user-created games
• **Game Diversity** - Multiple genres and experiences
• **Social Interaction** - Multiplayer and community features
• **Creative Tools** - User-generated content
• **Cross-Platform** - Available on multiple devices

### 🎯**Key Features:**
• **External Design** - Safe and efficient performance
• **Advanced Features** - Professional functionality
• **Lifetime Access** - One-time payment option
• **StreamProof** - Safe for content creation
• **Platform Support** - Works across all Roblox games

---
**External cheat with advanced features and lifetime access for ultimate Roblox platform dominance!**`)
            .addFields(
                {
                    name: '`👑` LIFETIME ACCESS',
                    value: 'One-time payment provides unlimited access forever - best long-term value.'
                },
                {
                    name: '`🎮` PLATFORM SUPPORT',
                    value: 'Works across all Roblox games and experiences with universal compatibility.'
                },
                {
                    name: '`🛡️` STREAMPROOF',
                    value: 'Advanced safety features making it completely safe for live streaming.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your DX9Ware Roblox premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'DX9Ware Roblox • External • Advanced Features • Lifetime Access',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};