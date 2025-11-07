const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_gzw',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : GZW - External Budget-Friendly Option')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 255.750 / $15.00
**31 DAY**  — IDR 499.000 / $30.00

A premium product for the game Gray Zone Warfare from PussyCat group.

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
✅ **Simple Operation** - Easy to use interface
✅ **Reliable Performance** - Consistent functionality
✅ **Steam Support** - Official client optimization

### ⚔️**Perfect For:**
• Budget-conscious players
• Users wanting external safety
• Streamers requiring safety features
• Players with latest Windows versions
• Steam platform users
• Those seeking simple operation
• Players wanting affordable access

### 🎮**Gray Zone Warfare Features:**
• **Tactical Combat** - Realistic military gameplay
• **Squad Operations** - Team-based missions
• **Strategic Planning** - Mission coordination
• **Realistic Ballistics** - Authentic weapon behavior
• **Combat Zones** - Various tactical environments

### ⚙️**Technical Features:**
• **External Implementation** - Safe and undetectable
• **Budget Design** - Affordable pricing structure
• **Universal Support** - All Windows versions
• **Steam Compatibility** - Official platform support
• **Simple Interface** - User-friendly operation

### 🎯**Key Features:**
• **External Design** - Safe and undetectable external implementation
• **Budget Pricing** - Most affordable option starting at just $4.50
• **Universal Compatibility** - Support for all Windows versions including 25H2
• **Steam Platform** - Optimized for official Steam client

### 💎**Budget Benefits:**
• **Affordable Access** - Most budget-friendly option
• **External Safety** - Minimal detection risk
• **Universal Support** - Latest Windows version compatibility
• **Simple Operation** - Easy to use and configure

---
**Budget-friendly external cheat offering reliable performance and safety features for Gray Zone Warfare tactical operations!**`)
            .addFields(
                {
                    name: '`🐱` BUDGET FRIENDLY',
                    value: 'Most affordable option starting from just $4.50 per day.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Safe and undetectable external implementation for security.'
                },
                {
                    name: '`🌍` UNIVERSAL COMPATIBILITY',
                    value: 'Support for all Windows versions including the latest 25H2.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat Gray Zone Warfare premium cheat.'
                }
            )
            .setColor('#FF69B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat Gray Zone Warfare • External • Budget Friendly • Universal Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};