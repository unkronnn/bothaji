const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('battlebit')
        .setDescription('⚔️ | BattleBit Remastered Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⚔️ BattleBit Remastered Cheat Collection')
                .setDescription(
                    `**Premium cheats for BattleBit Remastered large-scale FPS!**\n\n` +
                    `> • Fecurity : BattleBit (Hybrid with Spoofer)\n` +
                    `> • BC : BattleBit (External Portable)\n\n` +
                    `**About BattleBit Remastered:**\n` +
                    `BattleBit Remastered is a large-scale FPS game featuring up to 254 players, destructible environments, various vehicles, and realistic ballistic systems. Experience intense combined arms combat in massive battles with infantry, tanks, helicopters, and more.\n\n` +
                    `**Dominate the battlefield with premium tactical features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'BattleBit Remastered Premium Cheats • Large-Scale Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a BattleBit cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : BattleBit',
                            description: 'Hybrid cheat with silent aimbot and advanced features',
                            value: 'fecurity_battlebit',
                        },
                        {
                            label: 'BC : BattleBit',
                            description: 'External cheat with radar and aimbot',
                            value: 'bc_battlebit',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in battlebit command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the BattleBit cheat collection',
                ephemeral: true,
            });
        }
    },
};