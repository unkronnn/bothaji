const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('caliber')
        .setDescription('🔫 | Caliber Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔫 Mason : Caliber')
                .setDescription(
                    `**Premium external cheat for Caliber tactical shooter game!**\n\n` +
                    `Caliber is a tactical team-based shooter where players take on the roles of special forces units from around the world. Experience intense close-quarters combat with realistic weapons and strategic teamwork gameplay.\n\n` +
                    `**About Mason : Caliber:**\n` +
                    `A premium product for the game Caliber from Mason group. This external cheat provides essential features for tactical advantage in the modern combat environment.\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 & 11 (all builds)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT Disk Format\n` +
                    `• UEFI BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ External Technology - Maximum Security\n` +
                    `✅ StreamProof - Safe for Streaming\n` +
                    `✅ Steam & Game Launcher Support\n` +
                    `✅ Team-based Features\n` +
                    `✅ Role Identification System\n` +
                    `✅ Precision Aimbot\n` +
                    `✅ Advanced Visual ESP\n\n` +
                    `**Available Subscriptions:**\n` +
                    `• 1 Day - IDR 83.500 / $5.00\n` +
                    `• 7 Day - IDR 199.500 / $12.00\n` +
                    `• 30 Day - IDR 389.250 / $23.00\n\n` +
                    `Please click the button below to view more detailed information about Mason Caliber features.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Caliber Premium Cheats • Tactical Team Combat',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('mason_caliber')
                    .setLabel('View Mason Features & Purchase')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('🛒')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in caliber command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Caliber cheat information',
                flags: [64],
            });
        }
    },
};