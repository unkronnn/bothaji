const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('etheriarestart')
        .setDescription('🌟 | Etheria Restart Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🌟 Etheria Restart Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Etheria Restart RPG game!**\n\n` +
                    `> • Unicore : Etheria Restart (Internal with Advanced Features)\n\n` +
                    `**About Etheria Restart:**\n` +
                    `Etheria Restart is an immersive RPG experience featuring dynamic combat, treasure hunting, and exploration in a magical world. Battle monsters, discover treasures, and master powerful abilities as you progress through an engaging storyline.\n\n` +
                    `**Master the realm with premium features!**\n\n` +
                    `Click the button below to view detailed information about the available cheat.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Etheria Restart Premium Cheats • Magical Realm Mastery',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('unicore_etheriarestart')
                    .setLabel('Unicore : Etheria Restart')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('🌟')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in etheriarestart command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Etheria Restart cheat collection',
                flags: [64],
            });
        }
    },
};