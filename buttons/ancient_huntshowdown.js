const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_huntshowdown',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Ancient : Hunt: Showdown - Advanced External Cheat')
            .setDescription(
                `**Advanced external cheat for Hunt: Showdown from Ancient group.**\n\n` +
                `Comprehensive aimbot system with advanced visual ESP and extensive world object tracking.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 120.000 / $7.00\n**7 Days** - IDR 341.500 / $20.00\n**30 Days** - IDR 666.000 / $40.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD (1000 series+)\n**Disk:** GPT\n**BIOS:** UEFI\n**Type:** External Software\n**Spoofer:** Built-in'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: '• **Active** - Toggle aimbot on/off\n• **Crosshair** - Custom crosshair display\n• **Draw FOV** - Visualize aimbot field of view\n• **Draw Aim Point** - Show aiming target\n• **Aim at Players** - Target enemy hunters\n• **Aim at Zombies** - Target zombie threats\n• **Aim at Boss** - Target boss enemies\n• **Target Bone** - Head, neck, pelvis selection'
                },
                {
                    name: '`👁️` VISUAL ESP',
                    value: '• **Player Glow** - Player highlighting\n• **Player Chams** - Player wallhack\n• **Player Box** - Bounding boxes\n• **Player Name** - Name display\n• **Player Corpse** - Dead player detection\n• **Player Health** - Health information\n• **Player Distance** - Distance calculations\n• **Zombie Glow** - Zombie highlighting\n• **Zombie Chams** - Zombie wallhack\n• **Boss Detection** - Boss ESP features'
                },
                {
                    name: '`🌍` WORLD ESP',
                    value: '• **Melee Weapons** - Close combat weapons\n• **Ranged Weapons** - Firearms display\n• **Throwable Items** - Grenades and consumables\n• **Medical Supplies** - Health items\n• **World Items** - Various objects\n• **Trait Charms** - Special ability items\n• **Ammo Boxes** - Ammunition supplies\n• **Tool Boxes** - Equipment containers\n• **Health Boxes** - Medical containers\n• **Item Boxes** - General loot containers\n• **Cash Boxes** - Money containers\n• **Boss Spawn** - Boss spawn points\n• **Exits** - Extraction points'
                },
                {
                    name: '`🔧` TECHNICAL REQUIREMENTS',
                    value: '• **GPU Requirement** - Nvidia/AMD 1000 series+\n• **UEFI Support** - Modern BIOS required\n• **GPT Disk** - Modern partition format\n• **Windows 10/11** - Latest OS support\n• **Built-in Spoofer** - Complete protection'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient Hunt: Showdown advanced cheat.'
                }
            )
            .setColor('#4B0082')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient Hunt: Showdown • External • Advanced Aimbot • Comprehensive ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};