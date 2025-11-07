const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deeprockgalactic')
        .setDescription('⛏️ | Deep Rock Galactic Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⛏️ Deep Rock Galactic Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Deep Rock Galactic co-op mining game!**\n\n` +
                    `> • FKN : Deep Rock Galactic (Internal with God Mode & Super Features)\n\n` +
                    `**About Deep Rock Galactic:**\n` +
                    `Deep Rock Galactic is a 1-4 player co-op first-person shooter where players work as space miners exploring dangerous caves on alien planets. Team up with your friends to excavate valuable minerals while fighting off alien creatures and environmental hazards in this procedurally generated cave system.\n\n` +
                    `**Conquer the caves with premium features!**\n\n` +
                    `Please click the button below to view detailed information about the FKN Deep Rock Galactic cheat.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Deep Rock Galactic Premium Cheats • Rock and Stone!',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('fkn_deeprockgalactic')
                    .setLabel('View FKN Features & Purchase')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('⛏️')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in deeprockgalactic command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Deep Rock Galactic cheat information',
                ephemeral: true,
            });
        }
    },
};