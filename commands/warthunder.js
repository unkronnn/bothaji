const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warthunder')
        .setDescription('✈️ | War Thunder Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('✈️ War Thunder Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for War Thunder military vehicle combat game!**\n\n` +
                    `> • Fecurity : War Thunder (Hybrid with Built-in Spoofer & Visual ESP)\n` +
                    `> • Mason : War Thunder (External with Advanced Aimbot & Comprehensive ESP)\n` +
                    `> • BC : War Thunder (External with Visual Features & Tank Support)\n` +
                    `> • Stern : War Thunder (External with Multi-Mode ESP & Lifetime Access)\n` +
                    `> • SMG : War Thunder (External with Advanced Aimbot & Multi-Vehicle Support)\n\n` +
                    `**About War Thunder:**\n` +
                    `War Thunder is a comprehensive military vehicle combat simulator featuring tanks, aircraft, and naval vessels from throughout history. Players engage in realistic combined arms battles across land, sea, and air with authentic physics, detailed models, and strategic gameplay spanning multiple eras.\n\n` +
                    `**Command the battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'War Thunder Premium Cheats • Military Combat Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a War Thunder cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : War Thunder',
                            description: 'Hybrid with Built-in Spoofer & Visual ESP',
                            value: 'fecurity_warthunder',
                        },
                        {
                            label: 'Mason : War Thunder',
                            description: 'External with Advanced Aimbot & Comprehensive ESP',
                            value: 'mason_warthunder',
                        },
                        {
                            label: 'BC : War Thunder',
                            description: 'External with Visual Features & Tank Support',
                            value: 'bc_warthunder',
                        },
                        {
                            label: 'Stern : War Thunder',
                            description: 'External with Multi-Mode ESP & Lifetime Access',
                            value: 'stern_warthunder',
                        },
                        {
                            label: 'SMG : War Thunder',
                            description: 'External with Advanced Aimbot & Multi-Vehicle Support',
                            value: 'smg_warthunder',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in warthunder command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the War Thunder cheat collection',
                flags: [64],
            });
        }
    },
};