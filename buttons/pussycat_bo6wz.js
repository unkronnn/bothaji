const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_bo6wz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : BO6 / BO7 / WZ - Ultra Budget External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 60.000 / $3.50
**7 DAY**   — IDR 255.750 / $15.00
**31 DAY**  — IDR 366.000 / $22.00

A premium product for COD Black Ops 6 / Warzone / Black Ops 7 from PussyCat group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Xbox Game Pass & Battle.Net
• **Software Type:** External

### 🔥**PussyCat Premium Features:**

**Ultra Budget Excellence:**
• **Most Affordable Option** - Extremely competitive pricing
• **External Technology** - Maximum security and stability
• **Multi-Game Support** - BO6, BO7, WZ compatibility
• **Multi-Client Compatibility** - Steam, Xbox Game Pass, Battle.Net
• **StreamProof Protection** - Safe for content creation
• **Essential Features** - Focus on core cheating functionality

**External Technology Benefits:**
• **Maximum Security** - External architecture reduces detection risk
• **System Stability** - No direct game memory interference
• **Resource Friendly** - Low CPU and memory usage
• **Easy Setup** - Simple installation and configuration
• **Reliable Performance** - Consistent operation without game crashes

### 💎**PussyCat Advantages:**
✅ **Ultra Budget Friendly** - Most affordable premium option available
✅ **External Technology** - Maximum security through external design
✅ **Multi-Client Support** - Works with all major game launchers
✅ **StreamProof Safety** - Complete streaming protection
✅ **Wide Compatibility** - UEFI & Legacy BIOS support
✅ **Multi-Game Bundle** - Support for BO6, BO7, and Warzone
✅ **Essential Features** - Focus on important cheating capabilities
✅ **Easy to Use** - User-friendly interface and setup

### 🎮**Perfect For:**
• Budget-conscious players seeking quality features
• New users exploring Call of Duty cheats
• Streamers needing affordable StreamProof options
• Players who prefer external technology safety
• Multi-platform gamers across different launchers
• Users wanting essential features without premium pricing
• Casual players wanting slight competitive advantage

### ⚔️**Call of Duty Coverage:**
• **Black Ops 6** - Latest BO6 gameplay support
• **Black Ops 7** - Future-ready BO7 compatibility
• **Warzone Integration** - Battle Royale support
• **Multi-Platform** - Cross-launcher compatibility

### 🎯**Essential Features:**
• **Core Aimbot** - Essential aiming assistance
• **Visual ESP** - Player information and positioning
• **Loot Detection** - Item and equipment awareness
• **Safety Features** - StreamProof and external security
• **Multi-Game Support** - Versatile across COD titles

### 💰**Budget Benefits:**
• **Low Entry Cost** - Affordable starting price
• **Excellent Value** - Premium features at budget pricing
• **Risk-Free Trial** - Low-cost 1-day option available
• **Flexible Durations** - Multiple subscription options
• **No Hidden Costs** - Transparent pricing structure

### 🛡️**Security Features:**
• **External Architecture** - Reduced detection risk
• **StreamProof Technology** - Safe for content creation
• **Multi-Platform Safety** - Works across all major clients
• **Stable Performance** - Minimal game interference

---
**Ultra budget external cheat with essential Call of Duty features!**`)
            .addFields(
                {
                    name: '`🐱` ULTRA BUDGET',
                    value: 'Most affordable premium option with excellent value.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Maximum security through external technology architecture.'
                },
                {
                    name: '`🎮` MULTI-CLIENT',
                    value: 'Support for Steam, Xbox Game Pass, and Battle.Net.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat BO6/WZ premium cheat.'
                }
            )
            .setColor('#FF69B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat BO6/WZ • External • Ultra Budget • Multi-Client',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};