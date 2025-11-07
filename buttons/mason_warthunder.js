const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_warthunder',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Mason : War Thunder - External Advanced Aimbot & Comprehensive ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 111.500 / $6.50
**7 DAY**   — IDR 399.000 / $24.00
**30 DAY**  — IDR 778.250 / $46.00

### 🎯**Aimbot Features:**
• **Enabled / Enable Aimbot** - Toggle functionality
• **Aim key** - Custom activation binding
• **Aim smooth** - Adjustable hover speed
• **Aim radius** - Working radius control
• **Aim step** - Aiming shake adjustment

### 👁️**Visuals Features:**
• **Enabled / Enable ESP** - Toggle ESP
• **Show radar** - Display radar system
• **Show units information** - Display vehicle data
• **Show dormant units** - Latest position information
• **Bounding box** - Square overlay on opponents
• **Show plane speed** - Aircraft speed display
• **Show vehicle name** - Vehicle identification
• **Show vehicle direction** - Movement direction
• **Show missiles** - Projectile tracking
• **Show bombs** - Bomb detection
• **Show bases** - Enemy bases and airfields
• **Show ground units** - Ground vehicle display
• **Show air units** - Aerial vehicle display
• **Show bot units** - AI opponent detection
• **Show player name** - Nickname display
• **Prediction marker** - Preemption point system
• **Switch spot key** - Target switching

### 🎯**Key Features:**
• **Memory Aim** - Advanced targeting technology
• **Comprehensive ESP** - Complete awareness system
• **StreamProof** - Safe for streaming
• **Multi-Vehicle Support** - Tanks, planes, ships
• **Professional Quality** - Industry-leading features

---
**External cheat with memory aim technology and comprehensive ESP for ultimate War Thunder combat advantage!**`)
            .addFields(
                {
                    name: '`🎯` MEMORY AIM',
                    value: 'Advanced memory-based targeting with smooth control and radius adjustment.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete awareness system for vehicles, projectiles, and environmental objects.'
                },
                {
                    name: '`✈️` MULTI-VEHICLE',
                    value: 'Full support for tanks, aircraft, and naval combat vehicles.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason War Thunder premium cheat.'
                }
            )
            .setColor('#4682B4')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason War Thunder • External • Advanced Aimbot & ESP • Multi-Vehicle Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};