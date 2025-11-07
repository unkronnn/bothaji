const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('narakabladepoint')
        .setDescription('🎮 Browse Naraka Bladepoint cheats and features')
        .addStringOption(option =>
            option.setName('product')
                .setDescription('Select product to view details')
                .setRequired(false)
                .addChoices(
                    { name: '🔥 Extreme Full Cheat', value: 'extreme_full' },
                    { name: '✨ Extreme Skin Changer', value: 'extreme_skin' },
                    { name: '📋 All Products', value: 'all' }
                )
        )
        .addStringOption(option =>
            option.setName('duration')
                .setDescription('Select subscription duration')
                .setRequired(false)
                .addChoices(
                    { name: '1 Day', value: '1day' },
                    { name: '7 Days', value: '7days' },
                    { name: '30 Days', value: '30days' }
                )
        ),
    async execute(interaction) {
        const product = interaction.options.getString('product') || 'all';
        const duration = interaction.options.getString('duration');

        await interaction.deferReply();

        try {
            let embed;

            if (product === 'all') {
                embed = createAllProductsEmbed(duration);
            } else if (product === 'extreme_full') {
                embed = createExtremeFullEmbed(duration);
            } else if (product === 'extreme_skin') {
                embed = createExtremeSkinEmbed(duration);
            }

            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Error in narakabladepoint command:', error);
            await interaction.editReply({
                content: '❌ | Failed to load Naraka Bladepoint products. Please try again later.',
                ephemeral: true
            });
        }
    },
};

function createAllProductsEmbed(duration) {
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
            '💡 **Use `/narakabladepoint product:extreme_full`** for detailed features!\n' +
            '💡 **Use `/narakabladepoint product:extreme_skin`** for skin changer details!'
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
            },
            {
                name: '⚡ QUICK PURCHASE',
                value: `🔥 **Instant Delivery** - Get your cheat immediately!\n` +
                       `💰 **Best Prices** - Competitive rates guaranteed\n` +
                       `🛡️ **Secure Payment** - Multiple payment methods\n` +
                       `📞 **24/7 Support** - Always here to help\n\n` +
                       `🚀 **Ready to dominate Naraka Bladepoint?**`,
                inline: false
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
    const pricing = duration ? getFullPricing(duration) : null;
    const pricingText = duration ? `**${duration.toUpperCase()}:** ${pricing}\n` : '';

    const embed = new EmbedBuilder()
        .setTitle('🔥 EXTREME: NARAKA BLADEPOINT - FULL CHEAT')
        .setDescription(
            `🎯 **Premium Full-Featured Cheat** for Naraka Bladepoint by Extreme Group\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            pricingText +
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
                       `• **Item ESP** - Item information display\n` +
                       `• **Chest ESP** - Lootbox information`,
                inline: false
            },
            {
                name: '🎯 AIMBOT FEATURES',
                value: `• **Aimbot** (Default: CAPSLOCK)\n` +
                       `• **Silent Aim** - Bullet redirection (no sight movement)\n` +
                       `• **Magic Bullet** - Shoot through walls (21m range)\n` +
                       `• **Bone Selection** - Target bone customization\n` +
                       `• **FOV Control** - Aimbot radius adjustment\n` +
                       `• **Smooth** - Aiming smoothness (1 = instant)\n` +
                       `• **Visible Check** - Target visibility verification`,
                inline: false
            },
            {
                name: '🎭 PLAYER MODIFICATIONS',
                value: `• **Ignore Parry** - 50% chance to ignore enemy parries\n` +
                       `• **Anti Stun** - Disable most stun animations (Long sword)\n` +
                       `• **Disable Damage** - No received damage (bots only)\n` +
                       `• **Infinite Stamina** - Unlimited stamina\n` +
                       `• **Infinite Dragon** - Infinite nunchack charge\n` +
                       `• **Infinite Slide** - Unlimited sliding\n` +
                       `• **Upper Helper** - Higher opponent throws`,
                inline: false
            },
            {
                name: '⚡ ADVANCED FEATURES',
                value: `• **Chain Editor** - Edit hook distance and speed\n` +
                       `• **Teleport** - To mark or nearest enemy (Default: ALT)\n` +
                       `• **Auto Parry** - Automatic parrying\n` +
                       `• **Check On Screen** - Enemy screen detection\n` +
                       `• **Under Stun** - Parry while stunned\n` +
                       `• **Slide Editor** - Max speed customization\n` +
                       `• **Jump Editor** - Height, speed, force adjustments\n` +
                       `• **Skin Changer** - All outfits & weapons unlocked`,
                inline: false
            },
            {
                name: '💰 PRICING OPTIONS',
                value: `**1 Day:** \`IDR 95,000 / $5.50\`\n` +
                       `**7 Days:** \`IDR 329,750 / $19.00\` ⭐ **Popular**\n` +
                       `**30 Days:** \`IDR 732,750 / $43.00\` ⭐ **Best Value**\n\n` +
                       `💡 **7-day pack offers the best balance of features and value!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** External\n` +
                       `• **StreamProof:** Yes\n` +
                       `• **Flash Drive:** Not supported\n` +
                       `• **Built-in Spoofer:** No\n` +
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
    const pricing = duration ? getSkinPricing(duration) : null;
    const pricingText = duration ? `**${duration.toUpperCase()}:** ${pricing}\n` : '';

    const embed = new EmbedBuilder()
        .setTitle('✨ EXTREME: NARAKA BLADEPOINT - SKIN CHANGER')
        .setDescription(
            `🎨 **Premium Skin Unlocker** for Naraka Bladepoint by Extreme Group\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            pricingText +
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
                       `• **Built-in Spoofer:** No\n` +
                       `• **Safe to Use:** Cosmetic only\n` +
                       `• **Support:** 24/7 available`,
                inline: true
            },
            {
                name: '🎮 COMPATIBILITY',
                value: `✅ **Processors:** Intel & AMD\n` +
                       `✅ **OS:** Windows 10/11 (All builds)\n` +
                       `✅ **Graphics:** Nvidia & AMD\n` +
                       `✅ **Game Clients:** Steam, Epic Games, Official Launcher\n` +
                       `✅ **Resolutions:** Borderless & Windowed\n` +
                       `✅ **Game Mode:** Any mode supported`,
                inline: false
            },
            {
                name: '⚠️ IMPORTANT NOTES',
                value: `• **Cosmetic Only** - No gameplay advantages\n` +
                       `• **External Software** - Runs alongside game\n` +
                       `• **Regular Updates** - Latest content supported\n` +
                       `• **Developer Rights** - Features may change per update\n` +
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