const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_arcraiders',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : Arc Raiders')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 512.000 / $30.00
**30 DAY**  — IDR 1.082.250 / $65.00

A premium product for the game ARC Raiders from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **AIO/Bundle Support:** Also works on The Finals
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Any Platform
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Hybrid

### 🔥**Feature List:**

**Aim Features:**
• Enabled toggle
• Aim at shoot functionality
• Visible only targeting
• Enemy only targeting
• **Recoil compensation**
• Draw FOV circle
• Unique hitbox system
• Controllable speed (0 - 30°)
• Changeable FOV (0 - 15°)

**Visual Features:**
• Enabled toggle
• Enemy only visualization
• **Box ESP**
• Box outline
• **Health display**
• **Skeleton ESP**
• Maximum distance settings
• Player information display

### 🛡️**Hybrid Technology:**
Combines external and internal technologies for maximum performance and stability while maintaining undetection.

### 💎**Premium Advantages:**
✅ **Built-in Spoofer** - No need to purchase separately
✅ **Multi-game support** - Works on The Finals too
✅ **Hybrid technology** - Best of both worlds
✅ **StreamProof** - Safe for streaming
✅ **Universal client support** - Works on any platform

---
**Premium hybrid cheat with built-in protection!**`)
            .addFields(
                {
                    name: '`⚠️` PREMIUM FEATURE',
                    value: 'Includes FREE built-in spoofer worth hundreds of thousands!'
                },
                {
                    name: '`💡` CROSS-GAME',
                    value: 'One purchase works on both Arc Raiders AND The Finals!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Arc Raiders cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Arc Raiders • Premium Hybrid Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};