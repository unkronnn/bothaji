const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('arksurvival')
        .setDescription('🦕 | ARK Survival Evolved & Ascended Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🦕 ARK Survival Evolved & Ascended Cheat Collection')
                .setDescription(
                    `**Premium cheats for ARK: Survival Evolved & Ascended!**\n\n` +
                    `> • Phoenix : ARK Evolved (Internal with Spoofer)\n` +
                    `> • PussyCat : ARK Ascended (External)\n` +
                    `> • SMG : ARK Ascended (External with Spoofer & Aimbot)\n\n` +
                    `**About ARK Survival Series:**\n` +
                    `ARK: Survival Evolved & Ascended are action-adventure survival games set in an open world environment with a dynamic weather cycle and day-night cycle. Stranded on the shores of a mysterious island, you must hunt, craft, build, and dominate the ARK.\n\n` +
                    `**Survive and thrive with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'ARK Survival Premium Cheats • Dominate the Island',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an ARK Survival cheat...')
                    .addOptions([
                        {
                            label: 'Phoenix : ARK Evolved',
                            description: 'Internal cheat with ESP and world features',
                            value: 'phoenix_arksurvival',
                        },
                        {
                            label: 'PussyCat : ARK Ascended',
                            description: 'External cheat for ARK Ascended',
                            value: 'pussycat_arksurvival',
                        },
                        {
                            label: 'SMG : ARK Ascended',
                            description: 'External cheat with aimbot and comprehensive ESP',
                            value: 'smg_arksurvival',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in arksurvival command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the ARK Survival cheat collection',
                flags: [64],
            });
        }
    },
};