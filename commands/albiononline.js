const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('albiononline')
        .setDescription('⚔️ | Albion Online Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('⚔️ Albion Online Cheat Collection')
                .setDescription(
                    `**Premium cheats for Albion Online sandbox MMORPG!**\n\n` +
                    `> • Ancient : Albion Online (External with Spoofer)\n` +
                    `> • Byster : Albion Online (External with Avalon Portal)\n` +
                    `> • Mason : Albion Online (External with Advanced Radar)\n\n` +
                    `**About Albion Online:**\n` +
                    `Albion Online is a sandbox MMORPG set in an open medieval fantasy world. The game features a player-driven economy where nearly every equipment item is player-crafted. Combine armor pieces and weapons suited to your playstyle in a unique, classless system.\n\n` +
                    `**Master the world of Albion with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Albion Online Premium Cheats • Rule the Sandbox World',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an Albion Online cheat...')
                    .addOptions([
                        {
                            label: 'Ancient : Albion Online',
                            description: 'External cheat with built-in spoofer and comprehensive features',
                            value: 'ancient_albiononline',
                        },
                        {
                            label: 'Byster : Albion Online',
                            description: 'External cheat with Avalon portal mapping system',
                            value: 'byster_albiononline',
                        },
                        {
                            label: 'Mason : Albion Online',
                            description: 'External cheat with advanced radar and tier filtering',
                            value: 'mason_albiononline',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in albiononline command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Albion Online cheat collection',
                flags: [64],
            });
        }
    },
};