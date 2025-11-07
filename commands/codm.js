const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('codm')
        .setDescription('🔫 | Cheat Call of Duty Mobile'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔫 Cheat Call of Duty Mobile')
                .setDescription(
                    `**Choose the product or service you are interested in:**\n\n` +
                    `> • CODM GL iOS\n` +
                    `> • MORELLA CODM Android\n` +
                    `> • GBD CODM Garena Android\n` +
                    `> • GP+ CODM Android\n\n` +
                    `Please select a product from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Enhance Your CODM Experience',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a CODM product...')
                    .addOptions([
                        {
                            label: 'CODM GL iOS',
                            description: 'CODM iOS Global (IPA & Tesflight)',
                            value: 'codmglios',
                        },
                        {
                            label: 'MORELLA CODM Android',
                            description: 'Garena Android (Non Root)',
                            value: 'morellacodm',
                        },
                        {
                            label: 'GBD CODM Garena Android',
                            description: 'CODM Garena Version Android (Non Root)',
                            value: 'gbdcodmandroid',
                        },
                        {
                            label: 'GP+ CODM Android',
                            description: 'Call Of Duty Garena Android (Non Root)',
                            value: 'gp+codmandroid',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in codm command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the CODM product list',
                flags: [64],
            });
        }
    },
};