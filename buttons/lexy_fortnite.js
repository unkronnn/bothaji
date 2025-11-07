const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_fortnite',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌟 Lexy : Fortnite - External with Advanced Aimbot & Controller Support')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 215.500 / $12.50
**7 DAY**   — IDR 1.027.250 / $61.00
**30 DAY**  — IDR 1.713.750 / $102.00

A premium product for the game Fortnite from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any (Including Tournament)
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Controller Support:** Yes
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 👁️**Advanced Visual ESP:**
• **Player ESP Toggle** - Show/Hide player visualization
• **Hotkey Binding** - Quick access controls
• **View Range Control** - Distance limitation
• **Text Size Adjustment** - Display customization
• **Hide Knocked Players** - Filter eliminated enemies
• **Name Display** - Player identification
• **Distance Measurement** - Range calculation
• **Weapon Information** - Current equipment display
• **Rarity Display** - Item quality indication
• **Ammo Count** - Ammunition tracking
• **Box ESP Styles** - Full Box, Cornered Box options
• **Box Size Control** - Dimension adjustment
• **Trace Lines** - Directional indicators
• **Trace Positions** - Top, Center, Bottom alignment
• **Trace Size** - Line thickness control
• **Skeleton Display** - Bone structure visualization
• **Skeleton Size** - Line dimension control
• **Head Circle** - Critical point highlighting
• **Enemy Indicator** - Threat identification
• **Indicator FOV** - Field of view display
• **Indicator Thickness** - Line size adjustment
• **Indicator Size** - Dimension control
• **Spotted Color** - Visible enemy highlighting
• **Hidden Color** - Concealed enemy indication

### 🎯**Advanced Aimbot System:**
• **Aimbot Toggle** - On/off control
• **Hotkey Configuration** - Custom binding setup
• **Primary & Alt Keys** - Multiple control options
• **Force Head Key** - Critical targeting
• **Toggle Mode** - Hold/toggle options
• **Bone Selection** - Skull, Chest, Torso, Randomized
• **Prediction System** - Move, Drop, Full prediction
• **Visibility Check** - Target verification
• **Skip Bots** - AI filtering
• **Skip Knocked** - Eliminated player filtering
• **Lock System** - Target retention
• **YeetMode** - Advanced targeting mode
• **Armed Only Mode** - Weapon requirement
• **Smooth Control** - Human-like movement (0.1 - 10.0)
• **Legit Smooth** - Natural aiming behavior
• **Smooth Variability** - Randomization for legitimacy
• **Field of View** - Targeting area control
• **Aim Range** - Maximum distance limitation
• **Visual Indicators** - Draw FOV and Crosshair
• **Lock-On Visual** - Target confirmation display
• **Per-Weapon Configuration** - Individual weapon settings
• **Weapon Classes** - AR, DMR, LMG, Melee, Pistol, Shotgun, SMG, Sniper, Special, Throw, Other

### 🔫**Triggerbot System:**
• **Triggerbot Toggle** - Automatic firing control
• **Per-Weapon Configuration** - Individual settings
• **Trigger Range** - Distance limitation
• **Trigger Delay** - Timing control
• **Weapon Category** - Class-specific settings

### 💰**Item ESP System:**
• **Loot ESP Toggle** - Item display control
• **Hotkey Binding** - Quick access
• **View Range Control** - Distance limitation
• **Text Size Adjustment** - Display customization
• **Loot Categories** - Chest, Transport, Ammunition, Guns, Consumable, Resources, Loot Crate
• **Loot Filter** - Everything, Uncommon, Rare, Epic, Legendary

### 📡**Radar System:**
• **Radar Toggle** - Mini-map activation
• **Position Scale** - Size adjustment
• **Zoom Scale** - Magnification control
• **Color Customization** - Multiple color schemes for different situations

### 🛠️**Advanced Miscellaneous:**
• **Jump and Aim** - Movement-based targeting
• **Instant Switch** - Quick target acquisition
• **Multi-language Support** - EN, CN, RU, DE, FR, HE, JP, PT, TH, TR, VI

### ⚙️**Configuration System:**
• **Menu Key Binding** - Custom interface access
• **Auto-save Configuration** - Automatic settings preservation
• **Config Management** - Create, Load, Save configurations
• **Config Naming** - Custom identification

### 🌟**Lexy Advantages:**
✅ **Advanced Aimbot** - Professional targeting with comprehensive customization
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Controller Support** - Full controller compatibility
✅ **Tournament Safe** - Including tournament mode support
✅ **Multi-language** - 11 language support
✅ **Per-Weapon Configs** - Individual weapon optimization
✅ **Premium Quality** - High-end external implementation

### 🍇**Perfect For:**
• Tournament players requiring safety
• Controller users needing compatibility
• Players seeking advanced aimbot customization
• Multi-language international users
• Streamers requiring comprehensive features
• Players with Steam/Epic Games
• Those wanting premium external quality

### 🎮**Fortnite Features:**
• **Battle Royale** - 100-player survival
• **Building Mechanics** - Strategic construction
• **Tournament Mode** - Competitive play
• **Cross-platform** - Multi-device support
• **Season Evolution** - Constant content updates

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with per-weapon configuration and prediction
• **Controller Support** - Full compatibility with controller gameplay
• **Built-in Spoofer** - Complete hardware protection for maximum safety
• **Multi-language Support** - International accessibility with 11 language options

---
**Premium external cheat with advanced aimbot, controller support, and built-in spoofer for complete Fortnite battle royale mastery!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT SYSTEM',
                    value: 'Professional targeting with per-weapon configuration, prediction, and extensive customization options.'
                },
                {
                    name: '`🎮` CONTROLLER SUPPORT',
                    value: 'Full compatibility with controller gameplay including tournament mode support.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy Fortnite premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy Fortnite • External • Advanced Aimbot • Controller Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};