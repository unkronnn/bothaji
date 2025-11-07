const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('huntshowdown')
        .setDescription('🔫 | Hunt: Showdown Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔫 Hunt: Showdown Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Hunt: Showdown competitive PvPvE first-person shooter!**\n\n` +
                    `> • Phoenix : HS (External with Player, Zombie & World ESP)\n` +
                    `> • Lexy : HS (External with Built-in Spoofer & Premium Protection)\n` +
                    `> • Ancient : HS (External with Advanced Aimbot & Comprehensive Visuals)\n` +
                    `> • Stern : HS (External with Lifetime Option & Loot ESP)\n` +
                    `> • Mason : HS (External with Detailed Battlefield Information)\n` +
                    `> • SMG : HS (External with Advanced Customization & Battle Mode)\n\n` +
                    `**About Hunt: Showdown:**\n` +
                    `Hunt: Showdown is a competitive first-person PvP bounty hunting game with heavy PvE elements. Set in the late 1800s, you and your partner are bounty hunters tracking down monstrous targets in the Louisiana swamps. Experience intense gunfights, terrifying monsters, and high-stakes gameplay where death is permanent.\n\n` +
                    `**Dominate the swamps with tactical hunting advantages!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Hunt: Showdown Premium Cheats • Swamp Hunting Mastery',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Hunt: Showdown cheat...')
                    .addOptions([
                        {
                            label: 'Phoenix : HS',
                            description: 'External with comprehensive player, zombie, and world ESP',
                            value: 'phoenix_huntshowdown',
                        },
                        {
                            label: 'Lexy : HS',
                            description: 'External with built-in spoofer and premium protection',
                            value: 'lexy_huntshowdown',
                        },
                        {
                            label: 'Ancient : HS',
                            description: 'External with advanced aimbot and comprehensive visuals',
                            value: 'ancient_huntshowdown',
                        },
                        {
                            label: 'Stern : HS',
                            description: 'External with lifetime option and extensive loot ESP',
                            value: 'stern_huntshowdown',
                        },
                        {
                            label: 'Mason : HS',
                            description: 'External with detailed battlefield information and zoom',
                            value: 'mason_huntshowdown',
                        },
                        {
                            label: 'SMG : HS',
                            description: 'External with advanced customization and battle mode',
                            value: 'smg_huntshowdown',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in huntshowdown command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Hunt: Showdown cheat collection',
                flags: [64],
            });
        }
    },
};