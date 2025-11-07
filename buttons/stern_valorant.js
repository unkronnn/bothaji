const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_valorant',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Stern : Valorant - External Advanced Triggerbot with Lifetime Access')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 89.250 / $5.25
**7 DAY**   — IDR 268.750 / $15.80
**30 DAY**  — IDR 521.250 / $30.65
**Lifetime** — IDR 1.895.000 / $111.50

A premium product for the game Valorant from Stern group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Any Windows Version
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Riot Games & Epic Games
• **Supported HCVI, TPM & SB Bypass:** Yes
• **Run from flash drive:** No
• **Built-in Spoofer:** No
• **Software Type:** External

### 🔫**Triggerbot Features:**
• **Enable Trigger** - Toggle triggerbot functionality
• **Activation Mode** - Hold, Toggle, Auto options
• **Trigger Key** - Custom key binding
• **Reaction Time** - Speed adjustment
• **Pre-shot Delay** - Timing control
• **Post-shot Delay** - Follow-up timing
• **Min Hold Time** - Minimum activation time
• **Max Hold Time** - Maximum activation time
• **Shot Delay** - Interval between shots

### 🎯**Aiming Features:**
• **Auto Aim** - Smart targeting system
• **Aim Smooth** - Natural aiming motion
• **Aim FOV** - Target detection area
• **Aim Priority** - Target selection (closest, crosshair, health)
• **Aim Duration** - Lock-on timing
• **Bone Selection** - Head, chest, body targeting
• **Recoil Control** - Pattern compensation
• **Spread Control** - Accuracy improvement

### 👁️**Visual Features:**
• **Enable ESP** - Toggle visual system
• **Show Box** - Rectangle overlays
• **Show Skeleton** - Bone structure display
• **Show Health** - Health information
• **Show Armor** - Armor status
• **Show Name** - Player identification
• **Show Distance** - Range calculation
• **Show Weapon** - Current weapon display
• **Show Ammo** - Ammunition count

### 🛡️**Security Features:**
• **Advanced Bypass** - HCVI, TPM, SB protection
• **Anti-Detection** - Anti-cheat evasion
• **StreamProof Mode** - Safe for streaming
• **Random Delay** - Human-like behavior
• **Smart Detection** - Intelligent target validation

### ⚙️**Settings Features:**
• **Config Profiles** - Multiple configurations
• **Hotkeys System** - Custom key bindings
• **Color Customization** - UI personalization
• **Language Support** - Multiple languages
• **Auto Update** - Automatic version updates

### 💎**Stern Advantages:**
✅ **Advanced Triggerbot** - Professional trigger system
✅ **Lifetime Access** - Best long-term value
✅ **Advanced Bypass** - Complete protection system
✅ **StreamProof** - Safe for streaming
✅ **Professional Quality** - Industry-leading features
✅ **Regular Updates** - Latest game compatibility
✅ **Comprehensive Support** - 24/7 customer service

### 🎮**Perfect For:**
• Players wanting professional triggerbot
• Users seeking lifetime access
• Streamers needing safety
• Competitive players requiring precision
• Multi-platform users
• Those seeking advanced bypass system

### 🎯**Valorant Features:**
• **Tactical FPS** - 5v5 competitive gameplay
• **Agent Abilities** - Unique character powers
• **Precise Gunplay** - Skill-based shooting mechanics
• **Strategic Gameplay** - Team coordination required
• **Multiple Maps** - Diverse tactical environments

---
**External advanced triggerbot with comprehensive ESP, lifetime access, and professional features for ultimate Valorant performance!**`)
            .addFields(
                {
                    name: '`🔫` ADVANCED TRIGGERBOT',
                    value: 'Professional trigger system with customizable activation and timing controls.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete visual awareness system with detailed player information display.'
                },
                {
                    name: '`👑` LIFETIME ACCESS',
                    value: 'One-time payment provides unlimited access forever - best long-term investment.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern Valorant premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern Valorant • External • Advanced Triggerbot • Lifetime Access',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};