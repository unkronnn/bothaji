const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dma')
        .setDescription('💻 | DMA Hardware Bundle Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('💻 DMA Hardware Bundle Collection')
                .setDescription(
                    `**Premium DMA Hardware Bundles for advanced external game manipulation!**\n\n` +
                    `> • DMA Bundle (KMBOX B+ NET)\n` +
                    `> • DMA Bundle (MAKCU)\n\n` +
                    `**What is DMA Hardware?**\n` +
                    `DMA Bundle is a full hardware package built for external game manipulation via Direct Memory Access. This prevents cheats from running directly on the game process or system CPU, making anti-cheat software (like Easy Anti-Cheat, BattleEye, etc.) have a very hard time detecting it. It's like spying on the game from "outside the room".\n\n` +
                    `**Ideal for advanced users looking for a clean, undetected setup.**\n\n` +
                    `Please select a DMA bundle from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Advanced DMA Hardware Bundles • External Game Manipulation',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a DMA Bundle...')
                    .addOptions([
                        {
                            label: 'DMA Bundle (KMBOX B+ NET)',
                            description: 'Complete DMA setup with KMBOX B+ NET - IDR 5.450.000',
                            value: 'dma_bundle_kmbox',
                        },
                        {
                            label: 'DMA Bundle (MAKCU)',
                            description: 'Complete DMA setup with MAKCU - IDR 5.200.000',
                            value: 'dma_bundle_makcu',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in dma command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the DMA Hardware bundles',
                ephemeral: true,
            });
        }
    },
};