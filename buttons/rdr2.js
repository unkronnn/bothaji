const { EmbedBuilder } = require('discord.js');

module.exports = {
    id: 'rdr2_menu',
    async execute(interaction) {
        await interaction.deferUpdate();

        try {
            const selectedValue = interaction.values[0];
            let embed;

            switch (selectedValue) {
                case 'sunrise_7days':
                case 'sunrise_30days':
                case 'sunrise_lifetime':
                    const duration = selectedValue.replace('sunrise_', '');
                    embed = createSunriseEmbed(duration);
                    break;
                case 'ovix_lifetime':
                    embed = createOvixEmbed();
                    break;
                case 'overview':
                    embed = createAllProvidersEmbed();
                    break;
                default:
                    embed = createAllProvidersEmbed();
            }

            await interaction.followUp({ embeds: [embed], ephemeral: true });

        } catch (error) {
            console.error('Error in rdr2 menu handler:', error);
            await interaction.followUp({
                content: '❌ | Failed to process your selection. Please try again later.',
                ephemeral: true
            });
        }
    },
};

function createAllProvidersEmbed() {
    const embed = new EmbedBuilder()
        .setTitle('🤠 RED DEAD REDEMPTION 2 - PREMIUM CHEATS')
        .setDescription(
            '🔥 **Complete RDR2 Solution Collection** from Premium Providers\n' +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            '🎯 **Choose your preferred provider:**\n\n' +
            '**🌅 Sunrise - Premium**\n' +
            `• 7 Days: \`IDR 92,000 / $5.50\`\n` +
            `• 30 Days: \`IDR 179,250 / $10.50\`\n` +
            `• Lifetime: \`IDR 537,250 / $32.00\`\n` +
            `• Features: Internal, Story & Online Mode\n\n` +
            '**⚡ Ovix - Professional**\n' +
            `• Lifetime: \`IDR 160,000 / $9.50\`\n` +
               `• Features: Internal, All Game Modes\n\n` +
               `💡 **Sunrise offers flexible durations while Ovix provides lifetime access!**`
        )
        .setColor('#8B4513')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🛡️ COMPATIBILITY',
                value: `✅ **Processors:** Intel & AMD\n` +
                       `✅ **OS:** Windows 10 & 11 (All builds)\n` +
                       `✅ **Graphics:** Nvidia & AMD\n` +
                       `✅ **Disk Format:** GPT & MBR\n` +
                       `✅ **BIOS:** UEFI & Legacy`,
                inline: true
            },
            {
                name: '💡 RECOMMENDATIONS',
                value: `🌅 **Sunrise** - Best overall value\n` +
                       `⚡ **Ovix** - Best lifetime deal\n` +
                       `🎯 **Both providers:** Internal software (safer)\n\n` +
                       `💎 **Choose based on duration preference!**`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Yash Store • Red Dead Redemption 2 Specialists • Premium Providers Available',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createSunriseEmbed(duration) {
    const pricing = getSunrisePricing(duration);
    const durationText = duration.replace(/(\d+)(\w+)/, (_, num, unit) => {
        return `${num} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
    });

    const embed = new EmbedBuilder()
        .setTitle('🌅 SUNRISE: RDR2 PREMIUM CHEAT')
        .setDescription(
            `🎯 **Sunrise Group Premium Solution** for Red Dead Redemption 2\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            `**${durationText}:** ${pricing}\n\n` +
            '🌅 **Professional internal cheat with comprehensive support!**'
        )
        .setColor('#CD853F')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎮 GAME COMPATIBILITY',
                value: `• **Story Mode:** Full support\n` +
                       `• **Online Mode:** Multiplayer support\n` +
                       `• **All Resolutions:** Fullscreen, Borderless, Windowed\n` +
                       `• **All Clients:** Steam, Epic Games, Rockstar`,
                inline: false
            },
            {
                name: '💰 PRICING OPTIONS',
                value: `**7 Days:** \`IDR 92,000 / $5.50\`\n` +
                       `**30 Days:** \`IDR 179,250 / $10.50\` ⭐ **Popular**\n` +
                       `**Lifetime:** \`IDR 537,250 / $32.00\` ⭐ **Best Value**\n\n` +
                       `💎 **Lifetime offers the best long-term value!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** Internal\n` +
                       `• **StreamProof:** No\n` +
                       `• **Game Clients:** Steam, Epic Games, Rockstar\n` +
                       `• **Resolutions:** Fullscreen, Borderless, Windowed\n` +
                       `• **BIOS:** UEFI & Legacy\n` +
                       `• **Disk Format:** GPT & MBR`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Sunrise Group • Premium RDR2 Solutions • Internal Software',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createOvixEmbed() {
    const embed = new EmbedBuilder()
        .setTitle('⚡ OVIX: RDR2 PROFESSIONAL CHEAT')
        .setDescription(
            `🎯 **Ovix Group Professional Solution** for Red Dead Redemption 2\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            '**Lifetime:** IDR 160,000 / $9.50\n\n' +
            '⚡ **Professional internal cheat with lifetime access!**'
        )
        .setColor('#4682B4')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎮 GAME COMPATIBILITY',
                value: `• **All Game Modes:** Story & Online\n` +
                       `• **All Resolutions:** Fullscreen, Borderless, Windowed\n` +
                       `• **All Clients:** Steam, Epic Games, Rockstar\n` +
                       `• **Full Support:** Complete game compatibility`,
                inline: false
            },
            {
                name: '💰 PRICING',
                value: `**Lifetime Access:** \`IDR 160,000 / $9.50\`\n\n` +
                       `🎯 **One-time payment for unlimited access!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** Internal\n` +
                       `• **StreamProof:** No\n` +
                       `• **Game Clients:** Steam, Epic Games, Rockstar\n` +
                       `• **Resolutions:** Fullscreen, Borderless, Windowed\n` +
                       `• **BIOS:** UEFI & Legacy\n` +
                       `• **Disk Format:** GPT & MBR`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Ovix Group • Professional RDR2 Solutions • Lifetime Access',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function getSunrisePricing(duration) {
    const pricing = {
        '7days': 'IDR 92,000 / $5.50',
        '30days': 'IDR 179,250 / $10.50',
        'lifetime': 'IDR 537,250 / $32.00'
    };
    return pricing[duration] || 'Select a duration for pricing';
}