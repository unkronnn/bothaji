const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarms_eft',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💪 Crooked Arm\'s : EFT - External with Advanced Radar & Comprehensive ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 233.750 / $14.00
**7 DAY**   — IDR 612.250 / $36.00
**31 DAY**  — IDR 1.629.500 / $98.00

A premium product for the game Escape From Tarkov from Crooked Arm's group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Windowed (Fullscreen requires specific methods)
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher
• **Run from Flash Drive:** Yes
• **Built-in Spoofer:** No
• **Software Type:** External

### 👥**Advanced Player ESP:**
• **Name Display** - Player identification
• **Side Identification** - Usec/Bear faction display
• **Line ESP** - Directional indicators
• **2D Box ESP** - Bounding box display
• **Skeleton ESP** - Bone structure visualization (Normal/Disabled)
• **Health Display** - Health status indication
• **Distance Measurement** - Range calculation
• **Friends Identification** - Squad member recognition
• **Item in Hands** - Current weapon display
• **Player Loot Cost** - Inventory value calculation
• **Hover Loot Display** - Detailed item information
• **Backlight Distance** - Visibility range (1m–2000m)

### 🤖**Advanced Bot ESP:**
• **Bot Name Display** - AI identification
• **Bot Line ESP** - Direction indicators
• **Bot 2D Box** - Bounding box display
• **Bot Skeleton ESP** - Bone structure visualization
• **Bot Health Display** - Status indication
• **Bot Item Display** - Current equipment
• **Bot Loot Cost** - Inventory value
• **Bot Distance** - Range calculation

### 📡**Advanced Radar System:**
• **Radar/Compass Toggle** - Mini-map activation
• **Bot Display Control** - AI tracking toggle
• **Backlight Distance** - Visibility range
• **Position Controls** - X/Y positioning
• **Size Adjustment** - Dimension configuration
• **Alpha Transparency** - Opacity control

### 💰**Comprehensive Loot System:**
• **Loot List Categories:**
  - Barter items
  - Weapon modifications
  - Ammunition types
  - Special equipment
  - Tactical gear
  - Weapons
  - Currency
  - Quest items
  - Food supplies
  - Medical supplies
  - Information items
  - Containers
  - Lootable objects (Boxes, jackets, barrels)
  - Corpses
  - Other items
• **Sort Options** - Name/Price/Distance/Type sorting
• **Loot Update Times** - Configurable refresh intervals
• **Player Loot Search** - Specific item tracking
• **Raid Item Marking** - Found item highlighting
• **Price Filter** - Value-based filtering

### 📋**Quest Integration:**
• **Quest List Display** - Active mission overview
• **Quest Item Tracking** - Objective items highlighting
• **Quest Zone Display** - Mission area indicators

### 🎯**Advanced Aimbot:**
• **Aimbot Toggle** - On/off control
• **Visibility Check** - Target verification
• **Group Protection** - Squad member safety
• **Wild Targeting** - AI targeting options
• **Aim Types:**
  - Mouse movement
  - Sight movement
  - Silent movement
• **Aim Priority** - Distance/Crosshair/Control radius
• **FOV Circle** - Visual field indicator
• **Distance Limitation** - Range control
• **Prediction System** - Target movement calculation
• **Bone Selection:**
  - Head/Neck/Elbows
  - Body/Pelvis/Knees
• **Key Binding** - Custom configuration

### 🛠️**Advanced Miscellaneous:**
• **Weapon Compensation** - All effects elimination
• **No Recoil** - Complete recoil removal
• **No Spread** - Accuracy enhancement
• **No Sway** - Stabilization
• **Unlimited Stamina/Oxygen** - Endurance boost
• **Wall Loot** - Risky wall looting
• **Inertia Disable** - Movement enhancement (Risky)
• **No Visor** - Visor effect removal
• **Night Vision** - Enhanced dark vision
• **Thermal Vision** - Heat detection
• **Ammo Count** - Current ammunition display
• **Exit Points** - Extraction locations
• **Grenade Tracking** - Explosive monitoring
• **Crosshair Display** - Custom aiming aid
• **Mine Detection** - Explosive identification

### 🎨**Advanced Color Customization:**
• **Group Player Colors** - Squad member identification
• **Target Player Colors** - Enemy highlighting
• **Faction Colors** - Usec/Bear differentiation
• **Scav Colors** - AI enemy classification
• **Loot Color Coding** - Item type identification
• **All Item Type Colors** - Complete customization

### 💪**Crooked Arm's Advantages:**
✅ **Advanced Radar** - Comprehensive mini-map system
✅ **Extensive ESP** - Complete player and bot visualization
✅ **Quest Integration** - Mission assistance system
✅ **Advanced Aimbot** - Professional targeting with prediction
✅ **Flash Drive Support** - Portable operation
✅ **Comprehensive Loot** - All item categories with pricing
✅ **Full Customization** - Complete color and setting control

### 🔫**Perfect For:**
• Professional raiders requiring advanced features
• Players needing comprehensive radar systems
• Users wanting extensive quest assistance
• Those requiring advanced aimbot with prediction
• Players wanting flash drive compatibility
• Users seeking complete customization
• Players requiring detailed loot management

### 🎯**Key Features:**
• **Advanced Radar System** - Comprehensive mini-map with full customization
• **Extensive ESP Coverage** - Complete player, bot, and loot visualization
• **Advanced Aimbot** - Professional targeting with prediction and bone selection
• **Quest Integration** - Complete mission assistance with item and zone tracking

---
**External cheat with advanced radar, comprehensive ESP system, and advanced aimbot for complete Escape From Tarkov tactical dominance!**`)
            .addFields(
                {
                    name: '`📡` ADVANCED RADAR SYSTEM',
                    value: 'Comprehensive mini-map with bot display, positioning controls, and transparency settings.'
                },
                {
                    name: '`👥` EXTENSIVE ESP COVERAGE',
                    value: 'Complete player and bot visualization with detailed information and customizable display.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting with prediction, bone selection, and multiple aim types.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s EFT premium cheat.'
                }
            )
            .setColor('#2F4F4F')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s EFT • External • Advanced Radar • Comprehensive ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};