const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bo6warzone')
        .setDescription('⚔️ | Black Ops 6 - Warzone Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⚔️ Call of Duty : Black Ops 6 - Warzone')
                .setDescription(
                    `**Premium cheats for Call of Duty Black Ops 6 and Warzone!**\n\n` +
                    `Experience the next generation of Call of Duty with Black Ops 6 and Warzone. Intense multiplayer battles, realistic warfare mechanics, and competitive tactical gameplay across multiple game modes.\n\n` +
                    `**Available Products (8 Options):**\n` +
                    `• **Fecurity** - Hybrid technology (1D-90D: IDR 100K-1.08M)\n` +
                    `• **Lexy** - Premium external (1D-30D: IDR 140.5K-1M)\n` +
                    `• **Ancient** - Budget-friendly (1D-90D: IDR 80K-832.5K)\n` +
                    `• **DullWave** - Internal technology (1D-30D: IDR 79.75K-582.25K)\n` +
                    `• **FKN** - Lifetime option (7D-Lifetime: IDR 242.75K-993.25K)\n` +
                    `• **PussyCat** - Ultra budget (1D-31D: IDR 60K-366K)\n` +
                    `• **Crooked Arm's** - Advanced features (1D-31D: IDR 102.25K-624.5K)\n` +
                    `• **Mason** - Most affordable (1D-30D: IDR 55.75K-389.25K)\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 & 11 (all builds)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT & MBR Disk Format\n` +
                    `• UEFI & Legacy BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ Multiple Game Support - BO6, BO7, MW3, WZ\n` +
                    `✅ Various Technology Types - Hybrid, External, Internal\n` +
                    `✅ Multiple Price Points - Budget to Premium\n` +
                    `✅ Free Built-in Spoofers (Most Products)\n` +
                    `✅ StreamProof Technology\n` +
                    `✅ Steam, Battle.net & Xbox Game Pass Support\n` +
                    `✅ Advanced Aimbot Systems\n` +
                    `✅ Comprehensive ESP Features\n` +
                    `✅ Loot Detection & Radar Systems\n` +
                    `✅ Lifetime Options Available\n\n` +
                    `Please select a product from the dropdown menu below to view detailed pricing and features.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Black Ops 6 • Warzone • Premium Cheats • Multiple Providers',
                    iconURL: interaction.guild.iconURL()
                });

            const dropdown = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('bo6warzone_select')
                    .setPlaceholder('⚔️ Select a BO6/Warzone Cheat Provider...')
                    .addOptions([
                        {
                            label: 'Fecurity : BO6 / BO7 / MW3 / WZ',
                            description: 'Hybrid with spoofer - IDR 100K-1.08M (1D-90D)',
                            value: 'fecurity_bo6wz',
                            emoji: '🔥'
                        },
                        {
                            label: 'Lexy : MW3 / WZ / BO6',
                            description: 'Premium external - IDR 140.5K-1M (1D-30D)',
                            value: 'lexy_bo6',
                            emoji: '⚡'
                        },
                        {
                            label: 'Ancient : BO6 / BO7 / WZ',
                            description: 'Budget-friendly external - IDR 80K-832.5K (1D-90D)',
                            value: 'ancient_bo6wz',
                            emoji: '💎'
                        },
                        {
                            label: 'DullWave : BO6 / Warzone',
                            description: 'Internal technology - IDR 79.75K-582.25K (1D-30D)',
                            value: 'dullwave_bo6wz',
                            emoji: '🌊'
                        },
                        {
                            label: 'FKN : BO6 / Warzone',
                            description: 'With lifetime option - IDR 242.75K-993.25K (7D-Lifetime)',
                            value: 'fkn_bo6',
                            emoji: '👑'
                        },
                        {
                            label: 'PussyCat : BO6 / BO7 / WZ',
                            description: 'Ultra budget - IDR 60K-366K (1D-31D)',
                            value: 'pussycat_bo6wz',
                            emoji: '🐱'
                        },
                        {
                            label: 'Crooked Arm\'s : BO6 / Warzone',
                            description: 'Advanced features - IDR 102.25K-624.5K (1D-31D)',
                            value: 'crookedarms_bo6wz',
                            emoji: '💪'
                        },
                        {
                            label: 'Mason : BO6 / Warzone',
                            description: 'Most affordable - IDR 55.75K-389.25K (1D-30D)',
                            value: 'mason_bo6wz',
                            emoji: '🔧'
                        }
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [dropdown] });

        } catch (error) {
            console.error('Error in bo6warzone command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Black Ops 6 Warzone cheat information',
                ephemeral: true,
            });
        }
    },
};