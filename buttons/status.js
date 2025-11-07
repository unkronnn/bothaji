const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    customId: 'status:*',
    async execute(interaction) {
        // Check if user has admin permissions
        if (!interaction.member.permissions.has('Administrator')) {
            return interaction.reply({
                content: '❌ | Anda membutuhkan permission Administrator untuk menggunakan tombol ini.',
                ephemeral: true
            });
        }

        try {
            await interaction.deferReply({ ephemeral: true });

            // Parse the customId: "status:action:productname"
            const parts = interaction.customId.split(':');
            if (parts.length !== 3) {
                return interaction.editReply({
                    content: '❌ | Format tombol tidak valid.',
                    ephemeral: true
                });
            }

            const action = parts[1]; // safety, maintenance, risk
            const productName = parts[2]; // product name

            // Validate action
            const validActions = ['safety', 'maintenance', 'risk'];
            if (!validActions.includes(action)) {
                return interaction.editReply({
                    content: '❌ | Aksi tidak valid.',
                    ephemeral: true
                });
            }

            // Read status configuration
            const statusFile = path.join(__dirname, '../config/cheatStatusSimple.json');

            if (!fs.existsSync(statusFile)) {
                return interaction.editReply({
                    content: '❌ | Sistem status belum diatur. Gunakan `/setdashboard` terlebih dahulu.',
                    ephemeral: true
                });
            }

            let statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));

            // Check if product exists
            if (!statusData.products[productName]) {
                return interaction.editReply({
                    content: `❌ | Produk **${formatProductName(productName)}** tidak ditemukan di sistem.`,
                    ephemeral: true
                });
            }

            const oldStatus = statusData.products[productName];
            statusData.products[productName] = action;

            // Save configuration
            fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));

            // Create confirmation embed
            const confirmEmbed = new EmbedBuilder()
                .setTitle('✅ Status Updated Successfully!')
                .setDescription(
                    `Status for **${formatProductName(productName)}** has been successfully updated.\n\n` +
                    `**Previous Status:** ${getStatusEmoji(oldStatus)} ${oldStatus}\n` +
                    `**New Status:** ${getStatusEmoji(action)} ${action}`
                )
                .setColor(getStatusColor(action))
                .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
                .addFields(
                    {
                        name: '🔄 Update Information',
                        value: `• **Product:** ${formatProductName(productName)}\n` +
                               `• **Status:** ${action}\n` +
                               `• **Time:** ${new Date().toLocaleString()}\n` +
                               `• **Admin:** ${interaction.user.tag}`,
                        inline: false
                    },
                    {
                        name: '📊 Dashboard Update',
                        value: 'The status dashboard will automatically update within a few seconds.',
                        inline: false
                    },
                    {
                        name: '📈 Status Impact',
                        value: getStatusDescription(action),
                        inline: true
                    },
                    {
                        name: '⚡ Quick Actions',
                        value: '• Use `/status` to view all statuses\n' +
                               '• Click status buttons to modify\n' +
                               '• Dashboard updates automatically',
                        inline: true
                    }
                )
                .setTimestamp()
                .setFooter({
                    text: 'Yash Store • Advanced Status Control System',
                    iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
                });

            await interaction.editReply({ embeds: [confirmEmbed] });

            // Update dashboard
            await updateDashboard(interaction.client);

            console.log(`[✅] Status updated: ${productName} -> ${action} by ${interaction.user.tag}`);

        } catch (error) {
            console.error('Error updating status:', error);
            await interaction.editReply({
                content: '❌ | Gagal memperbarui status. Error: ' + error.message,
                ephemeral: true
            });
        }
    }
};

