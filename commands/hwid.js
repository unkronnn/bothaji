const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hwid')
        .setDescription('🔧 | HWID Spoofer Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔧 HWID Spoofer Collection')
                .setDescription(
                    `**Premium HWID Spoofers to bypass hardware bans and get back into gaming!**\n\n` +
                    `> • Divinium : Permanent Spoofer\n` +
                    `> • Divinium : Temporary Spoofer\n` +
                    `> • Oracle : Valorant Spoofer\n` +
                    `> • TPM Bypass SC (Source Code)\n\n` +
                    `**What is a HWID Spoofer?**\n` +
                    `A HWID spoofer changes your device's unique hardware identifier (HWID) that gets banned, allowing you to bypass hardware bans and play again.\n\n` +
                    `Please select a spoofer from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Premium HWID Spoofers - Bypass Hardware Bans',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a HWID Spoofer...')
                    .addOptions([
                        {
                            label: 'Divinium : Permanent Spoofer',
                            description: 'Permanent HWID spoofer - 1 Time & Lifetime',
                            value: 'divinium_perm_spoofer',
                        },
                        {
                            label: 'Divinium : Temporary Spoofer',
                            description: 'Temporary HWID spoofer - 7/30/90 Days & Lifetime',
                            value: 'divinium_temp_spoofer',
                        },
                        {
                            label: 'Oracle : Valorant Spoofer',
                            description: 'Valorant-specific spoofer - 30 Days & Lifetime',
                            value: 'oracle_valorant_spoofer',
                        },
                        {
                            label: 'TPM Bypass SC (Source Code)',
                            description: 'TPM bypass source code - 1 Time Payment',
                            value: 'tpm_bypass_sc',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in hwid command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the HWID Spoofer collection',
                flags: [64],
            });
        }
    },
};