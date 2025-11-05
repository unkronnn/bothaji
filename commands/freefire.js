const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('freefire')
        .setDescription('🛒 | Cheat Free Fire'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('✨ Cheat Free Fire')
                .setDescription(
                    `**Choose the product or service you are interested in:**\n\n` +
                    `> • Fluorite Free Fire (iOS)\n` +
                    `> • GBD Free Fire (iOS)\n` +
                    `> • XProject Free Fire (Android)\n` +
                    `> • Drip Free Fire (Android)\n\n` +
                    `Please select a product from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120") // Replace with your image URL
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Enhance Your Experience',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a product...')
                    .addOptions([
                        {
                            label: 'Fluorite Free Fire (iOS)', // Nama produk
                            description: 'Premium Cheat Free Fire iPhone', // Deskripsi produk
                            value: 'fluoriteff', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'GBD Fire Fire (iOS)', // Nama produk
                            description: 'Premium Cheat Free Fire iPhone', // Deskripsi produk
                            value: 'gbdff', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'XProject Free Fire (Android)', // Nama produk
                            description: 'Premium Cheat Free Fire Android', // Deskripsi produk
                            value: 'xprojectff', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'Drip Free Fire (Android)', // Nama produk
                            description: 'Premium Cheat Free Fire Android', // Deskripsi produk
                            value: 'dripff', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in example product command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the product list',
                ephemeral: true,
            });
        }
    },
};