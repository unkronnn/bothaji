const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lagswitch')
        .setDescription('⚡ | LagSwitch - Advanced Network Control Tool'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⚡ LagSwitch - Advanced Network Control')
                .setDescription(
                    `**LagSwitch is a program that allows you to temporarily "delay" or completely stop data transmission**\n\n` +
                    `between your game and the server. This creates the appearance of internet lag: your character might briefly "freeze" or "teleport," which can give you an advantage in various in-game situations.\n\n` +
                    `**You press one key - boxes reveal themselves, enemies freeze, you wipe a squad before they even blink.**\n\n` +
                    `**✨ Benefits:**\n` +
                    `💡 No bans. No kicks. No limits.\n` +
                    `💡 Works in ALL games (Valorant, Rust, CS2, Fortnite, etc.)\n` +
                    `💡 Private. Undetected. Unique build for every user.\n\n` +
                    `**🔧 System Compatibility:**\n` +
                    `• **Processors:** Intel & AMD\n` +
                    `• **OS:** Any Windows Version\n` +
                    `• **Graphics:** Nvidia & AMD\n` +
                    `• **Disk Format:** GPT & MBR\n` +
                    `• **BIOS Mode:** UEFI & Legacy\n` +
                    `• **Games:** Works for any game\n` +
                    `• **Resolutions:** Fullscreen, Borderless & Windowed\n\n` +
                    `**🎮 Software Type:** External\n` +
                    `**🔒 Status:** Undetected & Private`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Advanced Lag Control for Competitive Advantage',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('lagswitch_purchase')
                    .setLabel('View Pricing & Purchase')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('🛒')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in lagswitch command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the LagSwitch information',
                ephemeral: true,
            });
        }
    },
};