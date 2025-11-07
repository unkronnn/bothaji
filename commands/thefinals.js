const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('thefinals')
        .setDescription('🏆 | The Finals Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🏆 The Finals Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for The Finals fast-paced shooter game!**\n\n` +
                    `> • Fecurity : The Finals (Hybrid with Built-in Spoofer & Advanced Aimbot)\n` +
                    `> • Crooked Arm's : The Finals (External with Professional Visual ESP & Aimbot)\n\n` +
                    `**About The Finals:**\n` +
                    `The Finals is a fast-paced free-to-play first-person shooter featuring dynamic destructible environments. Teams of three compete in tournaments across various game modes, utilizing advanced weapons, gadgets, and environmental destruction to secure victory in spectacular combat scenarios.\n\n` +
                    `**Destroy the competition with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'The Finals Premium Cheats • Tournament Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a The Finals cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : The Finals',
                            description: 'Hybrid with Built-in Spoofer & Advanced Aimbot',
                            value: 'fecurity_thefinals',
                        },
                        {
                            label: 'Crooked Arm\'s : The Finals',
                            description: 'External with Professional Visual ESP & Aimbot',
                            value: 'crookedarms_thefinals',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in thefinals command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the The Finals cheat collection',
                flags: [64],
            });
        }
    },
};