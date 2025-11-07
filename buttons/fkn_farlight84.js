const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fkn_farlight84',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 FKN : Farlight 84 - Internal with Built-in Spoofer & Lifetime Option')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 305.750 / $18.00
**30 DAY**  — IDR 827.750 / $50.00
**LIFETIME** — IDR 1.158.750 / $70.00

A premium product for the game Farlight 84 from FKN group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** Internal

### 🔥**FKN Advantages:**
✅ **Built-in Spoofer** - Complete hardware protection included
✅ **Lifetime Option** - One-time purchase for unlimited access
✅ **Internal Performance** - Direct game integration
✅ **Universal Compatibility** - All Windows versions supported
✅ **Stream Protection** - Content creator safe
✅ **Multi-client Support** - Steam & Official Launcher
✅ **Premium Quality** - High-end implementation

### 🚁**Perfect For:**
• Competitive players seeking lifetime access
• Users requiring built-in spoofer protection
• Streamers and content creators
• Players with diverse system configurations
• Users preferring internal solutions
• Those wanting premium quality features
• Players seeking long-term value

### 🎮**Farlight 84 Features:**
• **Hero-based Gameplay** - Unique character abilities
• **Jetpack Combat** - Vertical battle system
• **Battle Royale Mode** - Survival competition
• **Team Strategy** - Squad coordination
• **Fast-paced Action** - Dynamic combat scenarios

### ⚙️**Technical Excellence:**
• **Internal Implementation** - Direct game memory access
• **Built-in Spoofer** - Complete hardware protection
• **Universal Compatibility** - All system configurations
• **StreamProof Technology** - Safe for content creation
• **Lifetime Access** - One-time purchase option

### 🎯**Key Features:**
• **Internal Design** - High-performance direct game integration
• **Built-in Spoofer** - Complete hardware protection system included
• **Lifetime Option** - Unlimited access with one-time payment
• **Universal Support** - Compatible with Steam and Official Launcher

### 💎**Premium Benefits:**
• **Complete Protection** - Hardware spoofer integrated
• **Lifetime Value** - Best long-term investment option
• **Performance Optimization** - Internal design for maximum efficiency
• **Multi-client Flexibility** - Support for multiple game launchers
• **Professional Quality** - High-end development standards

---
**Premium internal cheat with built-in spoofer and lifetime option for complete Farlight 84 aerial dominance!**`)
            .addFields(
                {
                    name: '`🔥` INTERNAL EXCELLENCE',
                    value: 'High-performance internal implementation with direct game integration.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`♾️` LIFETIME OPTION',
                    value: 'One-time purchase option for unlimited lifetime access to all features.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your FKN Farlight 84 premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'FKN Farlight 84 • Internal • Built-in Spoofer • Lifetime Option',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};