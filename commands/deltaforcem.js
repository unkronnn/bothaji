const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deltaforcem')
        .setDescription('🛒 | Cheat Delta Force Mobile'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('✨ Cheat Delta Force Mobile')
                .setDescription(
                    `**Choose the product or service you are interested in:**\n\n` +
                    `> • GBD Delta Force (iOS)\n` +
                    `> • WOLF Delta Force (iOS)\n` +
                    `> • XEIN Delta Force (Android)\n` +
                    `> • GP+ Delta Force (Android)\n\n` +
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
                            label: 'GBD Delta Force (iOS)', // Nama produk
                            description: 'Premium Cheat Delta Force iPhone', // Deskripsi produk
                            value: 'gbddfm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'WOLF Delta Force (iOS)', // Nama produk
                            description: 'Premium Cheat Delta Force iPhone', // Deskripsi produk
                            value: 'wolfdfm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'XEIN Delta Force (Android)', // Nama produk
                            description: 'Premium Cheat Delta Force Android', // Deskripsi produk
                            value: 'xeindfm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'GP+ Delta Force (Android)', // Nama produk
                            description: 'Premium Cheat Delta Force Android', // Deskripsi produk
                            value: 'gp+dfm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
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