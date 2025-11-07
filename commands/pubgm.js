const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pubgm')
        .setDescription('🛒 | Cheat PUBGM'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('✨ Cheat PUBG Mobile')
                .setDescription(
                    `**Choose the product or service you are interested in:**\n\n` +
                    `> • STAR PUBGM (iOS)\n` +
                    `> • OASIS PUBGM (iOS)\n` +
                    `> • VNHax PUBGM (iOS)\n` +
                    `> • ZOON PUBGM (iOS)\n` +
                    `> • Golden PUBGM (iOS)\n` +
                    `> • STAR PUBGM (Android)\n` +
                    `> • GBD PUBGM (Android)\n` +
                    `> • SHIELD PUBGM (Android)\n\n` +
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
                            label: 'STAR PUBM (iOS)', // Nama produk
                            description: 'Premium Cheat Star iPhone', // Deskripsi produk
                            value: 'starpubgm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'OASIS PUBGM (iOS)', // Nama produk
                            description: 'Premium Cheat PUBGM iPhone', // Deskripsi produk
                            value: 'oasispubgm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'VNHax PUBGM (iOS)', // Nama produk
                            description: 'Premium Cheat PUBGM iPhone', // Deskripsi produk
                            value: 'vnhaxpubgm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'ZOON PUBGM (iOS)', // Nama produk
                            description: 'Premium Cheat PUBGM iPhone', // Deskripsi produk
                            value: 'zoonpubgm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'GOLDEN PUBGM (iOS)', // Nama produk
                            description: 'Premium Cheat PUBGM iPhone', // Deskripsi produk
                            value: 'goldenpubm', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'STAR PUBGM (Android)', // Nama produk
                            description: 'Premium Cheat PUBGM Android', // Deskripsi produk
                            value: 'starandro', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'GBD PUBGM (Android)', // Nama produk
                            description: 'Premium Cheat PUBGM Android', // Deskripsi produk
                            value: 'gbdpubgmandro', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                        {
                            label: 'SHIELD PUBGM (Android)', // Nama produk
                            description: 'Premium Cheat PUBGM Android', // Deskripsi produk
                            value: 'shieldpubgmandro', // Identifier untuk produk (customId Seperti yang ada di /buttons/namaprdoduk)
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in example product command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the product list',
                flags: [64],
            });
        }
    },
};