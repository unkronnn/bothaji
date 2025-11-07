const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('valorant')
        .setDescription('🎯 | Valorant Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎯 Valorant Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Valorant tactical FPS game!**\n\n` +
                    `> • Ghost : Valorant Colorbot (External with Advanced Aimbot & Triggerbot)\n` +
                    `> • V-Sharp : Valorant (External with Memory Aim & Advanced ESP)\n` +
                    `> • Evicted : Valorant Triggerbot (External with Professional Trigger System)\n` +
                    `> • Ambani : Valorant Colorbot (External with Custom Aimbot & RCS)\n` +
                    `> • Stern : Valorant (External with Comprehensive ESP & Advanced Features)\n\n` +
                    `**About Valorant:**\n` +
                    `Valorant is a free-to-play tactical first-person shooter from Riot Games featuring precise gunplay, unique agent abilities, and strategic 5v5 gameplay. Players choose from diverse agents with special powers and compete across multiple maps in high-stakes competitive matches.\n\n` +
                    `**Master the tactical battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Valorant Premium Cheats • Tactical FPS Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Valorant cheat...')
                    .addOptions([
                        {
                            label: 'Ghost : Valorant Colorbot',
                            description: 'External with Advanced Aimbot & Triggerbot',
                            value: 'ghost_valorant',
                        },
                        {
                            label: 'V-Sharp : Valorant',
                            description: 'External with Memory Aim & Advanced ESP',
                            value: 'vsharp_valorant',
                        },
                        {
                            label: 'Evicted : Valorant Triggerbot',
                            description: 'External with Professional Trigger System',
                            value: 'evicted_valorant',
                        },
                        {
                            label: 'Ambani : Valorant Colorbot',
                            description: 'External with Custom Aimbot & RCS',
                            value: 'ambani_valorant',
                        },
                        {
                            label: 'Stern : Valorant',
                            description: 'External with Comprehensive ESP & Advanced Features',
                            value: 'stern_valorant',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in valorant command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Valorant cheat collection',
                flags: [64],
            });
        }
    },
};