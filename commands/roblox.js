const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roblox')
        .setDescription('🎮 | Roblox Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎮 Roblox Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Roblox platform games!**\n\n` +
                    `> • DX9Ware : Roblox (External with Advanced Features & Lifetime Access)\n` +
                    `> • Actavis : Roblox (External with Game Manipulation & Combat Features)\n\n` +
                    `**About Roblox:**\n` +
                    `Roblox is a massive online gaming platform where users can create and play millions of 3D games across various genres. From obstacle courses and simulators to RPGs and shooters, Roblox offers endless gaming possibilities with a focus on creativity, social interaction, and user-generated content.\n\n` +
                    `**Dominate any Roblox game with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Roblox Premium Cheats • Platform Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Roblox cheat...')
                    .addOptions([
                        {
                            label: 'DX9Ware : Roblox',
                            description: 'External with Advanced Features & Lifetime Access',
                            value: 'dx9ware_roblox',
                        },
                        {
                            label: 'Actavis : Roblox',
                            description: 'External with Game Manipulation & Combat Features',
                            value: 'actavis_roblox',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in roblox command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Roblox cheat collection',
                flags: [64],
            });
        }
    },
};