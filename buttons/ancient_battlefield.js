const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_battlefield',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏛️ Ancient : Battlefield 6')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 341.500 / $20.00
**30 DAY**  — IDR 666.000 / $40.00

A premium product for the game Battlefield 6 from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD (1000 series+)
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** External

### 🔥**Aimbot Features:**

**General Aimbot:**
• Enable Aimbot toggle
• Aim Key 1 & Aim Key 2 binding
• Enable FOV control
• FOV Radius adjustment
• Smooth Radius control
• Target bone selection (Head, Neck, Body, Pelvis)
• Nearest Bone option
• Force Bone Key
• Force Bones (Head, Neck, Body, Pelvis)
• Only Visible targeting
• Target Lock functionality
• Prediction system
• Enable CrossHair
• CrossHair size adjustment

### 🔍**Visual ESP Features:**
• Max distance control
• Box ESP
• Skeleton ESP
• Skeleton Thickness adjustment
• Health display
• Snapline to players
• Nickname display
• Distance indicator

### ⚙️**Settings Features:**

**General:**
• Show FPS Overlay
• Set Overlay FPS

**Config Management:**
• Add configuration
• Load configuration
• Share configuration
• Delete configuration

### 💎**Ancient Advantages:**
✅ **Most Affordable** - Budget-friendly pricing for Battlefield 6
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **High GPU Requirement** - Optimized for modern graphics (1000 series+)
✅ **StreamProof** - Safe for streaming
✅ **Official Launcher Support** - Works with official Battlefield 6 client
✅ **Config System** - Save, load, share configurations
✅ **Advanced Aimbot** - Multiple keys, bone selection, prediction
✅ **Professional ESP** - Skeleton, boxes, health, distance

### 🎮**Perfect For:**
• Budget-conscious Battlefield 6 players
• Users with modern GPU systems (1000 series+)
• Players who want official launcher compatibility
• Streamers needing essential features
• Users who want configuration management
• Players who prefer external safety
• Tactical operators needing battlefield awareness

### 🎯**Key Features:**
• **Dual Aim Keys** - Multiple key binding options
• **Advanced Bone Selection** - Multiple target options
• **FPS Overlay** - Performance monitoring
• **Config Management** - Save, load, share settings
• **Modern GPU Optimization** - Enhanced for 1000+ series cards

---
**Most affordable Battlefield 6 cheat with advanced features!**`)
            .addFields(
                {
                    name: '`💰` BEST VALUE',
                    value: 'Most affordable Battlefield 6 cheat with comprehensive features and free spoofer!'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`⚙️` CONFIG SYSTEM',
                    value: 'Save, load, and share your custom configurations easily.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient Battlefield 6 cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient Battlefield 6 • External • Best Value • Config System',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};