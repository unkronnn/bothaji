const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarms_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🦾 Crooked Arm\'s : DayZ - Comprehensive Loot External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 160.750 / $9.50
**7 DAY**   — IDR 557.000 / $33.00
**31 DAY**  — IDR 1.086.250 / $65.00

A premium product for the game DayZ from Crooked Arm's group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Windowed (Fullscreen requires specific methods)
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** Yes
• **Software Type:** External
• **Built-in Spoofer:** -

### 👥**Player Features:**
• **Friends List** - Friend management system
• **Line ESP** - Snaplines to players
• **2D Box ESP** - Bounding box display
• **Name Display** - Player identification
• **Item in Hands** - Current weapon display
• **Category Display** - Item categorization
• **Distance Display** - Range information
• **Skeleton ESP** - Bone structure display
• **Skeleton Line Size** - Line thickness control
• **Skeleton Draw Distance** - Render range control
• **Backlight Distance** - Highlight range
• **Corpses Distance** - Dead body detection range
• **Show Loot on Hover** - Interactive loot display
• **Alive/Corpse Toggle** - Living/dead player filtering

### 🧟**Zombie Features:**
• **Name Display** - Zombie identification
• **Line ESP** - Lines to zombies
• **2D Box ESP** - Zombie bounding boxes
• **Distance Display** - Range information
• **Skeleton ESP** - Zombie bone structure
• **Skeleton Line Size** - Line thickness control
• **Skeleton Draw Distance** - Render range
• **Backlight Distance** - Highlight range
• **Corpses Distance** - Dead zombie detection
• **Show Loot on Hover** - Interactive display
• **Alive/Corpse Toggle** - Living/dead filtering

### 🦌**Animal & Vehicle Features:**
• **Animal ESP** - Wildlife detection
• **Animal Corpse Distance** - Dead animal range
• **Vehicle ESP** - Vehicle detection
• **Show Loot on Hover** - Interactive vehicle loot
• **Animal Corpse/Vehicle Toggle** - Display filtering

### 📡**Radar Features:**
• **Enable Radar/Compass** - Toggle radar display
• **Map Markers** - LB/RB map controls
• **Draw Players on Map** - Player positions
• **Draw Zombie on Radar/Map** - Zombie locations
• **Show Current Position** - GPS positioning
• **Backlight Distance** - Radar highlight range
• **X/Y Positioning** - Customizable placement
• **Size Control** - Radar dimensions
• **Alpha Transparency** - Opacity control

### 💎**Loot Features:**
• **Open Loot List** - Comprehensive loot database
• **Navigation Items** - Maps, compasses
• **Clothing ESP** - Apparel detection
• **Medical Supplies ESP** - Medical items
• **Beverages ESP** - Drink items
• **Container ESP** - Storage items
• **Ammunition ESP** - Ammo detection
• **Attachments ESP** - Weapon accessories
• **Tools ESP** - Utility items
• **Consumables ESP** - Food and consumables
• **Melee Weapons ESP** - Close combat weapons
• **Firearms ESP** - Gun detection
• **Camping Gear ESP** - Equipment
• **Food ESP** - Edible items
• **Cooking ESP** - Cooking equipment
• **Crafting ESP** - Craft materials
• **Optics ESP** - Scopes and sights
• **Radio ESP** - Communication devices
• **Vehicle Parts ESP** - Car components
• **Cultivation ESP** - Growing items
• **Explosives ESP** - Destructive items
• **Other Items ESP** - Miscellaneous loot
• **Selected Items** - Highlight system
• **Loot Count Display** - Quantity information
• **Loot Quality Display** - Condition indicators
• **Show Loot on Hover** - Interactive feature

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Toggle functionality
• **Aim Type** - Mouse movement/Silent movement
• **Target Selection** - Zombie/Friends/Animal/Players
• **Aim Priority** - Distance/Crosshair
• **Draw FOV Circle** - Visual FOV indicator
• **FOV Control** - Field of view adjustment
• **Distance Control** - Range limitation
• **Draw Aim Point** - Target indicator
• **Enable Prediction** - Lead calculation
• **Bone Selection** - Multi-bone targeting:
  - Head, Neck, Left Elbow, Right Elbow
  - Body, Pelvis, Left Knee, Right Knee
• **Bone Change Time** - Switching delay
• **Key Selection** - Custom binding

### ⚙️**Miscellaneous Features:**
• **Always Light** - Permanent illumination
• **Disable Grass** - Grass removal
• **Disable Fog** - Fog removal
• **Disable Rain** - Weather control
• **3rd Person View** - External camera
• **Disable Overcast** - Sky clearing
• **Draw Crosshair** - Custom reticle
• **Key Selection** - Custom bindings

### 🎨**Color Customization:**
• **Compass Color** - Navigation tint
• **Player Color** - Player highlight
• **Friend Color** - Friend identification
• **Zombie Color** - Zombie highlighting
• **Animal Color** - Animal display
• **Vehicle Color** - Vehicle indication
• **Corpse Color** - Dead body display
• **15+ Loot Categories** - Individual color coding for all item types

### ⚙️**Settings Features:**
• **Disable Loot Key** - Quick toggle binding
• **Menu Key** - Interface activation
• **Update Time** - Refresh rate control

### 💎**Crooked Arm's Advantages:**
✅ **Comprehensive Loot System** - 25+ loot categories with color coding
✅ **Advanced Radar** - Full map and positioning system
✅ **Professional Aimbot** - Multi-bone with prediction
✅ **Full Customization** - Complete color and control options
✅ **Flash Drive Compatible** - Portable operation
✅ **StreamProof** - Content creation safe
✅ **Interactive Features** - Hover and selection systems
✅ **Professional Control** - Detailed settings management

### 🎮**Perfect For:**
• Loot optimization specialists
• Players wanting complete awareness
• Streamers needing comprehensive features
• Users who require portable operation
• Those seeking maximum customization
• Players wanting professional tools
• Users needing detailed loot management

### 🧟**DayZ Features:**
• **Complex Loot System** - Detailed item management
• **Navigation Challenges** - Map exploration
• **Vehicle Mechanics** - Transportation system
• **Base Building** - Construction elements
• **Dynamic Environment** - Weather and lighting

### 🎯**Key Features:**
• **Comprehensive Loot ESP** - 25+ categories with color coding
• **Advanced Radar System** - Full map and positioning features
• **Professional Aimbot** - Multi-bone targeting with prediction
• **Complete Customization** - Full control over colors and settings
• **Portable Operation** - Flash drive compatibility
• **Interactive Interface** - Hover and selection systems

---
**Comprehensive external cheat with complete loot system and professional features for DayZ!**`)
            .addFields(
                {
                    name: '`💎` COMPREHENSIVE LOOT',
                    value: '25+ loot categories with color coding and interactive hover display.'
                },
                {
                    name: '`📡` ADVANCED RADAR',
                    value: 'Complete map system with positioning, markers, and full customization.'
                },
                {
                    name: '`🎯` PROFESSIONAL AIMBOT',
                    value: 'Multi-bone targeting with prediction, FOV control, and advanced options.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s DayZ premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s DayZ • External • Comprehensive Loot • Professional Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};