const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_huntshowdown',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Lexy : Hunt: Showdown - Premium External Cheat')
            .setDescription(
                `**Premium external cheat for Hunt: Showdown from Lexy group.**\n\n` +
                `High-quality external cheat with built-in spoofer and comprehensive protection features for maximum security.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 161.000 / $9.50\n**7 Days** - IDR 849.250 / $50.00\n**30 Days** - IDR 1.169.250 / $70.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT & MBR\n**BIOS:** UEFI & Legacy\n**Type:** External Software\n**Spoofer:** Built-in'
                },
                {
                    name: '`🛡️` PREMIUM PROTECTION',
                    value: '• **Built-in Spoofer** - Complete protection suite\n• **External Technology** - Maximum security\n• **StreamProof** - Safe for content creation\n• **Multi-OS Support** - Wide compatibility\n• **Multi-BIOS Support** - UEFI & Legacy\n• **Premium Quality** - High-end performance'
                },
                {
                    name: '`🎮` STREAMER FRIENDLY',
                    value: '• **StreamProof Protection** - Safe for recording\n• **External Stability** - Reliable performance\n• **Professional Grade** - Premium features\n• **Content Creator Safe** - No detection risk\n• **High-Quality Service** - Consistent operation'
                },
                {
                    name: '`🌟` LEXY ADVANTAGES',
                    value: '• **Premium Protection** - Built-in spoofer technology\n• **External Security** - Maximum stability and safety\n• **Professional Service** - High-end performance\n• **Flexible Options** - Multiple duration choices\n• **Reliable Operation** - Consistent performance\n• **Advanced Features** - Premium functionality'
                },
                {
                    name: '`🎯` PERFECT FOR',
                    value: '• Premium Hunt: Showdown players\n• Users wanting **maximum protection**\n• Streamers requiring **safety features**\n• Players who prefer **external stability**\n• Those needing **built-in spoofer**\n• Users seeking **premium features**'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy Hunt: Showdown premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy Hunt: Showdown • External • Built-in Spoofer • Premium Protection',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};