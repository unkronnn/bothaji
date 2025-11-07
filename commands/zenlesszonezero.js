const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('zenlesszonezero')
        .setDescription('🏙️ | Zenless Zone Zero Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🏙️ Zenless Zone Zero Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Zenless Zone Zero urban action RPG game!**\n\n` +
                    `> • Unicore : Zenless Zone Zero (Internal with Advanced Combat & Teleport System)\n\n` +
                    `**About Zenless Zone Zero:**\n` +
                    `Zenless Zone Zero is a free-to-play urban fantasy action RPG set in the vibrant metropolis of New Eridu. Players take on the role of Proxy, guiding explorers through dangerous Hollows to combat supernatural threats. The game features fast-paced combat, diverse character customization, and an engaging storyline set in a modern urban fantasy world.\n\n` +
                    `**Master the urban battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Zenless Zone Zero Premium Cheats • Urban Action Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Zenless Zone Zero cheat...')
                    .addOptions([
                        {
                            label: 'Unicore : Zenless Zone Zero',
                            description: 'Internal with Advanced Combat & Teleport System',
                            value: 'unicore_zenlesszonezero',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in zenlesszonezero command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Zenless Zone Zero cheat collection',
                flags: [64],
            });
        }
    },
};