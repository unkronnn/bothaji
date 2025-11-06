const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('arma3')
        .setDescription('🪖 | Arma 3 Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🪖 Arma 3 Cheat Collection')
                .setDescription(
                    `**Premium cheats for Arma 3 military tactical shooter!**\n\n` +
                    `> • Mason : Arma 3 (External with Advanced Features)\n` +
                    `> • SMG : Arma 3 (External with Professional Features)\n\n` +
                    `**About Arma 3:**\n` +
                    `Arma 3 is a massive military tactical shooter featuring a diverse array of singleplayer and multiplayer content, more than 20 vehicles and 40 weapons, and limitless content creation opportunities. Experience true combat gameplay in the most immersive sandbox environment ever created.\n\n` +
                    `**Command the battlefield with premium tactical features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Arma 3 Premium Cheats • Military Tactical Advantage',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an Arma 3 cheat...')
                    .addOptions([
                        {
                            label: 'Mason : Arma 3',
                            description: 'External cheat with silent aimbot and comprehensive ESP',
                            value: 'mason_arma3',
                        },
                        {
                            label: 'SMG : Arma 3',
                            description: 'External cheat with advanced ESP and professional features',
                            value: 'smg_arma3',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in arma3 command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Arma 3 cheat collection',
                ephemeral: true,
            });
        }
    },
};