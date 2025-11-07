const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deadside')
        .setDescription('🧟 | Deadside Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🧟 Deadside Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Deadside looter shooter game!**\n\n` +
                    `> • Fecurity : Deadside (Hybrid with Spoofer & Aimbot)\n` +
                    `> • Lexy : Deadside (External Premium with Spoofer)\n` +
                    `> • PussyCat : Deadside (External Budget)\n\n` +
                    `**About Deadside:**\n` +
                    `Deadside is a hardcore looter shooter MMO set in a post-apocalyptic wasteland. Scavenge for resources, craft weapons, build bases, and fight against other players and mutants in this unforgiving open-world survival experience.\n\n` +
                    `**Survive the wasteland with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Deadside Premium Cheats • Wasteland Survival',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Deadside cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : Deadside',
                            description: 'Hybrid with spoofer, aimbot, and advanced features',
                            value: 'fecurity_deadside',
                        },
                        {
                            label: 'Lexy : Deadside',
                            description: 'External premium with built-in spoofer',
                            value: 'lexy_deadside',
                        },
                        {
                            label: 'PussyCat : Deadside',
                            description: 'External budget with essential features',
                            value: 'pussycat_deadside',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in deadside command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Deadside cheat collection',
                ephemeral: true,
            });
        }
    },
};