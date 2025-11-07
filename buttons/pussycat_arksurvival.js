const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_arksurvival',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : ARK Survival Ascended')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 307.000 / $18.00
**31 DAY**  — IDR 499.000 / $30.00

A premium product for the game ARK: Survival Ascended from PussyCat group.

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
• **Game Client:** Steam & Xbox Game Pass
• **Software Type:** External

### 🔥**PussyCat Premium Features:**

**Premium Quality:**
• **High-end external technology**
• **Advanced feature set** (Please check available media for full feature list)
• **Professional grade performance**
• **Regular updates and improvements**
• **Premium customer support**

### 💎**PussyCat Advantages:**
✅ **ARK Ascended Specialized** - Optimized for the latest ARK version
✅ **External Technology** - Maximum security and stability
✅ **StreamProof** - Safe for streaming
✅ **Universal Client Support** - Steam & Xbox Game Pass
✅ **Premium Brand** - Trusted PussyCat quality
✅ **Advanced Features** - Comprehensive functionality
✅ **Professional Support** - Priority assistance
✅ **Future-Proof** - Regular updates

### 🎮**Perfect For:**
• ARK: Survival Ascended players
• Users seeking premium external quality
• Competitive players wanting advanced features
• Streamers needing StreamProof protection
• Players who demand the best performance
• Xbox Game Pass users
• Those wanting professional-grade software

### 🦕**ARK Ascended Features:**
• **Enhanced Graphics Support** - Optimized for ARK Ascended visuals
• **Updated Game Engine** - Compatible with latest ARK improvements
• **Cross-Platform Support** - Works with Steam and Xbox Game Pass
• **Modern Security** - External safety for ARK Ascended

### ⚠️**Note:**
For the complete list of advanced features, please check the available media and documentation provided with the software.

---
**Premium external cheat optimized for ARK Ascended!**`)
            .addFields(
                {
                    name: '`🐱` ASCENDED SPECIALIZED',
                    value: 'Specifically optimized for ARK: Survival Ascended features and gameplay.'
                },
                {
                    name: '`🎮` CROSS-PLATFORM',
                    value: 'Supports both Steam and Xbox Game Pass clients.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat ARK Survival Ascended cheat.'
                },
                {
                    name: '`💎` PREMIUM QUALITY',
                    value: 'Trusted PussyCat brand with professional support and updates.'
                }
            )
            .setColor('#FF69B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat ARK Survival Ascended • Premium External Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};