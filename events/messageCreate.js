const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
  name: 'messageCreate',
  async execute(client, message) {
    // Ignore bot messages
    if (message.author.bot) return;

    // Check if message is in scam trap channel
    const scamTrapChannelId = config.channels.scamtrap;
    if (!scamTrapChannelId || message.channel.id !== scamTrapChannelId) return;

    // Get member and guild
    const member = message.member;
    const guild = message.guild;

    // Check if user has staff/admin role (exempt from timeout)
    const exemptRoles = [config.roles.staff, config.roles.access];
    if (member.roles.cache.some(role => exemptRoles.includes(role.id))) {
      // Send warning to staff instead of timeout
      const warningEmbed = new EmbedBuilder()
        .setColor('#FF9900')
        .setTitle('⚠️ Staff Alert: Scam Trap Triggered')
        .setDescription(`Staff member **${message.author.tag}** posted in scam trap channel!`)
        .addFields(
          { name: 'User', value: `<@${message.author.id}>`, inline: true },
          { name: 'Channel', value: `<#${message.channel.id}>`, inline: true },
          { name: 'Message Content', value: `\`\`\`${message.content.substring(0, 500)}${message.content.length > 500 ? '...' : ''}\`\`\`` }
        )
        .setTimestamp()
        .setFooter({ text: 'Scam Trap System' });

      // Send to error channel if available, otherwise send to same channel
      const errorChannel = client.channels.cache.get(config.channels.error);
      if (errorChannel) {
        await errorChannel.send({ embeds: [warningEmbed] });
      }

      return;
    }

    try {
      // Timeout the user (24 hours = 86400000 ms)
      await member.timeout(24 * 60 * 60 * 1000, 'Posting in scam trap channel');

      // Delete the original message
      await message.delete();

      // Delete user's recent messages from all channels (last 100 messages, last 24 hours)
      const twentyFourHoursAgo = Date.now() - (24 * 60 * 60 * 1000);
      const channels = guild.channels.cache.filter(c => c.type === 0 && c.permissionsFor(guild.members.me).has('ManageMessages')); // Only text channels where bot has permissions

      let totalDeleted = 0;
      for (const [channelId, channel] of channels) {
        try {
          // Fetch last 100 messages from each channel
          const messages = await channel.messages.fetch({ limit: 100 });
          const userMessages = messages.filter(m =>
            m.author.id === message.author.id &&
            m.createdTimestamp > twentyFourHoursAgo &&
            m.id !== message.id // Skip the already deleted message
          );

          if (userMessages.size > 0) {
            await channel.bulkDelete(userMessages, true);
            totalDeleted += userMessages.size;
          }
        } catch (error) {
          // Ignore errors for individual channels (e.g., permission issues)
          console.log(`Could not delete messages from channel ${channel.name}: ${error.message}`);
        }
      }

      // Create timeout notification
      const timeoutEmbed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('🚫 Scam Trap Activated! | Jebakan Scam Aktif!')
        .setDescription(`
🇬🇧 **ENGLISH:**
**User:** ${message.author.tag} (${message.author.id})
**Action:** Timeout (24 hours)
**Reason:** Posted in restricted scam trap channel
**Status:** ${totalDeleted + 1} messages deleted from all channels

🇮🇩 **BAHASA INDONESIA:**
**Pengguna:** ${message.author.tag} (${message.author.id})
**Aksi:** Timeout (24 jam)
**Alasan:** Posting di channel jebakan scam terlarang
**Status:** ${totalDeleted + 1} pesan dihapus dari semua channel
        `)
        .addFields(
          {
            name: '⚠️ Warning | Peringatan',
            value: `🇬🇧 This channel is a scam trap. Any messages posted here will result in automatic timeout.\n🇮🇩 Channel ini adalah jebakan scam. Setiap pesan yang diposting di sini akan mengakibatkan timeout otomatis.`
          },
          {
            name: '🔗 Appeal | Banding',
            value: `🇬🇧 Contact staff if this was a mistake.\n🇮🇩 Hubungi staff jika ini kesalahan.`
          }
        )
        .setTimestamp()
        .setFooter({
          text: `${config.server.name} - Security System | Sistem Keamanan`,
          iconURL: client.user.displayAvatarURL()
        })
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));

      // Send notification to the channel
      await message.channel.send({ embeds: [timeoutEmbed] });

      // Log to error channel if available
      const errorChannel = client.channels.cache.get(config.channels.error);
      if (errorChannel) {
        const logEmbed = new EmbedBuilder()
          .setColor('#FF3333')
          .setTitle('🔐 Security Log: Scam Trap Triggered')
          .setDescription('Automatic timeout executed')
          .addFields(
            { name: '👤 User', value: `${message.author.tag} (${message.author.id})`, inline: true },
            { name: '📅 Time', value: new Date().toLocaleString(), inline: true },
            { name: '⏱️ Duration', value: '24 hours', inline: true },
            { name: '📍 Channel', value: `<#${message.channel.id}>`, inline: true },
            { name: '💬 Message', value: `\`\`\`${message.content.substring(0, 300)}${message.content.length > 300 ? '...' : ''}\`\`\`` }
          )
          .setTimestamp()
          .setFooter({ text: 'Scam Trap System' });

        await errorChannel.send({ embeds: [logEmbed] });
      }

      console.log(`[SCAM TRAP] ${message.author.tag} timed out for 24 hours. Deleted ${totalDeleted + 1} total messages from all channels.`);

    } catch (error) {
      console.error('Error in scam trap handler:', error);

      // Send error notification if available
      const errorChannel = client.channels.cache.get(config.channels.error);
      if (errorChannel) {
        const errorEmbed = new EmbedBuilder()
          .setColor('#FF0000')
          .setTitle('❌ Scam Trap Error')
          .setDescription(`Failed to timeout user: ${message.author.tag}`)
          .addFields(
            { name: 'Error', value: error.message },
            { name: 'User ID', value: message.author.id }
          )
          .setTimestamp();

        await errorChannel.send({ embeds: [errorEmbed] });
      }
    }
  },
};