const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('marvelrivals')
        .setDescription('🦸 | Marvel Rivals Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🦸 Marvel Rivals Premium Cheat Collection')
                .setDescription(
                    `**Premium cheats for Marvel Rivals superhero team-based shooter!**\n\n` +
                    `> • Byster : MR (External with Lifetime Option, LUA Scripts & Skin Changer)\n` +
                    `> • Unicore : MR (Internal with Advanced Visuals & Triggerbot)\n` +
                    `> • Ancient : MR (External with Advanced Aimbot & Custom Configs)\n` +
                    `> • Stern : MR (External with Lifetime Option & Color Customization)\n` +
                    `> • BC : MR (Internal with Flash Drive Support & Radar System)\n` +
                    `> • Lexy : MR (External with Built-in Spoofer & Multi-Client Support)\n` +
                    `> • PussyCat : MR (External with Affordable Pricing & StreamProof)\n` +
                    `> • SMG : MR (External with Advanced Customization & Settings)\n\n` +
                    `**About Marvel Rivals:**\n` +
                    `Marvel Rivals is a fast-paced, 6v6 superhero team-based shooter featuring iconic Marvel characters. Choose from legendary heroes like Spider-Man, Iron Man, Black Widow, Captain America, and many more as you battle in dynamic multiplayer arenas. Experience unique character abilities, team-based strategy, and explosive combat in the Marvel universe.\n\n` +
                    `**Unleash your superpowers with tactical advantages!**\n\n` +
                    `Please select a cheat from the dropdown menu below to view more details.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'Marvel Rivals Premium Cheats • Superhero Combat Mastery',
                    iconURL: interaction.guild.iconURL()
                });

            const selectMenu = new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('product_selection')
                    .setPlaceholder('Select a Marvel Rivals cheat...')
                    .addOptions([
                        {
                            label: 'Byster : MR',
                            description: 'External with lifetime option, LUA scripts and skin changer',
                            value: 'byster_marvelrivals',
                        },
                        {
                            label: 'Unicore : MR',
                            description: 'Internal with advanced visuals and triggerbot',
                            value: 'unicore_marvelrivals',
                        },
                        {
                            label: 'Ancient : MR',
                            description: 'External with advanced aimbot and custom configs',
                            value: 'ancient_marvelrivals',
                        },
                        {
                            label: 'Stern : MR',
                            description: 'External with lifetime option and color customization',
                            value: 'stern_marvelrivals',
                        },
                        {
                            label: 'BC : MR',
                            description: 'Internal with flash drive support and radar system',
                            value: 'bc_marvelrivals',
                        },
                        {
                            label: 'Lexy : MR',
                            description: 'External with built-in spoofer and multi-client support',
                            value: 'lexy_marvelrivals',
                        },
                        {
                            label: 'PussyCat : MR',
                            description: 'External with affordable pricing and StreamProof',
                            value: 'pussycat_marvelrivals',
                        },
                        {
                            label: 'SMG : MR',
                            description: 'External with advanced customization and settings',
                            value: 'smg_marvelrivals',
                        },
                    ])
            );

            await interaction.editReply({ embeds: [embed], components: [selectMenu] });

        } catch (error) {
            console.error('Error in marvelrivals command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the Marvel Rivals cheat collection',
                ephemeral: true,
            });
        }
    },
};