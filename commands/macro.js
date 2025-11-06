const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('macro')
        .setDescription('🎯 | No Recoil Macro Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎯 No Recoil Macro Collection')
                .setDescription(
                    `**Premium No Recoil Macros for perfect weapon control!**\n\n` +
                    `> • PUBG, Apex Legends, Rust, Rainbow Six Siege\n` +
                    `> • The Finals, Valorant, Counter Strike 2, Fragpunk\n` +
                    `> • All-In-One Macro (All Games)\n\n` +
                    `**What are No Recoil Macros?**\n` +
                    `Recoil private macros that are suitable for ANY MOUSE. Our programs have a unique structure for each user to prevent detection and supports any mouse sensitivity and DPI.\n\n` +
                    `**✨ Premium Features:**\n` +
                    `• 100% Safety with special hardware equipment\n` +
                    `• No detections since 2019\n` +
                    `• Supports any mouse and sensitivity\n` +
                    `• StreamProof technology\n` +
                    `• External software (no injections)\n\n` +
                    `Please select a macro from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Premium No Recoil Macros • Undetected Since 2019',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a No Recoil Macro...')
                    .addOptions([
                        {
                            label: 'PUBG (30 Day)',
                            description: 'No recoil macro for PUBG - IDR 299.750',
                            value: 'macro_pubg',
                        },
                        {
                            label: 'Apex Legends (30 Day)',
                            description: 'No recoil macro for Apex Legends - IDR 299.750',
                            value: 'macro_apex',
                        },
                        {
                            label: 'Rust (30 Day)',
                            description: 'No recoil macro for Rust - IDR 299.750',
                            value: 'macro_rust',
                        },
                        {
                            label: 'Rainbow Six Siege (30 Day)',
                            description: 'No recoil macro for R6S - IDR 299.750',
                            value: 'macro_r6s',
                        },
                        {
                            label: 'The Finals (30 Day)',
                            description: 'No recoil macro for The Finals - IDR 299.750',
                            value: 'macro_finals',
                        },
                        {
                            label: 'Valorant (30 Day)',
                            description: 'No recoil macro for Valorant - IDR 299.750',
                            value: 'macro_valorant',
                        },
                        {
                            label: 'Counter Strike 2 (30 Day)',
                            description: 'No recoil macro for CS2 - IDR 200.000',
                            value: 'macro_cs2',
                        },
                        {
                            label: 'All-In-One Macro (30 Day)',
                            description: 'All games in one macro - IDR 499.500',
                            value: 'macro_aio',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in macro command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the No Recoil Macro collection',
                ephemeral: true,
            });
        }
    },
};