const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('duneawakening')
        .setDescription('🏜️ | Dune: Awakening Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🏜️ Dune: Awakening Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Dune: Awakening action RPG game!**\n\n` +
                    `> • Lexy : DA (External Premium with Spoofer)\n` +
                    `> • Stern : DA (External with Aimbot & Lifetime Option)\n` +
                    `> • DullWave : DA (Internal Budget)\n` +
                    `> • FKN : DA (Internal with Lifetime Option)\n` +
                    `> • PussyCat : DA (External Budget)\n\n` +
                    `**About Dune: Awakening:**\n` +
                    `Dune: Awakening is a story-driven action RPG set in Frank Herbert's iconic Dune universe. Experience epic battles, political intrigue, and desert survival as you navigate the dangerous world of Arrakis and fight for control of the valuable spice melange.\n\n` +
                    `**Control the desert with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Dune: Awakening Premium Cheats • Desert Control',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Dune: Awakening cheat...')
                    .addOptions([
                        {
                            label: 'Lexy : DA',
                            description: 'External premium with built-in spoofer',
                            value: 'lexy_duneawakening',
                        },
                        {
                            label: 'Stern : DA',
                            description: 'External with aimbot and lifetime option',
                            value: 'stern_duneawakening',
                        },
                        {
                            label: 'DullWave : DA',
                            description: 'Internal budget-friendly option',
                            value: 'dullwave_duneawakening',
                        },
                        {
                            label: 'FKN : DA',
                            description: 'Internal with lifetime option',
                            value: 'fkn_duneawakening',
                        },
                        {
                            label: 'PussyCat : DA',
                            description: 'External budget with essential features',
                            value: 'pussycat_duneawakening',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in duneawakening command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Dune: Awakening cheat collection',
                flags: [64],
            });
        }
    },
};