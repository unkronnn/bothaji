const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'collapse_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏢 Collapse : DayZ - Color ESP External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 154.000 / $9.00
**7 DAY**   — IDR 731.500 / $43.00
**30 DAY**  — IDR 1.439.500 / $86.00

A premium product for the game DayZ from Collapse group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🎯**Aimbot Features:**
• **Aim Active** - Toggle aimbot functionality
• **Ignore on Zombie** - Exclude zombies from targeting
• **Ignore on Player** - Exclude players from targeting
• **Bone Selection** - Head, Body, Chest targeting options
• **Aimbot Key** - Custom activation binding
• **FOV Control** - 1-500 FOV range
• **Distance Control** - 1-1000m targeting range

### 👁️**ESP (Player) Features:**
• **Survivor ESP** - Player detection system
• **Zombie ESP** - Zombie detection system
• **Box ESP** - Colored bounding boxes
• **Nickname Display** - Player name tags
• **Weapon Display** - Current weapon information
• **Skeleton ESP** - Colored bone structure
• **Loot ESP** - Player loot detection
• **Corpse ESP** - Dead body location with color
• **Distance ESP** - Range indicators

### 👁️**ESP (Loot) Features:**
• **Inside Loot** - Container contents display
• **Clothing ESP** - Apparel items with color coding
• **Ammo & Magazine ESP** - Ammunition with color coding
• **Weapon ESP** - Firearms with color coding
• **Medicines ESP** - Medical supplies with color coding
• **Food ESP** - Food items with color coding
• **Drinks ESP** - Beverages with color coding
• **Stash ESP** - Hidden containers with color coding
• **Containers ESP** - Storage items with color coding
• **Furniture ESP** - Interactive furniture with color coding
• **Camping ESP** - Camping gear with color coding
• **Kit ESP** - Tool kits with color coding
• **Car Wheel ESP** - Vehicle parts with color coding
• **Radio ESP** - Communication devices with color coding
• **Optics ESP** - Scopes and sights with color coding
• **Suppressor ESP** - Silencers with color coding
• **Grenade ESP** - Explosives with color coding
• **Other ESP** - Miscellaneous items with color coding
• **Distance Range** - Adjustable loot detection range

### 👁️**ESP (Other) Features:**
• **Car ESP** - Vehicles with color coding
• **Animals ESP** - Wildlife with color coding
• **Distance Range** - Adjustable detection range

### ⚙️**Miscellaneous Features:**
• **Draw FOV** - Colored field of view indicator
• **Draw Crosshair** - Customizable crosshair color
• **Draw Aim Target** - Colored aim point indicator
• **Set Time** - Hour-based time control
• **Remove Grass** - Grass removal for visibility

### 💎**Collapse Advantages:**
✅ **Color-Coded ESP** - Advanced visual categorization
✅ **Comprehensive Loot System** - 17+ loot categories
✅ **Advanced Aimbot** - Multiple bone selection
✅ **External Security** - Maximum stability
✅ **StreamProof** - Content creation safe
✅ **Full Resolution Support** - All display modes
✅ **Professional Features** - Advanced functionality
✅ **Distance Control** - Precise range management

### 🎮**Perfect For:**
• Players who want visual clarity
• Loot collection specialists
• Streamers needing organization
• Users preferring external security
• Players wanting color coordination
• Those seeking comprehensive ESP
• Users who need distance control

### 🧟**DayZ Features:**
• **Survival Mechanics** - Health, hunger, thirst
• **Complex Inventory** - Detailed item management
• **Vehicle System** - Repair and transportation
• **Base Building** - Construction mechanics
• **Medical System** - Injury and healing

### 🎯**Key Features:**
• **Color-Coded System** - Advanced visual organization
• **Comprehensive Loot ESP** - 17+ categories with color coding
• **Advanced Aimbot** - Multi-bone targeting with exclusion
• **External Stability** - Maximum security and performance
• **Full Compatibility** - All resolutions and modes
• **Professional Control** - Distance and FOV management

---
**Premium external cheat with advanced color-coded ESP system for DayZ!**`)
            .addFields(
                {
                    name: '`🎨` COLOR-CODED ESP',
                    value: 'Advanced visual system with 17+ color-coded loot categories for maximum clarity.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Multi-bone targeting with exclusion system and precise FOV/distance control.'
                },
                {
                    name: '`🔒` EXTERNAL SECURITY',
                    value: 'Maximum stability and safety with full resolution support and StreamProof protection.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Collapse DayZ premium cheat.'
                }
            )
            .setColor('#DC143C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Collapse DayZ • External • Color ESP • Advanced Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};