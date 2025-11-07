const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('codmw3')
        .setDescription('🎯 | Call of Duty MW3 / BO6 / WZ Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎯 Call of Duty : Modern Warfare 3 / Black Ops 6 / Warzone')
                .setDescription(
                    `**Premium cheats for Call of Duty games including MW3, BO6, BO7, and Warzone!**\n\n` +
                    `Call of Duty delivers the ultimate first-person shooter experience with intense multiplayer battles, realistic combat scenarios, and competitive warfare across multiple game modes.\n\n` +
                    `**Available Products:**\n` +
                    `• **Fecurity** - Hybrid technology with advanced aimbot and ESP\n` +
                    `• **Lexy** - External technology with premium features\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 & 11 (all builds)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT & MBR Disk Format\n` +
                    `• UEFI & Legacy BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ Multiple Game Support - MW3, BO6, BO7, Warzone\n` +
                    `✅ Free Built-in Spoofer - No separate purchase needed\n` +
                    `✅ StreamProof - Safe for streaming\n` +
                    `✅ Steam, Battle.net & Xbox Game Pass Support\n` +
                    `✅ Hybrid & External Options\n` +
                    `✅ Advanced Aimbot Systems\n` +
                    `✅ Comprehensive ESP Features\n` +
                    `✅ Loot Detection System\n\n` +
                    `Please select a product from the dropdown menu below to view detailed pricing and features.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Call of Duty Premium Cheats • MW3 • BO6 • WZ • Modern Warfare',
                    iconURL: interaction.guild.iconURL()
                });

            const dropdown = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('codmw3_select')
                    .setPlaceholder('🎮 Select a COD Cheat Product...')
                    .addOptions([
                        {
                            label: 'Fecurity : BO6 / BO7 / MW3 / WZ',
                            description: 'Hybrid technology with free spoofer - IDR 100K-1.08M',
                            value: 'fecurity_cod',
                            emoji: '🔥'
                        },
                        {
                            label: 'Lexy : MW3 / WZ / BO6',
                            description: 'External technology with premium features - IDR 140.5K-1M',
                            value: 'lexy_mw3',
                            emoji: '⚡'
                        }
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [dropdown] });

        } catch (error) {
            console.error('Error in codmw3 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Call of Duty cheat information',
                flags: [64],
            });
        }
    },
};