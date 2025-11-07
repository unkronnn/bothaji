const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fragpunk')
        .setDescription('💥 | FragPunk Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('💥 FragPunk Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for FragPunk FPS game!**\n\n` +
                    `> • Fecurity : FragPunk (Hybrid with Unique Hitbox & Spoofer)\n` +
                    `> • BC : FragPunk (Internal with Advanced ESP & Flash Drive)\n` +
                    `> • Byster : FragPunk (External with Silent Aim & Lifetime Option)\n\n` +
                    `**About FragPunk:**\n` +
                    `FragPunk is a fast-paced first-person shooter featuring intense multiplayer battles, diverse game modes, and strategic gameplay. Experience competitive combat with various weapons, character customization, and dynamic environments designed for tactical supremacy.\n\n` +
                    `**Dominate the battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'FragPunk Premium Cheats • FPS Combat Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a FragPunk cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : FragPunk',
                            description: 'Hybrid with unique hitbox system and built-in spoofer',
                            value: 'fecurity_fragpunk',
                        },
                        {
                            label: 'BC : FragPunk',
                            description: 'Internal with advanced ESP and flash drive support',
                            value: 'bc_fragpunk',
                        },
                        {
                            label: 'Byster : FragPunk',
                            description: 'External with silent aim and lifetime option',
                            value: 'byster_fragpunk',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in fragpunk command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the FragPunk cheat collection',
                flags: [64],
            });
        }
    },
};