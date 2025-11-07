const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hok')
        .setDescription('👑 | Cheat Honor of Kings'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('👑 Cheat Honor of Kings')
                .setDescription(
                    `**Choose the product or service you are interested in:**\n\n` +
                    `> • GP+ HOK Android\n\n` +
                    `Please select a product from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Enhance Your Honor of Kings Experience',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Honor of Kings product...')
                    .addOptions([
                        {
                            label: 'GP+ HOK Android',
                            description: 'Honor of Kings Android (Non Root)',
                            value: 'gp+hokandroid',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in hok command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Honor of Kings product list',
                flags: [64],
            });
        }
    },
};