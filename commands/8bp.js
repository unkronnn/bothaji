const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8bp')
        .setDescription('🎱 | Cheat 8 Ball Pool'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎱 Cheat 8 Ball Pool')
                .setDescription(
                    `**Choose the product or service you are interested in:**\n\n` +
                    `> • WOLF 8BP (Android)\n` +
                    `> • GBD 8BP (iOS)\n` +
                    `> • WOLF 8BP (iOS)\n` +
                    `> • SNAKE 8BP (Android)\n\n` +
                    `Please select a product from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Enhance Your 8 Ball Pool Experience',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a 8BP product...')
                    .addOptions([
                        {
                            label: 'WOLF 8BP (Android)',
                            description: 'Premium Cheat 8 Ball Pool Android',
                            value: 'wolf8bpandro',
                        },
                        {
                            label: 'GBD 8BP (iOS)',
                            description: 'Premium Cheat 8 Ball Pool iOS',
                            value: 'gbd8bpios',
                        },
                        {
                            label: 'WOLF 8BP (iOS)',
                            description: 'Premium Cheat 8 Ball Pool iOS',
                            value: 'wolf8bpios',
                        },
                        {
                            label: 'SNAKE 8BP (Android)',
                            description: 'Premium Cheat 8 Ball Pool Android',
                            value: 'snake8bpandroid',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in 8bp command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the 8BP product list',
                ephemeral: true,
            });
        }
    },
};