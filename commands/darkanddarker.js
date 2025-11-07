const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('darkanddarker')
        .setDescription('⚔️ | Dark and Darker Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⚔️ Dark and Darker Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Dark and Darker dungeon extraction game!**\n\n` +
                    `> • Fecurity : DND (Hybrid with Spoofer)\n` +
                    `> • BC : DND (External with Full Features)\n` +
                    `> • PussyCat : DND (External Budget Option)\n\n` +
                    `**About Dark and Darker:**\n` +
                    `Dark and Darker is a hardcore multiplayer dungeon extraction game where players battle through deadly dungeons to find treasure and escape alive. Choose your class, team up with friends, and fight enemies, monsters, and other players to become the richest adventurer!\n\n` +
                    `**Master the dungeons with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Dark and Darker Premium Cheats • Dungeon Extraction Domination',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Dark and Darker cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : DND',
                            description: 'Hybrid cheat with built-in spoofer and comprehensive features',
                            value: 'fecurity_dnd',
                        },
                        {
                            label: 'BC : DND',
                            description: 'External cheat with aimbot, ESP, radar and loot features',
                            value: 'bc_dnd',
                        },
                        {
                            label: 'PussyCat : DND',
                            description: 'Budget-friendly external cheat with essential features',
                            value: 'pussycat_dnd',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in darkanddarker command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Dark and Darker cheat collection',
                ephemeral: true,
            });
        }
    },
};