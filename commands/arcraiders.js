const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('arcraiders')
        .setDescription('🚀 | Arc Raiders Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🚀 Arc Raiders Cheat Collection')
                .setDescription(
                    `**Premium cheats for Arc Raiders cooperative action game!**\n\n` +
                    `> • Fecurity : Arc Raiders (Hybrid)\n` +
                    `> • Crooked Arm's : Arc Raiders (External)\n\n` +
                    `**About Arc Raiders:**\n` +
                    `Arc Raiders is a cooperative free-to-play shooter where you and your squad face the fallout of a mysterious cataclysm. Team up with up to three other players to take on ever-changing challenges and thrive together.\n\n` +
                    `**Enhance your Arc Raiders experience with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Arc Raiders Premium Cheats • Dominate the Frontier',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an Arc Raiders cheat...')
                    .addOptions([
                        {
                            label: 'Fecurity : Arc Raiders',
                            description: 'Premium hybrid cheat with built-in spoofer',
                            value: 'fecurity_arcraiders',
                        },
                        {
                            label: 'Crooked Arm\'s : Arc Raiders',
                            description: 'External cheat with advanced features',
                            value: 'crookedarc_arcraiders',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in arcraiders command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Arc Raiders cheat collection',
                ephemeral: true,
            });
        }
    },
};