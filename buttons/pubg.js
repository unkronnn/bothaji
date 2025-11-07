const { EmbedBuilder } = require('discord.js');

module.exports = {
    id: 'pubg_menu',
    async execute(interaction) {
        await interaction.deferUpdate();

        try {
            const selectedValue = interaction.values[0];
            let embed;

            switch (selectedValue) {
                case 'fecurity_1day':
                case 'fecurity_7days':
                case 'fecurity_30days':
                    const fecurityDuration = selectedValue.replace('fecurity_', '');
                    embed = createFecurityEmbed(fecurityDuration);
                    break;
                case 'btg_1day':
                case 'btg_7days':
                case 'btg_30days':
                    const btgDuration = selectedValue.replace('btg_', '');
                    embed = createBTGEmbed(btgDuration);
                    break;
                case 'ancient_1day':
                case 'ancient_7days':
                case 'ancient_30days':
                    const ancientDuration = selectedValue.replace('ancient_', '');
                    embed = createAncientEmbed(ancientDuration);
                    break;
                case 'lexy_1day':
                case 'lexy_7days':
                case 'lexy_30days':
                    const lexyDuration = selectedValue.replace('lexy_', '');
                    embed = createLexyEmbed(lexyDuration);
                    break;
                case 'overview':
                    embed = createAllProvidersEmbed();
                    break;
                default:
                    embed = createAllProvidersEmbed();
            }

            await interaction.followUp({ embeds: [embed], ephemeral: true });

        } catch (error) {
            console.error('Error in pubg menu handler:', error);
            await interaction.followUp({
                content: '❌ | Failed to process your selection. Please try again later.',
                ephemeral: true
            });
        }
    },
};

