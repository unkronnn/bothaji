const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('grayzonewarfare')
        .setDescription('⚔️ | Gray Zone Warfare Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⚔️ Gray Zone Warfare Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Gray Zone Warfare tactical FPS game!**\n\n` +
                    `> • Fecurity : GZW (Hybrid with Magic Bullet & Advanced Aimbot)\n` +
                    `> • Lexy : GZW (External with Built-in Spoofer)\n` +
                    `> • FKN : GZW (Internal with Built-in Spoofer & Lifetime Option)\n` +
                    `> • PussyCat : GZW (External Budget Option)\n\n` +
                    `**About Gray Zone Warfare:**\n` +
                    `Gray Zone Warfare is a tactical first-person shooter featuring realistic military combat, strategic gameplay, and intense team-based operations. Experience authentic warfare scenarios with advanced ballistics, squad coordination, and high-stakes missions in various conflict zones.\n\n` +
                    `**Dominate the battlefield with tactical precision!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Gray Zone Warfare Premium Cheats • Tactical FPS Precision',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Gray Zone Warfare cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : GZW',
                            description: 'Hybrid with magic bullet and advanced aimbot features',
                            value: 'fecurity_gzw',
                        },
                        {
                            label: 'Lexy : GZW',
                            description: 'External with built-in spoofer and premium features',
                            value: 'lexy_gzw',
                        },
                        {
                            label: 'FKN : GZW',
                            description: 'Internal with built-in spoofer and lifetime option',
                            value: 'fkn_gzw',
                        },
                        {
                            label: 'PussyCat : GZW',
                            description: 'External budget-friendly option',
                            value: 'pussycat_gzw',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in grayzonewarfare command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Gray Zone Warfare cheat collection',
                flags: [64],
            });
        }
    },
};