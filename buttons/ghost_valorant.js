const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ghost_valorant',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👻 Ghost : Valorant - Advanced Colorbot with Built-in Spoofer')
            .setDescription(`
### 🧾**Pricing**
**2 DAY**   — IDR 109.000 / $6.00
**7 DAY**   — IDR 280.250 / $15.51
**30 DAY**  — IDR 539.250 / $31.00

A premium product for the game Valorant from Ghost group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Riot Games
• **Supported HCVI, TPM & SB Bypass:** Yes
• **Run from flash drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🎯**Aimbot Features:**
• **Hotkey** - Custom activation key
• **Offset x** - Horizontal aiming adjustment
• **Offset y** - Vertical aiming adjustment
• **Multiplier** - Sensitivity multiplier
• **Smooth** - Aiming smoothness control
• **Min Move** - Minimum movement threshold
• **Dynamic Factor** - Adaptive aiming behavior
• **Color Tolerant** - Color detection tolerance
• **Enable Field Of View** - Targeting radius
• **Enable Recoil Control** - Automatic recoil compensation
• **RCS X** - Horizontal recoil control
• **RCS Y** - Vertical recoil control
• **Enable Triggerbot** - Automatic shooting
• **Hotkey Preset** - Pre-configured settings
• **Load / Save Config** - Configuration management

### 💎**Ghost Advantages:**
✅ **Colorbot Technology** - Advanced color-based detection
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced Aimbot** - Precision targeting with RCS
✅ **Triggerbot** - Automatic shooting capability
✅ **HCVI/TPM/SB Bypass** - Comprehensive bypass system
✅ **StreamProof** - Safe for streaming
✅ **Config Management** - Save/load settings
✅ **Professional Quality** - Industry-leading features

### 🎮**Perfect For:**
• Competitive Valorant players
• Users wanting color-based detection
• Players seeking recoil control
• Those requiring triggerbot
• Streamers needing comprehensive bypass
• Users wanting professional features
• Players seeking advanced customization
• Those wanting built-in protection

### 🎯**Valorant Features:**
• **Tactical FPS** - 5v5 competitive gameplay
• **Agent Abilities** - Unique character powers
• **Precise Gunplay** - Skill-based shooting mechanics
• **Strategic Gameplay** - Team coordination required
• **Multiple Maps** - Diverse tactical environments

### 🎯**Key Features:**
• **Colorbot Technology** - Advanced color-based detection system
• **Built-in Spoofer** - Complete protection integration
• **Advanced Aimbot** - Precision targeting with RCS
• **Triggerbot** - Automatic shooting capability
• **Comprehensive Bypass** - HCVI, TPM, and SB bypass

---
**Advanced colorbot with built-in spoofer, RCS, and triggerbot for ultimate Valorant competitive advantage!**`)
            .addFields(
                {
                    name: '`👻` COLORBOT TECHNOLOGY',
                    value: 'Advanced color-based detection system with tolerance and dynamic aiming.'
                },
                {
                    name: '`🛡️` COMPREHENSIVE BYPASS',
                    value: 'Complete HCVI, TPM, and SB bypass system for maximum protection.'
                },
                {
                    name: '`🎯` RCS & TRIGGERBOT',
                    value: 'Advanced recoil control system with automatic shooting capability.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ghost Valorant premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ghost Valorant • External • Colorbot • Built-in Spoofer • RCS',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};