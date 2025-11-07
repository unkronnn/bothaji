const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dayz')
        .setDescription('🧟 | DayZ Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🧟 DayZ Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for DayZ survival game!**\n\n` +
                    `> • Avalanche : DayZ (Internal with Spoofer)\n` +
                    `> • Ancient : DayZ (External with World ESP)\n` +
                    `> • Medusa : DayZ (External with Advanced Features)\n` +
                    `> • Collapse : DayZ (External with Color ESP)\n` +
                    `> • Lexy : DayZ (External Premium)\n` +
                    `> • Vision : DayZ (Internal with Magic Bullets)\n` +
                    `> • Byster : DayZ (External with Online Map)\n` +
                    `> • BTG : DayZ (External with Silent Aim)\n` +
                    `> • DullWave : DayZ (Internal Budget)\n` +
                    `> • PussyCat : DayZ (External Budget)\n` +
                    `> • Crooked Arm's : DayZ (External with Full Loot)\n` +
                    `> • Mason : DayZ (External with Vector Aimbot)\n\n` +
                    `**About DayZ:**\n` +
                    `DayZ is a hardcore open-world survival game with only one rule: stay alive, no matter what. In a post-soviet state plagued by the undead, players must survive against infected, other players, and the harsh environment.\n\n` +
                    `**Survive the apocalypse with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'DayZ Premium Cheats • Survival of the Fittest',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a DayZ cheat...')
                    .addOptions([
                        {
                            label: 'Avalanche : DayZ',
                            description: 'Internal with spoofer, magic bullets, and noclip',
                            value: 'avalanche_dayz',
                        },
                        {
                            label: 'Ancient : DayZ',
                            description: 'External with world ESP and comprehensive features',
                            value: 'ancient_dayz',
                        },
                        {
                            label: 'Medusa : DayZ',
                            description: 'External with advanced ESP and loot filtering',
                            value: 'medusa_dayz',
                        },
                        {
                            label: 'Collapse : DayZ',
                            description: 'External with color ESP and aimbot',
                            value: 'collapse_dayz',
                        },
                        {
                            label: 'Lexy : DayZ',
                            description: 'External premium with built-in spoofer',
                            value: 'lexy_dayz',
                        },
                        {
                            label: 'Vision : DayZ',
                            description: 'Internal with magic bullets and vector aimbot',
                            value: 'vision_dayz',
                        },
                        {
                            label: 'Byster : DayZ',
                            description: 'External with online map and loot filter',
                            value: 'byster_dayz',
                        },
                        {
                            label: 'BTG : DayZ',
                            description: 'External with silent aim and multilingual',
                            value: 'btg_dayz',
                        },
                        {
                            label: 'DullWave : DayZ',
                            description: 'Internal budget-friendly option',
                            value: 'dullwave_dayz',
                        },
                        {
                            label: 'PussyCat : DayZ',
                            description: 'External budget with essential features',
                            value: 'pussycat_dayz',
                        },
                        {
                            label: "Crooked Arm's : DayZ",
                            description: 'External with comprehensive loot system',
                            value: 'crookedarms_dayz',
                        },
                        {
                            label: 'Mason : DayZ',
                            description: 'External with vector aimbot and advanced ESP',
                            value: 'mason_dayz',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in dayz command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the DayZ cheat collection',
                flags: [64],
            });
        }
    },
};