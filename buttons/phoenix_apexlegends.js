const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'phoenix_apexlegends',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Phoenix : Apex Glow')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 30.000 / $1.80
**7 DAY**   — IDR 100.500 / $6.00
**30 DAY**  — IDR 230.000 / $13.00

A premium product for the game Apex Legend from Phoenix group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam, Origin & EA
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Internal

### 🔥**Core Feature:**

**Visual X-Ray (Wallhack):**
• **X-ray vision** to see through walls
• **Enemy visibility** through obstacles
• **Internal technology** for maximum performance
• **Full resolution support** including fullscreen
• **Universal client compatibility**

### 💎**Phoenix Advantages:**
✅ **Most Affordable** - Budget-friendly pricing
✅ **Internal Technology** - Maximum performance
✅ **Free Spoofer** - No need to purchase separately
✅ **Universal Client Support** - Works on Steam, Origin & EA
✅ **Full Resolution Support** - Including fullscreen
✅ **Simple & Clean** - Focused on essential feature

### 🎮**Perfect For:**
• Players who want basic wallhack functionality
• Budget-conscious users
• Users who prefer internal cheats
• Players who need fullscreen support
• Those who want simple, effective features

---
**The most affordable internal X-ray wallhack!**`)
            .addFields(
                {
                    name: '`⚠️` INTERNAL CHEAT',
                    value: 'Internal technology provides the best performance and most seamless experience.'
                },
                {
                    name: '`💰` BEST VALUE',
                    value: 'Most affordable option with built-in spoofer and full client support!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Phoenix Apex Glow cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Phoenix Apex Glow • Internal X-Ray Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};