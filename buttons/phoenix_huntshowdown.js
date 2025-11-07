const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'phoenix_huntshowdown',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Phoenix : Hunt: Showdown - Premium External Cheat')
            .setDescription(
                `**Premium external cheat for Hunt: Showdown from Phoenix group.**\n\n` +
                `Comprehensive ESP system covering players, zombies, and world objects with full customization options.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 40.000 / $2.50\n**7 Days** - IDR 175.000 / $11.00\n**30 Days** - IDR 340.500 / $19.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Type:** External Software\n**Client:** Steam Support'
                },
                {
                    name: '`👥` PLAYER ESP',
                    value: '• **Boxes** - Wallhack in box form\n• **Skeleton** - Skeleton ESP display\n• **Chams** - Wallhack glow of character models\n• **Chams Filled** - Full color filling\n• **Head Dot** - Dot on enemy head\n• **Distance** - Show distance in meters\n• **Max Distance** - Set maximum ESP range'
                },
                {
                    name: '`🧟` ZOMBIE ESP',
                    value: '• **Special Zombies** - Special infected detection\n• **Bosses** - Boss ESP tracking\n• **Boxes** - Boxes for all zombies\n• **Skeleton** - Skeleton display on mobs\n• **Chams** - Chams for zombie models\n• **Distance** - Distance to zombies\n• **Max Distance** - Range settings for zombies'
                },
                {
                    name: '`🌍` WORLD ESP',
                    value: '• **Hints** - Location hints display\n• **Ammo Box** - Ammunition visibility\n• **Health Box** - Medical items detection\n• **Posters** - Poster locations\n• **Cash Registers** - Cash register ESP\n• **Snake Basket** - Snake basket detection\n• **Distance** - Object distance display\n• **Max Distance** - Range limit for objects'
                },
                {
                    name: '`🎮` PERFECT FOR',
                    value: '• Players wanting **comprehensive ESP coverage**\n• Hunters tracking **all game elements**\n• Users seeking **complete battlefield awareness**\n• Players wanting **detailed zombie information**\n• Those needing **full world object detection**'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Phoenix Hunt: Showdown premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Phoenix Hunt: Showdown • External • Comprehensive ESP • Full Coverage',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};