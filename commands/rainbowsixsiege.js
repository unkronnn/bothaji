const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rainbowsixsiege')
        .setDescription('🛡️ | Rainbow Six Siege X Premium Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🛡️ Rainbow Six Siege X Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Rainbow Six Siege X tactical shooter game!**\n\n` +
                    `> • Vision : R6S (Internal with Visual ESP & Advanced Aimbot)\n` +
                    `> • Actavis : R6S (Internal with Professional Aimbot & Visuals)\n` +
                    `> • Actavis : R6S Unlock All (Internal with All Skins & Operators Unlocked)\n\n` +
                    `**About Rainbow Six Siege X:**\n` +
                    `Rainbow Six Siege X is a tactical first-person shooter that emphasizes team cooperation and strategic gameplay. Players choose from various operators with unique gadgets and abilities, engaging in close-quarters combat across destructible environments. The game requires tactical planning, precise shooting, and coordinated teamwork.\n\n` +
                    `**Dominate the tactical battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Rainbow Six Siege X Premium Cheats • Tactical Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Rainbow Six Siege X cheat...')
                    .addOptions([
                        {
                            label: 'Vision : R6S',
                            description: 'Internal with Visual ESP & Advanced Aimbot',
                            value: 'vision_r6s',
                        },
                        {
                            label: 'Actavis : R6S',
                            description: 'Internal with Professional Aimbot & Visuals',
                            value: 'actavis_r6s',
                        },
                        {
                            label: 'Actavis : R6S Unlock All',
                            description: 'Internal with All Skins & Operators Unlocked',
                            value: 'actavis_r6s_unlock',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in rainbowsixsiege command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Rainbow Six Siege X cheat collection',
                flags: [64],
            });
        }
    },
};