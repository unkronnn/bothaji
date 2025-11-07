const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_gzw',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : GZW - Hybrid with Magic Bullet & Advanced Aimbot')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 60.000 / $3.50
**7 DAY**   — IDR 256.000 / $15.00
**30 DAY**  — IDR 666.000 / $40.00

A premium product for the game Gray Zone Warfare from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** Hybrid

### 🎯**Advanced Aimbot Features:**
• **Aimbot Toggle** - Enable/disable control
• **Magic Bullet** - Perfect accuracy system
• **Prediction System** - Target movement calculation
• **Aim at Shoot** - Optimized timing
• **Aimbot FOV** - Field of view control
• **Aim Types** - Vectored & Silent modes
• **Enemy Only** - Friendly fire prevention
• **Vertical/Horizontal Control** - Degree per second adjustment
• **Draw FOV** - Visual field indicator
• **Target Switch Delay** - Switch timing control
• **Nearest Coefficient** - Distance-based targeting
• **Hitbox Priority** - Target point selection
• **Dual Aim Keys** - Primary & secondary bindings
• **Toggle Key** - Mode switch control
• **Recoil Compensation** - Complete elimination
• **Hitscan Hitbox Priority** - Head, Neck, Chest, Arms, Legs, Feet

### 👁️**Visual Player ESP:**
• **ESP Toggle** - On/off control
• **Enemy Only** - Opponent focus mode
• **Box Display** - Bounding box visualization
• **Box Outline** - Enhanced border display
• **Health Display** - HP status indication
• **Skeleton ESP** - Bone structure display
• **Skeleton Thickness** - Line size adjustment
• **Maximum Distance** - ESP range limitation
• **Corpse Distance** - Dead body tracking
• **Player Info** - Nickname, Distance, Weapon display

### 💰**Visual Loot ESP:**
• **ESP Toggle** - Loot display control
• **Item Info** - Name and Distance display
• **Maximum Distance** - Loot range setting
• **Toggle Key** - Quick access binding

### 🎒**Advanced Loot Filter:**
• **Ammo** - Pack, Round, and ammunition types
• **Armor** - Helmet, Plate Carrier, Vest protection
• **Clothing** - Clothes, Boots, Gloves equipment
• **Consumables** - Provisions and medical supplies
• **Gear** - Glasses, FaceMask accessories
• **Keys** - Card, Key, Lockpick access items
• **Containers** - Backpack, Belt, Medkit storage

### 📋**Quest Helper:**
• **Quest Toggle** - Mission assistance system
• **Toggle Key** - Quick quest control

### 🛠️**Advanced Miscellaneous:**
• **Game Speed Control** - (Untrusted) Time manipulation
• **Ammo Widget** - Ammunition display overlay
• **Invisible Opacity** - Transparency control

### ⚙️**Developer Mode:**
• **Menu DPI** - Interface scaling
• **Menu Key** - Custom binding
• **Menu Force Dump** - Data export
• **Menu Force Reload** - Configuration refresh
• **Distance Units** - Meters, Feet, Yards, Kilometers

### 🛡️**Fecurity Advantages:**
✅ **Magic Bullet Technology** - Perfect accuracy system
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Hybrid Design** - Advanced external/internal technology
✅ **Advanced Filtering** - Comprehensive loot categorization
✅ **Quest Assistance** - Mission helper system
✅ **Stream Protection** - Content creator safe
✅ **Latest Windows Support** - Including Windows 25H2

### ⚔️**Perfect For:**
• Tactical players requiring precision
• Users seeking perfect accuracy
• Loot collection enthusiasts
• Quest completion assistance
• Streamers needing safety features
• Players with latest Windows versions
• Those requiring comprehensive protection

### 🎮**Gray Zone Warfare Features:**
• **Tactical Combat** - Realistic military gameplay
• **Team Operations** - Squad-based missions
• **Strategic Gameplay** - High-stakes scenarios
• **Realistic Ballistics** - Authentic weapon behavior
• **Conflict Zones** - Various combat environments

### 🎯**Key Features:**
• **Magic Bullet Technology** - Perfect accuracy system with guaranteed hits
• **Advanced Aimbot** - Professional targeting with prediction and hitbox priority
• **Built-in Spoofer** - Complete hardware protection system included
• **Comprehensive Loot Filter** - Detailed categorization for all item types

---
**Hybrid cheat with magic bullet technology, advanced aimbot, and built-in spoofer for complete Gray Zone Warfare tactical dominance!**`)
            .addFields(
                {
                    name: '`🎯` MAGIC BULLET TECHNOLOGY',
                    value: 'Perfect accuracy system with guaranteed hits and advanced targeting mechanics.'
                },
                {
                    name: '`🎒` ADVANCED LOOT FILTER',
                    value: 'Comprehensive item categorization including ammo, armor, clothing, consumables, gear, keys, and containers.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security and safety.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Gray Zone Warfare premium cheat.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Gray Zone Warfare • Hybrid • Magic Bullet • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};