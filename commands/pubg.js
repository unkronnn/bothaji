const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pubg')
        .setDescription('🎮 | PUBG Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎮 PUBG Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for PUBG battle royale game!**\n\n` +
                    `> • Fecurity : PUBG (Hybrid with Built-in Spoofer, Advanced Aimbot & Visual ESP)\n` +
                    `> • BTG : PUBG (External with Professional Visual ESP & Loot Filtering)\n` +
                    `> • Ancient : PUBG (External with Comprehensive ESP, Aimbot & Radar)\n` +
                    `> • Lexy : PUBG (External with Premium Features & Spoofer)\n\n` +
                    `**About PUBG:**\n` +
                    `PUBG (PlayerUnknown's Battlegrounds) is a battle royale game where 100 players drop onto an island and fight to be the last one standing. Players scavenge for weapons, vehicles, and supplies while eliminating opponents in a shrinking safe zone. The game offers realistic combat mechanics and intense gameplay.\n\n` +
                    `**Survive to the end with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'PUBG Premium Cheats • Battle Royale Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a PUBG cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : PUBG',
                            description: 'Hybrid with Built-in Spoofer, Advanced Aimbot & Visual ESP',
                            value: 'fecurity_pubg',
                        },
                        {
                            label: 'BTG : PUBG',
                            description: 'External with Professional Visual ESP & Loot Filtering',
                            value: 'btg_pubg',
                        },
                        {
                            label: 'Ancient : PUBG',
                            description: 'External with Comprehensive ESP, Aimbot & Radar',
                            value: 'ancient_pubg',
                        },
                        {
                            label: 'Lexy : PUBG',
                            description: 'External with Premium Features & Spoofer',
                            value: 'lexy_pubg',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in pubg command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the PUBG cheat collection',
                flags: [64],
            });
        }
    },
};