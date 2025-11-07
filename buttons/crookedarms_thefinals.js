const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarms_thefinals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Crooked Arm\'s : The Finals - External Professional ESP & Aimbot')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 131.500 / $7.50
**7 DAY**   — IDR 445.250 / $26.00
**31 DAY**  — IDR 814.750 / $49.00

A premium product for the game The Finals from Crooked Arm's group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Windowed (Fullscreen mode requires specific methods)
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from flash drive:** Yes
• **Built-in Spoofer:** No
• **Software Type:** External

### 👥**Players Features:**
• **Only visible** - Show only visible enemies
• **Friends** - Friend identification
• **Name** - Player name display
• **Line** - Directional indicators
• **Health** - Health bar visualization
• **Box type:** Disabled, 2D, 3D, Skeleton options
• **Size line skeleton:** - Adjustable skeleton line thickness
• **Skeleton draw distance:** - Render distance control
• **Distance** - Distance information display
• **Backlight distance:** - Background lighting range

### 📡**Radar Features:**
• **Enable radar** - Toggle radar display
• **Backlight distance:** - Radar illumination range
• **Position by X:** - Horizontal radar positioning
• **Position by Y:** - Vertical radar positioning
• **Size:** - Radar dimensions
• **Alpha:** - Radar transparency control

### 🎯**Objects Features:**
• **Enemy shields** - Shield detection and display
• **Enemy mines** - Mine identification and location
• **Enemy attack turrets** - Turret awareness system

### 🎯**Aimbot Features:**
• **Enable aimbot** - Toggle aimbot functionality
• **Lock target** - Maintain target lock
• **Do not aim at friends** - Friend protection
• **Visibility check** - Target only when visible
• **Aim priority:** - Distance or Crosshair selection
• **Control radius:** - Targeting area size
• **Draw fov circle** - Visual targeting zone
• **FOV:** - Targeting radius control
• **Distance:** - Range limitation
• **Bones selection:** - Head, Neck, Left elbow, Right elbow, Body, Pelvis, Left knee, Right knee
• **Bone change time:** - Target switching speed
• **Key selection:** - Custom activation binding

### 🎨**Colors Features:**
• **Visible players color** - Customizable visible enemy colors
• **Invisible players color** - Customizable hidden enemy colors
• **My team players color** - Customizable team colors
• **Target player color** - Customizable target highlighting

### ⚙️**Misc Features:**
• **Disable weapon recoil** - Eliminate weapon recoil completely

### ⚙️**Settings Features:**
• **Open menu key:** - Interface toggle control

### 💎**Crooked Arm's Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Professional ESP** - Advanced visual detection system
✅ **Advanced Aimbot** - Precision targeting with customization
✅ **Radar System** - Tactical overview capability
✅ **Object Detection** - Complete environmental awareness
✅ **StreamProof** - Safe for streaming
✅ **Portable Solution** - Flash drive support
✅ **Regular Updates** - Latest game compatibility

### 🎮**Perfect For:**
• The Finals competitive players
• Users wanting advanced visual awareness
• Players seeking precise aiming
• Those requiring tactical overview
• Streamers needing safety
• Multi-platform users
• Players wanting comprehensive features

### 🏆**The Finals Features:**
• **Destructible Environments** - Dynamic battlefield destruction
• **Fast-Paced Combat** - Intense shooting action
• **Team-based Gameplay** - 3v3 tournament matches
• **Tournament System** - Competitive ranking
• **Multiple Game Modes** - Various objectives

### 🎯**Key Features:**
• **Professional ESP** - Advanced visual detection with multiple options
• **Advanced Aimbot** - Precision targeting with extensive customization
• **Radar System** - Tactical overview with object detection
• **External Design** - Safe and efficient performance
• **Portable Solution** - Flash drive compatibility

---
**External cheat with professional ESP, advanced aimbot, radar system, and object detection for ultimate The Finals competitive advantage!**`)
            .addFields(
                {
                    name: '`👁️` PROFESSIONAL ESP',
                    value: 'Advanced visual detection with multiple box types, skeleton ESP, and customizable colors.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Precision targeting with multiple bone selection, FOV control, and priority systems.'
                },
                {
                    name: '`📡` TACTICAL RADAR',
                    value: 'Comprehensive radar system with customizable positioning and object detection.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s The Finals premium cheat.'
                }
            )
            .setColor('#FF9500')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s The Finals • External • Professional ESP & Aimbot • Tactical Radar',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};