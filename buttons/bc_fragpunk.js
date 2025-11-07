const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'bc_fragpunk',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔷 BC : FragPunk - Internal with Advanced ESP & Flash Drive Support')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 259.250 / $15.76

A premium product for the game FragPunk from BC group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam
• **Run from Flash Drive:** Yes
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 🎯**Advanced Aimbot Features:**
• **Aimbot Toggle** - Enable/disable control
• **Lock Target** - Target retention system
• **Dynamic FOV** - Adjustable field of view
• **Draw FOV** - Visual field indicator
• **FOV Control** - Precise angle adjustment
• **Smooth X/Y** - Independent axis control
• **Aim Key Binding** - Custom control setup
• **Visible Only** - Target verification
• **Priority System** - Target selection hierarchy
• **Bone Selection** - Hitbox precision targeting

### 👁️**Advanced ESP Features:**
• **Box ESP** - Bounding box with multiple styles:
  - Type selection
  - Thickness control
  - Rounding options
  - Corner styling
  - Background fill
• **Skeleton ESP** - Bone structure with:
  - Line thickness control
  - Head highlighting
  - Fill options
• **Health Display** - Multiple type options
• **Armor Display** - Protection level indication
• **Name Display** - Player identification
• **Team Index** - Squad member recognition
• **Distance Measurement** - Range calculation

### 📡**Radar System:**
• **Radar Toggle** - Mini-map activation
• **Radar Type** - Multiple display styles
• **Position Controls** - X/Y positioning
• **Size Adjustment** - Dimension control
• **Distance Range** - Coverage area
• **Point Clamp** - Boundary control
• **Point Type** - Indicator style
• **Point Size** - Display dimension

### ⚙️**Settings & Controls:**
• **Menu Access** - Insert key interface
• **Panic Key** - Emergency shutdown functionality

### 🔷**BC Advantages:**
✅ **Internal Performance** - Direct game integration
✅ **Advanced ESP** - Comprehensive visual system
✅ **Flash Drive Support** - Portable operation capability
✅ **Radar System** - Complete mini-map overview
✅ **Customization** - Extensive configuration options
✅ **Multi-resolution** - All display mode support
✅ **Professional Aimbot** - Advanced targeting controls

### 💥**Perfect For:**
• Players needing portable solutions
• Internal performance enthusiasts
• Users requiring advanced ESP features
• Radar system users
• Players wanting extensive customization
• Flash drive operation users
• Competitive players seeking precision

### 🎮**FragPunk Features:**
• **Fast-paced FPS** - Intense combat action
• **Multiplayer Battles** - Competitive gameplay
• **Weapon Systems** - Diverse arsenal
• **Strategic Elements** - Tactical combat
• **Dynamic Environments** - Interactive maps

### 🎯**Key Features:**
• **Advanced ESP System** - Comprehensive visual features with extensive customization
• **Flash Drive Support** - Portable operation allowing use across multiple systems
• **Professional Aimbot** - Advanced targeting with smooth control and bone selection
• **Internal Design** - High-performance direct game integration

---
**Internal cheat with advanced ESP system, flash drive support, and comprehensive customization for complete FragPunk FPS domination!**`)
            .addFields(
                {
                    name: '`👁️` ADVANCED ESP SYSTEM',
                    value: 'Comprehensive visual features with extensive customization including box styles, skeleton, health, and radar.'
                },
                {
                    name: '`💾` FLASH DRIVE SUPPORT',
                    value: 'Portable operation capability allowing use across multiple systems without installation.'
                },
                {
                    name: '`🎯` PROFESSIONAL AIMBOT',
                    value: 'Advanced targeting with dynamic FOV, smooth control, bone selection, and priority systems.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC FragPunk premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC FragPunk • Internal • Advanced ESP • Flash Drive Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};