async function updateDashboard(client) {
    try {
        const statusFile = path.join(__dirname, '../config/cheatStatusSimple.json');

        if (!fs.existsSync(statusFile)) {
            return;
        }

        const statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));

        if (!statusData.dashboard.channelId || !statusData.dashboard.messageId) {
            return;
        }

        const channel = await client.channels.fetch(statusData.dashboard.channelId).catch(() => null);
        if (!channel) {
            console.log('Dashboard channel not found');
            return;
        }

        const message = await channel.messages.fetch(statusData.dashboard.messageId).catch(() => null);
        if (!message) {
            console.log('Dashboard message not found');
            return;
        }

        // Create updated dashboard embed
        const products = statusData.products;
        const statusCounts = {
            safety: 0,
            maintenance: 0,
            risk: 0,
            total: 0
        };

        for (const [name, status] of Object.entries(products)) {
            statusCounts[status] = (statusCounts[status] || 0) + 1;
            statusCounts.total++;
        }

        // Recalculate successRate
        successRate = Math.round((statusCounts.safety / statusCounts.total) * 100);

        // Determine overall status
        let overallColor;
        let overallStatus;
        if (successRate >= 80) {
            overallColor = '#00ff00';
            overallStatus = '🟢 ALL SAFE';
        } else if (successRate >= 50) {
            overallColor = '#ffaa00';
            overallStatus = '🟡 PARTIAL';
        } else {
            overallColor = '#ff0000';
            overallStatus = '🔴 SOME RISK';
        }

        // Use the same simplified format as the auto-update system
        const gameStatus = {};
        // Reset statusCounts
        statusCounts.safety = 0;
        statusCounts.maintenance = 0;
        statusCounts.risk = 0;
        statusCounts.total = 0;

        // Calculate statistics per game for simplified display
        for (const [product, status] of Object.entries(products)) {
            statusCounts[status] = (statusCounts[status] || 0) + 1;
            statusCounts.total++;
        }

        // Recalculate successRate
        successRate = Math.round((statusCounts.safety / statusCounts.total) * 100);

        // Create simplified dashboard embed matching the auto-update format
        const dashboardEmbed = new EmbedBuilder()
            .setTitle(`🎮 YASH STORE - LIVE STATUS MONITOR`)
            .setDescription(
                `🚀 **Real-time cheat availability** • Automatic updates • ${statusCounts.total} products monitored\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
            )
            .setColor(overallColor)
            .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
            .addFields(
                {
                    name: '📊 **PRODUCT STATUS OVERVIEW**',
                    value: Object.entries(products).map(([name, status]) => {
                        const emoji = getStatusEmoji(status);
                        const formattedName = formatProductName(name);
                        const statusText = status.charAt(0).toUpperCase() + status.slice(1);
                        return `${emoji} **${formattedName}**: ${statusText}`;
                    }).join('\n'),
                    inline: false
                },
                {
                    name: '📈 **SYSTEM STATISTICS**',
                    value: `🟢 **Safety:** ${statusCounts.safety} products\n` +
                           `🟡 **Maintenance:** ${statusCounts.maintenance} products\n` +
                           `🔴 **Risk:** ${statusCounts.risk} products\n\n` +
                           `🎯 **Success Rate:** ${successRate}% (${statusCounts.safety}/${statusCounts.total})`,
                    inline: true
                },
                {
                    name: '⚙️ **SYSTEM PERFORMANCE**',
                    value: `🔄 **Next Update:** <t:${Math.floor(Date.now() / 1000) + 120}:R>\n` +
                           `⚡ **Update Speed:** Instant\n` +
                           `🕐 **Interval:** Every 2 minutes\n` +
                           `🌟 **System Health:** ${getSystemHealth(successRate)}`,
                    inline: true
                },
                {
                    name: '🎯 **STATUS LEGEND**',
                    value: `🟢 **Safety** - All systems operational\n` +
                           `🟡 **Maintenance** - Temporary updates in progress\n` +
                           `🔴 **Risk** - Attention required\n\n` +
                           `💡 **Tip**: Use admin control buttons to change status instantly`,
                    inline: false
                },
                {
                    name: '💡 **QUICK ACTIONS**',
                    value: `• **Status Updates**: Automatic every 2 minutes\n` +
                           `• **Manual Control**: Admin buttons available\n` +
                           `• **View Details**: Use \`/status\` command\n` +
                           `• **Real-time**: Instant changes when updated`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({
                text: `Last Update: ${new Date().toLocaleString()} • Auto-refresh • Yash Store Premium`,
                iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
            });

        await message.edit({ embeds: [dashboardEmbed] });
        console.log(`[✅] Dashboard updated successfully at ${new Date().toLocaleTimeString()}`);

    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

function getStatusEmoji(status) {
    const emojis = {
        'safety': '🟢',
        'maintenance': '🟡',
        'risk': '🔴',
        'out_of_stock': '❌',
        'available': '✅'
    };
    return emojis[status] || '❓';
}

function getStatusColor(status) {
    const colors = {
        'safety': '#00ff00',
        'maintenance': '#ffaa00',
        'risk': '#ff0000',
        'out_of_stock': '#ff0000',
        'available': '#00ff00'
    };
    return colors[status] || '#808080';
}

function getStatusDescription(status) {
    const descriptions = {
        'safety': '✅ All systems operational and safe to use',
        'maintenance': '🔧 Temporary updates and improvements in progress',
        'risk': '⚠️ Attention required - use with caution'
    };
    return descriptions[status] || '❓ Status unknown';
}

function getSystemHealth(successRate) {
    if (successRate >= 90) return '🟢 Excellent';
    if (successRate >= 75) return '🟡 Good';
    if (successRate >= 50) return '🟠 Fair';
    return '🔴 Poor';
}

function formatProductName(productName) {
    const names = {
        'marvelrivals': 'Marvel Rivals',
        'huntshowdown': 'Hunt Showdown',
        'hellletloose': 'Hell Let Loose',
        'honkaistarrail': 'Honkai Star Rail',
        'fortnite': 'Fortnite',
        'pubg': 'PUBG',
        'escapefromtarkov': 'Escape From Tarkov',
        'deadbydaylight': 'Dead By Daylight',
        'gtav': 'GTA V',
        'valorant': 'Valorant',
        'apexlegends': 'Apex Legends',
        'cs2': 'CS2',
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
        'dayz': 'DayZ'
    };
    return names[productName] || productName.charAt(0).toUpperCase() + productName.slice(1);
}