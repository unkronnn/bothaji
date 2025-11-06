const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fkn_armareforger',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🪖 FKN : Arma Reforger - Premium Internal Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 347.750 / $21.00
**30 DAY**  — IDR 529.750 / $32.00
**LIFETIME** — IDR 1.158.750 / $70.00

A premium product for the game Arma Reforger from FKN group.

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
• **Game Client:** Steam
• **Software Type:** Internal

### 🔥**Premium Features:**

**Internal Technology Excellence:**
• **Maximum Performance** - Internal technology for seamless integration
• **StreamProof Compatibility** - Safe for streaming activities
• **Full Resolution Support** - Works with all resolution settings
• **Steam Client Support** - Compatible with official Steam platform
• **Professional Quality** - Premium FKN brand reliability

### 💎**FKN Advantages:**
✅ **Internal Performance** - Superior speed and responsiveness
✅ **StreamProof Technology** - Complete streaming safety
✅ **Professional Quality** - Trusted FKN development team
✅ **Lifetime Option** - One-time purchase for unlimited use
✅ **Regular Updates** - Continuous improvements and feature additions
✅ **Full Compatibility** - Works with modern Windows systems
✅ **Premium Support** - Professional customer assistance

### 🎮**Perfect For:**
• Modern military tactical shooter enthusiasts
• Players wanting maximum performance
• Streamers requiring StreamProof protection
• Users who prefer internal software integration
• Professional tactical operators
• Long-term players (lifetime option)
• Players wanting premium brand quality

### 🪖**Arma Reforger Features:**
• **Modern Combat Systems** - Enhanced tactical gameplay
• **Realistic Ballistics** - Authentic weapon behavior
• **Advanced Graphics** - Improved visual presentation
• **Expanded Military Operations** - Modern warfare scenarios
• **Enhanced Multiplayer** - Large-scale tactical missions

### ⚠️**Note:**
For the complete list of advanced features, please check the available media and documentation provided with the software. The functionality of the program can be changed at any time at the discretion of the developer, but we always try to keep the information up to date.

---
**Premium internal cheat for modern Arma Reforger tactical gameplay!**`)
            .addFields(
                {
                    name: '`🔥` INTERNAL TECHNOLOGY',
                    value: 'Maximum performance with seamless game integration.'
                },
                {
                    name: '`💎` LIFETIME OPTION',
                    value: 'One-time purchase for unlimited lifetime access - best value for dedicated players!'
                },
                {
                    name: '`🛡️` STREAMPROOF',
                    value: 'Complete streaming safety - stream without detection concerns.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your FKN Arma Reforger premium internal cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'FKN Arma Reforger • Premium Internal Technology • Lifetime Available',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};