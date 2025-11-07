const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_marvelrivals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : Marvel Rivals - Affordable External Cheat')
            .setDescription(
                `**Affordable external cheat for Marvel Rivals from PussyCat group.**\n\n` +
                `Budget-friendly option with StreamProof technology and multi-client support.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 80.000 / $4.50\n**7 Days** - IDR 255.750 / $15.00\n**31 Days** - IDR 465.750 / $28.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds including 25H2)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT & MBR\n**BIOS:** UEFI & Legacy\n**Type:** External Software\n**Client:** Steam & Epic Games\n**Spoofer:** No'
                },
                {
                    name: '`💸` AFFORDABLE PRICING',
                    value: '• **Most Affordable 1-Day** - Only IDR 80.000 / $4.50\n• **Competitive 7-Day** - IDR 255.750 / $15.00\n• **Best Value 31-Day** - IDR 465.750 / $28.00\n• **Multiple Duration Options** - Flexible to your needs\n• **Budget Friendly** - Accessible to all players\n• **Great Value** - Quality at affordable price'
                },
                {
                    name: '`🎮` MULTI-CLIENT SUPPORT',
                    value: '• **Steam Integration** - Steam platform compatibility\n• **Epic Games Support** - Epic launcher compatibility\n• **Universal Access** - Works across platforms\n• **Easy Switching** - Seamless client changes'
                },
                {
                    name: '`🎥` STREAMPROOF TECHNOLOGY',
                    value: '• **Content Creator Safe** - No detection in streams\n• **Advanced Protection** - Modern anti-detection\n• **Recording Safe** - Secure for video creation\n• **Professional Grade** - Streamer approved\n• **No Visual Traces** - Completely hidden'
                },
                {
                    name: '`🌟` PUSSYCAT ADVANTAGES',
                    value: '• **Affordable Pricing** - Most competitive rates\n• **StreamProof Technology** - Content creator safe\n• **Multi-Platform Support** - Wide compatibility\n• **External Stability** - Reliable performance\n• **Latest Windows Support** - Including 25H2\n• **Professional Service** - Consistent operation'
                },
                {
                    name: '`🎯` PERFECT FOR',
                    value: '• Budget-conscious Marvel Rivals players\n• Users wanting affordable access\n• Streamers requiring safety\n• Players on tight budget\n• Multi-platform users\n• Those seeking reliable service\n• Casual superhero gamers'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat Marvel Rivals affordable cheat.'
                }
            )
            .setColor('#FF1493')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat Marvel Rivals • External • StreamProof • Affordable Pricing',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};