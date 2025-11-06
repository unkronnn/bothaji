const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bo7')
        .setDescription('🔥 | Black Ops 7 Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔥 Call of Duty : Black Ops 7')
                .setDescription(
                    `**Premium cheats for Call of Duty Black Ops 7!**\n\n` +
                    `Experience the next evolution of Call of Duty with Black Ops 7. Cutting-edge warfare technology, advanced multiplayer combat, and tactical gameplay mechanics in the latest installment of the Black Ops series.\n\n` +
                    `**Available Products (3 Options):**\n` +
                    `• **Fecurity** - Hybrid technology (1D-90D: IDR 100K-1.08M)\n` +
                    `• **PussyCat** - Ultra budget external (1D-31D: IDR 60K-366K)\n` +
                    `• **Crooked Arm's** - Advanced features (1D-31D: IDR 102.25K-624.5K)\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 & 11 (all builds)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT & MBR Disk Format\n` +
                    `• UEFI & Legacy BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ Black Ops 7 Specialization - Optimized for BO7 gameplay\n` +
                    `✅ Various Technology Types - Hybrid and External options\n` +
                    `✅ Multiple Price Points - Budget to Premium\n` +
                    `✅ Free Built-in Spoofer (Fecurity)\n` +
                    `✅ StreamProof Technology\n` +
                    `✅ Steam, Battle.net & Xbox Game Pass Support\n` +
                    `✅ Advanced Aimbot Systems\n` +
                    `✅ Comprehensive ESP Features\n` +
                    `✅ Loot Detection & Radar Systems\n` +
                    `✅ Flash Drive Support (Crooked Arm's)\n\n` +
                    `Please select a product from the dropdown menu below to view detailed pricing and features.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Black Ops 7 • Premium Cheats • Future-Ready Technology',
                    iconURL: interaction.guild.iconURL()
                });

            const dropdown = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('bo7_select')
                    .setPlaceholder('🔥 Select a Black Ops 7 Cheat Provider...')
                    .addOptions([
                        {
                            label: 'Fecurity : BO6 / BO7 / MW3 / WZ',
                            description: 'Hybrid with spoofer - IDR 100K-1.08M (1D-90D)',
                            value: 'fecurity_bo7',
                            emoji: '🔥'
                        },
                        {
                            label: 'PussyCat : BO6 / BO7 / WZ',
                            description: 'Ultra budget external - IDR 60K-366K (1D-31D)',
                            value: 'pussycat_bo7',
                            emoji: '🐱'
                        },
                        {
                            label: 'Crooked Arm\'s : Black Ops 7',
                            description: 'Advanced features with flash drive - IDR 102.25K-624.5K (1D-31D)',
                            value: 'crookedarms_bo7',
                            emoji: '💪'
                        }
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [dropdown] });

        } catch (error) {
            console.error('Error in bo7 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Black Ops 7 cheat information',
                ephemeral: true,
            });
        }
    },
};