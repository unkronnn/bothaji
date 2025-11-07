const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rdr2')
        .setDescription('🤠 | Red Dead Redemption 2 Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🤠 Red Dead Redemption 2 Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Red Dead Redemption 2 open world game!**\n\n` +
                    `> • Sunrise : RDR2 (Internal with Story & Online Mode Support)\n` +
                    `> • Ovix : RDR2 (Internal with Professional Features & Lifetime Access)\n\n` +
                    `**About Red Dead Redemption 2:**\n` +
                    `Red Dead Redemption 2 is an open world action-adventure game set in the American Wild West. Players experience the story of Arthur Morgan and the Van der Linde gang as they navigate the changing landscape of 1899. The game features both a compelling story mode and an online multiplayer experience with countless activities.\n\n` +
                    `**Explore the Wild West with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Red Dead Redemption 2 Premium Cheats • Wild West Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Red Dead Redemption 2 cheat...')
                    .addOptions([
                        {
                            label: 'Sunrise : RDR2',
                            description: 'Internal with Story & Online Mode Support',
                            value: 'sunrise_rdr2',
                        },
                        {
                            label: 'Ovix : RDR2',
                            description: 'Internal with Professional Features & Lifetime Access',
                            value: 'ovix_rdr2',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in rdr2 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Red Dead Redemption 2 cheat collection',
                flags: [64],
            });
        }
    },
};