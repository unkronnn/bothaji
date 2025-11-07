const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_huntshowdown',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Mason : Hunt: Showdown - Detailed External Cheat')
            .setDescription(
                `**Detailed external cheat for Hunt: Showdown from Mason group.**\n\n` +
                `Comprehensive battlefield information system with advanced aim prediction and zoom functionality.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 55.750 / $3.00\n**7 Days** - IDR 266.000 / $16.00\n**30 Days** - IDR 518.750 / $31.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds including 25H2)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT\n**BIOS:** UEFI\n**Type:** External Software\n**Spoofer:** Built-in'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: '• **Enabled** - Toggle aimbot activation\n• **Aim Prediction** - Target pre-emption calculation\n• **Aim Key** - Customizable trigger key (hold to activate)\n• **Aim Radius** - Target acquisition range\n• **Aim Spot** - Body part selection (head/chest)\n• **Aim Precision** - Targeting accuracy configuration'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: '• **Force Silhouettes** - Player and mob outlines\n• **Bounding Box** - Square display on opponents\n• **Prediction Marker** - Lead point display\n• **Players** - Enemy hunter detection\n• **Clues** - Bounty hint tracking\n• **Grunts** - Zombie and dog detection\n• **Attractors** - Birds, horses, caged animals\n• **Immolators** - Special fire zombies\n• **Water Devils** - Special water zombies\n• **Special Grunts** - Boss enemies\n• **Weapons** - Ground weapon detection\n• **Supply Boxes** - Medical and ammo supplies\n• **World Items** - Various objects (axes, lamps, etc.)\n• **Extraction** - Exit point display\n• **Explodable** - Barrel detection\n• **Bear Traps** - Trap avoidance\n• **Distance** - Range to targets\n• **Trait Charms** - Special ability display\n• **Cash** - Currency and register detection\n• **Distance Limit** - ESP range configuration'
                },
                {
                    name: '`🔧` ADVANCED FEATURES',
                    value: '• **Zoom Function** - Camera zoom (binoculars effect)\n• **Zoom Key** - Customizable zoom trigger\n• **CPU Saver** - Performance optimization\n• **Crosshair Display** - Monitor center targeting\n• **FOV Display** - Aimbot radius visualization'
                },
                {
                    name: '`🌟` MASON ADVANTAGES',
                    value: '• **Detailed Information** - Most comprehensive battlefield data\n• **Advanced Prediction** - Sophisticated aim calculations\n• **Zoom Capability** - Enhanced vision features\n• **Performance Optimized** - CPU saving features\n• **Latest Windows Support** - Including Windows 25H2\n• **Built-in Spoofer** - Complete protection suite'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Hunt: Showdown detailed cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Hunt: Showdown • External • Detailed ESP • Zoom Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};