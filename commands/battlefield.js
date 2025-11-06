const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('battlefield')
        .setDescription('🎮 | Battlefield Series Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎮 Battlefield Series Cheat Collection')
                .setDescription(
                    `**Premium cheats for multiple Battlefield games!**\n\n` +
                    `> • Fecurity : BF 2042/BF5/BF1/BF6 (Hybrid with Spoofer)\n` +
                    `> • Ancient : Battlefield 6 (External with Spoofer)\n` +
                    `> • Crooked Arm's : Battlefield 6 (External Portable)\n` +
                    `> • Crooked Arm's : Battlefield 2042 (External Portable)\n` +
                    `> • Mason : Battlefield 1 (External Budget)\n` +
                    `> • BTG : Battlefield 6 (External Clean)\n\n` +
                    `**About Battlefield Series:**\n` +
                    `The Battlefield series is renowned for its massive multiplayer battles, vehicular warfare, and strategic team-based combat. From World War I in Battlefield 1 to the futuristic combat of Battlefield 2042, experience intense large-scale warfare across different eras.\n\n` +
                    `**Dominate the battlefield across multiple eras!**\n\n` +
                    `Please select a Battlefield cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Battlefield Series Premium Cheats • Conquer Every Era',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Battlefield cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : BF 2042/BF5/BF1/BF6',
                            description: 'Premium hybrid cheat for multiple Battlefield games',
                            value: 'fecurity_battlefield',
                        },
                        {
                            label: 'Ancient : Battlefield 6',
                            description: 'External cheat with advanced features and spoofer',
                            value: 'ancient_battlefield',
                        },
                        {
                            label: 'Crooked Arm\'s : Battlefield 6',
                            description: 'External portable cheat with radar and aimbot',
                            value: 'crookedarc_battlefield6',
                        },
                        {
                            label: 'Crooked Arm\'s : Battlefield 2042',
                            description: 'External portable cheat with advanced ESP',
                            value: 'crookedarc_battlefield2042',
                        },
                        {
                            label: 'Mason : Battlefield 1',
                            description: 'Budget-friendly external cheat for Battlefield 1',
                            value: 'mason_battlefield1',
                        },
                        {
                            label: 'BTG : Battlefield 6',
                            description: 'External cheat with clean visual features',
                            value: 'btg_battlefield6',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in battlefield command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Battlefield cheat collection',
                ephemeral: true,
            });
        }
    },
};