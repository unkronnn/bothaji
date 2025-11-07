const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const config = require('../config/config.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setupproduk')
        .setDescription('🎯 Setup produk untuk status monitoring (Admin Only)')
        .addStringOption(option =>
            option.setName('nama')
                .setDescription('Nama produk (contoh: valorant, mlbb, pubg)')
                .setRequired(true)
        ),
    async execute(interaction) {
        // Check if user has admin permissions
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({
                content: '❌ | Anda membutuhkan permission Administrator untuk menggunakan command ini.',
                ephemeral: true
            });
        }

        // Check if this command is used in the right channel (admin channel)
        // You can customize this - currently allows any channel for demo purposes
        // In production, uncomment the line below and set your admin channel ID
        /*
        if (interaction.channel.id !== 'YOUR_ADMIN_CHANNEL_ID') {
            return interaction.reply({
                content: '❌ | Command ini hanya bisa digunakan di channel admin.',
                ephemeral: true
            });
        }
        */

        try {
            await interaction.deferReply();

            const productName = interaction.options.getString('nama').toLowerCase().replace(/[^a-z0-9]/g, '');

            if (productName.length < 2) {
                return interaction.editReply({
                    content: '❌ | Nama produk terlalu pendek. Minimal 2 karakter.',
                    ephemeral: true
                });
            }

            // Read status configuration
            const statusFile = path.join(__dirname, '../config/cheatStatusSimple.json');
            let statusData;

            if (!fs.existsSync(statusFile)) {
                return interaction.editReply({
                    content: '❌ | Dashboard belum diatur. Gunakan `/setdashboard` terlebih dahulu.',
                    ephemeral: true
                });
            }

            statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));

            // Check if product already exists
            if (statusData.products[productName]) {
                const embed = new EmbedBuilder()
                    .setTitle('⚠️ Produk Sudah Ada')
                    .setDescription(
                        `Produk **${formatProductName(productName)}** sudah terdaftar di sistem.\n\n` +
                        `**Status Saat Ini:** ${getStatusEmoji(statusData.products[productName])} ${statusData.products[productName]}\n\n` +
                        `Gunakan tombol kontrol panel yang sudah ada untuk mengubah status, atau hapus produk terlebih dahulu jika ingin membuat ulang.`
                    )
                    .setColor('#ffaa00')
                    .addFields(
                        {
                            name: '💡 Opsi',
                            value: '• Klik tombol di panel kontrol untuk mengubah status\n' +
                                   '• Gunakan `/hapusproduk ' + productName + '` untuk menghapus produk',
                            inline: false
                        }
                    )
                    .setTimestamp()
                    .setFooter({
                        text: 'Yash Store • Product Management',
                        iconURL: interaction.client.user.displayAvatarURL()
                    });

                // Create buttons for existing product
                const buttons = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId(`status:safety:${productName}`)
                        .setLabel('🟢 Safety')
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId(`status:maintenance:${productName}`)
                        .setLabel('🟡 Maintenance')
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId(`status:risk:${productName}`)
                        .setLabel('🔴 Risk')
                        .setStyle(ButtonStyle.Danger)
                );

                await interaction.editReply({ embeds: [embed], components: [buttons], ephemeral: true });

            } else {
                // Add new product to system
                statusData.products[productName] = 'maintenance'; // Default status

                // Save configuration
                fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));

                // Create product control panel
                const embed = new EmbedBuilder()
                    .setTitle(`🎯 Kontrol Panel: ${formatProductName(productName)}`)
                    .setDescription(
                        `Panel kontrol untuk mengubah status produk **${formatProductName(productName)}**.\n\n` +
                        `**Status Saat Ini:** 🟡 Maintenance`
                    )
                    .setColor('#ffaa00')
                    .addFields(
                        {
                            name: '📊 Informasi',
                            value: '• Pilih tombol di bawah untuk mengubah status\n' +
                                   '• Status akan otomatis update di dashboard\n' +
                                   '• Bot akan konfirmasi perubahan status',
                            inline: false
                        },
                        {
                            name: '⚙️ Status Options',
                            value: `🟢 **Safety** - Produk aman dan tersedia\n` +
                                   `🟡 **Maintenance** - Sedang dalam maintenance\n` +
                                   `🔴 **Risk** - Berbahaya atau tidak tersedia`,
                            inline: false
                        }
                    )
                    .setTimestamp()
                    .setFooter({
                        text: 'Yash Store • Control Panel • Created at ' + new Date().toLocaleString(),
                        iconURL: interaction.client.user.displayAvatarURL()
                    });

                const buttons = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId(`status:safety:${productName}`)
                        .setLabel('🟢 Safety')
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId(`status:maintenance:${productName}`)
                        .setLabel('🟡 Maintenance')
                        .setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
                        .setCustomId(`status:risk:${productName}`)
                        .setLabel('🔴 Risk')
                        .setStyle(ButtonStyle.Danger)
                );

                await interaction.editReply({ embeds: [embed], components: [buttons] });

                // Update dashboard
                await updateDashboard(interaction.client);
            }

        } catch (error) {
            console.error('Error setting up product:', error);
            await interaction.editReply({
                content: '❌ | Gagal mengatur produk. Error: ' + error.message,
                ephemeral: true
            });
        }
    },
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