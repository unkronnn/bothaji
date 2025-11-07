const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fortnite')
        .setDescription('🍇 | Fortnite Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🍇 Fortnite Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Fortnite battle royale game!**\n\n` +
                    `> • BTG : Fortnite (External with Visual ESP)\n` +
                    `> • Fecurity : Fortnite (Hybrid with Advanced Aimbot & Spoofer)\n` +
                    `> • Lexy : Fortnite (External with Advanced Aimbot & Controller Support)\n` +
                    `> • Ancient : Fortnite (External with Advanced Features & Spoofer)\n` +
                    `> • BC : Fortnite (External with Aimbot & Flash Drive Support)\n` +
                    `> • Ambani : Fortnite (External with Aimbot & Advanced ESP)\n\n` +
                    `**About Fortnite:**\n` +
                    `Fortnite is a global phenomenon battle royale game featuring building mechanics, unique cosmetics, and constant updates. Battle across diverse locations, build structures for tactical advantage, and compete to be the last one standing in this ever-evolving gaming universe.\n\n` +
                    `**Build your victory with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Fortnite Premium Cheats • Battle Royale Building Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Fortnite cheat...')
                    .addOptions([
                        {
                            label: 'BTG : Fortnite',
                            description: 'External with visual ESP and multi-language support',
                            value: 'btg_fortnite',
                        },
                        {
                            label: 'Fecurity : Fortnite',
                            description: 'Hybrid with advanced aimbot and built-in spoofer',
                            value: 'fecurity_fortnite',
                        },
                        {
                            label: 'Lexy : Fortnite',
                            description: 'External with advanced aimbot and controller support',
                            value: 'lexy_fortnite',
                        },
                        {
                            label: 'Ancient : Fortnite',
                            description: 'External with advanced features and built-in spoofer',
                            value: 'ancient_fortnite',
                        },
                        {
                            label: 'BC : Fortnite',
                            description: 'External with aimbot and flash drive support',
                            value: 'bc_fortnite',
                        },
                        {
                            label: 'Ambani : Fortnite',
                            description: 'External with aimbot and advanced ESP',
                            value: 'ambani_fortnite',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in fortnite command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Fortnite cheat collection',
                ephemeral: true,
            });
        }
    },
};