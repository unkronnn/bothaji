const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'byster_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🗺️ Byster : DayZ - Online Map External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 81.250 / $4.50
**7 DAY**   — IDR 307.750 / $18.00
**30 DAY**  — IDR 552.750 / $32.00

A premium product for the game DayZ from Byster group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Toggle aimbot functionality
• **Aim Key** - Custom activation binding
• **Bone Selection** - Head, Legs, Body, Random targeting
• **FOV Slider** - Adjustable field of view
• **Distance Slider** - Range control
• **Bullet Thickness** - Precise targeting tolerance
• **Add to Friends** - Exclude friends from targeting

### 👁️**Visual Features:**
• **ESP Players** - Player detection and information
• **Anomalies ESP** - Stalker server anomalies
• **Inventory Display** - Player inventory preview
• **Distance Display** - Range information
• **Player Nicknames** - Name identification
• **Weapon Display** - Current weapon information
• **ESP Zombies** - Zombie detection system
• **ESP Animals** - Animal location system
• **ESP Cars** - Vehicle positions
• **Car Parts ESP** - Vehicle component detection
• **Zombie Skeleton** - Zombie bone structure
• **Distance Sliders** - Range controls for all entities
• **Corpses ESP** - Dead body detection
• **Cities Display** - City and military locations

### 💎**Loot Features:**
• **Weapons ESP** - Firearm locations
• **Shops ESP** - Commercial building locations
• **Ammunition ESP** - Ammo positions
• **Cartridges ESP** - Individual ammo detection
• **Explosives ESP** - Explosive items
• **Melee Weapons ESP** - Close combat weapons
• **Backpacks ESP** - Storage items
• **Clothes ESP** - Apparel items
• **Chemical Protection** - Hazard gear detection
• **Building Materials** - Construction resources
• **Containers ESP** - Storage containers
• **Tools ESP** - Utility items
• **Buildings ESP** - Structure locations
• **Consumables ESP** - Food and drinks
• **Growing Items ESP** - Agricultural resources
• **Food ESP** - Edible items
• **Medicine ESP** - Medical supplies
• **Engine Parts ESP** - Vehicle components
• **Body Parts ESP** - Organic materials
• **Traps ESP** - Trap detection
• **Quality Display** - Item quality indicators
• **Distance Control** - Loot range management
• **Quick ESP Toggle** - Rapid on/off control

### 🔍**Loot Filter Features:**
• **3-Column System** - Advanced filtering interface
• **Always Display** - Priority items list
• **Seen Items List** - Auto-discovered items
• **Never Display** - Excluded items list
• **Mod Support** - Custom item compatibility

### 🗺️**Online Map Features:**
• **Multiple Maps** - Chernarus, Livonia, Sakhalin
• **Real-time Movement** - Live position tracking
• **Current Location** - GPS positioning
• **Map Integration** - Complete navigation system

### 👥**Player List Features:**
• **Real Players Only** - Excludes AI entities
• **Accurate Information** - Reliable player data
• **Friend Management** - Add/remove friends
• **Admin Detection** - Server admin identification

### ⚙️**Miscellaneous Features:**
• **NoClip** - Walk through objects
• **NoClip Binding** - Custom key binding
• **Always Day** - Permanent daylight mode
• **Disable Grass** - Grass removal for visibility

### 🔧**Config Features:**
• **Streamer Mode** - Content creator protection
• **Save Settings** - Configuration persistence

### 💎**Byster Advantages:**
✅ **Online Map System** - Real-time navigation
✅ **Advanced Loot Filter** - 3-column filtering system
✅ **Built-in Spoofer** - Complete protection
✅ **Comprehensive ESP** - All entities detected
✅ **StreamProof** - Content creation safe
✅ **Multi-Map Support** - Multiple game maps
✅ **Player Management** - Friend system included
✅ **Advanced Filtering** - Smart loot categorization

### 🎮**Perfect For:**
• Navigation-focused players
• Loot optimization specialists
• Streamers requiring map awareness
• Users wanting comprehensive filtering
• Players who need real-time positioning
• Those seeking advanced loot management
• Users requiring friend management

### 🧟**DayZ Features:**
• **Multiple Maps** - Different game environments
• **Complex Loot Economy** - Detailed item management
• **Player Tracking** - Social dynamics
• **Navigation Challenges** - Map exploration
• **Resource Competition** - Strategic gameplay

### 🎯**Key Features:**
• **Real-time Navigation** - Live map tracking system
• **Advanced Filtering** - 3-column loot categorization
• **Built-in Spoofer** - Complete protection suite
• **Comprehensive ESP** - All entity detection
• **Player Management** - Friend and admin system
• **Multi-Map Support** - All game environments

---
**Advanced external cheat with online map and comprehensive loot filtering for DayZ!**`)
            .addFields(
                {
                    name: '`🗺️` ONLINE MAP SYSTEM',
                    value: 'Real-time navigation with live position tracking across multiple maps.'
                },
                {
                    name: '`🔍` ADVANCED FILTERING',
                    value: '3-column loot filtering system with mod support and smart categorization.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite with StreamProof technology for content creation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Byster DayZ premium cheat.'
                }
            )
            .setColor('#20B2AA')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Byster DayZ • External • Online Map • Advanced Filtering',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};