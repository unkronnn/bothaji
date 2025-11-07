const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deadlock')
        .setDescription('🔮 | Deadlock Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔮 Deadlock Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Deadlock hero shooter game!**\n\n` +
                    `> • Medusa : Deadlock (External with Advanced Customization)\n` +
                    `> • Umbrella : Deadlock (Internal with Hero Combos)\n` +
                    `> • BC : Deadlock (Internal with Maphack)\n` +
                    `> • Byster : Deadlock (Internal with PSilent Aimbot)\n\n` +
                    `**About Deadlock:**\n` +
                    `Deadlock is a fast-paced hero shooter game where players choose from unique heroes with special abilities. Engage in intense 6v6 battles combining shooter mechanics with MOBA-style abilities and team coordination.\n\n` +
                    `**Dominate the battlefield with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Deadlock Premium Cheats • Hero Shooter Domination',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Deadlock cheat...')
                    .addOptions([
                        {
                            label: 'Medusa : Deadlock',
                            description: 'External with advanced customization and multi-language',
                            value: 'medusa_deadlock',
                        },
                        {
                            label: 'Umbrella : Deadlock',
                            description: 'Internal with hero combos and built-in spoofer',
                            value: 'umbrella_deadlock',
                        },
                        {
                            label: 'BC : Deadlock',
                            description: 'Internal with maphack and aimbot combos',
                            value: 'bc_deadlock',
                        },
                        {
                            label: 'Byster : Deadlock',
                            description: 'Internal with PSilent aimbot and magic bullets',
                            value: 'byster_deadlock',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in deadlock command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Deadlock cheat collection',
                ephemeral: true,
            });
        }
    },
};