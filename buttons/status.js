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
                .setTitle('✅ Status Berhasil Diperbarui!')
                .setDescription(
                    `Status untuk **${formatProductName(productName)}** telah berhasil diubah.\n\n` +
                    `**Status Lama:** ${getStatusEmoji(oldStatus)} ${oldStatus}\n` +
                    `**Status Baru:** ${getStatusEmoji(action)} ${action}`
                )
                .setColor('#00ff00')
                .addFields(
                    {
                        name: '🔄 Update Information',
                        value: `• **Produk:** ${formatProductName(productName)}\n` +
                               `• **Status:** ${action}\n` +
                               `• **Waktu:** ${new Date().toLocaleString()}\n` +
                               `• **Admin:** ${interaction.user.tag}`,
                        inline: false
                    },
                    {
                        name: '📊 Dashboard Update',
                        value: 'Dashboard status akan otomatis diperbarui dalam beberapa detik.',
                        inline: false
                    }
                )
                .setTimestamp()
                .setFooter({
                    text: 'Yash Store • Status Control System',
                    iconURL: interaction.client.user.displayAvatarURL()
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

        const successRate = Math.round((statusCounts.safety / statusCounts.total) * 100);

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

        const dashboardEmbed = new EmbedBuilder()
            .setTitle(`🔴 LIVE STATUS CHEAT - ${overallStatus}`)
            .setDescription(
                'Status ketersediaan cheat real-time • Update otomatis setiap ada perubahan'
            )
            .setColor(overallColor)
            .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
            .addFields(
                {
                    name: '📊 Status Produk (' + statusCounts.total + ' produk)',
                    value: Object.entries(products).map(([name, status]) => {
                        const emoji = getStatusEmoji(status);
                        return `${emoji} **${formatProductName(name)}**: ${status}`;
                    }).join('\n'),
                    inline: false
                },
                {
                    name: '📈 Statistik',
                    value: `🟢 Safety: ${statusCounts.safety}\n` +
                           `🟡 Maintenance: ${statusCounts.maintenance}\n` +
                           `🔴 Risk: ${statusCounts.risk}\n\n` +
                           `**Success Rate:** ${successRate}% (${statusCounts.safety}/${statusCounts.total})`,
                    inline: true
                },
                {
                    name: '⚡ Quick Info',
                    value: `• Status update otomatis\n` +
                           `• Admin panel kontrol tersedia\n` +
                           `• Real-time monitoring 24/7\n` +
                           `• Total products: ${statusCounts.total}`,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter({
                text: 'Last Updated: ' + new Date().toLocaleString() + ' • Success Rate: ' + successRate + '% • Yash Store',
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

function formatProductName(productName) {
    const names = {
        'marvelrivals': 'Marvel Rivals',
        'huntshowdown': 'Hunt Showdown',
        'hellletloose': 'Hell Let Loose',
        'honkaistarrail': 'Honkai Star Rail',
        'dayz': 'DayZ',
        'fortnite': 'Fortnite',
        'pubg': 'PUBG',
        'escapefromtarkov': 'Escape From Tarkov',
        'deadbydaylight': 'Dead By Daylight',
        'gtav': 'GTA V',
        'valorant': 'Valorant',
        'mlbb': 'Mobile Legends',
        'cod': 'Call of Duty',
        'apex': 'Apex Legends',
        'overwatch': 'Overwatch 2',
        'csgo': 'CS:GO',
        'dota': 'Dota 2',
        'lol': 'League of Legends'
    };
    return names[productName] || productName.charAt(0).toUpperCase() + productName.slice(1);
}