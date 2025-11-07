const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'evicted_valorant',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🚫 Evicted : Valorant Triggerbot - Professional Trigger System')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 108.500 / $6.50
**7 DAY**   — IDR 309.750 / $18.50
**30 DAY**  — IDR 595.250 / $35.00
**Lifetime** — IDR 2.179.250 / $130.00

A premium product for the game Valorant from Evicted group.

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
• **Hold** - Hold to activate
• **Toggle** - Toggle activation
• **Stopping Before Shooting** - Pre-shot delay
• **Anti AFK** - Anti-idle protection
• **Auto Crouch** - Automatic crouching
• **CounterStrafe** - Automatic counter-strafing
• **Sounds** - Audio feedback system
• **Gun Mode** - OneShot, Burst, Spray selection
• **Enemy Outline Color** - Purple, Red, Yellow options

### ⚙️**Settings Features:**
• **Capture Size** - Detection area size
• **Color Tolerance** - Color detection sensitivity
• **Delay Strafe** - Strafe delay timing
• **Delay Before Shooting** - Pre-shot delay
• **Delay Between Shots** - Shot interval control

### 🔧**Binds and Presets Features:**
• **Presets** - Pistol, SMG, Rifle, Sniper configurations
• **Activation (BIND)** - Custom trigger key binding
• **Anti AFK Key (BIND)** - Anti-idle key binding
• **Auto Crouch (BIND)** - Crouch key binding
• **Crouch Key (BIND)** - Custom crouch key
• **CounterStrafe Key (BIND)** - Strafe key binding

### 💎**Evicted Advantages:**
✅ **Pure Triggerbot** - Specialized in trigger functionality
✅ **Advanced Bypass** - HCVI, TPM, and SB bypass system
✅ **StreamProof** - Safe for streaming
✅ **Lifetime Option** - Best long-term value
✅ **Gun Modes** - Support for all weapon types
✅ **Anti-AFK** - Idle protection included
✅ **Professional Quality** - Industry-leading trigger system
✅ **Regular Updates** - Latest game compatibility

### 🎮**Perfect For:**
• Players wanting pure triggerbot functionality
• Users seeking advanced bypass system
• Those wanting lifetime access
• Streamers needing safety
• Multi-platform users
• Players wanting specialized features
• Those seeking professional trigger system

### 🎯**Valorant Features:**
• **Tactical FPS** - 5v5 competitive gameplay
• **Agent Abilities** - Unique character powers
• **Precise Gunplay** - Skill-based shooting mechanics
• **Strategic Gameplay** - Team coordination required
• **Multiple Maps** - Diverse tactical environments

### 🎯**Key Features:**
• **Pure Triggerbot** - Specialized trigger functionality
• **Advanced Bypass** - Complete protection system
• **Lifetime Access** - One-time payment for unlimited use
• **Gun Modes** - Support for all weapon types
• **Anti-AFK System** - Idle protection features

---
**External pure triggerbot with advanced bypass, anti-AFK, and lifetime access for ultimate Valorant shooting precision!**`)
            .addFields(
                {
                    name: '`🔫` PURE TRIGGERBOT',
                    value: 'Specialized trigger system with multiple gun modes and color detection.'
                },
                {
                    name: '`🛡️` ADVANCED BYPASS',
                    value: 'Complete HCVI, TPM, and SB bypass system for maximum protection.'
                },
                {
                    name: '`👑` LIFETIME ACCESS',
                    value: 'One-time payment provides unlimited access forever - best long-term investment.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Evicted Valorant premium cheat.'
                }
            )
            .setColor('#FF6347')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Evicted Valorant • External • Pure Triggerbot • Advanced Bypass',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};