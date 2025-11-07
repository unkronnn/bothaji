const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cs2')
        .setDescription('🔫 | Counter-Strike 2 Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔫 Counter-Strike 2')
                .setDescription(
                    `**Premium cheats for Counter-Strike 2!**\n\n` +
                    `Counter-Strike 2 represents the evolution of competitive tactical first-person shooters. With enhanced graphics, updated mechanics, and refined gameplay, CS2 continues the legacy of precision aiming, strategic teamwork, and intense competitive gameplay.\n\n` +
                    `**Available Products (8 Options):**\n` +
                    `• **Fecurity** - Hybrid with spoofer (1D-30D: IDR 70K-200K)\n` +
                    `• **Aquila** - Multi-language external (7D-30D: IDR 60K-146K)\n` +
                    `• **BC** - Internal technology (30D: IDR 182.5K)\n` +
                    `• **PussyCat** - Ultra budget with lifetime (1D-Lifetime: IDR 30K-332.75K)\n` +
                    `• **Ovix** - Budget external (30D-180D: IDR 80K-219.75K)\n` +
                    `• **Stern** - Premium with skin changer (30D: IDR 97.5K)\n` +
                    `• **SMG** - With spoofer (1D-30D: IDR 32.25K-149.75K)\n` +
                    `• **Mason** - Most affordable (1D-30D: IDR 28.25K-103.75K)\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 & 11 (all builds)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT & MBR Disk Format\n` +
                    `• UEFI & Legacy BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ Advanced Aimbot Systems - Precision targeting with RCS\n` +
                    `✅ Comprehensive ESP - Player info, grenades, objects\n` +
                    `✅ Multiple Technologies - External, Internal, Hybrid\n` +
                    `✅ Skin Changer Options - Unlock all skins/items\n` +
                    `✅ Free Built-in Spoofers (Selected Providers)\n` +
                    `✅ StreamProof Technology\n` +
                    `✅ Multi-language Support\n` +
                    `✅ Lifetime Options Available\n` +
                    `✅ Flash Drive Support\n` +
                    `✅ Budget to Premium Range\n\n` +
                    `Please select a product from the dropdown menu below to view detailed pricing and features.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Counter-Strike 2 • Premium Cheats • Tactical Advantage',
                    iconURL: interaction.guild.iconURL()
                });

            const dropdown = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('cs2_select')
                    .setPlaceholder('🔫 Select a CS2 Cheat Provider...')
                    .addOptions([
                        {
                            label: 'Fecurity : Counter Strike 2',
                            description: 'Hybrid with spoofer - IDR 70K-200K (1D-30D)',
                            value: 'fecurity_cs2',
                            emoji: '🔥'
                        },
                        {
                            label: 'Aquila : Counter Strike 2',
                            description: 'Multi-language external - IDR 60K-146K (7D-30D)',
                            value: 'aquila_cs2',
                            emoji: '🦅'
                        },
                        {
                            label: 'BC : Counter Strike 2',
                            description: 'Internal technology - IDR 182.5K (30D)',
                            value: 'bc_cs2',
                            emoji: '⚡'
                        },
                        {
                            label: 'PussyCat : Counter Strike 2',
                            description: 'Ultra budget with lifetime - IDR 30K-332.75K (1D-Lifetime)',
                            value: 'pussycat_cs2',
                            emoji: '🐱'
                        },
                        {
                            label: 'Ovix : Counter Strike 2',
                            description: 'Budget external - IDR 80K-219.75K (30D-180D)',
                            value: 'ovix_cs2',
                            emoji: '🌊'
                        },
                        {
                            label: 'Stern : Counter Strike 2',
                            description: 'Premium with skin changer - IDR 97.5K (30D)',
                            value: 'stern_cs2',
                            emoji: '⭐'
                        },
                        {
                            label: 'SMG : Counter Strike 2',
                            description: 'With spoofer - IDR 32.25K-149.75K (1D-30D)',
                            value: 'smg_cs2',
                            emoji: '🔧'
                        },
                        {
                            label: 'Mason : Counter Strike 2',
                            description: 'Most affordable - IDR 28.25K-103.75K (1D-30D)',
                            value: 'mason_cs2',
                            emoji: '🔨'
                        }
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [dropdown] });

        } catch (error) {
            console.error('Error in cs2 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Counter-Strike 2 cheat information',
                flags: [64],
            });
        }
    },
};