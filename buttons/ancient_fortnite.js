const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_fortnite',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏛️ Ancient : Fortnite - External with Advanced Features & Built-in Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 341.500 / $20.00
**30 DAY**  — IDR 666.000 / $40.00

A premium product for the game Fortnite from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD (1000 series+)
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Epic Games
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🎯**Advanced Aimbot System:**
• **AimBot Toggle** - Enable/disable functionality
• **AimBot Types** - Static & Curved targeting modes
• **Dual Aim Keys** - Primary and secondary bindings
• **FOV Control** - Field of view adjustment
• **FOV Visualization** - Visual field indicator
• **Smooth Control** - Human-like movement

### 🎯**Target Settings:**
• **Visible Only** - Target verification system
• **Lock Target** - Target retention
• **Lock Knocked** - Eliminated player control
• **Prediction System** - Movement calculation

### 🔫**Weapon Categories:**
• **Global Settings** - Universal configuration
• **Melee Weapons** - Close combat optimization
• **Rifle Configuration** - Assault rifle settings
• **Shotgun Settings** - Close range optimization
• **SMG Configuration** - Submachine gun tuning
• **Pistol Settings** - Sidearm configuration
• **Sniper Configuration** - Long range optimization

### 🔫**Triggerbot System:**
• **Trigger Bot Toggle** - Automatic firing
• **Trigger Bot Key** - Custom binding
• **Firing Delays** - Before, during, and after shot timing
• **Firing Duration** - Burst control

### 🎯**Bone Selection:**
• **Multiple Bones** - Head, Neck, Body, Stomach options
• **Nearest Bone** - Auto-closest targeting
• **Force Bone** - Priority targeting
• **Force Key** - Override control

### 👁️**Visual ESP Features:**
• **Distance Control** - Range limitation
• **AI Display** - Bot identification
• **ESP Box** - Bounding box visualization
• **ESP Skeleton** - Bone structure display
• **Skeleton Thickness** - Line size control
• **ESP Line** - Directional indicators
• **Line Types** - Multiple line styles
• **ESP Nick** - Player name display
• **ESP Distance** - Range calculation
• **ESP Team** - Squad identification
• **ESP Kills** - Elimination tracking
• **ESP Platform** - Player platform info
• **ESP Rank** - Rank display
• **ESP Weapon** - Current equipment
• **Unique Team Colors** - Squad color coding

### 📡**Radar System:**
• **Radar Toggle** - Mini-map activation
• **Radar Size** - Dimension adjustment
• **Player Display** - Human tracking

### 🌍**World/Loot Settings:**
• **Display Status** - Item visualization control
• **Item Drawing** - Object highlighting
• **Loot Colors** - Customizable color schemes
• **Distance Display** - Range information

### 📦**Loot Categories:**
• **Weapon Category** - Firearms configuration
• **Category Toggle** - Individual type control
• **Display Settings** - Name, Distance, Rarity always/hovered
• **Category Distance** - Range control per type
• **Category Font** - Text customization
• **Category Colors** - Color schemes per type

### ⚙️**Settings & Optimization:**
• **FPS Overlay** - Performance monitoring
• **FPS Locker** - Frame rate control
• **Crosshair Display** - Custom aiming aid
• **Crosshair Size** - Dimension adjustment
• **ESP Text Font** - Display customization
• **Loot Text Font** - Item display control
• **Language Support** - English & Chinese interface

### 💾**Configuration Management:**
• **Config Creation** - New profile setup
• **Config Loading** - Saved profile import
• **Config Sharing** - Profile distribution

### 🏛️**Ancient Advantages:**
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Advanced Aimbot** - Multiple targeting modes
✅ **Comprehensive ESP** - Complete visual awareness
✅ **Weapon Categories** - Per-type optimization
✅ **Config Management** - Profile system
✅ **External Safety** - Minimal detection risk
✅ **Graphics Support** - Modern GPU compatibility

### 🍇**Perfect For:**
• Players seeking comprehensive features
• Users requiring built-in spoofer protection
• External safety preference users
• Players with modern graphics cards
• Multi-language users
• Configuration management enthusiasts
• Streamers requiring safety

### 🎮**Fortnite Features:**
• **Battle Royale** - Survival competition
• **Building System** - Construction mechanics
• **Cosmetic Variety** - Character customization
• **Seasonal Updates** - Content evolution
• **Cross-platform Play** - Multi-device gaming

### 🎯**Key Features:**
• **Advanced Aimbot System** - Multiple targeting modes with comprehensive customization
• **Built-in Spoofer** - Complete hardware protection system included
• **Comprehensive ESP** - Complete visual awareness with detailed information
• **Weapon Categories** - Individual optimization for each weapon type

---
**External cheat with advanced aimbot, comprehensive ESP system, and built-in spoofer for complete Fortnite battle royale domination!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT SYSTEM',
                    value: 'Multiple targeting modes with comprehensive customization and per-weapon optimization.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete visual awareness with player information, weapon tracking, and detailed statistics.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient Fortnite premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient Fortnite • External • Built-in Spoofer • Advanced Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};