function createAllProvidersEmbed() {
    const embed = new EmbedBuilder()
        .setTitle('🎮 PUBG - PREMIUM CHEATS COLLECTION')
        .setDescription(
            '🔥 **Complete PUBG Solution Collection** from Top Providers\n' +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            '🎯 **Choose your preferred provider:**\n\n' +
            '**🔥 Fecurity - Premium**\n' +
            `• 1 Day: \`IDR 100,000 / $6.00\`\n` +
            `• 7 Days: \`IDR 597,250 / $35.00\`\n` +
            `• 30 Days: \`IDR 1,082,250 / $65.00\`\n` +
            `• Features: Hybrid, Built-in Spoofer, Advanced Aimbot\n\n` +
            '**⚡ BTG - Professional**\n' +
            `• 1 Day: \`IDR 128,250 / $7.50\`\n` +
            `• 7 Days: \`IDR 355,500 / $21.00\`\n` +
            `• 30 Days: \`IDR 1,121,000 / $67.00\`\n` +
            `• Features: Visual ESP, Loot filtering\n\n` +
            '**🎯 Ancient - Budget**\n' +
            `• 1 Day: \`IDR 80,000 / $4.50\`\n` +
            `• 7 Days: \`IDR 341,500 / $20.00\`\n` +
            `• 30 Days: \`IDR 666,000 / $40.00\`\n` +
            `• Features: Aimbot, Radar, Comprehensive ESP\n\n` +
            '**✨ Lexy - Elite**\n' +
            `• 1 Day: \`IDR 161,000 / $9.50\`\n` +
            `• 7 Days: \`IDR 849,250 / $50.00\`\n` +
            `• 30 Days: \`IDR 1,496,750 / $89.00\`\n` +
            `• Features: Premium solution with spoofer`
        )
        .setColor('#FF4500')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🛡️ COMPATIBILITY',
                value: `✅ **Processors:** Intel & AMD\n` +
                       `✅ **OS:** Windows 10 & 11 (All builds)\n` +
                       `✅ **Graphics:** Nvidia & AMD\n` +
                       `✅ **Game:** Steam version supported\n` +
                       `✅ **StreamProof:** Most providers`,
                inline: true
            },
            {
                name: '💡 RECOMMENDATIONS',
                value: `🔥 **Fecurity** - Best overall with spoofer\n` +
                       `⚡ **BTG** - Great visual features\n` +
                       `🎯 **Ancient** - Budget-friendly option\n` +
                       `✨ **Lexy** - Premium quality\n\n` +
                       `💎 **Try 1-day trial before choosing!**`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Yash Store • PUBG Specialists • Multiple Providers Available',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createFecurityEmbed(duration) {
    const pricing = getFecurityPricing(duration);
    const durationText = duration.replace(/(\d+)(\w+)/, (_, num, unit) => {
        return `${num} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
    });

    const embed = new EmbedBuilder()
        .setTitle('🔥 FSECURITY: PUBG PREMIUM HYBRID CHEAT')
        .setDescription(
            `🎯 **Professional PUBG Solution** by Fecurity Group\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            `**${durationText}:** ${pricing}\n\n` +
            '🔥 **Industry-leading hybrid cheat with built-in spoofer!**'
        )
        .setColor('#FF6B6B')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎯 AIM FEATURES',
                value: `• **Enable Aimbot** - Toggle aim functionality\n` +
                       `• **Aim At Shoot** - Precise shot timing\n` +
                       `• **Prediction** - Bullet trajectory prediction\n` +
                       `• **Enemy Only** - Target enemies exclusively\n` +
                       `• **Speed Controls** - Horizontal & vertical adjustment\n` +
                       `• **FOV Control** - Customizable targeting radius`,
                inline: false
            },
            {
                name: '👁️ VISUAL FEATURES (PLAYERS)',
                value: `• **ESP Enabled** - Toggle visual ESP\n` +
                       `• **2D Boxes** - Rectangle overlays\n` +
                       `• **Health Display** - Player health bars\n` +
                       `• **Skeleton ESP** - Bone structure display\n` +
                       `• **Distance Control** - Max render distance\n` +
                       `• **Player Info** - Nickname, distance details`,
                inline: false
            },
            {
                name: '⚙️ MISC FEATURES',
                value: `• **No Recoil** - Eliminate weapon recoil\n` +
                       `• **Spectator Count** - Real-time spectator monitoring\n` +
                       `• **FOV Override** - Custom field of view\n` +
                       `• **Custom Menu** - Configurable interface\n` +
                       `• **Force Reload** - Instant reload capability`,
                inline: false
            },
            {
                name: '💰 PRICING',
                value: `**1 Day:** \`IDR 100,000 / $6.00\`\n` +
                       `**7 Days:** \`IDR 597,250 / $35.00\` ⭐ **Popular**\n` +
                       `**30 Days:** \`IDR 1,082,250 / $65.00\` ⭐ **Best Value**\n\n` +
                       `🎯 **Best value with built-in spoofer!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** Hybrid (Internal + External)\n` +
                       `• **Built-in Spoofer:** Yes\n` +
                       `• **StreamProof:** Yes\n` +
                       `• **BIOS:** UEFI only\n` +
                       `• **Resolutions:** Fullscreen, Borderless, Windowed`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Fecurity Group • Premium Hybrid PUBG Solutions • Regular Updates',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createBTGEmbed(duration) {
    const pricing = getBTGPricing(duration);
    const durationText = duration.replace(/(\d+)(\w+)/, (_, num, unit) => {
        return `${num} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
    });

    const embed = new EmbedBuilder()
        .setTitle('⚡ BTG: PUBG PROFESSIONAL ESP')
        .setDescription(
            `🎯 **Break The Game Professional ESP** for PUBG\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            `**${durationText}:** ${pricing}\n\n` +
            '👁️ **Advanced visual enhancement system!**'
        )
        .setColor('#FF9500')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '👁️ ESP VISUALS',
                value: `• **Bot Detection** - Identify AI opponents\n` +
                       `• **2D Boxes** - Clean rectangular overlays\n` +
                       `• **Filled Boxes** - Solid box fills\n` +
                       `• **Lines** - Tracer lines to targets\n` +
                       `• **Distance Display** - Precise distance calculation\n` +
                       `• **Skeleton ESP** - Bone structure visualization`,
                inline: false
            },
            {
                name: '🎨 CUSTOMIZATION',
                value: `• **ESP Color System** - Customizable colors\n` +
                       `• **Text Background** - Improved readability\n` +
                       `• **Player Distance** - Distance-based filtering\n` +
                       `• **Vehicle Detection** - Vehicle ESP included`,
                inline: false
            },
            {
                name: '💎 LOOT SYSTEM',
                value: `• **Weapon Attachments** - Attachment visualization\n` +
                       `• **Weapons** - All weapon types\n` +
                       `• **Helmets** - Armor level display\n` +
                       `• **Armor** - Protection status\n` +
                       `• **Grenades** - Explosive items\n` +
                       `• **Boosts** - Enhancement items`,
                inline: false
            },
            {
                name: '💰 PRICING',
                value: `**1 Day:** \`IDR 128,250 / $7.50\`\n` +
                       `**7 Days:** \`IDR 355,500 / $21.00\` ⭐ **Popular**\n` +
                       `**30 Days:** \`IDR 1,121,000 / $67.00\` ⭐ **Best Value**\n\n` +
                       `🎯 **Great visual enhancement value!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** External\n` +
                       `• **Built-in Spoofer:** No\n` +
                       `• **StreamProof:** Yes\n` +
                       `• **BIOS:** UEFI only\n` +
                       `• **Resolutions:** Borderless & Windowed`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Break The Game • Professional PUBG ESP • Visual Enhancement',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createAncientEmbed(duration) {
    const pricing = getAncientPricing(duration);
    const durationText = duration.replace(/(\d+)(\w+)/, (_, num, unit) => {
        return `${num} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
    });

    const embed = new EmbedBuilder()
        .setTitle('🎯 ANCIENT: PUBG COMPREHENSIVE CHEAT')
        .setDescription(
            `🔥 **Ancient Group All-in-One Solution** for PUBG\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            `**${durationText}:** ${pricing}\n\n` +
            '🎯 **Complete domination toolkit with advanced features!**'
        )
        .setColor('#4169E1')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎯 AIM SYSTEM',
                value: `• **AimBot Types:** Static & Curved\n` +
                       `• **Dual Aim Keys:** aimkey 1 and aimkey 2\n` +
                       `• **FOV Control:** Customizable targeting radius\n` +
                       `• **Smooth Adjustment:** Variable aiming smoothness\n` +
                       `• **FOV Visualization:** Color-coded aim zone\n` +
                       `• **RCS (Recoil Control):** Built-in recoil system`,
                inline: false
            },
            {
                name: '👁️ ESP VISUALS',
                value: `• **Distance Control:** Adjustable rendering distance\n` +
                       `• **ESP Boxes:** Visible & invisible colors\n` +
                       `• **Skeleton ESP:** Full skeleton display\n` +
                       `• **Distance Colors:** Color-coded by distance\n` +
                       `• **Player Names:** Nickname display\n` +
                       `• **Spectator Count:** Real-time monitoring`,
                inline: false
            },
            {
                name: '📡 RADAR SYSTEM',
                value: `• **Radar Enable:** Toggle radar display\n` +
                       `• **Size Control:** Adjustable radar size\n` +
                       `• **Player Display:** Color-coded player markers`,
                inline: false
            },
            {
                name: '🌍 WORLD ESP',
                value: `• **Air Drops:** Supply drop locations\n` +
                       `• **Corpses:** Dead body detection\n` +
                       `• **Vehicles:** All vehicle types\n` +
                       `• **Weapons:** Weapon identification\n` +
                       `• **Melee Weapons:** Close combat items\n` +
                       `• **Attachments:** Weapon attachments`,
                inline: false
            },
            {
                name: '💰 PRICING',
                value: `**1 Day:** \`IDR 80,000 / $4.50\`\n` +
                       `**7 Days:** \`IDR 341,500 / $20.00\` ⭐ **Popular**\n` +
                       `**30 Days:** \`IDR 666,000 / $40.00\` ⭐ **Best Value**\n\n` +
                       `🎯 **Best budget option with comprehensive features!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `• **Type:** External\n` +
                       `• **Built-in Spoofer:** Yes\n` +
                       `• **StreamProof:** Yes\n` +
                       `• **BIOS:** UEFI only\n` +
                       `• **GPU:** 1000+ series required\n` +
                       `• **Resolutions:** Borderless & Windowed`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Ancient Group • Comprehensive PUBG Solution • All-in-One Package',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createLexyEmbed(duration) {
    const pricing = getLexyPricing(duration);
    const durationText = duration.replace(/(\d+)(\w+)/, (_, num, unit) => {
        return `${num} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
    });

    const embed = new EmbedBuilder()
        .setTitle('✨ LEXY: PUBG ELITE PREMIUM')
        .setDescription(
            `🌟 **Lexy Group Elite Solution** for PUBG\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            `**${durationText}:** ${pricing}\n\n` +
            '✨ **Premium elite cheat with top-tier features!**'
        )
        .setColor('#FF69B4')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '💎 ELITE FEATURES',
                value: `🔥 **Please check available media for complete feature list!**\n\n` +
                       `• Premium quality external software\n` +
                       `• Built-in HWID spoofer included\n` +
                       `• StreamProof functionality\n` +
                       `• Regular updates and maintenance\n` +
                       `• 24/7 customer support\n` +
                       `• Elite customer service`,
                inline: false
            },
            {
                name: '💰 PREMIUM PRICING',
                value: `**1 Day:** \`IDR 161,000 / $9.50\`\n` +
                       `**7 Days:** \`IDR 849,250 / $50.00\` ⭐ **Popular**\n` +
                       `**30 Days:** \`IDR 1,496,750 / $89.00\` ⭐ **Elite Value**\n\n` +
                       `💎 **Premium service for elite players!**`,
                inline: true
            },
            {
                name: '🛡️ SYSTEM INFO',
                value: `✅ **Processors:** Intel & AMD\n` +
                       `✅ **OS:** Windows 10 & 11 (All builds)\n` +
                       `✅ **Graphics:** Nvidia & AMD\n` +
                       `✅ **Disk Format:** GPT & MBR\n` +
                       `✅ **BIOS:** UEFI & Legacy\n` +
                       `✅ **Built-in Spoofer:** Yes\n` +
                       `✅ **StreamProof:** Yes`,
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Lexy Group • Elite PUBG Solutions • Premium Quality Guarantee',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function getFecurityPricing(duration) {
    const pricing = {
        '1day': 'IDR 100,000 / $6.00',
        '7days': 'IDR 597,250 / $35.00',
        '30days': 'IDR 1,082,250 / $65.00'
    };
    return pricing[duration] || 'Select a duration for pricing';
}

function getBTGPricing(duration) {
    const pricing = {
        '1day': 'IDR 128,250 / $7.50',
        '7days': 'IDR 355,500 / $21.00',
        '30days': 'IDR 1,121,000 / $67.00'
    };
    return pricing[duration] || 'Select a duration for pricing';
}

function getAncientPricing(duration) {
    const pricing = {
        '1day': 'IDR 80,000 / $4.50',
        '7days': 'IDR 341,500 / $20.00',
        '30days': 'IDR 666,000 / $40.00'
    };
    return pricing[duration] || 'Select a duration for pricing';
}

function getLexyPricing(duration) {
    const pricing = {
        '1day': 'IDR 161,000 / $9.50',
        '7days': 'IDR 849,250 / $50.00',
        '30days': 'IDR 1,496,750 / $89.00'
    };
    return pricing[duration] || 'Select a duration for pricing';
}