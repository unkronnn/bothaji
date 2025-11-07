const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('genshinimpact')
        .setDescription('🌸 | Genshin Impact Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🌸 Genshin Impact Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Genshin Impact open-world RPG game!**\n\n` +
                    `> • Unicore : Genshin Impact (Internal with Comprehensive Features)\n\n` +
                    `**About Genshin Impact:**\n` +
                    `Genshin Impact is a stunning open-world action RPG featuring a vast fantasy world, element-based combat system, and gacha mechanics. Explore the seven nations of Teyvat, unlock diverse characters with unique abilities, and embark on an epic journey filled with quests, treasures, and magical adventures.\n\n` +
                    `**Master the elements with premium features!**\n\n` +
                    `Click the button below to view detailed information about the available cheat.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Genshin Impact Premium Cheats • Elemental World Mastery',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('unicore_genshinimpact')
                    .setLabel('Unicore : Genshin Impact')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('🌸')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in genshinimpact command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Genshin Impact cheat collection',
                ephemeral: true,
            });
        }
    },
};