const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('escapefromtarkov')
        .setDescription('🔫 | Escape From Tarkov Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔫 Escape From Tarkov Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Escape From Tarkov hardcore FPS game!**\n\n` +
                    `> • Ancient : EFT Chams (External with Chams & Spoofer)\n` +
                    `> • Collapse : EFT (Internal with Aimbot & Visual)\n` +
                    `> • Avalanche : EFT (Internal with Advanced ESP)\n` +
                    `> • Vision : EFT (Internal with Aimbot & Advanced Features)\n` +
                    `> • Crooked Arm's : EFT (External with Advanced Radar)\n` +
                    `> • SMG : EFT (External Radar Specialist)\n\n` +
                    `**About Escape From Tarkov:**\n` +
                    `Escape From Tarkov is a hardcore and realistic online first-person action RPG/Simulator with MMO features and a story-driven walkthrough. Experience intense tactical combat, loot management, and survive in the war-torn region of Norvinsk.\n\n` +
                    `**Dominate the raids with premium features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Escape From Tarkov Premium Cheats • Tactical Raid Dominance',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an Escape From Tarkov cheat...')
                    .addOptions([
                        {
                            label: 'Ancient : EFT Chams',
                            description: 'External with chams, loot ESP and built-in spoofer',
                            value: 'ancient_eftchams',
                        },
                        {
                            label: 'Collapse : EFT',
                            description: 'Internal with aimbot, visual ESP and quest system',
                            value: 'collapse_eft',
                        },
                        {
                            label: 'Avalanche : EFT',
                            description: 'Internal with advanced ESP and comprehensive features',
                            value: 'avalanche_eft',
                        },
                        {
                            label: 'Vision : EFT',
                            description: 'Internal with aimbot and advanced visual features',
                            value: 'vision_eft',
                        },
                        {
                            label: 'Crooked Arm\'s : EFT',
                            description: 'External with advanced radar and comprehensive ESP',
                            value: 'crookedarms_eft',
                        },
                        {
                            label: 'SMG : EFT (Radar)',
                            description: 'External radar specialist with comprehensive loot detection',
                            value: 'smg_eftradar',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in escapefromtarkov command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Escape From Tarkov cheat collection',
                flags: [64],
            });
        }
    },
};