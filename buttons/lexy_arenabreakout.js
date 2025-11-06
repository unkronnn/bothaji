const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👑 Lexy : Arena Breakout: Infinite')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 180.500 / $10.50
**7 DAY**   — IDR 849.250 / $50.00
**30 DAY**  — IDR 1.496.750 / $89.00

A premium product for the game Arena Breakout from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** External

### 🔥**Lexy Premium Features:**

**Premium Quality:**
• **High-end external technology**
• **Advanced feature set** (Please check available media for full feature list)
• **Professional grade performance**
• **Regular updates and improvements**
• **Premium customer support**

### 💎**Lexy Advantages:**
✅ **Premium Brand** - Trusted Lexy quality
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **StreamProof Technology** - Safe for streaming
✅ **Universal Client Support** - Steam & Official Launcher
✅ **External Safety** - Maximum security
✅ **Premium Features** - Advanced functionality
✅ **Professional Support** - Priority assistance

### 🎮**Perfect For:**
• Users seeking premium quality
• Competitive players wanting comprehensive features
• Streamers needing StreamProof protection
• Players who demand the best performance
• Those wanting professional-grade software

### ⚠️**Note:**
For the complete list of advanced features, please check the available media and documentation provided with the software.

---
**Premium external cheat with professional features!**`)
            .addFields(
                {
                    name: '`⚠️` PREMIUM QUALITY',
                    value: 'Lexy is a premium brand offering professional-grade features and support.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy Arena Breakout: Infinite cheat.'
                },
                {
                    name: '`👑` PREMIUM SUPPORT',
                    value: 'Priority customer support and regular updates included.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy Arena Breakout: Infinite • Premium External Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};