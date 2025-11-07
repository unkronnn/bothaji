const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'aquila_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🦅 Aquila : Counter Strike 2 - Multi-Language External Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 60.000 / $2.89
**14 DAY**  — IDR 99.750 / $4.81
**30 DAY**  — IDR 146.000 / $7.22

A premium product for Counter Strike 2 from Aquila group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Menu Languages:** Russian, English & Chinese
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**Advanced Aimbot Features:**

**Smart Aimbot System:**
• **Enable/Turn On** - Toggle aimbot functionality
• **Wall Protection** - Do not aim through walls
• **Jump Check** - Smart target validation
• **Enemy Jump Detection** - Predict jumping targets
• **Bone Visualization** - Show target bone structure
• **Nearest Bone** - Auto-select closest bone
• **Aim Radius/FOV** - Customizable targeting area
• **Smoothness Factor** - Natural-looking aim movement
• **Smoothness Control** - Fine-tune aim behavior
• **Aim Key** - Custom activation button
• **Bone Selection** - Precise bone targeting
• **Recoil Control** - Complete recoil management
• **TriggerBot** - Auto-fire with timing and delays

### 🔍**Advanced Visual ESP:**

**Player ESP:**
• **Players On Screen** - Visible player detection
• **Players Off Screen** - Out-of-view indicators
• **Death Match Mode** - DM-specific optimizations
• **Show Bots/AI** - AI player identification
• **Distance Display** - Exact distance measurements
• **Player Names** - Nickname visibility
• **Weapon Detection** - Show equipped weapons
• **Team Information** - Team affiliation
• **Health Points** - HP visualization
• **Armor Display** - Equipment status
• **Skeleton ESP** - Bone structure overlay
• **Head Highlight** - Critical target emphasis
• **Outline ESP** - Player boundary display
• **Direction Lines** - Player view direction

### 🗺️**Radar System:**
• **Enable Radar** - Toggle minimap functionality
• **Radar Size** - Adjustable dimensions
• **My Player Size** - Self indicator size
• **Enemy Size** - Target indicator scaling

### ⚙️**Miscellaneous Features:**
• **Custom Crosshair** - Enhanced aiming reference
• **Recoil Control System** - Advanced compensation
• **Bunny Hop** - Automatic jumping assistance

### 🛠️**Settings & Configuration:**
• **AntiScreen Protection** - Screenshot blocking
• **Vertical Sync** - Display synchronization
• **Overlay Border** - Visual overlay customization
• **Resource Monitoring** - Performance information display
• **Emergency Reader Shutdown** - Quick safety toggle
• **Emergency Aim Shutdown** - Instant aimbot disable
• **Menu Button** - Custom menu access key

### 💎**Aquila Advantages:**
✅ **Multi-Language Support** - Russian, English, Chinese menus
✅ **Advanced Aimbot** - Jump detection, bone selection, triggerbot
✅ **Comprehensive ESP** - Complete battlefield awareness
✅ **Radar System** - Tactical positioning tool
✅ **StreamProof Technology** - Safe for content creation
✅ **External Safety** - Maximum security through external design
✅ **Resource Optimized** - Efficient performance usage
✅ **Emergency Features** - Quick safety shutdowns
✅ **Budget-Friendly** - Competitive pricing for premium features

### 🎮**Perfect For:**
• International players needing multi-language support
• CS2 competitive players seeking advanced features
• Streamers requiring StreamProof protection
• Users who prefer external technology safety
• Players wanting comprehensive ESP functionality
• Budget-conscious gamers seeking quality features
• Users who value emergency safety features
• Multi-lingual gaming communities

### 🔫**Counter-Strike 2 Excellence:**
• **Tactical Precision** - Aimed at competitive CS2 gameplay
• **Advanced ESP** - Complete player and object information
• **Radar Advantage** - Strategic battlefield awareness
• **Multi-Language Access** - Global player accessibility
• **External Security** - Safe and reliable operation

---
**Multi-language external cheat with advanced CS2 features!**`)
            .addFields(
                {
                    name: '`🦅` MULTI-LANGUAGE',
                    value: 'Russian, English, and Chinese language support.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Jump detection, bone selection, and triggerbot.'
                },
                {
                    name: '`🗺️` COMPREHENSIVE ESP',
                    value: 'Complete battlefield awareness with radar system.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Aquila CS2 premium cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Aquila CS2 • External • Multi-Language • Advanced Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};