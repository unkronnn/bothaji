const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('narakabladepoint')
        .setDescription('🎮 | Naraka Bladepoint Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎮 Naraka Bladepoint Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Naraka Bladepoint action game!**\n\n` +
                    `> • Extreme : Naraka Bladepoint (External with Visual ESP, Aimbot & Player Mods)\n` +
                    `> • Extreme : Naraka Skin Changer (External with All Outfits & Weapons Unlocked)\n\n` +
                    `**About Naraka Bladepoint:**\n` +
                    `Naraka Bladepoint is a free-to-play battle royale game focusing on melee combat with parkour elements. Players choose from various heroes with unique abilities and battle across a mythical Eastern-inspired map using swords, spears, and other traditional weapons.\n\n` +
                    `**Dominate the battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Naraka Bladepoint Premium Cheats • Melee Combat Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Naraka Bladepoint cheat...')
                    .addOptions([
                        {
                            label: 'Extreme : Naraka Bladepoint',
                            description: 'External with Visual ESP, Aimbot, Teleport & Player Mods',
                            value: 'extreme_narakabladepoint',
                        },
                        {
                            label: 'Extreme : Naraka Skin Changer',
                            description: 'External with All Outfits, Weapons & Breast Physics',
                            value: 'extreme_naraka_skin',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in narakabladepoint command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Naraka Bladepoint cheat collection',
                flags: [64],
            });
        }
    },
};