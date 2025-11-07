const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏛️ Ancient : Delta Force - External Spoofer Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 341.500 / $20.00
**30 DAY**  — IDR 666.000 / $40.00

A premium product for the game Delta Force from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD (1000 series+)
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Garena & WeGame
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🎯**Aim (General) Features:**
• **Enable AimBot** - Toggle aimbot functionality
• **Aim Type** - Static; Curved movement options
• **Aim Key** - Dual key binding (key 1 and key 2)
• **FOV Control** - Adjustable field of view
• **Draw FOV** - Visual FOV indicator
• **Smooth** - Natural movement simulation

### 🎯**Aim (Target) Features:**
• **Bone Selection** - Head, Neck, Body targeting
• **Nearest Target** - Closest enemy priority
• **Force Bone** - Override bone selection
• **Force Key** - Key-based targeting
• **Only Visible** - Line of sight targeting
• **Lock Target** - Target locking system
• **Lock Knocked** - Knocked target handling
• **FPS Locker** - Frame rate control slider

### 👁️**Visual Features:**
• **Draw Distance** - Adjustable rendering range
• **ESP Box** - Visible and invisible color coding
• **ESP Skeleton** - Bone structure with color coding
• **Skeleton Thickness** - Adjustable line thickness
• **ESP Health** - Health status display
• **ESP Line** - Snaplines to targets
• **ESP Nick** - Player names with colors
• **ESP Distance** - Range information with colors
• **ESP Team** - Team identification
• **ESP Kills** - Kill count display

### 📡**Radar Features:**
• **Enable Radar** - Toggle radar display
• **Radar Size** - Adjustable radar dimensions
• **Draw Player** - Player positions with colors
• **FPS Locker** - Frame rate control

### 🔧**Config Features:**
• **Load Config** - Load saved configurations
• **Delete Config** - Remove configurations
• **Share Config** - Share settings with others

### ⚙️**Miscellaneous Features:**
• **Show FPS** - Frame rate display
• **FPS Locker** - Frame rate control slider
• **Language Settings** - English and Chinese support

### 💎**Ancient Advantages:**
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced Aimbot** - Professional targeting with bone selection
✅ **Dual Key System** - Multiple activation options
✅ **High Graphics Support** - Latest GPU compatibility
✅ **Multi-Client Support** - Steam, Garena & WeGame compatible
✅ **Config Sharing** - Share settings with community
✅ **FPS Control** - Performance optimization
✅ **Multi-Language** - International accessibility

### 🎮**Perfect For:**
• Competitive Delta Force players
• Users wanting maximum protection
• Players with high-end graphics cards
• Multi-platform gamers
• Those seeking advanced targeting
• Users needing performance control
• Players who want to share configs

### 🪖**Delta Force Features:**
• **Tactical Combat** - Modern military warfare
• **Multi-Launcher Support** - Various game clients
• **High Graphics** - Visual intensive gameplay
• **Team-Based** - Squad coordination required
• **Competitive Matches** - Ranked gameplay system

### 🎯**Key Features:**
• **Built-in Spoofer** - Complete protection integration
• **Advanced Aimbot** - Professional targeting with dual key system
• **High Graphics Support** - Latest GPU and performance optimization
• **Multi-Client Support** - Full compatibility across platforms
• **Config Management** - Share and manage settings
• **Performance Control** - FPS optimization and monitoring

---
**External cheat with built-in spoofer and advanced aimbot for tactical Delta Force domination!**`)
            .addFields(
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security and safety.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with dual keys, bone selection, and locking.'
                },
                {
                    name: '`🖥️` HIGH GRAPHICS SUPPORT',
                    value: 'Latest GPU compatibility with performance optimization and FPS control.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient Delta Force premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient Delta Force • External • Built-in Spoofer • Advanced Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};