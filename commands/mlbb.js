const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mlbb')
        .setDescription('🎮 | Cheat Mobile Legends Bang Bang'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎮 Cheat Mobile Legends Bang Bang')
                .setDescription(
                    `**Choose the product or service you are interested in:**\n\n` +
                    `> • STAR iOS\n` +
                    `> • FLUORITE MLBB iOS\n` +
                    `> • GBD MLBB iOS\n` +
                    `> • MORELLA MLBB\n` +
                    `> • GBD MLBB Android\n` +
                    `> • WOLF MLBB Android\n` +
                    `> • PIXEL MLBB Android\n\n` +
                    `Please select a product from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Enhance Your MLBB Experience',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a MLBB product...')
                    .addOptions([
                        {
                            label: 'STAR iOS',
                            description: 'PUBG | MLBB | CODM iOS (IPA & Tesflight)',
                            value: 'starmlbbios',
                        },
                        {
                            label: 'FLUORITE MLBB iOS',
                            description: 'Mobile Legends iOS (IPA)',
                            value: 'fluoritemlbbios',
                        },
                        {
                            label: 'GBD MLBB iOS',
                            description: 'Mobile Legend iOS (IPA)',
                            value: 'gbdmlbbios',
                        },
                        {
                            label: 'MORELLA MLBB',
                            description: 'Mobile Legends Android (Non Root & Root)',
                            value: 'morellamlbbandro',
                        },
                        {
                            label: 'GBD MLBB Android',
                            description: 'Mobile Legends Android (Non Root)',
                            value: 'gbdmlbbandroid',
                        },
                        {
                            label: 'WOLF MLBB Android',
                            description: 'Mobile Legends Android (Non Root)',
                            value: 'wolfmlbbandroid',
                        },
                        {
                            label: 'PIXEL MLBB Android',
                            description: 'Mobile Legend Android (Non Root)',
                            value: 'pixelmlbbandroid',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in mlbb command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the MLBB product list',
                flags: [64],
            });
        }
    },
};