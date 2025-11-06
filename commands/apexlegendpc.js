const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('apexlegendpc')
        .setDescription('🔫 | Apex Legends PC Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔫 Apex Legends PC Cheat Collection')
                .setDescription(
                    `**Premium cheats for Apex Legends battle royale!**\n\n` +
                    `> • BTG : Apex Legends (External)\n` +
                    `> • Ancient : Apex Legends (External with Spoofer)\n` +
                    `> • Phoenix : Apex Glow (Internal X-ray)\n` +
                    `> • Fecurity : Apex Legends (Hybrid with Spoofer)\n` +
                    `> • Lexy : Apex Legends (External with Spoofer)\n` +
                    `> • Stern : Apex Legends (External)\n` +
                    `> • Mason : Apex Legends (External with Spoofer)\n\n` +
                    `**About Apex Legends:**\n` +
                    `Apex Legends is a free-to-play battle royale game where legends from across the Frontier team up to battle for glory, fame, and fortune. Master an ever-growing roster of powerful Legends, each with their own unique personality, strengths, and abilities.\n\n` +
                    `**Dominate the arena with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Apex Legends Premium Cheats • Become a Legend',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an Apex Legends cheat...')
                    .addOptions([
                        {
                            label: 'BTG : Apex Legends',
                            description: 'External cheat with comprehensive features',
                            value: 'btg_apexlegends',
                        },
                        {
                            label: 'Ancient : Apex Legends',
                            description: 'External cheat with built-in spoofer',
                            value: 'ancient_apexlegends',
                        },
                        {
                            label: 'Phoenix : Apex Glow',
                            description: 'Internal X-ray wallhack',
                            value: 'phoenix_apexlegends',
                        },
                        {
                            label: 'Fecurity : Apex Legends',
                            description: 'Hybrid cheat with built-in spoofer',
                            value: 'fecurity_apexlegends',
                        },
                        {
                            label: 'Lexy : Apex Legends',
                            description: 'External premium cheat with spoofer',
                            value: 'lexy_apexlegends',
                        },
                        {
                            label: 'Stern : Apex Legends',
                            description: 'External cheat with lifetime option',
                            value: 'stern_apexlegends',
                        },
                        {
                            label: 'Mason : Apex Legends',
                            description: 'External cheat with spoofer & portable',
                            value: 'mason_apexlegends',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in apexlegendpc command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Apex Legends cheat collection',
                ephemeral: true,
            });
        }
    },
};