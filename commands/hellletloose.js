const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hellletloose')
        .setDescription('⚔️ | Hell Let Loose Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⚔️ Hell Let Loose Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Hell Let Loose tactical WWII multiplayer game!**\n\n` +
                    `> • Lexy : HLL (External with Advanced ESP & Built-in Spoofer)\n` +
                    `> • Stern : HLL (External with Lifetime Option & Comprehensive Features)\n` +
                    `> • PussyCat : HLL (External with Affordable Pricing & StreamProof)\n` +
                    `> • Mason : HLL (External with Detailed Visual System)\n` +
                    `> • SMG : HLL (External with Advanced Radar & Speedhack)\n\n` +
                    `**About Hell Let Loose:**\n` +
                    `Hell Let Loose is a realistic World War II first-person shooter that focuses on teamwork and communication. Experience massive 50v50 battles with authentic weaponry, vehicles, and strategic gameplay across historically accurate battlefields.\n\n` +
                    `**Dominate the battlefield with tactical advantages!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Hell Let Loose Premium Cheats • Tactical WWII Battlefield Mastery',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Hell Let Loose cheat...')
                    .addOptions([
                        {
                            label: 'Lexy : HLL',
                            description: 'External with advanced ESP, aimbot, and built-in spoofer',
                            value: 'lexy_hll',
                        },
                        {
                            label: 'Stern : HLL',
                            description: 'External with lifetime option and comprehensive features',
                            value: 'stern_hll',
                        },
                        {
                            label: 'PussyCat : HLL',
                            description: 'External with affordable pricing and StreamProof technology',
                            value: 'pussycat_hll',
                        },
                        {
                            label: 'Mason : HLL',
                            description: 'External with detailed visual system and extensive ESP',
                            value: 'mason_hll',
                        },
                        {
                            label: 'SMG : HLL',
                            description: 'External with advanced radar, speedhack, and zoom features',
                            value: 'smg_hll',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in hellletloose command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Hell Let Loose cheat collection',
                flags: [64],
            });
        }
    },
};