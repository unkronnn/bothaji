const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔧 SMG : Counter Strike 2 - External with Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 32.250 / $1.50
**7 DAY**   — IDR 71.750 / $4.00
**30 DAY**  — IDR 149.750 / $9.00

A premium product for Counter Strike 2 from SMG group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External
• **Built-in Spoofer:** Yes (FREE!)

### 🔥**Advanced Aimbot Features:**

**Per-Weapon Aimbot System:**
• **Current Weapon** - Individual weapon configurations
• **Aim Player** - Target acquisition system
• **Bone Selection** - Precise bone targeting options
• **Toggle Aimbot** - Quick activation/deactivation
• **Auto Change Target** - Smart target switching
• **Auto Fire** - Automatic shooting system
• **Recoil Control System** - Complete spray management
• **Visible Check** - Only target visible enemies
• **Smoke Check** - Smart smoke filtering
• **FOV Control** - Adjustable targeting area
• **Smooth Movement** - Natural-looking aim
• **Delay Settings** - Pre-aim timing control
• **Duration Control** - Aim hold duration
• **Enable Bullet Delay** - Post-shot activation
• **Disable Bullet Delay** - Post-shot deactivation
• **Weapon Copy Options** - Copy settings between weapons

### 🔍**Advanced Visual ESP:**

**Player ESP Features:**
• **Bounding Box** - Player boundary visualization
• **Vis Box** - Visibility-based coloring
• **Painted Box** - Enhanced box styling
• **Name Display** - Player identification
• **Weapon Detection** - Current weapon visibility
• **Distance Measurement** - Exact distance calculation
• **Skeleton ESP** - Bone structure overlay
• **Visibility Check** - Line-of-sight indication
• **Player State** - C4, Defusing, Flashed, Shift, Scope status
• **HP Bar** - Health visualization
• **Armor Bar** - Equipment status display

**Object ESP System:**
• **Dropped Items** - Box mode, name/icon, snapline, distance
• **C4 Detection** - Box mode, name/icon, timer, snapline, distance
• **Grenade ESP** - Box mode, name/icon, snapline, distance

### ⚙️**Miscellaneous Features:**
• **Radar System** - Strategic battlefield awareness
• **Spectator List** - Observer monitoring
• **Config Saving** - Custom profile management
• **Custom Fonts** - Interface personalization
• **Bind Menu** - Quick setting access
• **Mod Battle** - Combat mode toggle
• **Panic Button** - Emergency shutdown

### 💎**SMG Advantages:**
✅ **FREE BUILT-IN SPOOFER** - No additional cost required
✅ **PER-WEAPON CONFIGURATION** - Individual settings for each weapon
✅ **EXTERNAL TECHNOLOGY** - Maximum security and stability
✅ **STREAMPROOF PROTECTION** - Safe for content creation
✅ **ADVANCED ESP** - Complete player and object awareness
✅ **RECOIL MASTER SYSTEM** - Professional spray control
✅ **CUSTOMIZATION OPTIONS** - Fonts, colors, and interface settings
✅ **SAFETY FEATURES** - Panic button and spectator detection
✅ **RESOURCE OPTIMIZED** - Efficient performance usage
✅ **EASY CONFIGURATION** - Weapon copy and profile management

### 🎮**Perfect For:**
• Players seeking comprehensive spoofer protection
• Users wanting per-weapon customization
• CS2 competitive players requiring advanced features
• Streamers needing StreamProof and spoofer protection
• Players who value external technology safety
• Users wanting complete ESP functionality
• Gamers who appreciate customization options
• Players who need recoil mastery

### 🛡️**Spoofer Benefits:**
• **Hardware Protection** - Complete hardware spoofing
• **No Extra Cost** - Included free with subscription
• **Anti-Ban Protection** - Enhanced security measures
• **Peace of Mind** - Worry-free gaming experience

### ⚔️**Counter-Strike 2 Excellence:**
• **Weapon-Specific Tuning** - Individual optimization for each firearm
• **Advanced ESP** - Complete battlefield intelligence
• **Professional Features** - Tournament-level functionality
• **Regular Updates** - Keeps current with CS2 changes

### 🔧**Technical Features:**
• **Weapon Copy System** - Easy settings transfer between weapons
• **Custom Font Support** - Personalized interface appearance
• **State Monitoring** - Detailed player status tracking
• **Config Management** - Profile saving and loading

---
**External cheat with free built-in spoofer and per-weapon customization!**`)
            .addFields(
                {
                    name: '`🔧` FREE SPOOFER',
                    value: 'Built-in hardware spoofer included at no extra cost.'
                },
                {
                    name: '`🎯` PER-WEAPON CONFIG',
                    value: 'Individual settings and optimization for each weapon.'
                },
                {
                    name: '`🔍` ADVANCED ESP',
                    value: 'Complete player, object, and grenade detection system.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG CS2 premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG CS2 • External • Free Spoofer • Per-Weapon Config',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};