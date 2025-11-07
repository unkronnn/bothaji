const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unbanakun')
        .setDescription('🔓 | Account Unban Service for Multiple Games'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔓 Account Unban Method')
                .setDescription(
                    `**Ever dreamed about being able to use your old main account again?**\n\n` +
                    `The one you've spent so much money on, and lost it because you were either stupid or made a mistake. Either way, we believe you deserve another chance.\n\n` +
                    `**What you get:**\n` +
                    `✅ The method, with all detailed instructions needed\n` +
                    `✅ Tips and Tricks to increase the chance of the method working\n` +
                    `✅ All links and services needed are included to make it work\n` +
                    `✅ No similar public methods, or YouTube ones\n\n` +
                    `**Requirements:**\n` +
                    `• The email for the banned/locked account (changeable)\n` +
                    `• Standard information such as date of birth, passwords, 2FA, devices, etc.\n\n` +
                    `⚠️ **THIS METHOD HAS AN 80% CHANCE OF SUCCESS**\n\n` +
                    `**Working on:** Valorant, Fortnite, Rainbow Six, Hypixel, Rust, Rocket League, Apex Legend & more games!\n\n` +
                    `❌ **Does NOT work on:** COD/RUST/FIVEM/ROBLOX`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Get your account back with our proven unban method',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('unbanmethod_purchase')
                    .setLabel('Purchase Unban Method')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('🛒')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in unbanakun command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the unban service information',
                flags: [64],
            });
        }
    },
};