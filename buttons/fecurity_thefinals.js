const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_thefinals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Fecurity : The Finals - Premium Hybrid with Built-in Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 512.000 / $30.00
**30 DAY**  — IDR 1.082.250 / $65.00

A premium product for the game The Finals from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from flash drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** Hybrid

### 🎯**Aim (Aimbot) Features:**
• **Enabled** - Toggle aimbot functionality
• **Aim at shoot** - Activate on shooting
• **Visible only** - Target only visible enemies
• **Enemy only** - Target enemies exclusively
• **Vertical Degree Per Second** - Vertical aiming speed
• **Horizontal Degree Per Second** - Horizontal aiming speed
• **Aim FOV** - Targeting radius control
• **Target Switch Delay** - Transition timing between targets
• **Hitscan Coefficient** - Precision adjustment
• **Draw FOV Circle** - Visual targeting zone
• **Hitbox Priority** - Target selection priority
• **Toggle Key** - Activation toggle
• **Aim key** - Custom activation binding
• **Second aim key** - Secondary activation key
• **Recoil compensation** - Automatic recoil control
• **Hitscan Hitbox Priority** - Head, Neck, Chest, Arms, Legs selection

### 👁️**Visual Features:**
• **Enabled** - Toggle ESP functionality
• **Enemy only** - Show enemies only
• **Box** - Rectangle overlays
• **Box outline** - Clean box borders
• **Health** - Health bar display
• **Skeleton** - Bone structure visualization
• **Skeleton Thickness** - Adjustable bone display width
• **Maximum Distance** - Render distance control
• **Player info** - Nickname, distance, and other details

### ⚙️**Misc Features:**
• **No-Recoil** - Eliminate weapon recoil
• **No-Spread** - Remove bullet spread
• **Instant Hit** - Immediate hit registration
• **Developer mode** - Advanced debugging options
• **Menu Key** - Interface toggle
• **Force Reload** - Instant reload capability
• **Cache Delay** - Performance optimization
• **Menu DPI** - Menu sensitivity
• **Distance Units** - Meters, Yards, Feet, Kilometers selection

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Internal + External performance
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced Aimbot** - Precision targeting with recoil control
✅ **Comprehensive ESP** - Complete enemy awareness
✅ **StreamProof** - Safe for streaming
✅ **Professional Quality** - Industry-leading features
✅ **Regular Updates** - Latest game compatibility
✅ **Fast-Paced Support** - Optimized for competitive play

### 🎮**Perfect For:**
• Competitive The Finals players
• Users wanting maximum protection
• Players seeking advanced aimbot
• Those requiring comprehensive ESP
• Fast-paced action gamers
• Streamers requiring safety
• Users wanting professional quality
• Players seeking all-in-one solution

### 🏆**The Finals Features:**
• **Destructible Environments** - Dynamic battlefield destruction
• **Fast-Paced Combat** - Intense shooting action
• **Team-based Gameplay** - 3v3 tournament matches
• **Tournament System** - Competitive ranking
• **Multiple Game Modes** - Various objectives

### 🎯**Key Features:**
• **Hybrid Technology** - Combined internal/external performance
• **Built-in Spoofer** - Complete protection integration
• **Advanced Aimbot** - Mathematical precision targeting
• **Comprehensive ESP** - Complete awareness system
• **Professional Quality** - Industry-standard features

---
**Hybrid cheat with built-in spoofer, advanced aimbot with recoil control, and comprehensive ESP for ultimate The Finals tournament dominance!**`)
            .addFields(
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security and safety.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Precision targeting with recoil compensation, FOV control, and smooth movement.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete awareness system with skeleton ESP, health bars, and distance information.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity The Finals premium cheat.'
                }
            )
            .setColor('#FF6B6B')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity The Finals • Hybrid • Built-in Spoofer • Advanced Aimbot & ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};