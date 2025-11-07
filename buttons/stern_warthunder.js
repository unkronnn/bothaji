const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_warthunder',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Stern : War Thunder - External Multi-Mode ESP & Lifetime Access')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 81.000 / $4.56
**7 DAY**   — IDR 304.000 / $17.11
**30 DAY**  — IDR 585.250 / $34.23
**Lifetime** — IDR 2.906.750 / $170.01

### 👁️**Visual (Players) Features:**
• **Draw Tank/Plane/Boat** - Vehicle detection
• **Show Box** - Rectangle overlays
• **Show Line** - Directional indicators
• **Reload Bar** - Reload status display
• **Show Name** - Vehicle identification
• **Show Distance** - Range information
• **Show Type** - Vehicle type classification
• **Show Team** - Team identification
• **Bot Check** - AI opponent detection
• **Visible** - Visibility status
• **Repairing** - Repair status
• **Breech Damaged** - Damage assessment
• **MaxDistance** - Render distance control

### 📡**Radar Features:**
• **Enable Radar** - Toggle radar system

### 🎯**Key Features:**
• **Multi-Mode ESP** - Support for all game modes
• **Lifetime Access** - Best long-term value
• **StreamProof** - Safe for streaming
• **Professional Quality** - Industry-leading features
• **Regular Updates** - Latest compatibility

---
**External cheat with multi-mode ESP and lifetime access for ultimate War Thunder platform dominance!**`)
            .addFields(
                {
                    name: '`📡` TACTICAL RADAR',
                    value: 'Comprehensive radar system with real-time player and vehicle tracking.'
                },
                {
                    name: '`👁️` MULTI-MODE ESP',
                    value: 'Support for tanks, planes, boats, and all game modes with detailed information.'
                },
                {
                    name: '`👑` LIFETIME ACCESS',
                    value: 'One-time payment provides unlimited access forever - best long-term value.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern War Thunder premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern War Thunder • External • Multi-Mode ESP • Lifetime Access',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};