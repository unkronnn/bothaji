const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('overwatch2')
        .setDescription('🎮 | Overwatch 2 Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎮 Overwatch 2 Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Overwatch 2 hero shooter game!**\n\n` +
                    `> • Mason : Overwatch 2 (External with Vector Aimbot & Visual ESP)\n\n` +
                    `**About Overwatch 2:**\n` +
                    `Overwatch 2 is a team-based multiplayer first-person hero shooter game. Players select from a diverse roster of heroes, each with unique abilities, and work in teams to complete objectives across various game modes. The game features fast-paced combat, strategic gameplay, and a vibrant cast of characters.\n\n` +
                    `**Dominate the battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Overwatch 2 Premium Cheats • Hero Shooter Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an Overwatch 2 cheat...')
                    .addOptions([
                        {
                            label: 'Mason : Overwatch 2',
                            description: 'External with Vector Aimbot, ESP & Team Change',
                            value: 'mason_overwatch2',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in overwatch2 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Overwatch 2 cheat collection',
                flags: [64],
            });
        }
    },
};