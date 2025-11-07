const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dota2')
        .setDescription('🔮 | Dota 2 Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔮 Dota 2 Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Dota 2 MOBA game!**\n\n` +
                    `> • Umbrella : Dota 2 (Internal with KAIO & Inventory Changer)\n` +
                    `> • Melonity : Dota 2 (Internal with Auto Features & ESP)\n\n` +
                    `**About Dota 2:**\n` +
                    `Dota 2 is a free-to-play multiplayer online battle arena (MOBA) game where two teams of five players each compete in matches to destroy the enemy's Ancient. Choose from over 120 heroes with unique abilities and work together to achieve victory.\n\n` +
                    `**Dominate the battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Dota 2 Premium Cheats • MOBA Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Dota 2 cheat...')
                    .addOptions([
                        {
                            label: 'Umbrella : Dota 2',
                            description: 'Internal with KAIO scripts and inventory changer',
                            value: 'umbrella_dota2',
                        },
                        {
                            label: 'Melonity : Dota 2',
                            description: 'Internal with auto features, ESP, and creep automation',
                            value: 'melonity_dota2',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in dota2 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Dota 2 cheat collection',
                ephemeral: true,
            });
        }
    },
};