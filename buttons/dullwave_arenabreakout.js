const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'dullwave_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌊 DullWave : Arena Breakout: Infinite')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 139.250 / $8.00
**7 DAY**   — IDR 596.750 / $35.00
**30 DAY**  — IDR 1.067.250 / $63.00

A premium product for the game Arena Breakout: Infinite from DullWave group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Official Game Launcher
• **Software Type:** Internal

### 🔥**DullWave Premium Features:**

**Premium Quality:**
• **High-end internal technology**
• **Advanced feature set** (Please check available media for full feature list)
• **Professional grade performance**
• **Regular updates and improvements**
• **Premium customer support**

### 💎**DullWave Advantages:**
✅ **Internal Technology** - Maximum performance
✅ **Full Resolution Support** - Including fullscreen
✅ **Premium Brand** - Trusted DullWave quality
✅ **Advanced Features** - Comprehensive functionality
✅ **Professional Support** - Priority assistance
✅ **Official Launcher Support** - Works with official client
✅ **Universal Compatibility** - Intel & AMD processors
✅ **Future-Proof** - Regular updates

### 🎮**Perfect For:**
• Users seeking internal performance
• Competitive players wanting advanced features
• Players who prefer fullscreen gaming
• Users who demand the best performance
• Those wanting premium quality software
• Official launcher users

### ⚠️**Note:**
For the complete list of advanced features, please check the available media and documentation provided with the software.

---
**Premium internal cheat with professional features!**`)
            .addFields(
                {
                    name: '`⚠️` INTERNAL PERFORMANCE',
                    value: 'Internal technology provides the best performance and seamless integration.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your DullWave Arena Breakout cheat.'
                },
                {
                    name: '`🌊` PREMIUM SUPPORT',
                    value: 'Priority customer support and regular updates included.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'DullWave Arena Breakout: Infinite • Premium Internal Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};