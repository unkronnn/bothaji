const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_battlefield1',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔧 Mason : Battlefield 1')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 55.750 / $3.00
**7 DAY**   — IDR 133.000 / $8.00
**30 DAY**  — IDR 259.500 / $15.00

A premium product for the game Battlefield 1 from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Origin
• **Software Type:** External

### 🔥**Aimbot Features:**
• **Smooth** - Set smooth aimbot hover
• **FOV** - Set the aimbot working area, circle FOV
• **Aimbot Ballistic** - Bullet ballistics correction for aimbot operation
• **Recoil Percent** - Adjusting the level of weapon recoil deactivation

### 🔍**Visual ESP Features:**
• **Box** - Display a 2D square on players
• **Distance** - Display distance to players
• **Lite** - Display lines up to players
• **Healthbar** - Display the health level of players
• **Name** - Display player names

### 💎**Mason Advantages:**
✅ **Most Affordable** - Extremely budget-friendly pricing
✅ **Historic Combat** - Optimized for Battlefield 1 WWI setting
✅ **External Technology** - Maximum security
✅ **StreamProof** - Safe for streaming
✅ **Ballistic Correction** - Realistic bullet physics compensation
✅ **Recoil Control** - Adjustable weapon recoil deactivation
✅ **Classic ESP** - Clean and effective visual features
✅ **Steam & Origin Support** - Multi-client compatibility

### 🎮**Perfect For:**
• Budget-conscious players
• Battlefield 1 World War I enthusiasts
• Players who want classic ESP features
• Streamers needing essential features
• Historical warfare tactical operators
• Users who prefer simple, effective solutions
• Players wanting external safety

### 🪖**Battlefield 1 Features:**
• **WWI Setting** - World War I authentic combat
• **Historic Weapons** - Classic WWI weaponry
• **Ballistic Physics** - Realistic bullet behavior
• **Classic Warfare** - Traditional Battlefield experience
• **Steam & Origin** - Multiple platform support

### 🎯**Key Features:**
• **Smooth Aimbot** - Natural-looking aiming with smooth control
• **Ballistic Correction** - Compensates for realistic bullet physics
• **Recoil Control** - Adjustable deactivation for tactical advantage
• **Classic ESP** - Clean box, distance, lines, health, name
• **Affordable Price** - Best value for Battlefield 1 cheating
• **Multi-Client** - Works with both Steam and Origin

### 🌍**Historical Combat Advantage:**
• **WWI Era** - Optimized for World War I combat scenarios
• **Classic Weapons** - Supports historic WWI arsenal
• **Realistic Physics** - Ballistic correction for authentic gameplay
• **Tactical Warfare** - Classic Battlefield strategic gameplay

---
**Most affordable Battlefield 1 cheat with classic features!**`)
            .addFields(
                {
                    name: '`💰` ULTRA BUDGET',
                    value: 'Most affordable Battlefield cheat with solid features at incredible price!'
                },
                {
                    name: '`🎯` CLASSIC ESP',
                    value: 'Clean and effective ESP: Box, Distance, Lines, Health, Name.'
                },
                {
                    name: '`🔫` BALLISTIC CORRECTION',
                    value: 'Advanced bullet ballistics correction for realistic WWI combat.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Battlefield 1 cheat.'
                }
            )
            .setColor('#32CD32')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Battlefield 1 • External • Ultra Budget • Classic Combat',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};