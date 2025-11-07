const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits, ChannelType, AttachmentBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('proof')
    .setDescription('📋 | Send a Proof message without tagging everyone')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Select the channel for proof message')
        .addChannelTypes(ChannelType.GuildAnnouncement, ChannelType.GuildText)
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

    // Validate channel
    if (!channel || (channel.type !== ChannelType.GuildAnnouncement && channel.type !== ChannelType.GuildText)) {
      return interaction.reply({
        content: '`❌` | Oops! The selected channel is not valid.',
        flags: [64]
      });
    }

    // Send prompt message
    await interaction.reply({
      content: '`📋` | Please send the proof message you want to share.',
      flags: [64]
    });

    // Wait for user response
    const filter = m => m.author.id === interaction.user.id && m.channel.id === interaction.channel.id;
    const collector = interaction.channel.createMessageCollector({ filter, max: 1, time: 180000 }); // 3 minutes

    collector.on('collect', async (message) => {
      const content = message.content;

      // Format proof message (without @everyone tag)
      const formattedMessage = `\`📋\` **Proof Information**\n${content}\n\nBest Regards \`🙏\`,\n${config.server.name}\n-# This message is an official proof from ${config.server.name}`;

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
        content: `\`✅\` | Proof successfully sent to channel: ${channel}.`
      });

      // Delete the message sent by the user
      await message.delete();
    });

    collector.on('end', collected => {
      if (collected.size === 0) {
        interaction.followUp({
          content: '`❌` | Timeout. Please restart the /proof command.',
          flags: [64]
        });
      }
    });
  },
};