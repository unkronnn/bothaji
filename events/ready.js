const { ActivityType, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');
const os = require('os');
const process = require('process');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    const statusMessages = [
      { name: 'Produk Digital', type: ActivityType.Watching },
      { name: 'Penjualan', type: ActivityType.Competing },
      { name: 'Stok Barang', type: ActivityType.Competing },
      { name: 'Pesanan', type: ActivityType.Listening },
      { name: 'Waktu Operasional', type: ActivityType.Watching },
      { name: 'Latensi API', type: ActivityType.Watching },
      { name: 'Metode Pembayaran', type: ActivityType.Watching },
      { name: 'Aktivitas Pengguna', type: ActivityType.Watching },
      { name: 'Lalu Lintas Jaringan', type: ActivityType.Watching },
      { name: 'Log Keamanan', type: ActivityType.Watching }
    ];

    client.user.setPresence({
      activities: [{ name: 'Starting up...', type: ActivityType.Playing }],
      status: 'online',
    });


    let currentStatusIndex = 0;

    const updateStatus = async () => {
      try {
        const guild = client.guilds.cache.get(config.guild.id);
        if (!guild) {
          console.log('Guild not found, skipping status update');
          return;
        }

        // Get member count without fetching to avoid API spam
        const memberCount = guild.memberCount || 0;

        // Ganti status secara bergantian
        const currentStatus = statusMessages[currentStatusIndex];
        client.user.setPresence({
          activities: [{
            name: `${currentStatus.name} | ${memberCount} members`,
            type: currentStatus.type,
          }],
          status: 'online',
        });

        currentStatusIndex = (currentStatusIndex + 1) % statusMessages.length;

      } catch (error) {
        // Silent error to avoid log spam
        console.log('Status update skipped:', error.message);
      }
    };

    // Fungsi logging boot process
    const logBootProcess = async () => {
      const bootEmbed = new EmbedBuilder()
        .setTitle('\`🚀\` Bot Initialization')
        .setColor(config.appearance.embedColor)
        .setTimestamp()
        .addFields(
          { 
            name: '\`🖥️\` System Information', 
            value: `
\`Platform\`: ${os.platform()}
\`Arch\`: ${os.arch()}
\`CPU Cores\`: ${os.cpus().length}
\`Total Memory\`: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB
            `, 
            inline: false 
          },
          { 
            name: '\`⚙️\` Process Details', 
            value: `
\`PID\`: ${process.pid}
\`Memory Usage\`: ${(process.memoryUsage().rss / (1024 * 1024)).toFixed(2)} MB
\`Node.js Version\`: ${process.version}
            `, 
            inline: false 
          },
          { 
            name: '\`🔌\` Discord Connection', 
            value: `
\`Bot Username\`: ${client.user.username}
\`Bot ID\`: ${client.user.id}
\`Guilds Connected\`: ${client.guilds.cache.size}
\`Channels Accessible\`: ${client.channels.cache.size}
            `, 
            inline: false 
          }
        )
        .setFooter({ text: 'Yuhuu, Bot is Online!' });

      try {
        const errorChannel = client.channels.cache.get(config.channels.error);
        if (errorChannel) {
          await errorChannel.send({ embeds: [bootEmbed] });
        }
      } catch (error) {
        console.error('Error sending boot log:', error);
      }
    };

    // Jalankan logging boot (jika error channel diatur)
    if (config.channels.error) {
      await logBootProcess();
    }

    // Jalankan update status pertama kali
    await updateStatus();

    // Perbarui status setiap 30 detik
    setInterval(updateStatus, 30 * 1000);

    // Update saat ada perubahan member
    client.on('guildMemberAdd', updateStatus);
    client.on('guildMemberRemove', updateStatus);
  },
};