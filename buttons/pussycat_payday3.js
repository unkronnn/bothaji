const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_payday3',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏦 PussyCat : Payday 3 - External Professional Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 221.750 / $13.00
**31 DAY**  — IDR 399.250 / $24.00

A premium product for the game Payday 3 from PussyCat group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Built-in Spoofer:** No
• **Software Type:** External

### 💎**Feature List:**
• **Professional Aim Assistance** - Advanced targeting capabilities
• **Visual ESP Features** - Complete enemy and item awareness
• **Customizable Settings** - Adjustable configurations
• **Regular Updates** - Latest game version support
• **Safe to Use** - Reliable performance

### 💎**PussyCat Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Professional Aim** - Advanced targeting assistance
✅ **Visual ESP** - Complete awareness features
✅ **StreamProof** - Safe for streaming
✅ **Multi-Platform Support** - Steam & Epic Games
✅ **Regular Updates** - Latest version compatibility
✅ **24/7 Support** - Always available assistance

### 🎮**Perfect For:**
• Payday 3 heist enthusiasts
• Players wanting professional assistance
• Users seeking complete awareness
• Streamers requiring safety
• Those wanting reliable performance
• Multi-platform players
• Users seeking regular updates

### 🏦**Payday 3 Features:**
• **Heist Gameplay** - Cooperative robbery missions
• **Stealth Mechanics** - Tactical infiltration options
• **Action Combat** - Intense shooting sequences
• **Team Coordination** - 4-player cooperative play
• **Dynamic Environments** - Interactive heist locations

### 🎯**Key Features:**
• **Professional Aim** - Advanced targeting assistance
• **Visual ESP** - Complete awareness system
• **External Design** - Safe and efficient performance
• **Multi-Platform** - Works with Steam & Epic Games
• **Regular Updates** - Latest game compatibility

---
**External cheat with professional aim assistance and visual ESP for mastering every Payday 3 heist!**`)
            .addFields(
                {
                    name: '`🎯` PROFESSIONAL AIM',
                    value: 'Advanced targeting assistance for precise shooting and heist execution.'
                },
                {
                    name: '`👁️` VISUAL ESP',
                    value: 'Complete awareness system with enemy and item information display.'
                },
                {
                    name: '`🔄` MULTI-PLATFORM',
                    value: 'Full support for both Steam and Epic Games versions of Payday 3.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat Payday 3 premium cheat.'
                }
            )
            .setColor('#FFB84D')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat Payday 3 • External • Professional Aim & Visual ESP • Multi-Platform',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};