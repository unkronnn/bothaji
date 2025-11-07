const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('scamtrap')
    .setDescription('🚫 | Setup or manage scam trap system')
    .addSubcommand(subcommand =>
      subcommand
        .setName('setup')
        .setDescription('Setup scam trap channel')
        .addChannelOption(option =>
          option.setName('channel')
            .setDescription('Select channel to be scam trap')
            .setRequired(true)))
    .addSubcommand(subcommand =>
      subcommand
        .setName('disable')
        .setDescription('Disable scam trap system'))
    .addSubcommand(subcommand =>
      subcommand
        .setName('info')
        .setDescription('Show scam trap system status'))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const allowedRoles = config.roles.allowedRoles;
    const memberRoles = interaction.member.roles.cache;

    // Check role permissions
    if (!memberRoles.some(role => allowedRoles.includes(role.id))) {
      return interaction.reply({
        content: '`❌` | Oops! You do not have permission to use this command.',
        flags: [64]
      });
    }

    const subcommand = interaction.options.getSubcommand();

    if (subcommand === 'setup') {
      const channel = interaction.options.getChannel('channel');

      // Validate channel
      if (!channel) {
        return interaction.reply({
          content: '`❌` | Invalid channel selected.',
          flags: [64]
        });
      }

      try {
        // Update config file
        const configPath = path.join(__dirname, '../config/config.json');
        const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));

        configData.channels.scamtrap = channel.id;

        fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));

        // Create setup embed
        const setupEmbed = new EmbedBuilder()
          .setColor('#00FF00')
          .setTitle('🚫 Scam Trap Setup Complete')
          .setDescription(`
**Scam trap channel successfully configured!**

**Channel:** ${channel} (${channel.name})
**Channel ID:** \`${channel.id}\`

**⚠️ How it works:**
- Any non-staff user who posts in this channel will be automatically timed out for 24 hours
- Their message will be deleted
- A notification will be sent to the channel
- Staff members will not be timed out but will receive alerts

**⚡ Quick Actions:**
- Use \`/scamtrap info\` to check status
- Use \`/scamtrap disable\` to disable the system
          `)
          .addFields(
            { name: '📋 Channel Type', value: channel.type.toString(), inline: true },
            { name: '🔒 Auto-Timeout Duration', value: '24 hours', inline: true },
            { name: '👥 Staff Exempt', value: 'Yes', inline: true }
          )
          .setTimestamp()
          .setFooter({ text: `${config.server.name} - Security System` })
          .setThumbnail(interaction.client.user.displayAvatarURL());

        await interaction.reply({ embeds: [setupEmbed] });

        // Send message to the scam trap channel
        const channelEmbed = new EmbedBuilder()
          .setColor('#FF0000')
          .setTitle('⚠️ WARNING: SCAM TRAP CHANNEL | PERINGATAN: CHANNEL JEBAKAN SCAM')
          .setDescription(`
🇬🇧 **ENGLISH:**
This channel is a **SCAM TRAP**!
🚫 **DO NOT POST HERE** 🚫
Anyone who posts here (except staff) will be **automatically timed out for 24 hours**!

🇮🇩 **BAHASA INDONESIA:**
Channel ini adalah **JEBAKAN SCAM**!
🚫 **JANGAN POSTING DI SINI** 🚫
Siapa saja yang posting di sini (kecuali staff) akan **OTOMATIS DITIMEOUT 24 JAM**!

---
📝 **Purpose | Tujuan:**
🇬🇧 Designed to catch scammers & bots who auto-post without reading
🇮🇩 Dirancang untuk menangkap scammer & bot yang auto-post tanpa baca

👥 **Staff Information | Informasi Staff:**
🇬🇧 Staff members are exempt from timeout
🇮🇩 Member staff dibebaskan dari timeout
          `)
          .setImage('https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif')
          .setTimestamp()
          .setFooter({
            text: '🚫 SCAM TRAP SYSTEM | SISTEM JEBAKAN SCAM 🚫',
            iconURL: interaction.client.user.displayAvatarURL()
          });

        await channel.send({ embeds: [channelEmbed] });

        console.log(`[SCAM TRAP] Setup completed: ${channel.name} (${channel.id})`);

      } catch (error) {
        console.error('Error setting up scam trap:', error);
        await interaction.reply({
          content: '`❌` | Error setting up scam trap. Please try again.',
          flags: [64]
        });
      }

    } else if (subcommand === 'disable') {
      try {
        // Update config file
        const configPath = path.join(__dirname, '../config/config.json');
        const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));

        configData.channels.scamtrap = "";

        fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));

        const disableEmbed = new EmbedBuilder()
          .setColor('#FF9900')
          .setTitle('🔓 Scam Trap System Disabled')
          .setDescription('The scam trap system has been successfully disabled.')
          .setTimestamp()
          .setFooter({ text: `${config.server.name} - Security System` });

        await interaction.reply({ embeds: [disableEmbed] });
        console.log('[SCAM TRAP] System disabled by admin');

      } catch (error) {
        console.error('Error disabling scam trap:', error);
        await interaction.reply({
          content: '`❌` | Error disabling scam trap. Please try again.',
          flags: [64]
        });
      }

    } else if (subcommand === 'info') {
      const scamTrapChannelId = config.channels.scamtrap;
      const status = scamTrapChannelId ? '🟢 Active' : '🔴 Inactive';
      const channel = scamTrapChannelId ? client.channels.cache.get(scamTrapChannelId) : null;

      const infoEmbed = new EmbedBuilder()
        .setColor(scamTrapChannelId ? '#00FF00' : '#FF0000')
        .setTitle('🚫 Scam Trap System Status')
        .setDescription(`
**System Status:** ${status}
**Channel:** ${channel ? `${channel} (${channel.name})` : 'Not configured'}
**Channel ID:** \`${scamTrapChannelId || 'Not set'}\`

**🔧 Configuration:**
- **Auto-Timeout:** 24 hours
- **Staff Exemption:** Enabled
- **Message Deletion:** Enabled
- **Notifications:** Enabled

**📋 Available Commands:**
- \`/scamtrap setup <channel>\` - Configure scam trap channel
- \`/scamtrap disable\` - Disable the system
- \`/scamtrap info\` - Show this status
        `)
        .setTimestamp()
        .setFooter({ text: `${config.server.name} - Security System` });

      await interaction.reply({ embeds: [infoEmbed] });
    }
  },
};