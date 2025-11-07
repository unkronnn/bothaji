const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_dnd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚔️ PussyCat : DND - Budget External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 60.000 / $3.50
**7 DAY**   — IDR 102.500 / $6.00
**31 DAY**  — IDR 249.500 / $15.00

A premium product for the game Dark and Darker from PussyCat group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🔥**Features:**
• Please check the available media for a list of features!

### 💎**PussyCat Advantages:**
✅ **External Technology** - Maximum security and stability
✅ **StreamProof** - Complete streaming safety
✅ **Budget-Friendly** - Competitive pricing
✅ **Multi-OS Support** - Wide Windows compatibility
✅ **Steam Support** - Full Steam client compatibility
✅ **Flexible BIOS** - UEFI & Legacy support
✅ **Essential Features** - Core functionality
✅ **Affordable Options** - Multiple duration choices

### 🎮**Perfect For:**
• Budget-conscious dungeon crawlers
• New players seeking basic advantage
• Casual Dark and Darker players
• Streamers on a budget
• Users who prefer external safety
• Players needing essential features
• Those wanting affordable options

### ⚔️**Dark and Darker Features:**
• **Dungeon Exploration** - Underground adventure
• **Medieval Setting** - Fantasy world
• **Resource Gathering** - Loot collection
• **Combat Challenges** - Fighting enemies
• **Team Coordination** - Group gameplay

### 🎯**Key Features:**
• **External Safety** - Secure external operation
• **StreamProof** - Safe for content creation
• **Budget Pricing** - Affordable access
• **Essential Functionality** - Core features
• **Steam Compatibility** - Full Steam support
• **Multi-OS Support** - Wide compatibility

### 💡**Why Choose PussyCat:**
• **Affordable Entry** - Budget-friendly pricing
• **Essential Features** - Core cheat functionality
• **External Security** - Maximum safety
• **Stream Ready** - Content creator friendly
• **Flexible Options** - Multiple pricing tiers
• **Reliable Performance** - Stable operation

---
**Budget-friendly external cheat for Dark and Darker dungeon adventures!**`)
            .addFields(
                {
                    name: '`💰` BUDGET-FRIENDLY',
                    value: 'Affordable pricing options for players on a budget seeking essential features.'
                },
                {
                    name: '`🔒` EXTERNAL SAFETY',
                    value: 'Maximum security with external technology and StreamProof protection.'
                },
                {
                    name: '`🎮` ESSENTIAL FEATURES',
                    value: 'Core functionality for effective Dark and Darker gameplay enhancement.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat DND premium cheat.'
                }
            )
            .setColor('#FFB6C1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd49&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat DND • External • Budget-Friendly • Essential Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};