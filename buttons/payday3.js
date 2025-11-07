const { EmbedBuilder } = require('discord.js');

module.exports = {
    customId: 'payday3_menu',
    async execute(interaction) {
        await interaction.deferUpdate();

        try {
            const selectedValue = interaction.values[0];
            let embed;

            switch (selectedValue) {
                case 'pussycat_1day':
                case 'pussycat_7days':
                case 'pussycat_31days':
                    const duration = selectedValue.replace('pussycat_', '');
                    embed = createPayday3Embed(duration);
                    break;
                case 'overview':
                    embed = createPayday3Embed();
                    break;
                default:
                    embed = createPayday3Embed();
            }

            await interaction.followUp({ embeds: [embed], ephemeral: true });

        } catch (error) {
            console.error('Error in payday3 menu handler:', error);
            await interaction.followUp({
                content: '❌ | Failed to process your selection. Please try again later.',
                ephemeral: true
            });
        }
    },
};

function createPayday3Embed(duration) {
    const pricing = duration ? getPricing(duration) : null;
    const pricingText = duration ? `**${duration.toUpperCase()}:** ${pricing}\n` : '';

    const embed = new EmbedBuilder()
        .setTitle('🏦 PAYDAY 3 - PUSSYCAT PREMIUM CHEAT')
        .setDescription(
            `🔥 **PussyCat Group Premium Solution** for Payday 3\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            pricingText +
            '🎯 **Premium external cheat for heist domination!**\n\n' +
            '💎 **Premium Quality Features**\n' +
            '• Professional-grade external software\n' +
            '• StreamProof compatibility\n' +
            '• Regular updates and maintenance\n' +
            '• 24/7 customer support\n' +
            '• Multi-platform support (Steam & Epic)'
        )
        .setColor('#FFB84D')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '💰 PRICING OPTIONS',
                value: `**1 Day Trial:** \`IDR 80,000 / $4.50\`\n` +
                       `**7 Day Package:** \`IDR 221,750 / $13.00\` ⭐ **Popular**\n` +
                       `**31 Day Package:** \`IDR 399,250 / $24.00\` ⭐ **Best Value**\n\n` +
                       `💡 **31-day package offers the best value!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM REQUIREMENTS',
                value: `✅ **Processors:** Intel & AMD\n` +
                       `✅ **OS:** Windows 10 & 11 (All builds)\n` +
                       `✅ **Graphics:** Nvidia & AMD\n` +
                       `✅ **Disk Format:** GPT & MBR\n` +
                       `✅ **BIOS:** UEFI & Legacy`,
                inline: true
            },
            {
                name: '🎮 GAME COMPATIBILITY',
                value: `✅ **Resolutions:** Borderless & Windowed\n` +
                       `✅ **Game Mode:** Any mode supported\n` +
                       `✅ **StreamProof:** Yes\n` +
                       `✅ **Game Clients:** Steam & Epic Games\n` +
                       `✅ **Software Type:** External\n` +
                       `✅ **Flash Drive:** Not supported`,
                inline: false
            },
            {
                name: '🎯 FEATURES OVERVIEW',
                value: `🔥 **Please check available media for complete feature list!**\n\n` +
                       `• Professional aim assistance\n` +
                       `• Visual ESP features\n` +
                       `• Customizable settings\n` +
                       `• Regular updates\n` +
                       `• Safe to use`,
                inline: false
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Yash Store • PussyCat Group • Premium Payday 3 Solutions',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function getPricing(duration) {
    const pricing = {
        '1day': 'IDR 80,000 / $4.50',
        '7days': 'IDR 221,750 / $13.00',
        '31days': 'IDR 399,250 / $24.00'
    };
    return pricing[duration] || 'Select a duration for pricing';
}