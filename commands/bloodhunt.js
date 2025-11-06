const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bloodhunt')
        .setDescription('🧛 | BloodHunt Cheat Collection'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            const embed = new EmbedBuilder()
                .setTitle('🧛 Fecurity : BloodHunt')
                .setDescription(
                    `**Premium hybrid cheat for BloodHunt competitive survival game!**\n\n` +
                    `BloodHunt is a competitive survival game where players are dropped into a hostile environment and must fight to be the last one standing. Experience intense PvP combat with realistic ballistics, strategic gameplay, and massive map awareness.\n\n` +
                    `**About Fecurity : BloodHunt:**\n` +
                    `A premium product for the game BloodHunt from Fecurity group. This hybrid cheat provides advanced features for competitive advantage in the brutal survival arena.\n\n` +
                    `**System Requirements:**\n` +
                    `• Intel & AMD Processors\n` +
                    `• Windows 10 & 11 (all builds)\n` +
                    `• Nvidia & AMD Graphics Cards\n` +
                    `• GPT & MBR Disk Format\n` +
                    `• UEFI BIOS Mode\n\n` +
                    `**Key Features:**\n` +
                    `✅ Hybrid Technology - Maximum Performance\n` +
                    `✅ Free Built-in Spoofer - No Separate Purchase\n` +
                    `✅ StreamProof - Safe for Streaming\n` +
                    `✅ Steam Client Support\n` +
                    `✅ Full Resolution Support\n` +
                    `✅ Premium FKN Quality\n\n` +
                    `**Available Subscriptions:**\n` +
                    `• 1 Day - IDR 100.000 / $6.00\n` +
                    `• 7 Day - IDR 273.250 / $16.00\n` +
                    `• 30 Day - IDR 499.500 / $30.00\n\n` +
                    `Please click the button below to view more detailed information about Fecurity BloodHunt features.`
                )
                .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
                .setColor(config.appearance.embedColor)
                .setFooter({
                    text: 'BloodHunt Premium Cheats • Competitive Survival Advantage',
                    iconURL: interaction.guild.iconURL()
                });

            const button = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('fecurity_bloodhunt')
                    .setLabel('View Fecurity Features & Purchase')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('🛒')
            );

            await interaction.editReply({ embeds: [embed], components: [button] });

        } catch (error) {
            console.error('Error in bloodhunt command:', error);
            await interaction.editReply({
                content: '❌ | Failed to display the BloodHunt cheat information',
                ephemeral: true,
            });
        }
    },
};