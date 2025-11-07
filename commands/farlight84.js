const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('farlight84')
        .setDescription('🚁 | Farlight 84 Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🚁 Farlight 84 Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Farlight 84 hero shooter game!**\n\n` +
                    `> • Aquila : Farlight 84 (External with Advanced Aimbot & ESP)\n` +
                    `> • FKN : Farlight 84 (Internal with Built-in Spoofer & Lifetime Option)\n\n` +
                    `**About Farlight 84:**\n` +
                    `Farlight 84 is a fast-paced hero shooter battle royale game featuring jetpack-powered mobility, unique heroes with special abilities, and intense aerial combat. Experience dynamic battles with vertical gameplay and strategic team-based action.\n\n` +
                    `**Dominate the skies with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Farlight 84 Premium Cheats • Aerial Combat Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Farlight 84 cheat...')
                    .addOptions([
                        {
                            label: 'Aquila : Farlight 84',
                            description: 'External with advanced aimbot, ESP and comprehensive features',
                            value: 'aquila_farlight84',
                        },
                        {
                            label: 'FKN : Farlight 84',
                            description: 'Internal with built-in spoofer and lifetime option',
                            value: 'fkn_farlight84',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in farlight84 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Farlight 84 cheat collection',
                ephemeral: true,
            });
        }
    },
};