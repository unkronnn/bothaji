const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Lexy : Delta Force - Advanced Aimbot Premium Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 161.000 / $9.50
**7 DAY**   — IDR 849.250 / $50.00
**30 DAY**  — IDR 1.353.000 / $80.00

A premium product for the game Delta Force from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Garena & WeGame
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Toggle aimbot functionality
• **Smooth Scale** - Adjustable smoothing intensity
• **Visible Check** - Line of sight verification
• **Hitbox Selection** - Head, Chest, Legs targeting
• **Draw FOV** - Visual field of view indicator
• **Human Smoothing** - Natural movement simulation
• **Human Smoothing Scale** - Adjustable humanization
• **Prediction** - Projectile trajectory calculation
• **Projectile Speed** - Custom speed settings
• **Projectile Gravity** - Gravity compensation
• **Laser Eye** - Advanced visual targeting
• **Aim While Moving** - Movement targeting capability
• **Aim Types** - Normal, ClosestToCrosshair, ClosestDistance, LowestFOV
• **Prediction Types** - Normal, Linear, Hybrid, Iterative
• **Keep Same Target** - Target persistence
• **Target Switch Delay** - Switch timing control
• **Auto Aim-on-ADS** - Automatic aiming on aiming down sights
• **Head Lock Hotkey** - Instant head targeting

### 🔫**Triggerbot Features:**
• **TriggerBot** - Automatic shooting detection
• **Trigger Key** - Custom activation binding
• **Trigger Delay** - Adjustable timing control

### 👁️**Visual Features:**
• **Skeleton ESP** - Bone structure visualization
• **Head Circle** - Head position indicator
• **Distance Display** - Range information
• **Box ESP** - Bounding box display
• **AI/NPC ESP** - Bot and NPC detection
• **Health Display** - Health status bars
• **Name Display** - Player identification
• **Line ESP** - Snaplines to targets
• **Team Type** - Team identification
• **Line Type** - Multiple line styles
• **Max Distance** - Adjustable rendering range

### 📡**Radar Features:**
• **Radar Improvements** - Enhanced radar system
• **Radar Zoom** - Adjustable zoom levels
• **Radar Distance** - Range control
• **Radar Position X/Y** - Customizable positioning
• **Radar Type** - Dots, Arrows display options
• **Radar Dots** - Dot-based player display
• **Radar Dots Colors** - Customizable dot colors
• **Radar Dots Size** - Adjustable dot dimensions
• **Radar Dots Opacity** - Transparency control
• **Radar Arrows** - Arrow-based directional display
• **Radar Arrows Colors** - Customizable arrow colors
• **Radar Arrows Size** - Adjustable arrow dimensions
• **Radar Arrows Opacity** - Arrow transparency control
• **Radar Arrows Direction** - Directional indicators

### 🌍**World Features:**
• **Weapon ESP** - Weapon location display
• **Collectible ESP** - Item detection system
• **Consumable ESP** - Food and supplies
• **Keycard ESP** - Access card detection
• **Mandel ESP** - Item category detection
• **Helmet ESP** - Protective gear display
• **Vest ESP** - Armor detection
• **Chest ESP** - Container location
• **Backpack ESP** - Storage items
• **Attachment ESP** - Weapon accessories
• **Safe ESP** - Safe container detection
• **Computer ESP** - Electronic devices
• **Container ESP** - General container detection
• **Dead Box ESP** - Death container locations
• **Maximum Distance** - Adjustable item rendering range

### 🎨**Color Customization:**
• **Color Skeleton** - Bone structure colors
• **Color Box** - Bounding box colors
• **Color Name** - Name display colors
• **Color AI/NPC** - Bot identification colors
• **Color Line** - Snapline colors
• **Color Head Circle** - Head indicator colors
• **Color Distance** - Range display colors
• **Color Pick Up** - Item pickup colors
• **Color Deadbox** - Death container colors

### ⚙️**Anti-Ban Settings:**
• **Apply Water Factor** - Environmental compensation
• **Legit Anti-Ban Settings** - Safety configurations
• **Use Humanization** - Natural behavior simulation
• **Simulate Miss Chance** - Miss rate simulation
• **Miss Chance Percent** - Adjustable miss probability
• **Clamp Aim Speed** - Speed limitation
• **Max Mouse Speed** - Mouse velocity control
• **Randomize Bones** - Bone randomization
• **Human Reaction Delay** - Realistic response timing
• **Human Trigger Delay** - Natural trigger timing

### ⌨️**Key Bindings:**
• **Aimbot Key** - Custom aim activation
• **Menu Key** - Interface access key

### 💎**Lexy Advantages:**
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced Aimbot** - Professional targeting with prediction
✅ **Legit Anti-Ban** - Humanization and safety features
✅ **Comprehensive Radar** - Full radar customization
✅ **World ESP** - Complete item and object detection
✅ **Color Customization** - Full visual personalization
✅ **Multi-Client Support** - Steam, Garena & WeGame compatible
✅ **Advanced Features** - Laser eye and triggerbot

### 🎮**Perfect For:**
• Competitive players seeking maximum features
• Users wanting advanced prediction
• Players requiring legit safety
• Streamers needing protection
• Multi-platform gamers
• Those who want visual customization
• Users seeking professional tools

### 🪖**Delta Force Features:**
• **Tactical Combat** - Modern military warfare
• **Projectile Physics** - Realistic ballistics
• **Team Coordination** - Squad-based gameplay
• **Equipment Management** - Gear and weapons
• **Competitive Ranking** - Skill-based progression

### 🎯**Key Features:**
• **Advanced Prediction** - Multiple prediction types with projectile compensation
• **Legit Anti-Ban** - Complete humanization system for safety
• **Comprehensive Radar** - Full radar customization with dots and arrows
• **World ESP** - Complete item and object detection system
• **Color Customization** - Full visual personalization options
• **Professional Tools** - Laser eye, triggerbot, and advanced targeting

---
**Premium external cheat with advanced aimbot, legit anti-ban, and comprehensive features for tactical Delta Force gameplay!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting with prediction, humanization, and multiple aim types.'
                },
                {
                    name: '`🛡️` LEGIT ANTI-BAN',
                    value: 'Complete humanization system with miss simulation and reaction delays.'
                },
                {
                    name: '`📡` COMPREHENSIVE RADAR',
                    value: 'Full radar customization with dots, arrows, zoom, and positioning options.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy Delta Force premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy Delta Force • External • Built-in Spoofer • Advanced Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};