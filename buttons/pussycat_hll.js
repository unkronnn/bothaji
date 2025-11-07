const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_hll',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : Hell Let Loose - Affordable External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 341.000 / $20.00
**31 DAY**  — IDR 499.000 / $30.00

A premium product for the game Hell Let Loose from PussyCat group.

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
• **Please check the available media for a list of features!**

### 💎**PussyCat Advantages:**
✅ **Affordable Pricing** - Budget-friendly options
✅ **StreamProof Technology** - Safe for content creation
✅ **Multi-OS Support** - Wide Windows compatibility including 25H2
✅ **Multi-BIOS Support** - UEFI & Legacy compatibility
✅ **External Technology** - Stable and secure operation
✅ **Budget Friendly** - Competitive pricing structure
✅ **Steam Compatibility** - Official client support
✅ **Reliable Service** - Consistent operation

### 🎮**Perfect For:**
• Budget-conscious Hell Let Loose players
• Users wanting affordable access
• Streamers requiring safety
• Players on tight budget
• Those needing basic features
• Users seeking reliable service
• Casual tactical gamers

### ⚔️**Hell Let Loose Features:**
• **Tactical Warfare** - 50v50 strategic battles
• **Realistic Combat** - Authentic WWII experience
• **Team Coordination** - Squad-based gameplay
• **Strategic Communication** - Essential for success
• **Large-Scale Battles** - Massive player count

### 🎯**Key Features:**
• **Budget Friendly** - Affordable pricing options
• **StreamProof** - Content creator safe
• **External Security** - Stable and reliable operation
• **Multi-Platform Support** - Wide compatibility
• **Steam Client Support** - Official compatibility
• **Professional Service** - Reliable operation

### 💡**Why Choose PussyCat:**
• **Affordable Pricing** - Most competitive rates in the market
• **Content Creation Safe** - StreamProof protection technology
• **Wide Compatibility** - Support for multiple Windows versions
• **Reliable Operation** - Stable external technology
• **Steam Support** - Official client compatibility
• **Budget Conscious** - Perfect for players on budget

### 🏷️**Pricing Advantage:**
• **Most Affordable 1-Day** - Only IDR 80.000 / $4.50
• **Competitive 7-Day** - IDR 341.000 / $20.00
• **Best Value 31-Day** - IDR 499.000 / $30.00
• **Multiple Duration Options** - Flexible to your needs
• **Budget Friendly Structure** - Accessible to all players

---
**Affordable external cheat for Hell Let Loose with StreamProof technology and budget-friendly pricing!**`)
            .addFields(
                {
                    name: '`💰` MOST AFFORDABLE',
                    value: 'Competitive pricing structure makes it accessible to all players.'
                },
                {
                    name: '`🎥` STREAMPROOF SAFE',
                    value: 'Advanced StreamProof protection for content creators.'
                },
                {
                    name: '`🔧` RELIABLE EXTERNAL',
                    value: 'Stable external technology with consistent operation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat Hell Let Loose affordable cheat.'
                }
            )
            .setColor('#FF1493')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat Hell Let Loose • External • StreamProof • Affordable',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};