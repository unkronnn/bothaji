const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarms_bo6wz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💪 Crooked Arm\'s : BO6 / Warzone - Advanced External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 102.250 / $6.00
**7 DAY**   — IDR 334.000 / $20.00
**31 DAY**  — IDR 624.500 / $37.00

A premium product for Call of Duty Black Ops 6 / Warzone from Crooked Arm's group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Windowed (Fullscreen mode requires specific methods)
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Battle.net & Xbox
• **Run from Flash Drive:** Yes
• **Software Type:** External

### 🔥**Advanced Aimbot Features:**

**Human Aimbot System:**
• Enable Human Aimbot toggle
• **Aim at Bots** - Target AI opponents
• **Aim at Knocked Players** - Include/exclude downed targets
• **Visibility Check** - Only target visible enemies
• **Lock Target** - Focus on single target
• **Target Switch Delay** - Strategic target management

**Aim Presets:**
• **Beginner** - Easy-to-use settings
• **Intermediate** - Balanced control
• **Pro** - Advanced precision
• **Rage** - Maximum aggression
• **Custom** - Personalized configuration

**Advanced Aim Control:**
• **Jitter** - Movement irregularity for natural appearance
• **Inertia** - Momentum simulation for realistic aiming
• **Overshoot Chance** - Occasional miss simulation
• **Overshoot Amount** - Degree of overshoot adjustment
• **Micro Pause Chance** - Natural pause simulation
• **Draw FOV Circle** - Visual aiming area indicator
• **FOV Control** - Adjustable field of view
• **Distance Settings** - Range-based targeting

**Bone Selection:**
• Head, Neck, Left Elbow, Right Elbow, Body, Pelvis, Left Knee, Right Knee
• **Hotkey Selection** - Custom key binding options

### 🔍**Advanced Visual ESP:**

**Player ESP:**
• **Only Visible Mode** - Filter for line-of-sight targets
• **My Team Players** - Friendly player identification
• **Name Display** - Player name visibility
• **Team Information** - Team affiliation display
• **Health Status** - Visual health indicators
• **Weapon in Hands** - Current weapon display
• **Line ESP** - Directional lines to players
• **Box 2D** - Bounding box visualization
• **Distance Display** - Precise distance measurement
• **View Direction** - Player facing direction
• **Skeleton ESP** - Bone structure visualization
• **Size Line Skeleton** - Proportional bone lines
• **Skeleton Draw Distance** - Range control
• **Additional Distance** - Extended range options

### 🎒**Comprehensive Loot ESP:**

**Loot Categories:**
• **Weapons** - Firearms and melee weapons
• **Ammo** - Ammunition types and quantities
• **Tactical** - Tactical equipment
• **Combat** - Combat gear and items
• **Support** - Support equipment
• **Armor** - Protective equipment
• **Money** - Currency display
• **Containers** - Backpacks, bags, crates
• **Field Modification** - Upgrade items
• **Series of Murders** - Killstreak indicators
• **Perks** - Special abilities
• **Improvement** - Enhancement items
• **Kiosk, Tablet, etc.** - Interactive objects
• **Other** - Miscellaneous items

**Loot Customization:**
• **Use Item Rarity Color** - Color-code by rarity
• **Display Distance** - Distance to items
• **Only Enemy Items** - Filter friendly loot
• **Show Item Name** - Item identification

### 🗺️**Advanced Radar System:**
• Show players/AI on world map & minimap
• **Use Team Color** - Color-coded team identification
• **Enable Radar** - Toggle radar display
• **Backlight Distance** - Radar range control
• **Size Control** - Adjustable radar dimensions
• **Position by X/Y** - Custom radar positioning
• **Alpha Transparency** - Opacity control

### 🎨**Advanced Color Customization:**
• **Friends Color** - Friendly player colors
• **Enemy Bots Color** - AI opponent colors
• **Enemy Players Color** - Hostile player colors
• **Knocked Enemies Color** - Downed player colors
• **Enemy Visible Color** - Line-of-sight colors
• **Target Color** - Current target highlighting
• **Weapons Color** - Weapon item colors
• **Armor Plate/Heavy Color** - Protection item colors
• **Ammo Color** - Ammunition colors
• **Tactical Gear Color** - Equipment colors
• **Combat Gear Color** - Combat item colors
• **Money Color** - Currency colors
• **Survival Kit Color** - Medical item colors
• **Containers Color** - Storage item colors
• **Kill Streak Color** - Achievement colors
• **Field Modification Color** - Upgrade item colors
• **Keys & Keycards Color** - Access item colors

### 🚗**Vehicle ESP:**
• Draw vehicles in multiplayer
• **Display Distance** - Distance to vehicles
• **Only Enemy Items** - Filter friendly vehicles

### 💣**Explosives & Equipment:**
• Draw active explosives, field modifications
• **Only Enemy Items** - Hostile equipment only
• **Show Item Name** - Equipment identification
• **Display Distance** - Distance to threats

### ⚙️**User Settings:**
• **Key to Disable Loot** - Quick toggle for loot visibility
• **Open Menu Key** - Custom menu access key

### 💎**Crooked Arm's Advantages:**
✅ **Advanced Aimbot** - Human-like with multiple presets
✅ **Comprehensive ESP** - Complete battlefield awareness
✅ **Extensive Loot System** - Detailed item detection
✅ **Advanced Radar** - Strategic positioning tool
✅ **Full Color Customization** - Complete personalization
✅ **Flash Drive Support** - Portable operation
✅ **StreamProof Technology** - Safe for content creation
✅ **Multi-Client Support** - Steam, Battle.net, Xbox

### 🎮**Perfect For:**
• Advanced players seeking comprehensive features
• Users wanting complete battlefield awareness
• Competitive operators needing tactical advantage
• Streamers requiring advanced customization
• Players who value extensive color options
• Users who need portable cheat solution
• Advanced tactical players

---
**Advanced external cheat with comprehensive customization options!**`)
            .addFields(
                {
                    name: '`💪` ADVANCED FEATURES',
                    value: 'Comprehensive aimbot, ESP, radar, and customization options.'
                },
                {
                    name: '`🎨` FULL CUSTOMIZATION',
                    value: 'Complete color control and personalization options.'
                },
                {
                    name: '`💾` PORTABLE OPERATION',
                    value: 'Run from flash drive for maximum convenience.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s BO6/WZ premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s BO6/WZ • External • Advanced Features • Full Customization',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};