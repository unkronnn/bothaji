const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deltaforce')
        .setDescription('🪖 | Delta Force Hawk Ops Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🪖 Delta Force Hawk Ops Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Delta Force Hawk Ops tactical shooter game!**\n\n` +
                    `> • Ancient : Delta Force (External with Spoofer)\n` +
                    `> • Lexy : Delta Force (External Premium with Advanced Aimbot)\n` +
                    `> • BTG : Delta Force (External with Visual ESP)\n` +
                    `> • Fecurity : Delta Force (Private Hybrid with Spoofer)\n` +
                    `> • Ghost : Delta Force (External with Loot ESP)\n` +
                    `> • V-Sharp : Delta Force (External with Lifetime Option)\n` +
                    `> • DullWave : Delta Force (Internal Budget)\n` +
                    `> • Crooked Arm's : Delta Force (External with Comprehensive Features)\n\n` +
                    `**About Delta Force Hawk Ops:**\n` +
                    `Delta Force Hawk Ops is a tactical first-person shooter combining modern military combat with strategic team-based gameplay. Experience intense close-quarters battles, vehicle combat, and cooperative missions in this next-generation military shooter.\n\n` +
                    `**Dominate the battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Delta Force Hawk Ops Premium Cheats • Tactical Combat Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Delta Force cheat...')
                    .addOptions([
                        {
                            label: 'Ancient : Delta Force',
                            description: 'External with spoofer, aimbot and radar',
                            value: 'ancient_deltaforce',
                        },
                        {
                            label: 'Lexy : Delta Force',
                            description: 'External premium with advanced aimbot and triggerbot',
                            value: 'lexy_deltaforce',
                        },
                        {
                            label: 'BTG : Delta Force',
                            description: 'External with visual ESP and color customization',
                            value: 'btg_deltaforce',
                        },
                        {
                            label: 'Fecurity : Delta Force (Private)',
                            description: 'Private hybrid with spoofer and unique hitbox',
                            value: 'fecurity_deltaforce',
                        },
                        {
                            label: 'Ghost : Delta Force',
                            description: 'External with loot ESP and item quality display',
                            value: 'ghost_deltaforce',
                        },
                        {
                            label: 'V-Sharp : Delta Force',
                            description: 'External with lifetime option and anti-screenshot',
                            value: 'vsharp_deltaforce',
                        },
                        {
                            label: 'DullWave : Delta Force',
                            description: 'Internal budget-friendly option',
                            value: 'dullwave_deltaforce',
                        },
                        {
                            label: "Crooked Arm's : Delta Force",
                            description: 'External with comprehensive features and color customization',
                            value: 'crookedarms_deltaforce',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in deltaforce command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Delta Force cheat collection',
                flags: [64],
            });
        }
    },
};