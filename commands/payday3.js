const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('payday3')
        .setDescription('🏦 | Payday 3 Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🏦 Payday 3 Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Payday 3 heist game!**\n\n` +
                    `> • PussyCat : Payday 3 (External with Professional Aim Assistance & Visual ESP)\n\n` +
                    `**About Payday 3:**\n` +
                    `Payday 3 is a cooperative first-person shooter heist game where players team up to execute daring heists. Choose your approach - stealth or all-out action - as you work with your crew to crack safes, take hostages, and make off with millions in high-stakes robberies across various locations.\n\n` +
                    `**Master every heist with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Payday 3 Premium Cheats • Heist Master Tools',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Payday 3 cheat...')
                    .addOptions([
                        {
                            label: 'PussyCat : Payday 3',
                            description: 'External with Professional Aim Assistance & Visual ESP',
                            value: 'pussycat_payday3',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in payday3 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Payday 3 cheat collection',
                flags: [64],
            });
        }
    },
};