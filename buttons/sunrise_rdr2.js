const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'sunrise_rdr2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌅 Sunrise : RDR2 - Internal Premium Solution')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 92.000 / $5.50
**30 DAY**  — IDR 179.250 / $10.50
**Lifetime** — IDR 537.250 / $32.00

A premium product for the game Red Dead Redemption 2 from Sunrise group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Story & Online Mode
• **StreamProof:** No
• **Game Client:** Steam, Epic Games & Rockstar
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 💎**Sunrise Advantages:**
✅ **Internal Software** - Superior performance and stability
✅ **Story Mode Support** - Complete campaign assistance
✅ **Online Mode Support** - Multiplayer functionality
✅ **Multi-Client Support** - Steam, Epic Games, Rockstar
✅ **Flexible Durations** - Multiple subscription options
✅ **Lifetime Option** - Best long-term value
✅ **Regular Updates** - Latest game compatibility
✅ **Premium Quality** - Professional-grade features

### 🎮**Perfect For:**
• Red Dead Redemption 2 story mode players
• Online mode enthusiasts
• Users wanting internal performance
• Multi-platform players
• Those seeking flexible pricing
• Users wanting best long-term value
• Players requiring comprehensive support

### 🤠**Red Dead Redemption 2 Features:**
• **Open World** - Expansive Western landscape
• **Story Mode** - Compelling narrative campaign
• **Online Multiplayer** - Shared world experience
• **Realistic Graphics** - Stunning visual presentation
• **Wild West Setting** - Historical American frontier

### 🎯**Key Features:**
• **Internal Design** - Superior performance integration
• **Story & Online Support** - Complete game compatibility
• **Multi-Client Support** - Works with all platforms
• **Flexible Pricing** - Options for every budget
• **Premium Quality** - Professional-grade performance

---
**Internal premium solution with comprehensive story and online mode support for ultimate Red Dead Redemption 2 experience!**`)
            .addFields(
                {
                    name: '`🎮` COMPLETE SUPPORT',
                    value: 'Full compatibility with both story mode and online multiplayer experiences.'
                },
                {
                    name: '`💻` INTERNAL PERFORMANCE',
                    value: 'Superior stability and performance with direct game integration.'
                },
                {
                    name: '`🔧` MULTI-PLATFORM',
                    value: 'Works seamlessly with Steam, Epic Games, and Rockstar launchers.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Sunrise Red Dead Redemption 2 premium cheat.'
                }
            )
            .setColor('#CD853F')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Sunrise Red Dead Redemption 2 • Internal • Story & Online Support • Premium Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};