const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_duneawakening',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏜️ Lexy : Dune: Awakening - External Premium with Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 161.000 / $9.50
**7 DAY**   — IDR 616.500 / $36.00
**30 DAY**  — IDR 1.202.750 / $72.00

A premium product for the game Dune: Awakening from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher & Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### ⚡**Premium Features:**
• **External Design** - Safe and undetectable external implementation
• **Built-in Spoofer** - Complete hardware protection included
• **StreamProof Mode** - Safe for streaming and content creation
• **Universal Compatibility** - Works with all Windows versions
• **Multi-client Support** - Official Launcher and Steam compatibility

### 🎯**Lexy Advantages:**
✅ **Premium Quality** - Top-tier cheat development
✅ **Built-in Spoofer** - Complete protection suite included
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Universal Support** - All system configurations
✅ **Multiple Clients** - Official Launcher & Steam support
✅ **Professional Service** - Premium customer support

### 🏜️**Perfect For:**
• Players wanting maximum safety
• Users requiring built-in spoofer protection
• Streamers and content creators
• Players with diverse system configurations
• Users preferring external solutions
• Those wanting premium quality features
• Players needing comprehensive protection

### 🔮**Dune: Awakening Features:**
• **Desert Survival** - Navigate harsh desert environments
• **Political Intrigue** - Complex faction systems
• **Resource Management** - Control spice and territories
• **Epic Battles** - Large-scale combat scenarios
• **Story-driven Gameplay** - Rich narrative experience

### 🎯**Key Features:**
• **External Premium** - Safe and undetectable external implementation
• **Built-in Spoofer** - Complete hardware protection system
• **Universal Compatibility** - All Windows versions supported
• **StreamProof** - Safe for content creation
• **Multi-client Support** - Works with all game launchers

---
**Premium external cheat with built-in spoofer for complete Dune: Awakening desert domination!**`)
            .addFields(
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included at no extra cost.'
                },
                {
                    name: '`🏜️` EXTERNAL DESIGN',
                    value: 'Safe and undetectable external implementation for maximum security.'
                },
                {
                    name: '`📺` STREAMPROOF',
                    value: 'Completely safe for streaming and content creation activities.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy Dune: Awakening premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy Dune: Awakening • External • Built-in Spoofer • Premium Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};