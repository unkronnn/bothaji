const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'aquila_farlight84',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🦅 Aquila : Farlight 84 - External with Advanced Aimbot & ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 54.750 / $3.00
**7 DAY**   — IDR 187.750 / $11.00
**30 DAY**  — IDR 366.500 / $21.00

A premium product for the game Farlight 84 from Aquila group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Menu Languages:** Russian, English & Chinese
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎯**Advanced Aimbot Features:**
• **Aimbot Toggle** - Enable/disable functionality
• **Wall Protection** - Don't aim through walls
• **Bone Display** - Visual bone indicators
• **Aim FOV** - Field of view control
• **Smoothness Control** - Human-like movement
• **Activation Button** - Custom aim key binding
• **Prediction System** - Target movement calculation
• **Bone Selection** - Target point customization
• **Nearest Bone** - Auto closest target
• **Recoil Control** - Complete compensation

### 👁️**Visual ESP Features:**
• **Player Detection** - On-screen and off-screen tracking
• **Spectator Count** - Observer monitoring
• **Bot/AI Display** - Enemy identification
• **Distance Measurement** - Range calculation
• **Nickname Display** - Player identification
• **Weapon Information** - Current equipment display
• **Ammunition Display** - Ammo count tracking
• **View Direction** - Player orientation
• **Team Identification** - Squad recognition
• **Health Display** - HP status indication
• **Skeleton ESP** - Bone structure visualization
• **Head ESP** - Critical point highlighting
• **Outline Display** - Player bounding
• **Line ESP** - Directional indicators

### 📡**Radar System:**
• **Radar Toggle** - Mini-map activation
• **Radar Scale** - Size adjustment
• **Player Size Control** - Self display size
• **Enemy Size Control** - Opponent display size

### 💰**Comprehensive Loot ESP:**
• **Item Display** - All pickupable objects
• **Air Drop Tracking** - Supply crate locations
• **Dead Loot Display** - Eliminated player equipment
• **Treasure Box ESP** - Container identification
• **Weapons Display** - Firearms highlighting
• **Equipment ESP** - Armor and gear tracking
• **Equipment Boosters** - Enhancement items
• **Ammunition ESP** - Ammo types and quantities
• **Modules Display** - Attachment tracking
• **Shop Locations** - Vendor identification

### 🛠️**Miscellaneous Features:**
• **Crosshair Display** - Custom aiming aid

### ⚙️**Advanced Settings:**
• **AntiScreen Protection** - Screenshot bypass
• **Vertical Sync** - Display synchronization
• **Overlay Border** - Interface customization
• **Resource Monitor** - Performance information display

### 🦅**Aquila Advantages:**
✅ **Advanced Aimbot** - Professional targeting with prediction
✅ **Comprehensive ESP** - Complete player and loot visualization
✅ **Multi-language Support** - Russian, English & Chinese interface
✅ **Stream Protection** - Content creator safe
✅ **External Safety** - Minimal detection risk
✅ **Steam Compatibility** - Official platform support
✅ **Affordable Pricing** - Budget-friendly options

### 🚁**Perfect For:**
• Hero shooter enthusiasts
• Players requiring precise aimbot control
• Users wanting comprehensive ESP coverage
• Streamers needing safety features
• Steam platform players
• Multi-language users
• Those seeking external safety

### 🎮**Farlight 84 Features:**
• **Hero Shooter** - Unique character abilities
• **Jetpack Mobility** - Vertical combat system
• **Battle Royale** - Last squad standing gameplay
• **Fast-paced Action** - Dynamic battles
• **Team-based Strategy** - Squad coordination

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with prediction and recoil control
• **Comprehensive ESP System** - Complete player and loot visualization with detailed information
• **Multi-language Support** - Russian, English & Chinese interface accessibility
• **Stream Protection** - Complete safety for content creation

---
**External cheat with advanced aimbot, comprehensive ESP system, and multi-language support for aerial Farlight 84 dominance!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with prediction, recoil control, and wall protection.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP SYSTEM',
                    value: 'Complete player and loot visualization with detailed information and tracking.'
                },
                {
                    name: '`🌍` MULTI-LANGUAGE SUPPORT',
                    value: 'Russian, English & Chinese interface for international accessibility.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Aquila Farlight 84 premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Aquila Farlight 84 • External • Advanced Aimbot • Multi-Language',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};