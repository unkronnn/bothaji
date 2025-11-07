const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'unicore_honkaistarrail',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Unicore : Honkai: Star Rail - Premium Internal Cheat')
            .setDescription(
                `**Premium internal cheat for Honkai: Star Rail from Unicore group.**\n\n` +
                `Turn-based RPG cheat with advanced ESP, battle acceleration (15x), auto systems, and comprehensive gameplay features.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**2 Days** - IDR 29.750 / $1.50\n**7 Days** - IDR 75.250 / $4.50\n**30 Days** - IDR 165.000 / $9.50'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Type:** Internal Software\n**Launcher:** Native Game Client'
                },
                {
                    name: '`🔥` KEY FEATURES',
                    value: '• **Visual ESP:** Boxes, Names, Distance, Treasure Chests, Space Anchors\n• **Movement:** Teleport, Noclip, Speed adjustments\n• **Battle:** 15x speed, Auto-battle, Skip dialogs\n• **Farming:** Auto loot (30m range), Chest teleport\n• **Custom:** Visuals Builder, Objects Logger, UID Changer'
                },
                {
                    name: '`⚡` ADVANCED FEATURES',
                    value: '• **Battle Acceleration:** Speed up combat by up to **15x**\n• **Visuals Builder:** Create custom ESP for any game object\n• **Smart Teleportation:** Click-to-teleport and chest teleport\n• **Object Logger:** Track and analyze game objects\n• **Auto Systems:** Automated looting, battling, and dialogs'
                },
                {
                    name: '`🎮` PERFECT FOR',
                    value: '• RPG players wanting **faster progression**\n• Players seeking **efficient farming**\n• Users wanting to **skip repetitive content**\n• Collectors and completionists\n• Those wanting to **customize visual experience**'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Unicore Honkai: Star Rail premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Unicore Honkai: Star Rail • Internal • Advanced Features • Visuals Builder',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64] // Ephemeral flag (replaces deprecated ephemeral)
        });
    },
};