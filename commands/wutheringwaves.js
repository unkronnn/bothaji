const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wutheringwaves')
        .setDescription('🌊 | Wuthering Waves Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🌊 Wuthering Waves Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Wuthering Waves open-world RPG game!**\n\n` +
                    `> • Unicore : Wuthering Waves (Internal with Comprehensive Combat & Teleport Features)\n` +
                    `> • Mason : Wuthering Waves (External with Aimbot & Advanced ESP)\n\n` +
                    `**About Wuthering Waves:**\n` +
                    `Wuthering Waves is a free-to-play open-world action RPG set in a post-apocalyptic world. Players control Rover characters who explore vast landscapes, battle mysterious creatures called Tacet Discords, and harness the power of Echoes in fast-paced combat combined with exploration and puzzle-solving.\n\n` +
                    `**Explore the world and master combat with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Wuthering Waves Premium Cheats • RPG Exploration Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Wuthering Waves cheat...')
                    .addOptions([
                        {
                            label: 'Unicore : Wuthering Waves',
                            description: 'Internal with Comprehensive Combat & Teleport Features',
                            value: 'unicore_wutheringwaves',
                        },
                        {
                            label: 'Mason : Wuthering Waves',
                            description: 'External with Aimbot & Advanced ESP',
                            value: 'mason_wutheringwaves',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in wutheringwaves command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Wuthering Waves cheat collection',
                flags: [64],
            });
        }
    },
};