const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deadbydaylight')
        .setDescription('🔪 | Dead By Daylight Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔪 Dead By Daylight Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Dead By Daylight asymmetrical horror game!**\n\n` +
                    `> • Collapse : DBD (Internal with Auto Skill Checks)\n` +
                    `> • Fecurity : DBD (Hybrid with Spoofer)\n` +
                    `> • Byster : DBD (Internal with Cosmetics Unlocker)\n` +
                    `> • Stern : DBD (External with Killer Picker)\n` +
                    `> • Ghost : DBD (External with Visual Customization)\n` +
                    `> • Lexy : DBD (External Premium)\n` +
                    `> • FKN : DBD (Internal with Spoofer)\n` +
                    `> • PussyCat : DBD (External Budget)\n` +
                    `> • SMG : DBD (External with Aimbot)\n\n` +
                    `**About Dead By Daylight:**\n` +
                    `Dead By Daylight is a 4v1 asymmetrical horror game where one player takes on the role of the Killer and four others play as Survivors. Survivors must repair generators to escape while avoiding the Killer in intense chase sequences.\n\n` +
                    `**Master the realm with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Dead By Daylight Premium Cheats • Survive or Hunt',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Dead By Daylight cheat...')
                    .addOptions([
                        {
                            label: 'Collapse : DBD',
                            description: 'Internal with auto skill checks and skin unlocker',
                            value: 'collapse_dbd',
                        },
                        {
                            label: 'Fecurity : DBD',
                            description: 'Hybrid with spoofer and auto skill checks',
                            value: 'fecurity_dbd',
                        },
                        {
                            label: 'Byster : DBD',
                            description: 'Internal with cosmetics unlocker and lifetime option',
                            value: 'byster_dbd',
                        },
                        {
                            label: 'Stern : DBD',
                            description: 'External with killer picker and survivor aura',
                            value: 'stern_dbd',
                        },
                        {
                            label: 'Ghost : DBD',
                            description: 'External with visual customization and spoofer',
                            value: 'ghost_dbd',
                        },
                        {
                            label: 'Lexy : DBD',
                            description: 'External premium with built-in spoofer',
                            value: 'lexy_dbd',
                        },
                        {
                            label: 'FKN : DBD',
                            description: 'Internal with spoofer and lifetime option',
                            value: 'fkn_dbd',
                        },
                        {
                            label: 'PussyCat : DBD',
                            description: 'External budget with essential features',
                            value: 'pussycat_dbd',
                        },
                        {
                            label: 'SMG : DBD',
                            description: 'External with aimbot and advanced visual customization',
                            value: 'smg_dbd',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in deadbydaylight command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Dead By Daylight cheat collection',
                flags: [64],
            });
        }
    },
};