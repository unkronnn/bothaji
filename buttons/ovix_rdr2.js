const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ovix_rdr2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Ovix : RDR2 - Professional Internal Solution with Lifetime Access')
            .setDescription(`
### 🧾**Pricing**
**Lifetime** — IDR 160.000 / $9.50

A premium product for the game Red Dead Redemption 2 from Ovix group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam, Epic Games & Rockstar
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 💎**Ovix Advantages:**
✅ **Lifetime Access** - One-time payment, forever access
✅ **Internal Software** - Superior performance and stability
✅ **Professional Quality** - Industry-leading features
✅ **Multi-Client Support** - Steam, Epic Games, Rockstar
✅ **All Game Modes** - Complete game compatibility
✅ **Best Value** - Ultimate long-term investment
✅ **Regular Updates** - Latest game compatibility
✅ **Premium Support** - Professional customer service

### 🎮**Perfect For:**
• Long-term Red Dead Redemption 2 players
• Users seeking best value
• Players wanting lifetime access
• Multi-platform enthusiasts
• Those wanting professional quality
• Users seeking one-time investment
• Players requiring comprehensive support

### 🤠**Red Dead Redemption 2 Features:**
• **Open World** - Expansive Western landscape
• **Story Mode** - Compelling narrative campaign
• **Online Multiplayer** - Shared world experience
• **Realistic Graphics** - Stunning visual presentation
• **Wild West Setting** - Historical American frontier

### 🎯**Key Features:**
• **Lifetime Access** - One-time payment for unlimited use
• **Internal Design** - Superior performance integration
• **Professional Quality** - Industry-leading features
• **Multi-Client Support** - Works with all platforms
• **Best Value** - Ultimate long-term investment

---
**Professional internal solution with lifetime access for ultimate Red Dead Redemption 2 experience without recurring payments!**`)
            .addFields(
                {
                    name: '`👑` LIFETIME ACCESS',
                    value: 'One-time payment provides unlimited access forever - no recurring subscriptions.'
                },
                {
                    name: '`💻` INTERNAL PERFORMANCE',
                    value: 'Superior stability and performance with direct game integration.'
                },
                {
                    name: '`💎` BEST VALUE',
                    value: 'Ultimate long-term investment with professional-grade features and support.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ovix Red Dead Redemption 2 premium cheat.'
                }
            )
            .setColor('#4682B4')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ovix Red Dead Redemption 2 • Internal • Lifetime Access • Professional Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};