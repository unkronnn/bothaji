const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ambani_valorant',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 Ambani : Valorant - Professional Colorbot with Advanced Features')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 98.750 / $5.80
**7 DAY**   — IDR 298.000 / $17.50
**30 DAY**  — IDR 578.250 / $34.00

A premium product for the game Valorant from Ambani group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 & 11
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Riot Games & Epic Games
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🔫**Colorbot Features:**
• **Enable Colorbot** - Toggle color-based detection
• **Aimbot Mode** - Lock, Hold, Toggle options
• **Aim Key** - Custom activation binding
• **Aim Smooth** - Adjustable aiming speed
• **Aim FOV** - Field of view control
• **Aim Distance** - Range limitation
• **Aim Priority** - Target selection system
• **Color Tolerance** - Detection sensitivity
• **Team Check** - Friendly fire prevention

### 👁️**Visual Features:**
• **Enable ESP** - Toggle visual system
• **Show Box** - Rectangle overlays
• **Show Health** - Health bar display
• **Show Name** - Player identification
• **Show Distance** - Range information
• **Show Skeleton** - Bone structure display
• **Show Head Dot** - Head position indicator
• **Show Weapon** - Current weapon display

### 🛡️**Security Features:**
• **Built-in Spoofer** - Hardware ID protection
• **Anti-Detection** - Anti-cheat evasion
• **StreamProof Mode** - Safe for streaming
• **Rage Mode** - Aggressive targeting
• **Legit Mode** - Subtle assistance

### ⚙️**Settings Features:**
• **Config System** - Save/load configurations
• **Custom Colors** - UI color customization
• **Language Support** - Multiple languages
• **Auto Update** - Automatic version updates

### 💎**Ambani Advantages:**
✅ **Professional Colorbot** - Industry-leading color detection
✅ **Built-in Spoofer** - Complete protection system
✅ **StreamProof** - Safe for streaming and recording
✅ **Advanced Visuals** - Comprehensive ESP system
✅ **Regular Updates** - Latest game compatibility
✅ **User-Friendly** - Easy setup and configuration
✅ **24/7 Support** - Professional customer service

### 🎮**Perfect For:**
• Players seeking professional colorbot
• Users wanting built-in spoofer protection
• Streamers needing safety
• Competitive players requiring precision
• Users wanting comprehensive visual features
• Those seeking reliable support

### 🎯**Valorant Features:**
• **Tactical FPS** - 5v5 competitive gameplay
• **Agent Abilities** - Unique character powers
• **Precise Gunplay** - Skill-based shooting mechanics
• **Strategic Gameplay** - Team coordination required
• **Multiple Maps** - Diverse tactical environments

---
**External professional colorbot with built-in spoofer, advanced ESP, and comprehensive features for ultimate Valorant dominance!**`)
            .addFields(
                {
                    name: '`🎯` PROFESSIONAL COLORBOT',
                    value: 'Advanced color-based detection with smooth control and customizable settings.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware ID protection and anti-detection system included.'
                },
                {
                    name: '`👁️` ADVANCED VISUALS',
                    value: 'Comprehensive ESP system with boxes, health, names, and distance display.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ambani Valorant premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ambani Valorant • External • Professional Colorbot • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};