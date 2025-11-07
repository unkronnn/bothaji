const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarms_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🦾 Crooked Arm\'s : Delta Force - Comprehensive External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 131.500 / $7.50
**7 DAY**   — IDR 501.000 / $30.00
**31 DAY**  — IDR 1.086.250 / $65.00

A premium product for the game Delta Force: Hawk Ops from Crooked Arm's group.

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
• **Game Client:** Steam & Official Launcher
• **Run from Flash Drive:** Yes
• **Software Type:** External
• **Built-in Spoofer:** -

### 👥**Player Features:**
• **Only Visible** - Show only visible players
• **My Team Players** - Team identification
• **Name Display** - Player names
• **Team Display** - Team information
• **Health Display** - Health status
• **Corpse Display** - Dead body detection
• **Weapon in Hands** - Current weapon display
• **Line ESP** - Snaplines to players
• **Box Type** - Multiple box styles (Disabled, 2D, 3D)
• **Skeleton Type** - Multiple skeleton options (Disabled, Default, Health)
• **Skeleton Line Thickness** - Adjustable line width
• **Skeleton Display Distance** - Range control
• **Distance Display** - Range information

### 🤖**Bot Features:**
• **Only Visible** - Show only visible bots
• **Name Display** - Bot identification
• **Health Display** - Bot health status
• **Weapon in Hands** - Current bot weapon
• **Corpse Display** - Dead bot detection
• **Line ESP** - Lines to bots
• **Box Type** - Multiple box styles
• **Skeleton Type** - Skeleton options
• **Skeleton Line Thickness** - Line width control
• **Skeleton Display Distance** - Range settings
• **Distance Display** - Range information

### 📡**Radar Features:**
• **Enable Radar** - Toggle radar display
• **Show Players** - Player positions on radar
• **Show Bots** - Bot positions on radar
• **Display Distance** - Radar range control
• **Position X/Y** - Customizable radar positioning
• **Size** - Adjustable radar dimensions
• **Alpha** - Transparency control

### 💎**Loot Features:**
• **Open Loot List** - Comprehensive loot database
• **Loot Sort Types** - Sort by Name, Price
• **Weapons** - Weapon categories
• **Weapon Accessories** - Attachments and mods
• **Ammunition** - Ammo types
• **Equipment** - Gear and armor
• **Medical Supplies** - Health items
• **Provisions** - Food and consumables
• **Keys** - Access keys
• **Miscellaneous** - Various items
• **Containers** - Storage items
• **Other Items** - Additional categories
• **Dead Boxes** - Death containers
• **Item Quality Colors** - Color-coded quality
• **Item Short Names** - Compact display
• **Show Item Price** - Value information
• **Limit by Price** - Price filtering
• **Display Distance** - Range control

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Toggle aimbot functionality
• **Visibility Check** - Line of sight targeting
• **Show Snapline** - Visual aiming line
• **Smoothing** - Adjustable smoothing (higher = faster)
• **Show FOV** - Visual field of view
• **FOV Control** - Adjustable aiming radius
• **Distance Control** - Range limitation
• **Bone Selection** - Multi-bone targeting:
  - Head, Neck, Left Elbow, Right Elbow
  - Body, Pelvis, Left Knee, Right Knee
• **Hotkey Selection** - Custom activation binding

### ⚙️**Miscellaneous Features:**
• **Draw Crosshair** - Custom crosshair display
• **Crosshair Color** - Customizable crosshair colors
• **Show Vehicles** - Vehicle detection
• **Vehicle Health** - Vehicle status display
• **Vehicle Display Distance** - Range control

### 🎨**Color Customization:**
• **Color Changes** - Dynamic color based on visibility
• **Invisible Players** - Color for out-of-sight players
• **Visible Players/Bots** - Color for in-sight entities
• **Players Color** - Player color scheme
• **Bots Color** - Bot color scheme
• **Corpses Color** - Death entity colors
• **My Team Players Color** - Friendly team colors
• **Knocked Players Color** - Downed player colors
• **Selected Items Color** - Highlight colors
• **Weapon Colors** - Weapon item colors
• **Weapon Accessories Colors** - Attachment colors
• **Ammo Colors** - Ammunition colors
• **Equipment Colors** - Gear colors
• **Medical Supplies Colors** - Health item colors
• **Provisions Colors** - Consumable colors
• **Keys Color** - Key item colors
• **Other Items Color** - Miscellaneous item colors

### ⚙️**Settings:**
• **Disable Loot Key** - Quick loot toggle binding
• **Menu Opening Hotkey** - Interface access key

### 💎**Crooked Arm's Advantages:**
✅ **Comprehensive Features** - Complete game awareness system
✅ **Advanced Color Customization** - 20+ color categories
✅ **Detailed Radar** - Player and bot positioning
✅ **Comprehensive Loot System** - Complete item database with sorting
✅ **Advanced Aimbot** - Multi-bone targeting with smoothing
✅ **Flash Drive Support** - Portable operation
✅ **StreamProof** - Safe for content creation
✅ **Professional Interface** - Advanced control options

### 🎮**Perfect For:**
• Players wanting maximum features
• Color customization enthusiasts
• Loot optimization specialists
• Streamers requiring comprehensive tools
• Users who need portable operation
• Those seeking advanced aimbot
• Players wanting detailed control

### 🪖**Delta Force Features:**
• **Tactical Combat** - Modern military warfare
• **Equipment Economy** - Item value and quality systems
• **Team Coordination** - Squad-based gameplay
• **Vehicle Combat** - Military vehicle engagement
• **Resource Management** - Equipment optimization

### 🎯**Key Features:**
• **Comprehensive Features** - Complete game awareness with all entities
• **Advanced Color Customization** - 20+ color categories for personalization
• **Comprehensive Loot System** - Complete item database with sorting and filtering
• **Advanced Aimbot** - Multi-bone targeting with customizable smoothing
• **Flash Drive Support** - Portable operation capability
• **Professional Interface** - Advanced control and customization options

---
**Comprehensive external cheat with advanced color customization and complete features for tactical Delta Force mastery!**`)
            .addFields(
                {
                    name: '`🎨` COMPREHENSIVE COLORS',
                    value: '20+ color categories with dynamic visibility-based color changes for complete personalization.'
                },
                {
                    name: '`💎` COMPREHENSIVE LOOT',
                    value: 'Complete item database with sorting, filtering, price display, and quality color coding.'
                },
                {
                    name: '`🦾` COMPREHENSIVE FEATURES',
                    value: 'Complete game awareness system with advanced aimbot, radar, and detailed ESP for all entities.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s Delta Force premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s Delta Force • External • Comprehensive Features • Advanced Colors',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};