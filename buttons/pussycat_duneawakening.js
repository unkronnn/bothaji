const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_duneawakening',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : Dune: Awakening - External Budget with Essential Features')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 307.000 / $18.00
**31 DAY**  — IDR 499.000 / $30.00

A premium product for the game Dune: Awakening from PussyCat group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** External

### 🐱**PussyCat Advantages:**
✅ **Budget-Friendly** - Most affordable option available
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Universal Compatibility** - All Windows versions including latest
✅ **Essential Features** - Core functionality for gameplay enhancement
✅ **Simple Operation** - Easy to use and configure
✅ **Flexible Duration** - Multiple time period options

### 🏜️**Perfect For:**
• Budget-conscious players
• Users wanting external safety
• Streamers and content creators
• Players with latest Windows versions
• Those needing essential features only
• Users seeking simple operation
• Players wanting affordable access

### 🔮**Dune: Awakening Features:**
• **Desert Survival** - Navigate harsh desert landscapes
• **Spice Harvesting** - Resource collection mechanics
• **Faction Warfare** - Political and military conflicts
• **Base Building** - Strategic outpost construction
• **Story Campaign** - Rich narrative progression

### ⚙️**Technical Features:**
• **External Implementation** - Safe and undetectable
• **Essential Features** - Core gameplay enhancements
• **StreamProof** - Safe for content creation
• **Universal Support** - All Windows versions
• **Budget Pricing** - Most affordable option

### 🎯**Key Features:**
• **External Design** - Safe and undetectable external implementation
• **Essential Features** - Core functionality for gameplay enhancement
• **Budget Pricing** - Most affordable option starting at $6.00
• **Universal Compatibility** - Supports all Windows versions including latest

---
**Budget-friendly external cheat with essential features for Dune: Awakening desert survival on a budget!**`)
            .addFields(
                {
                    name: '`🐱` BUDGET FRIENDLY',
                    value: 'Most affordable option starting from just $6.00 per day.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Safe and undetectable external implementation for security.'
                },
                {
                    name: '`📺` STREAMPROOF',
                    value: 'Completely safe for streaming and content creation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat Dune: Awakening budget cheat.'
                }
            )
            .setColor('#FF69B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat Dune: Awakening • External • Budget Friendly • Essential Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};