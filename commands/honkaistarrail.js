const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('honkaistarrail')
        .setDescription('🚂 | Honkai: Star Rail Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🚂 Honkai: Star Rail Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Honkai: Star Rail turn-based RPG game!**\n\n` +
                    `> • Unicore : Honkai: Star Rail (Internal with Advanced Visuals & Gameplay Features)\n\n` +
                    `**About Honkai: Star Rail:**\n` +
                    `Honkai: Star Rail is a free-to-play 3D role-playing video game developed by miHoYo. Players embark on an interstellar journey aboard the Astral Express, exploring diverse civilizations, engaging in strategic turn-based combat, and uncovering mysteries across the galaxy. The game features stunning visuals, complex characters, and an expansive storyline.\n\n` +
                    `**Master the cosmos with powerful gameplay enhancements!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Honkai: Star Rail Premium Cheats • Cosmic Adventure Mastery',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Honkai: Star Rail cheat...')
                    .addOptions([
                        {
                            label: 'Unicore : Honkai: Star Rail',
                            description: 'Internal with advanced visuals and gameplay enhancements',
                            value: 'unicore_honkaistarrail',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in honkaistarrail command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Honkai: Star Rail cheat collection',
                ephemeral: true,
            });
        }
    },
};