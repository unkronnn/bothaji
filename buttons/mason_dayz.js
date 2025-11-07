const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔨 Mason : DayZ - Vector Aimbot External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 55.750 / $3.00
**7 DAY**   — IDR 212.750 / $12.00
**30 DAY**  — IDR 389.250 / $23.00

A premium product for the game DayZ from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🎯**Aimbot Features:**
• **Enable** - Toggle aimbot functionality
• **Vector Aimbot** - Advanced vector-based targeting enabled by default
• **Aim Precision** - Target accuracy settings
• **Silent Aimbot** - Alternative silent aiming mode
• **Aim Distance Limit** - Maximum targeting range
• **Aim Key** - Custom activation binding
• **Aim Bone** - Body part selection
• **Aim Radius** - Targeting area control
• **Random Spot** - Unpredictable bone selection
• **Auto Switch** - Automatic target switching

### 👁️**Visual ESP Features:**
• **Enable** - Toggle ESP functionality
• **Bounding Box** - 2D box overlay on opponents
• **Show Name** - Player name display
• **Show Skeleton** - Player bone structure
• **Show Weapon** - Current weapon state
• **Show Distance** - Range information
• **Show Prediction Marker** - Lead point display (up to 500m)
• **Player Inventory Key** - Inventory contents display
• **Show Chernarus Cities** - City and settlement locations
• **Show Infected** - Zombie detection
• **Show Animals** - Animal positions
• **Show Vehicles** - Vehicle locations
• **Show Loot** - Item detection
• **Show Common Items** - Ground items
• **Show Weapon Items** - Ground weapons
• **Show Attachments** - Weapon accessories
• **Show Food** - Food and drinks
• **Show Medicine** - Medical supplies
• **Show Clothing** - Equipment and apparel
• **Show Corpses** - Dead body detection
• **Show Buildings** - Structure locations
• **Show Wrecks** - Crash sites (helicopter, vehicle)
• **Show Magnetic North** - Compass direction
• **Loot Distance** - Item display range
• **Display Distance** - Player render distance

### ⚙️**Miscellaneous Features:**
• **Enable** - Toggle miscellaneous functions
• **Always Day** - Permanent daylight mode
• **Remove Grass** - Grass and bush removal
• **Aspect Ratio** - Custom aspect ratio settings

### ⚙️**Settings Features:**
• **Menu Key** - Menu display key (default: Home)
• **Panic Key** - Emergency disable (Delete key)
• **Battle Mode Key** - Hide all visuals except players
• **Save CPU** - Performance optimization mode
• **Show FOV** - Aimbot radius display
• **Show Cross** - Center crosshair

### 💎**Mason Advantages:**
✅ **Vector Aimbot Technology** - Advanced targeting system
✅ **Built-in Spoofer** - Complete protection suite
✅ **Comprehensive ESP** - Full game awareness
✅ **Chernarus Map Support** - Complete location data
✅ **Performance Optimization** - CPU saving features
✅ **StreamProof** - Content creation safe
✅ **Battle Mode** - Combat-optimized display
✅ **Professional Interface** - User-friendly controls

### 🎮**Perfect For:**
• Players wanting advanced aimbot
• Users needing comprehensive ESP
• Chernarus map specialists
• Streamers requiring safety
• Performance-conscious users
• Those needing built-in protection
• Players wanting professional tools

### 🧟**DayZ Features:**
• **Chernarus Landscape** - Detailed map knowledge
• **Survival Mechanics** - Complex gameplay systems
• **Vehicle System** - Transportation and repair
• **Base Building** - Construction mechanics
• **Medical System** - Injury and healing

### 🎯**Key Features:**
• **Vector Aimbot** - Advanced targeting with precision control
• **Built-in Spoofer** - Complete protection integration
• **Comprehensive ESP** - Complete game awareness system
• **Chernarus Support** - Full map location data
• **Performance Optimization** - CPU-friendly operation
• **Battle Mode** - Combat-optimized features

---
**Premium external cheat with vector aimbot and comprehensive ESP for DayZ mastery!**`)
            .addFields(
                {
                    name: '`🎯` VECTOR AIMBOT',
                    value: 'Advanced vector-based targeting with precision control and silent mode option.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated with comprehensive ESP features.'
                },
                {
                    name: '`🗺️` CHERNARUS SUPPORT',
                    value: 'Complete map awareness with cities, settlements, and location data.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason DayZ premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason DayZ • External • Vector Aimbot • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};