const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remotesupport')
        .setDescription('🖥️ | Remote Support Service'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🖥️ Remote Support Service')
                .setDescription(
                    `**Our Remote Support service is designed to provide you with seamless assistance,**\n\n` +
                    `ensuring that your product is set up and ready to use with minimal effort on your part.\n\n` +
                    `> • PACKAGE 1 (Basic Support)\n` +
                    `> • PACKAGE 2 (Premium Support)\n\n` +
                    `**What You Get:**\n` +
                    `✅ Personalized Assistance: 1-on-1 remote support from our experienced team\n` +
                    `✅ Time-Saving: Let us handle the setup while you relax\n` +
                    `✅ Effortless Setup: Perfect for users who prefer convenience over complexity\n` +
                    `✅ Priority Service: Get faster support with minimal waiting time\n\n` +
                    `Package selection will be determined by the Admin, based on the level of difficulty for your case.\n\n` +
                    `Please select a package from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Professional Remote Support for Your Convenience',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Remote Support package...')
                    .addOptions([
                        {
                            label: 'PACKAGE 1 (Basic Support)',
                            description: 'Basic remote support - IDR 50.000',
                            value: 'remote_support_package1',
                        },
                        {
                            label: 'PACKAGE 2 (Premium Support)',
                            description: 'Premium remote support - IDR 150.000',
                            value: 'remote_support_package2',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in remotesupport command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Remote Support packages',
                flags: [64],
            });
        }
    },
};