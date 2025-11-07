const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const config = require('../config/config.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setdashboard')
        .setDescription('🎯 Setup live cheat status dashboard (Admin Only)')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('Channel untuk menampilkan dashboard status')
                .setRequired(true)
                .addChannelTypes(0) // Text channel
        ),
    async execute(interaction) {
        // Check if user has admin permissions
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({
                content: '❌ | Anda membutuhkan permission Administrator untuk menggunakan command ini.',
                ephemeral: true
            });
        }

        try {
            await interaction.deferReply({ ephemeral: true });

            const statusChannel = interaction.options.getChannel('channel');

            // Read or create status configuration
            const statusFile = path.join(__dirname, '../config/cheatStatusSimple.json');
            let statusData;

            if (!fs.existsSync(statusFile)) {
                statusData = {
                    dashboard: {
                        channelId: null,
                        messageId: null
                    },
                    products: {}
                };
            } else {
                statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
            }

            // Send initial dashboard embed
            const dashboardEmbed = createInitialDashboardEmbed();

            // Update dashboard configuration
            statusData.dashboard.channelId = statusChannel.id;

            // Send or update dashboard message
            let dashboardMessage;
            if (statusData.dashboard.messageId) {
                try {
                    dashboardMessage = await statusChannel.messages.fetch(statusData.dashboard.messageId);
                    await dashboardMessage.edit({ embeds: [dashboardEmbed] });
                } catch {
                    // Message not found, create new one
                    dashboardMessage = await statusChannel.send({ embeds: [dashboardEmbed] });
                }
            } else {
                dashboardMessage = await statusChannel.send({ embeds: [dashboardEmbed] });
            }

            statusData.dashboard.messageId = dashboardMessage.id;

            // Save configuration
            fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));

            const embed = new EmbedBuilder()
                .setTitle('✅ Dashboard Status Cheat Berhasil Diatur!')
                .setDescription(
                    `Dashboard live status telah berhasil diatur ke channel **${statusChannel}**.\n\n` +
                    `**Informasi Setup:**\n` +
                    `• **Channel Dashboard:** ${statusChannel}\n` +
                    `• **Status ID Pesan:** \`${dashboardMessage.id}\`\n` +
                    `• **Produk Terdaftar:** ${Object.keys(statusData.products).length} produk\n\n` +
                    `**Cara Penggunaan:**\n` +
                    `1. Gunakan \`/setup-produk [nama]\` di channel admin untuk menambah produk\n` +
                    `2. Gunakan tombol panel kontrol untuk mengubah status\n` +
                    `3. Dashboard akan otomatis update setiap ada perubahan status\n\n` +
                    `**Status Indikator:**\n` +
                    `🟢 **Safety** - Aman dan tersedia\n` +
                    `🟡 **Maintenance** - Sedang maintenance\n` +
                    `🔴 **Risk** - Berbahaya atau tidak tersedia`
                )
                .setColor('#00ff00')
                .addFields(
                    {
                        name: '🎯 Quick Start',
                        value: `Gunakan command \`/setup-produk [nama_produk]\` untuk menambahkan produk baru ke dashboard.`,
                        inline: false
                    },
                    {
                        name: '📊 Current Products',
                        value: Object.entries(statusData.products).map(([name, status]) => {
                            const emoji = getStatusEmoji(status);
                            return `${emoji} **${formatProductName(name)}**: ${status}`;
                        }).join('\n'),
                        inline: true
                    }
                )
                .setTimestamp()
                .setFooter({
                    text: 'Yash Store • Live Status System',
                    iconURL: interaction.client.user.displayAvatarURL()
                });

            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Error setting dashboard:', error);
            await interaction.editReply({
                content: '❌ | Gagal mengatur dashboard. Pastikan saya memiliki permission di channel tersebut.',
                ephemeral: true
            });
        }
    },
};

function createInitialDashboardEmbed() {
    const EmbedBuilder = require('discord.js').EmbedBuilder;

    return new EmbedBuilder()
        .setTitle('🔴 LIVE STATUS CHEAT')
        .setDescription(
            'Status ketersediaan cheat real-time • Update otomatis setiap ada perubahan'
        )
        .setColor('#ff0000')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .addFields(
            {
                name: '📊 Status Semua Produk',
                value: 'Menunggu produk pertama ditambahkan...\n\nGunakan `/setup-produk [nama]` untuk menambahkan produk ke dashboard.',
                inline: false
            },
            {
                name: '🎯 Cara Menambah Produk',
                value: 'Admin dapat menggunakan command:\n`/setup-produk [nama_produk]`\n\nContoh: `/setup-produk valorant`',
                inline: true
            },
            {
                name: '⚡ Quick Info',
                value: '• Status update otomatis\n• Admin panel kontrol tersedia\n• Real-time monitoring 24/7',
                inline: true
            }
        )
        .setTimestamp()
        .setFooter({
            text: 'Last Updated: ' + new Date().toLocaleString() + ' • Yash Store',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });
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
        'gtav': 'GTA V'
    };
    return names[productName] || productName.charAt(0).toUpperCase() + productName.slice(1);
}