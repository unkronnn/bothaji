const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aiaimbot')
        .setDescription('🎯 | AI Aimbot Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🎯 AI Aimbot Collection')
                .setDescription(
                    `**Advanced AI-Powered Aimbot solutions for competitive gaming!**\n\n` +
                    `> • Universal AI Aimbot (15+ FPS Games)\n` +
                    `> • Valorant Colorbot (Hardware-Based)\n\n` +
                    `**What are AI Aimbot Solutions?**\n` +
                    `Cutting-edge AI technology that provides intelligent aiming assistance through visual recognition and advanced targeting algorithms. These solutions offer superior performance and undetectability compared to traditional aimbots.\n\n` +
                    `**Perfect for competitive players seeking the ultimate advantage!**\n\n` +
                    `Please select an AI aimbot solution from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Advanced AI Aimbot Technology • Visual Recognition Gaming',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an AI Aimbot solution...')
                    .addOptions([
                        {
                            label: 'Universal AI Aimbot (15+ Games)',
                            description: 'AI-powered aimbot for multiple FPS games',
                            value: 'universal_ai_aimbot',
                        },
                        {
                            label: 'Valorant Colorbot (Hardware)',
                            description: 'Hardware-based colorbot for Valorant',
                            value: 'valorant_colorbot',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in aiaimbot command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the AI Aimbot collection',
                ephemeral: true,
            });
        }
    },
};