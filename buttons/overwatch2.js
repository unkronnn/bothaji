const { EmbedBuilder } = require('discord.js');

module.exports = {
    id: 'overwatch2_menu',
    async execute(interaction) {
        await interaction.deferUpdate();

        try {
            const selectedValue = interaction.values[0];
            let embed;

            switch (selectedValue) {
                case 'mason_1day':
                case 'mason_7days':
                case 'mason_30days':
                    const duration = selectedValue.replace('mason_', '');
                    embed = createOverviewEmbed(duration);
                    break;
                case 'aimbot_features':
                    embed = createAimbotEmbed();
                    break;
                case 'visual_features':
                    embed = createVisualsEmbed();
                    break;
                case 'pricing_info':
                    embed = createPricingEmbed();
                    break;
                case 'overview':
                    embed = createOverviewEmbed();
                    break;
                default:
                    embed = createOverviewEmbed();
            }

            await interaction.followUp({ embeds: [embed], ephemeral: true });

        } catch (error) {
            console.error('Error in overwatch2 menu handler:', error);
            await interaction.followUp({
                content: '❌ | Failed to process your selection. Please try again later.',
                ephemeral: true
            });
        }
    },
};

function createOverviewEmbed(duration) {
    const pricing = duration ? getPricing(duration) : null;
    const pricingText = duration ? `**${duration.toUpperCase()}:** ${pricing}\n` : '';

    const embed = new EmbedBuilder()
        .setTitle('🎮 OVERWATCH 2 - MASON PREMIUM CHEAT')
        .setDescription(
            `🔥 **Mason Group Premium Solution** for Overwatch 2\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            pricingText +
            '🎯 **Professional-grade external cheat with advanced features!**\n\n' +
            '🚀 **Key Features:**\n' +
            '• Advanced Aimbot with vector targeting\n' +
            '• Visual ESP with 2D opponent detection\n' +
            '• StreamProof functionality\n' +
            '• Team change capabilities\n' +
            '• Customizable FOV and smoothness'
        )
        .setColor('#FF9500')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎯 AIMBOT CAPABILITIES',
                value: `• **Vector Aimbot** - Precise vector-based targeting\n` +
                       `• **FOV Control** - Customizable operation radius\n` +
                       `• **Smooth Adjustment** - Variable aiming smoothness\n` +
                       `• **Game Sensitivity** - Syncs with game settings\n` +
                       `• **Key Binding** - Hold-to-activate (selected keys only)`,
                inline: true
            },
            {
                name: '👁️ VISUAL FEATURES',
                value: `• **ESP Display** - 2D squares on opponents\n` +
                       `• **FOV Visualization** - Shows aimbot working radius\n` +
                       `• **Team Detection** - Opponent identification\n` +
                       `• **StreamProof** - Safe for streaming\n` +
                       `• **Quick Toggle** - "X" key for convenience`,
                inline: true
            },
            {
                name: '💰 PRICING OPTIONS',
                value: `**1 Day:** \`IDR 111,500 / $6.50\`\n` +
                       `**7 Days:** \`IDR 399,000 / $24.00\` ⭐ **Popular**\n` +
                       `**30 Days:** \`IDR 778,250 / $46.00\` ⭐ **Best Value**\n\n` +
                       `💡 **Try 1-day to test features before committing!**`,
                inline: false
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Yash Store • Mason Group • Premium Overwatch 2 Solutions',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createAimbotEmbed() {
    const embed = new EmbedBuilder()
        .setTitle('🎯 OVERWATCH 2 - ADVANCED AIMBOT FEATURES')
        .setDescription(
            `🔥 **Mason Group Premium Aimbot** for Overwatch 2\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            '🎯 **Industry-leading aimbot with precision targeting!**'
        )
        .setColor('#FF4500')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎯 AIMBOT CORE FEATURES',
                value: `• **Vector Aimbot** - Mathematical vector-based targeting\n` +
                       `• **Precision Accuracy** - Pixel-perfect targeting\n` +
                       `• **Hold-to-Activate** - Safety feature (key must be held)\n` +
                       `• **Customizable Keys** - Choose from provided key list\n` +
                       `• **Instant Response** - Zero latency targeting`,
                inline: false
            },
            {
                name: '⚙️ CUSTOMIZATION OPTIONS',
                value: `• **Aimbot FOV** - Set operation radius (degrees)\n` +
                       `• **Smooth Setting** - Adjust aiming smoothness (1-100)\n` +
                       `• **Sensitivity Sync** - Matches your game sensitivity\n` +
                       `• **Team Switch** - Change targeting team preference\n` +
                       `• **Quick Toggle** - Instant on/off capability`,
                inline: false
            },
            {
                name: '🎮 GAME INTEGRATION',
                value: `• **Steam Client** - Full Steam support\n` +
                       `• **Borderless Mode** - Compatible with borderless\n` +
                       `• **Windowed Mode** - Works in windowed display\n` +
                       `• **Any Game Mode** - All Overwatch 2 modes supported\n` +
                       `• **Real-time Updates** - Instant target tracking`,
                inline: false
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Mason Group • Professional Aimbot Technology • External Software',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createVisualsEmbed() {
    const embed = new EmbedBuilder()
        .setTitle('👁️ OVERWATCH 2 - VISUAL FEATURES')
        .setDescription(
            `🎨 **Mason Group Visual Enhancement** for Overwatch 2\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            '👁️ **Advanced visual detection with StreamProof technology!**'
        )
        .setColor('#00BFFF')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '🎨 ESP FEATURES',
                value: `• **Draw ESP** - 2D squares around opponents\n` +
                       `• **Opponent Detection** - Real-time enemy tracking\n` +
                       `• **Distance Calculation** - Know opponent proximity\n` +
                       `• **Team Identification** - Distinguish friend/foe\n` +
                       `• **Clean Display** - Minimal visual interference`,
                inline: false
            },
            {
                name: '🔍 VISUAL SETTINGS',
                value: `• **Draw FOV** - Visualize aimbot working radius\n` +
                       `• **FOV Circle** - See your targeting area\n` +
                       `• **Team Change** - Switch display preferences\n` +
                       `• **Quick Toggle** - "X" key for convenience\n` +
                       `• **Clean UI** - Non-intrusive display elements`,
                inline: false
            },
            {
                name: '🛡️ SAFETY FEATURES',
                value: `• **StreamProof** - Safe for live streaming\n` +
                       `• **Undetected** - External software\n` +
                       `• **Clean Visuals** - No obvious cheating indicators\n` +
                       `• **Instant Updates** - Real-time visual feedback\n` +
                       `• **Safe to Use** - Lower detection risk`,
                inline: false
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Mason Group • Visual Enhancement • StreamProof Technology',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function createPricingEmbed() {
    const embed = new EmbedBuilder()
        .setTitle('💰 OVERWATCH 2 - PRICING PACKAGES')
        .setDescription(
            `🔥 **Mason Group Overwatch 2 Cheat** - Choose Your Duration\n` +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
            '🎯 **Premium quality with competitive pricing!**'
        )
        .setColor('#FFD700')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '📅 SUBSCRIPTION OPTIONS',
                value: `**1 Day Trial**\n` +
                       `💰 **Price:** \`IDR 111,500 / $6.50\`\n` +
                       `🎯 **Perfect for:** Testing features\n` +
                       `⚡ **Instant Access:** Immediate activation\n\n` +
                       `**7 Day Package** ⭐ **Most Popular**\n` +
                       `💰 **Price:** \`IDR 399,000 / $24.00\`\n` +
                       `🎯 **Perfect for:** Weekly gaming sessions\n` +
                       `💎 **Best Value:** 66% savings vs daily\n\n` +
                       `**30 Day Package** ⭐ **Best Value**\n` +
                       `💰 **Price:** \`IDR 778,250 / $46.00\`\n` +
                       `🎯 **Perfect for:** Regular players\n` +
                       `🏆 **Maximum Savings:** 77% savings vs daily`,
                inline: false
            },
            {
                name: '📊 VALUE COMPARISON',
                value: `💡 **Recommendation:**\n` +
                       `• **New Users:** Start with 1-day trial\n` +
                       `• **Casual Players:** 7-day package offers best balance\n` +
                       `• **Regular Players:** 30-day package saves the most money\n\n` +
                       `🎯 **All packages include the same features - only duration differs!**`,
                inline: false
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Yash Store • Mason Group • Best Prices Guaranteed',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    return embed;
}

function getPricing(duration) {
    const pricing = {
        '1day': 'IDR 111,500 / $6.50',
        '7days': 'IDR 399,000 / $24.00',
        '30days': 'IDR 778,250 / $46.00'
    };
    return pricing[duration] || 'Select a duration for pricing';
}