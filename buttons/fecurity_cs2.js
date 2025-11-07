const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Fecurity : Counter Strike 2 - Premium Hybrid Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 70.000 / $4.00
**14 DAY**  — IDR 100.000 / $6.00
**30 DAY**  — IDR 200.000 / $12.00

A premium product for Counter Strike 2 from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** Hybrid
• **Built-in Spoofer:** Yes (FREE!)

### 🔥**Advanced Aimbot Features:**

**Main Aimbot System:**
• **Enable Toggle** - Activate/deactivate aimbot
• **Aim at Shoot** - Reactive aiming on fire
• **Visible Only** - Target only visible enemies
• **Enemy Only** - Ignore friendly players
• **Aim Horizontal Speed** - X-axis movement control
• **Aim Vertical Speed** - Y-axis movement control
• **Target Switch Delay** - Strategic target management
• **Hitbox Priority** - Smart target selection
• **Aim Key** - Custom activation button
• **Second Aim Key** - Alternative activation
• **Start Bullet** - Delayed activation setting
• **RCS Horizontal** - Horizontal recoil control
• **RCS Vertical** - Vertical recoil compensation
• **Draw FOV** - Visual targeting area
• **Hitscan Coefficient** - Precision adjustment
• **Recoil Compensation** - Complete recoil elimination
• **Hitscan Hitbox Priority** - Head, Neck, Chest, Arms, Legs

**Per-Weapon Settings:**
• **Target Switch Delay** - Weapon-specific timing
• **Hitscan Coefficient** - Individual weapon precision
• **Recoil X & Y Compensation** - 0-100% adjustment
• **Changeable FOV** - 0-15° per weapon
• **Degrees Per Second** - 0-30° horizontal/vertical control

**TriggerBot System:**
• **Enable Toggle** - Auto-fire activation
• **Trigger Modes:** Key, Toggle, Always On
• **Key Bind** - Custom trigger key
• **Toggle Key Bind** - Mode switching key
• **Trigger Delay** - Firing timing control

### 🔍**Advanced Visual ESP:**

**Player ESP:**
• **Enable Toggle** - ESP activation
• **Enemy Only Mode** - Hostile filtering
• **Box ESP** - Player boundary visualization
• **Box Outline** - Enhanced box visibility
• **Health Display** - HP status monitoring
• **Shield/Armor** - Equipment indication
• **Skeleton ESP** - Bone structure overlay
• **Maximum Distance** - ESP range control
• **Dropped Weapons** - Item detection
• **Ammo Display** - Ammunition count
• **Distance Measurement** - Exact distance calculation
• **Grenade Detection** - Throwable awareness
• **Player Info** - Nickname, distance, and more

### ⚙️**Miscellaneous Features:**
• **Unlock All Skins/Items** - Complete inventory access
• **Spectator List** - Observer monitoring
• **Night Mode Factor** - Vision enhancement
• **Override View FOV** - Custom field of view
• **Recoil Crosshair** - Recoil visualization
• **Auto Matchmaking** - Automatic queue acceptance

### 🛠️**Developer Mode:**
• **Input Type Selection** - Hardware or Software input
• **Menu Key** - Custom menu access
• **Force Reload** - Configuration refresh
• **Cache Delay** - Memory management
• **Menu DPI** - Interface scaling
• **Distance Units** - Meters, Yards, Feet, Kilometers

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Maximum performance with safety
✅ **Free Built-in Spoofer** - No additional cost required
✅ **Per-Weapon Configuration** - Individual weapon settings
✅ **Advanced Aimbot** - Professional-grade targeting
✅ **Comprehensive ESP** - Complete battlefield awareness
✅ **Skin/Item Unlocker** - Full inventory access
✅ **Developer Mode** - Professional customization options
✅ **StreamProof Protection** - Safe for content creation
✅ **Full Resolution Support** - Including fullscreen mode
✅ **Recoil Master System** - Complete recoil elimination

### 🎮**Perfect For:**
• Competitive CS2 players seeking professional features
• Users wanting complete inventory access
• Streamers requiring StreamProof protection
• Players who demand per-weapon customization
• Competitive operators needing tactical advantage
• Users who value hybrid technology performance
• Players wanting comprehensive ESP functionality
• Serious CS2 enthusiasts

### 🔫**Counter-Strike 2 Excellence:**
• **Professional Aimbot** - Tournament-level precision
• **Skin Unlocker** - Complete cosmetic access
• **Advanced ESP** - Comprehensive player information
• **Developer Tools** - Professional customization
• **Hybrid Performance** - Optimal speed and safety
• **Full Support** - All CS2 features covered

---
**Premium hybrid cheat with professional CS2 features and skin unlocker!**`)
            .addFields(
                {
                    name: '`🔥` HYBRID TECHNOLOGY',
                    value: 'Maximum performance combining external safety with internal power.'
                },
                {
                    name: '`🎨` SKIN UNLOCKER',
                    value: 'Complete access to all CS2 skins and items.'
                },
                {
                    name: '`🔧` PER-WEAPON SETTINGS',
                    value: 'Individual configuration for each weapon type.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity CS2 premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity CS2 • Hybrid • Professional Grade • Skin Unlocker',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};