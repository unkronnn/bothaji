const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('📊 Check real-time cheat availability status'),
    async execute(interaction) {
        try {
            await interaction.deferReply();

            // Read status data
            const statusFile = path.join(__dirname, '../config/cheatStatus.json');
            let statusData;

            try {
                statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
            } catch (error) {
                // Fallback if file doesn't exist
                statusData = {
                    globalSettings: {
                        autoUpdate: true,
                        updateInterval: 300000
                    }
                };
            }

            const embed = createStatusEmbed(statusData, interaction.client);

            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Error in status command:', error);
            await interaction.editReply({
                content: '❌ | Failed to load cheat status. Please try again later.',
                ephemeral: true
            });
        }
    },
};

function createStatusEmbed(statusData, client) {
    let allAvailable = 0;
    let totalCheats = 0;
    const statusCounts = {
        available: 0,
        maintenance: 0,
        out_of_stock: 0,
        limited_stock: 0
    };

    const embed = new EmbedBuilder()
        .setTitle('🎮 Yash Store - Live Cheat Status')
        .setDescription('Real-time availability status for all game cheats. Updates automatically every 5 minutes.')
        .setColor('#0099ff')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .setTimestamp()
        .setFooter({
            text: 'Last updated: ' + new Date().toLocaleString() + ' • Refresh with /status',
            iconURL: client.user.displayAvatarURL()
        });

    // Process each game category
    for (const [game, cheats] of Object.entries(statusData)) {
        if (game === 'globalSettings') continue;

        const gameFields = [];
        for (const [cheat, info] of Object.entries(cheats)) {
            totalCheats++;
            if (info.status === 'available') allAvailable++;
            statusCounts[info.status] = (statusCounts[info.status] || 0) + 1;

            // Format the cheat status line
            const lastUpdate = info.lastCheck ? new Date(info.lastCheck).toLocaleDateString() : 'Unknown';
            gameFields.push(
                `${getStatusEmoji(info.status)} **${formatCheatName(cheat)}**\n` +
                `└ _${info.message}_ • *Updated: ${lastUpdate}*`
            );
        }

        if (gameFields.length > 0) {
            embed.addFields({
                name: `🎮 ${formatGameName(game)}`,
                value: gameFields.join('\n\n'),
                inline: false
            });
        }
    }

    // Add summary statistics
    const successRate = totalCheats > 0 ? Math.round((allAvailable/totalCheats) * 100) : 0;

    // Set embed color based on overall availability
    let overallColor;
    let overallStatus;
    if (successRate >= 80) {
        overallColor = '#00ff00'; // Green
        overallStatus = '✅ Most Cheats Available';
    } else if (successRate >= 60) {
        overallColor = '#ffaa00'; // Yellow
        overallStatus = '⚠️ Some Cheats Unavailable';
    } else {
        overallColor = '#ff0000'; // Red
        overallStatus = '❌ Many Cheats Unavailable';
    }

    embed.setColor(overallColor);

    // Add summary and statistics
    embed.addFields(
        {
            name: `📊 ${overallStatus}`,
            value: `**Success Rate:** ${successRate}%\n` +
                   `**Available:** ${statusCounts.available} / ${totalCheats} cheats\n` +
                   `**Status Distribution:**\n` +
                   `${getStatusEmoji('available')} Available: ${statusCounts.available}\n` +
                   `${getStatusEmoji('maintenance')} Maintenance: ${statusCounts.maintenance}\n` +
                   `${getStatusEmoji('out_of_stock')} Out of Stock: ${statusCounts.out_of_stock}\n` +
                   `${getStatusEmoji('limited_stock')} Limited: ${statusCounts.limited_stock}`,
            inline: true
        },
        {
            name: 'ℹ️ Information',
            value: `**Last Check:** ${new Date().toLocaleString()}\n` +
                   `**Auto-Update:** ${statusData.globalSettings?.autoUpdate ? 'Enabled' : 'Disabled'}\n` +
                   `**Update Interval:** Every 5 minutes\n` +
                   `**Status Source:** Live monitoring`,
            inline: true
        }
    );

    // Add legend and help information
    embed.addFields(
        {
            name: '🔔 Notifications',
            value: `• Status updates are real-time\n` +
                   `• Maintenance usually lasts 1-3 hours\n` +
                   `• Out of stock items restock regularly\n` +
                   `• Limited stock sells out quickly`,
            inline: false
        },
        {
            name: '💡 Quick Tips',
            value: `• Use \`/status\` to check live availability\n` +
                   `• Contact staff for restock notifications\n` +
                   `• Check back frequently for updates\n` +
                   `• Available cheats are ready for instant delivery`,
            inline: false
        }
    );

    // Add promotion or important notice
    if (statusCounts.limited_stock > 0) {
        embed.addFields(
            {
                name: '🚨 Limited Stock Alert!',
                value: `${getStatusEmoji('limited_stock')} **${statusCounts.limited_stock} cheat(s)** currently have limited stock available. Purchase now before they run out!`,
                inline: false
            }
        );
    }

    if (statusCounts.maintenance > 0) {
        embed.addFields(
            {
                name: '🔧 Maintenance Notice',
                value: `${getStatusEmoji('maintenance')} **${statusCounts.maintenance} cheat(s)** are currently under maintenance for updates and improvements.`,
                inline: false
            }
        );
    }

    return embed;
}

function getStatusEmoji(status) {
    const emojis = {
        available: '✅',
        maintenance: '🔧',
        out_of_stock: '❌',
        limited_stock: '⚠️'
    };
    return emojis[status] || '❓';
}

function formatCheatName(cheat) {
    const names = {
        'byster_marvelrivals': 'Byster',
        'unicore_marvelrivals': 'Unicore',
        'ancient_marvelrivals': 'Ancient',
        'stern_marvelrivals': 'Stern',
        'bc_marvelrivals': 'BC',
        'lexy_marvelrivals': 'Lexy',
        'pussycat_marvelrivals': 'PussyCat',
        'smg_marvelrivals': 'SMG',
        'phoenix_huntshowdown': 'Phoenix',
        'lexy_huntshowdown': 'Lexy',
        'ancient_huntshowdown': 'Ancient',
        'stern_huntshowdown': 'Stern',
        'mason_huntshowdown': 'Mason',
        'smg_huntshowdown': 'SMG',
        'lexy_hll': 'Lexy',
        'stern_hll': 'Stern',
        'pussycat_hll': 'PussyCat',
        'mason_hll': 'Mason',
        'smg_hll': 'SMG',
        'unicore_honkaistarrail': 'Unicore'
    };
    return names[cheat] || cheat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatGameName(game) {
    const names = {
        'marvelrivals': 'Marvel Rivals',
        'huntshowdown': 'Hunt: Showdown',
        'hellletloose': 'Hell Let Loose',
        'honkaistarrail': 'Honkai: Star Rail'
    };
    return names[game] || game.charAt(0).toUpperCase() + game.slice(1);
}