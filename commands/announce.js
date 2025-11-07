const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits, ChannelType, AttachmentBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('announce')
    .setDescription('📢 | Send an Announcement message')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Select the announcement channel')
        .addChannelTypes(ChannelType.GuildAnnouncement)
        .setRequired(true))
    .addAttachmentOption(option =>
      option.setName('image')
        .setDescription('Image to be included (optional)')
        .setRequired(false))
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

    const channel = interaction.options.getChannel('channel');
    const image = interaction.options.getAttachment('image');

    // Validate announcement channel
    if (!channel || channel.type !== ChannelType.GuildAnnouncement) {
      return interaction.reply({ 
        content: '`❌` | Oops! The selected channel is not an Announcement channel.', 
        flags: [64] 
      });
    }

    // Send prompt message
    await interaction.reply({
      content: '`📢` | Please send the message you want to announce.',
      flags: [64]
    });

    // Wait for user response
    const filter = m => m.author.id === interaction.user.id && m.channel.id === interaction.channel.id;
    const collector = interaction.channel.createMessageCollector({ filter, max: 1, time: 180000 }); // 3 minutes

    collector.on('collect', async (message) => {
      const content = message.content;

      // Format announcement message
      const formattedMessage = ` ||@everyone||\n\`☁️\` **Hello Peeps!**\n${content}\n\nBest Regards \`🙏\`,\n${config.server.name}\n-# This message is an official message from ${config.server.name}`;

      // Check if an image is uploaded
      if (image) {
        // Validate image file type
        const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedImageTypes.includes(image.contentType)) {
          return interaction.followUp({ 
            content: '`❌` | Oops! Only image files (JPEG, PNG, GIF, WEBP) are allowed.', 
            flags: [64] 
          });
        }

        // Create attachment from image
        const attachment = new AttachmentBuilder(image.url)
          .setName(image.name);

        // Send message with image
        await message.channel.sendTyping();
        await channel.send({ 
          content: formattedMessage, 
          files: [attachment] 
        });
      } else {
        // Send message without image
        await message.channel.sendTyping();
        await channel.send(formattedMessage);
      }

      // Confirm sending
      await interaction.followUp({ 
        content: `\`✅\` | Announcement successfully sent to channel: ${channel}.`
      });

      // Delete the message sent by the user
      await message.delete();
    });

    collector.on('end', collected => {
      if (collected.size === 0) {
        interaction.followUp({
          content: '`❌` | Timeout. Please restart the /announce command.',
          flags: [64]
        });
      }
    });
  },
};