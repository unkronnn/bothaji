const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('armar')
        .setDescription('🪖 | Arma Reforger Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🪖 FKN : Arma Reforger')
                .setDescription(
                    `**Premium internal cheat for Arma Reforger military tactical game!**\n\n` +
                    `Arma Reforger is a military tactical shooter that brings authentic combat to the modern era. Experience realistic military operations with enhanced graphics, improved physics, and expanded gameplay mechanics in the latest installment of the Arma series.\n\n` +
                    `**About FKN : Arma Reforger:**\n` +
                    `A premium product for the game Arma Reforger from FKN group. This internal cheat provides advanced features for tactical advantage in modern military combat scenarios.\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 & 11 (all builds)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT & MBR Disk Format\n` +
                    `• UEFI & Legacy BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ Internal Technology - Maximum Performance\n` +
                    `✅ StreamProof - Safe for Streaming\n` +
                    `✅ Steam Client Support\n` +
                    `✅ Full Resolution Support\n` +
                    `✅ Premium FKN Quality\n\n` +
                    `**Available Subscriptions:**\n` +
                    `• 7 Day - IDR 347.750 / $21.00\n` +
                    `• 30 Day - IDR 529.750 / $32.00\n` +
                    `• LIFETIME - IDR 1.158.750 / $70.00\n\n` +
                    `Please click the button below to view more detailed information about FKN Arma Reforger features.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Arma Reforger Premium Cheats • Modern Tactical Advantage',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('fkn_armareforger')
                    .setLabel('View FKN Features & Purchase')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('🛒')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in armar command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Arma Reforger cheat information',
                flags: [64],
            });
        }
    },
};