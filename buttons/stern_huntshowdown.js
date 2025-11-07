const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_huntshowdown',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Stern : Hunt: Showdown - Premium External Cheat')
            .setDescription(
                `**Premium external cheat for Hunt: Showdown from Stern group.**\n\n` +
                `Comprehensive aimbot with detailed visual ESP and extensive loot tracking system with lifetime access option.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 81.000 / $4.55\n**7 Days** - IDR 182.500 / $10.27\n**30 Days** - IDR 370.750 / $21.68\n**Lifetime** - IDR 1.151.000 / $67.32'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT\n**BIOS:** UEFI\n**Type:** External Software\n**Client:** Steam Support'
                },
                {
                    name: '`🎯` AIMBOT SYSTEM',
                    value: '• **Aimbot** - Advanced targeting assistance\n• **Aim Key** - Customizable trigger key\n• **FOV Settings** - Field of view control\n• **Aim Settings** - Comprehensive aim configuration'
                },
                {
                    name: '`👁️` VISUAL ESP',
                    value: '• **Skeleton** - Bone structure display\n• **Silhouette** - Player outline\n• **Head** - Head detection ESP\n• **Box** - Bounding box display\n• **Distance** - Distance calculations\n• **Name Player** - Player name display\n• **Name Zombie** - Zombie identification\n• **Line ESP** - Top/Middle/Bottom positioning\n• **Color Picker** - Full color customization'
                },
                {
                    name: '`💎` LOOT ESP SYSTEM',
                    value: '• **Extraction Points** - Exit location display\n• **Weapons** - All weapon types\n• **Consumables** - Medical and utility items\n• **Ammunition** - All ammo types\n• **Clues** - Bounty clues tracking\n• **World Items** - Environmental objects\n• **Ammo Swap Boxes** - Ammunition containers\n• **Trait Items** - Special abilities\n• **Barrels** - Explosive containers\n• **Destroyable Objects** - Breakable environment\n• **Rotten Items** - Decayed objects\n• **Health Items** - Medical supplies\n• **Tool Boxes** - Equipment containers\n• **Loot Distance** - Range configuration\n• **Color Picker** - Custom loot colors'
                },
                {
                    name: '`⏰` LIFETIME ACCESS',
                    value: '• **Permanent Ownership** - One-time purchase\n• **Lifetime Updates** - Continuous feature updates\n• **Best Value** - Long-term cost efficiency\n• **No Renewals** - No subscription needed\n• **Premium Investment** - Dedicated players choice'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern Hunt: Showdown premium cheat.'
                }
            )
            .setColor('#FF6B35')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern Hunt: Showdown • External • Lifetime Available • Extensive Loot ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};