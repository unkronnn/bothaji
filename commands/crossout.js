const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('crossout')
        .setDescription('🛒 | Cheat CrossOut'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🚗 BC : CrossOut')
                .setDescription(
                    `**Premium internal cheat for CrossOut vehicular combat game!**\n\n` +
                    `CrossOut is a post-apocalyptic MMO action game where players craft unique battle machines from dozens of interchangeable parts and ride them into combat. Build your ultimate war machine and dominate the wasteland!\n\n` +
                    `**About BC : CrossOut:**\n` +
                    `A premium product for the game CrossOut from BC group. This internal cheat provides comprehensive features for dominating the post-apocalyptic battlefield with advanced aimbot, ESP, and radar capabilities.\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 x64 (all builds) & 11 x64 (build 21H2, 22H2, 23H2, 24H2)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT & MBR Disk Format\n` +
                    `• UEFI & Legacy BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ Internal Technology - Maximum Performance\n` +
                    `✅ Steam Client Support\n` +
                    `✅ Flash Drive Compatible\n` +
                    `✅ Dynamic Aimbot with FOV Control\n` +
                    `✅ Advanced Visual ESP System\n` +
                    `✅ Customizable Radar\n` +
                    `✅ Full Configuration Menu\n\n` +
                    `**Available Subscription:**\n` +
                    `• 7 Days - IDR 227.000 / $13.80\n\n` +
                    `Please click the button below to view more detailed information about BC CrossOut features and purchase options.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'CrossOut Premium Cheats • Rule the Wasteland',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('crossout')
                    .setLabel('View BC CrossOut Features & Purchase')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('🛒')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in crossout command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the CrossOut product information',
                ephemeral: true,
            });
        }
    },
};