const { EmbedBuilder } = require('discord.js');

module.exports = {
    customId: 'narakabladepoint_menu',
    async execute(interaction) {
        await interaction.deferUpdate();

        try {
            const selectedValue = interaction.values[0];
            let embed;

            switch (selectedValue) {
                case 'extreme_full_1day':
                case 'extreme_full_7days':
                case 'extreme_full_30days':
                    const duration = selectedValue.replace('extreme_full_', '');
                    embed = createExtremeFullEmbed(duration);
                    break;
                case 'extreme_skin_7days':
                case 'extreme_skin_30days':
                    const skinDuration = selectedValue.replace('extreme_skin_', '');
                    embed = createExtremeSkinEmbed(skinDuration);
                    break;
                case 'overview':
                    embed = createAllProductsEmbed();
                    break;
                default:
                    embed = createAllProductsEmbed();
            }

            await interaction.followUp({ embeds: [embed], ephemeral: true });

        } catch (error) {
            console.error('Error in narakabladepoint menu handler:', error);
            await interaction.followUp({
                content: '❌ | Failed to process your selection. Please try again later.',
                ephemeral: true
            });
        }
    },
};

function createAllProductsEmbed() {
    const embed = new EmbedBuilder()
        .setTitle('🎮 NARAKA BLADEPOINT - PREMIUM CHEATS')
        .setDescription(
            '🔥 **Extreme Group Premium Products** for Naraka Bladepoint\n' +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            '🎯 **Choose from our premium selection:**\n\n' +
            '**1. 🎯 Extreme Full Cheat**\n' +
            `• 1 Day: \`IDR 95,000 / $5.50\`\n` +
            `• 7 Days: \`IDR 329,750 / $19.00\`\n` +
            `• 30 Days: \`IDR 732,750 / $43.00\`\n` +
            `• Features: Visual ESP, Aimbot, Player Mods, Teleport & More!\n\n` +
            '**2. ✨ Extreme Skin Changer**\n' +
            `• 7 Days: \`IDR 150,000 / $8.00\`\n` +
            `• 30 Days: \`IDR 293,000 / $17.00\`\n` +
            `• Features: All outfits & weapons unlocked + Breast physics\n\n` +
            '💡 **Use dropdown for detailed features!**'
        )
        .setColor('#FF4500')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🔧 SYSTEM REQUIREMENTS',
                value: `✅ **Processors:** Intel & AMD\n` +
                       `✅ **OS:** Windows 10/11 (All builds)\n` +
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
                       `✅ **Game Clients:** Steam, Epic Games, Official Launcher\n` +
                       `✅ **Software Type:** External`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Yash Store • Premium Gaming Solutions • Naraka Bladepoint Specialist',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createExtremeFullEmbed(duration) {
    const pricing = getFullPricing(duration);
    const durationText = duration.replace(/(\d+)(\w+)/, (_, num, unit) => {
        return `${num} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
    });

    const embed = new EmbedBuilder()
        .setTitle('🔥 EXTREME: NARAKA BLADEPOINT - FULL CHEAT')
        .setDescription(
            `🎯 **Premium Full-Featured Cheat** for Naraka Bladepoint by Extreme Group\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            `**${durationText}:** ${pricing}\n\n` +
            '🎮 **Complete domination toolkit with advanced features!**'
        )
        .setColor('#FF6B35')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '👁️ VISUAL FEATURES',
                value: `• **ESP BOX** - Rectangle around enemies\n` +
                       `• **ESP Line** - Lines to players\n` +
                       `• **ESP Info** - Health, Nickname, Hero, Armor, Weapon, Anger, Distance\n` +
                       `• **ESP Bones** - Skeleton drawing\n` +
                       `• **Radar** - 2D enemy radar\n` +
                       `• **Item ESP** - Item information display`,
                inline: false
            },
            {
                name: '🎯 AIMBOT FEATURES',
                value: `• **Aimbot** (Default: CAPSLOCK)\n` +
                       `• **Silent Aim** - Bullet redirection (no sight movement)\n` +
                       `• **Magic Bullet** - Shoot through walls (21m range)\n` +
                       `• **Bone Selection** - Target bone customization\n` +
                       `• **FOV Control** - Aimbot radius adjustment\n` +
                       `• **Smooth** - Aiming smoothness (1 = instant)`,
                inline: false
            },
            {
                name: '🎭 PLAYER MODIFICATIONS',
                value: `• **Ignore Parry** - 50% chance to ignore enemy parries\n` +
                       `• **Anti Stun** - Disable most stun animations\n` +
                       `• **Infinite Stamina** - Unlimited stamina\n` +
                       `• **Infinite Dragon** - Infinite nunchack charge\n` +
                       `• **Infinite Slide** - Unlimited sliding`,
                inline: false
            },
            {
                name: '⚡ ADVANCED FEATURES',
                value: `• **Chain Editor** - Edit hook distance and speed\n` +
                       `• **Teleport** - To mark or nearest enemy (Default: ALT)\n` +
                       `• **Auto Parry** - Automatic parrying\n` +
                       `• **Jump Editor** - Height, speed, force adjustments\n` +
                       `• **Skin Changer** - All outfits & weapons unlocked`,
                inline: false
            },
            {
                name: '💰 PRICING OPTIONS',
                value: `**1 Day:** \`IDR 95,000 / $5.50\`\n` +
                       `**7 Days:** \`IDR 329,750 / $19.00\` ⭐ **Popular**\n` +
                       `**30 Days:** \`IDR 732,750 / $43.00\` ⭐ **Best Value**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** External\n` +
                       `• **StreamProof:** Yes\n` +
                       `• **Flash Drive:** Not supported\n` +
                       `• **Support:** 24/7 available\n` +
                       `• **Updates:** Regular feature updates`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Extreme Group • Premium Naraka Bladepoint Solutions • Features may change',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createExtremeSkinEmbed(duration) {
    const pricing = getSkinPricing(duration);
    const durationText = duration.replace(/(\d+)(\w+)/, (_, num, unit) => {
        return `${num} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
    });

    const embed = new EmbedBuilder()
        .setTitle('✨ EXTREME: NARAKA BLADEPOINT - SKIN CHANGER')
        .setDescription(
            `🎨 **Premium Skin Unlocker** for Naraka Bladepoint by Extreme Group\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            `**${durationText}:** ${pricing}\n\n` +
            '🎭 **Unlock all premium cosmetics without restrictions!**'
        )
        .setColor('#FF69B4')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎨 UNLOCKED FEATURES',
                value: `• **All Outfits** - Complete wardrobe access\n` +
                       `• **All Weapons** - Every weapon skin unlocked\n` +
                       `• **Breast Physics** - Enhanced character physics\n` +
                       `• **Cosmetic Freedom** - Mix and match freely\n` +
                       `• **Instant Access** - No grinding required`,
                inline: false
            },
            {
                name: '💰 PRICING OPTIONS',
                value: `**7 Days:** \`IDR 150,000 / $8.00\`\n` +
                       `**30 Days:** \`IDR 293,000 / $17.00\` ⭐ **Best Value**\n\n` +
                       `💡 **Perfect for players who want cosmetic dominance!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** External\n` +
                       `• **StreamProof:** Yes\n` +
                       `• **Flash Drive:** Not supported\n` +
                       `• **Safe to Use:** Cosmetic only\n` +
                       `• **Support:** 24/7 available`,
                inline: true
            },
            {
                name: '⚠️ IMPORTANT NOTES',
                value: `• **Cosmetic Only** - No gameplay advantages\n` +
                       `• **External Software** - Runs alongside game\n` +
                       `• **Regular Updates** - Latest content supported\n` +
                       `• **Safe Usage** - Lower ban risk than gameplay cheats`,
                inline: false
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Extreme Group • Cosmetic Enhancement • Visual customization only',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function getFullPricing(duration) {
    const pricing = {
        '1day': 'IDR 95,000 / $5.50',
        '7days': 'IDR 329,750 / $19.00',
        '30days': 'IDR 732,750 / $43.00'
    };
    return pricing[duration] || 'Pricing not available';
}

function getSkinPricing(duration) {
    const pricing = {
        '7days': 'IDR 150,000 / $8.00',
        '30days': 'IDR 293,000 / $17.00'
    };
    return pricing[duration] || 'Pricing not available';
}