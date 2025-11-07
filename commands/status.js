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

            if (!fs.existsSync(statusFile)) {
                await interaction.editReply({
                    content: '❌ | Status system not configured. Use `/setupstatus` first.',
                    ephemeral: true
                });
                return;
            }

            let statusData;
            try {
                statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
            } catch (error) {
                console.error('Error parsing cheat status file:', error);
                await interaction.editReply({
                    content: '❌ | Status data corrupted. Please contact admin.',
                    ephemeral: true
                });
                return;
            }

            // Validate status data structure
            if (!statusData || typeof statusData !== 'object') {
                await interaction.editReply({
                    content: '❌ | Invalid status data format.',
                    ephemeral: true
                });
                return;
            }

            const embed = createStatusEmbed(statusData, interaction.client);

            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Error in status command:', error);
            await interaction.editReply({
                content: '❌ | Failed to load cheat status. Please try again later.\nError: ' + error.message,
                ephemeral: true
            });
        }
    },
};

function createStatusEmbed(statusData) {
    let allAvailable = 0;
    let totalCheats = 0;
    const statusCounts = {
        available: 0,
        maintenance: 0,
        out_of_stock: 0,
        limited_stock: 0
    };

    const gameStatus = {}; // Track status per game for simplified display

    // Calculate statistics and game status
    for (const [game, cheats] of Object.entries(statusData)) {
        if (game === 'globalSettings') continue;

        const gameStats = {
            available: 0,
            maintenance: 0,
            out_of_stock: 0,
            limited_stock: 0,
            total: 0
        };

        for (const [cheat, info] of Object.entries(cheats)) {
            totalCheats++;
            gameStats.total++;
            if (info.status === 'available') {
                allAvailable++;
                gameStats.available++;
            }
            statusCounts[info.status] = (statusCounts[info.status] || 0) + 1;
            gameStats[info.status]++;
        }

        gameStatus[game] = gameStats;
    }

    const successRate = totalCheats > 0 ? Math.round((allAvailable/totalCheats) * 100) : 0;

    // Set embed color based on overall availability
    let overallColor;
    let overallStatusEmoji;
    if (successRate >= 80) {
        overallColor = '#00ff00'; // Green
        overallStatusEmoji = '🟢';
    } else if (successRate >= 60) {
        overallColor = '#ffaa00'; // Yellow
        overallStatusEmoji = '🟡';
    } else {
        overallColor = '#ff0000'; // Red
        overallStatusEmoji = '🔴';
    }

    const embed = new EmbedBuilder()
        .setTitle(`${overallStatusEmoji} YASH STORE - COMPREHENSIVE STATUS MONITOR`)
        .setDescription(
            `🚀 **Real-time cheat availability** • Automatic updates • ${totalCheats} products monitored across ${Object.keys(gameStatus).length} games\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        )
        .setColor(overallColor)
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .setTimestamp()
        .setFooter({
            text: `Last Update: ${new Date().toLocaleString()} • Auto-refresh • Yash Store Premium`,
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    // Simplified Game Status Overview
    const gameStatusLines = [];
    for (const [game, stats] of Object.entries(gameStatus)) {
        const gameName = formatGameName(game);
        const gameSuccessRate = Math.round((stats.available / stats.total) * 100);

        let statusEmoji;
        if (gameSuccessRate >= 80) {
            statusEmoji = '🟢';
        } else if (gameSuccessRate >= 60) {
            statusEmoji = '🟡';
        } else {
            statusEmoji = '🔴';
        }

        gameStatusLines.push(`${statusEmoji} **${gameName}**: ${stats.available}/${stats.total} available (${gameSuccessRate}%)`);
    }

    embed.addFields(
        {
            name: '📊 **GAME STATUS OVERVIEW**',
            value: gameStatusLines.join('\n'),
            inline: false
        },
        {
            name: '📈 **SYSTEM STATISTICS**',
            value: `✅ **Available:** ${statusCounts.available} products\n` +
                   `🔧 **Maintenance:** ${statusCounts.maintenance} products\n` +
                   `❌ **Out of Stock:** ${statusCounts.out_of_stock} products\n` +
                   `⚠️ **Limited Stock:** ${statusCounts.limited_stock} products\n\n` +
                   `🎯 **Overall Success Rate:** ${successRate}% (${allAvailable}/${totalCheats})`,
            inline: true
        },
        {
            name: '⚙️ **SYSTEM PERFORMANCE**',
            value: `🔄 **Next Update:** <t:${Math.floor(Date.now() / 1000) + 120}:R>\n` +
                   `⚡ **Update Speed:** Instant\n` +
                   `🕐 **Interval:** Every 2 minutes\n` +
                   `🌟 **System Health:** Online`,
            inline: true
        }
    );

    // Special alerts section
    const alerts = [];
    if (statusCounts.limited_stock > 0) {
        alerts.push(`🔥 **LIMITED STOCK FLASH SALE!**\n${statusCounts.limited_stock} products with limited availability - Act fast!`);
    }
    if (statusCounts.maintenance > 0) {
        alerts.push(`🔧 **MAINTENANCE IN PROGRESS**\n${statusCounts.maintenance} products temporarily unavailable - Updates incoming`);
    }
    if (successRate < 50) {
        alerts.push(`⚠️ **LOW AVAILABILITY WARNING**\nHigh demand detected - Check back soon for restocks`);
    }

    if (alerts.length > 0) {
        embed.addFields({
            name: '🚨 **ACTIVE ALERTS**',
            value: alerts.join('\n\n'),
            inline: false
        });
    }

    // Quick commands reference
    embed.addFields({
        name: '💡 **QUICK COMMANDS**',
        value: `• **\`/status\`** - View this detailed status\n` +
               `• **Admin Panel** - Status control buttons\n` +
               `• **Auto-updates** - No manual refresh needed\n` +
               `• **Total Games**: ${Object.keys(gameStatus).length} • **Total Products**: ${totalCheats}`,
        inline: false
    });

    return embed;
}

function formatGameName(game) {
    const names = {
        'marvelrivals': 'Marvel Rivals',
        'huntshowdown': 'Hunt Showdown',
        'hellletloose': 'Hell Let Loose',
        'honkaistarrail': 'Honkai Star Rail',
        'fortnite': 'Fortnite',
        'apexlegends': 'Apex Legends',
        'cs2': 'CS2',
        'dayz': 'DayZ',
        'deadbydaylight': 'Dead By Daylight',
        'gtav': 'GTA V',
        'valorant': 'Valorant',
        'pubg': 'PUBG',
        'dota2': 'Dota 2',
        'warzone': 'Warzone',
        'bo7': 'Black Ops 7',
        'arenabreakout': 'Arena Breakout',
        'deltaforce': 'Delta Force',
        'deadlock': 'Deadlock',
        'fragpunk': 'Fragpunk',
        'mobilegames': 'Mobile Games',
        'genshinimpact': 'Genshin Impact',
        'fivem': 'FiveM',
        'callofduty': 'Call of Duty',
        'arcraiders': 'Arc Raiders',
        'battlefield': 'Battlefield',
        'spoofer': 'HWID Spoofer',
        'tools': 'Tools & Utilities',
        'othergames': 'Other Games',
        'dma': 'DMA Hardware',
        'escapefromtarkov': 'Escape From Tarkov'
    };
    return names[game] || game.charAt(0).toUpperCase() + game.slice(1);
}