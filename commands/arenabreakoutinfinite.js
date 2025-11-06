const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('arenabreakoutinfinite')
        .setDescription('🔫 | Arena Breakout: Infinite Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🔫 Arena Breakout: Infinite Cheat Collection')
                .setDescription(
                    `**Premium cheats for Arena Breakout: Infinite tactical FPS!**\n\n` +
                    `> • Lexy : ABI (External with Spoofer)\n` +
                    `> • Crooked Arm's : ABI (External Portable)\n` +
                    `> • Avalanche : ABI (Internal)\n` +
                    `> • Ghost : ABI (Internal Radar)\n` +
                    `> • BTG : ABI (External)\n` +
                    `> • Fecurity : ABI (Hybrid with Spoofer)\n` +
                    `> • DullWave : ABI (Internal)\n` +
                    `> • Mason : ABI (Aim Only External)\n\n` +
                    `**About Arena Breakout: Infinite:**\n` +
                    `Arena Breakout: Infinite is a next-gen tactical FPS featuring advanced gunplay, strategic gameplay, and high-stakes extraction mechanics. Immerse yourself in intense firefights where tactical precision meets cutting-edge technology.\n\n` +
                    `**Dominate the arena with premium tactical features!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Arena Breakout: Infinite Premium Cheats • Tactical Advantage',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select an Arena Breakout cheat...')
                    .addOptions([
                        {
                            label: 'Lexy : ABI',
                            description: 'Premium external cheat with built-in spoofer',
                            value: 'lexy_arenabreakout',
                        },
                        {
                            label: 'Crooked Arm\'s : ABI',
                            description: 'Advanced external cheat with portable design',
                            value: 'crookedarc_arenabreakout',
                        },
                        {
                            label: 'Avalanche : ABI',
                            description: 'Internal cheat with comprehensive features',
                            value: 'avalanche_arenabreakout',
                        },
                        {
                            label: 'Ghost : ABI (Radar)',
                            description: 'Internal radar-only solution',
                            value: 'ghost_arenabreakout',
                        },
                        {
                            label: 'BTG : ABI',
                            description: 'External cheat with visual features',
                            value: 'btg_arenabreakout',
                        },
                        {
                            label: 'Fecurity : ABI',
                            description: 'Hybrid cheat with built-in spoofer',
                            value: 'fecurity_arenabreakout',
                        },
                        {
                            label: 'DullWave : ABI',
                            description: 'Internal premium cheat',
                            value: 'dullwave_arenabreakout',
                        },
                        {
                            label: 'Mason : ABI (Aim Only)',
                            description: 'Budget-friendly external aimbot',
                            value: 'mason_arenabreakout',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in arenabreakoutinfinite command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Arena Breakout: Infinite cheat collection',
                ephemeral: true,
            });
        }
    },
};