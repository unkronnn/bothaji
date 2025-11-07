const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gtav')
        .setDescription('🏎️ | GTA V Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🏎️ GTA V Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for GTA V open-world action game!**\n\n` +
                    `> • Unicore : Five M (Internal with Advanced ESP & Aimbot)\n` +
                    `> • Keyser : Five M (Internal with Built-in Spoofer & Lifetime Option)\n` +
                    `> • Ovix : GTA V (Internal for Legacy & Enhanced)\n` +
                    `> • Ambani : Five M (Internal with Advanced Features & Spoofer)\n` +
                    `> • Mason : GTA V (External for Multiple RP Platforms)\n\n` +
                    `**About GTA V:**\n` +
                    `Grand Theft Auto V is a massive open-world action-adventure game set in the fictional state of San Andreas. Experience criminal mastermind stories, explore vast environments, engage in heists, and enjoy endless gameplay possibilities across multiple game modes including FiveM RP servers.\n\n` +
                    `**Rule the streets with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'GTA V Premium Cheats • Open-World Criminal Mastery',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a GTA V cheat...')
                    .addOptions([
                        {
                            label: 'Unicore : Five M',
                            description: 'Internal with advanced ESP, aimbot, and comprehensive features',
                            value: 'unicore_fivem',
                        },
                        {
                            label: 'Keyser : Five M',
                            description: 'Internal with built-in spoofer and lifetime option',
                            value: 'keyser_fivem',
                        },
                        {
                            label: 'Ovix : GTA V',
                            description: 'Internal for Legacy & Enhanced editions',
                            value: 'ovix_gtav',
                        },
                        {
                            label: 'Ambani : Five M',
                            description: 'Internal with extensive features and built-in spoofer',
                            value: 'ambani_fivem',
                        },
                        {
                            label: 'Mason : GTA V',
                            description: 'External for multiple RP platforms and servers',
                            value: 'mason_gtav',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in gtav command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the GTA V cheat collection',
                ephemeral: true,
            });
        }
    },
};