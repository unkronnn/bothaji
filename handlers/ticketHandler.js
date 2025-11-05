const {
    ChannelType,
    PermissionFlagsBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('../config/config.json');
const moment = require('moment');

// Store ticket creation timestamps (simple in-memory storage)
const ticketOpenTimestamps = new Map();

module.exports = (client) => {
    client.on('interactionCreate', async interaction => {
        // Handle button click to show modal form
        if (interaction.isButton() && interaction.customId === 'open_ticket') {

            const modal = new ModalBuilder()
                .setCustomId('ticket_form_modal')
                .setTitle('🎫 Create Support Ticket');

            // Purpose field (required)
            const purposeInput = new TextInputBuilder()
                .setCustomId('ticket_purpose')
                .setLabel('Need something?')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder('e.g., Order, Ask about Product, Claim warranty')
                .setRequired(true)
                .setMaxLength(200);

            // Product field (optional)
            const productInput = new TextInputBuilder()
                .setCustomId('ticket_product')
                .setLabel('Product')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder('e.g., Nitro, Netflix, Canva, Capcut')
                .setRequired(false)
                .setMaxLength(100);

            // Amount field (optional)
            const amountInput = new TextInputBuilder()
                .setCustomId('ticket_amount')
                .setLabel('Amount (Optional)')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder('e.g., 1, 2, etc.')
                .setRequired(false)
                .setMaxLength(50);

            // Add fields to action rows
            const firstActionRow = new ActionRowBuilder().addComponents(purposeInput);
            const secondActionRow = new ActionRowBuilder().addComponents(productInput);
            const thirdActionRow = new ActionRowBuilder().addComponents(amountInput);

            modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

            await interaction.showModal(modal);
        }

        // Handle modal form submission
        if (interaction.isModalSubmit() && interaction.customId === 'ticket_form_modal') {
            const { user, guild } = interaction;
            
            // Get form data
            const purpose = interaction.fields.getTextInputValue('ticket_purpose');
            const product = interaction.fields.getTextInputValue('ticket_product') || 'Not specified';
            const amount = interaction.fields.getTextInputValue('ticket_amount') || 'Not specified';

            // Generate ticket channel name based on purpose
            const sanitizedPurpose = purpose.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 20);
            const ticketChannelName = `ticket-${sanitizedPurpose}-${user.username}`;

            const category = guild.channels.cache.get(config.channels.ticketCategory);
            if (!category) {
                return interaction.reply({ content: 'Ticket category not found', ephemeral: true });
            }

            await interaction.deferReply({ ephemeral: true });

            try {
                const ticketChannel = await guild.channels.create({
                    name: ticketChannelName,
                    type: ChannelType.GuildText,
                    parent: category.id,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [PermissionFlagsBits.ViewChannel],
                        },
                        {
                            id: user.id,
                            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                        },
                        {
                            id: config.roles.staff,
                            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                        }
                    ],
                });

                // Store the ticket creation timestamp
                ticketOpenTimestamps.set(ticketChannel.id, new Date());

                const embed = new EmbedBuilder()
                    .setTitle('🎫 New Support Ticket')
                    .setDescription(`Hello ${user}! Your ticket has been successfully created.`)
                    .addFields(
                        { name: '🎯 Purpose', value: purpose, inline: false },
                        { name: '📦 Product', value: product, inline: true },
                        { name: '🔢 Amount', value: amount, inline: true },
                        { name: '👤 Created by', value: user.toString(), inline: true }
                    )
                    .setColor('#5865F2')
                    .setTimestamp()
                    .setFooter({
                        text: 'Ticket System • Staff will assist you shortly',
                        iconURL: 'https://cdn.discordapp.com/attachments/1103681765518495834/1231120471369805844/ticket-icon.png?ex=6635f9c5&is=6634a845&hm=58a42c35c9b90c0be9c667a4b5eed70d3b50c6c35353d615d1c4cec4a9d40c0b&'
                    });

                const actionRow = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId('claim_ticket')
                        .setLabel('🤝 Claim Ticket')
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('close_ticket')
                        .setLabel('❌ Close Ticket')
                        .setStyle(ButtonStyle.Danger)
                );

                await ticketChannel.send({
                    content: `<@${user.id}> | <@&${config.roles.staff}>`,
                    embeds: [embed],
                    components: [actionRow]
                });

                await interaction.editReply({
                    content: `✅ Your ticket has been created in ${ticketChannel}!\n\n**Ticket Details:**\n🎯 **Purpose:** ${purpose}\n📦 **Product:** ${product}\n🔢 **Amount:** ${amount}`,
                    ephemeral: true
                });

                // Send DM to user
                try {
                    const dmEmbed = new EmbedBuilder()
                        .setTitle('🎫 Ticket Successfully Created')
                        .setDescription(`Your support ticket has been created on **${guild.name}**.`)
                        .addFields(
                            { name: '🎯 Purpose', value: purpose, inline: false },
                            { name: '📦 Product', value: product, inline: true },
                            { name: '🔢 Amount', value: amount, inline: true }
                        )
                        .setColor('#57F287')
                        .setTimestamp()
                        .setFooter({ text: 'Staff will process your ticket shortly' });

                    await user.send({ embeds: [dmEmbed] });
                } catch (dmError) {
                    console.log(`Could not send DM to user ${user.tag}`);
                }
            } catch (error) {
                console.error('Error creating ticket:', error);
                await interaction.editReply({
                    content: 'Failed to create ticket. Please try again later.',
                    ephemeral: true
                });
            }
        }

        if (interaction.isButton() && interaction.customId === 'claim_ticket') {
            const { channel, member } = interaction;

            if (!member.roles.cache.has(config.roles.staff)) {
                return interaction.reply({
                    content: '`❌` Only staff can claim tickets!',
                    ephemeral: true
                });
            }

            await interaction.deferReply({ ephemeral: true });

            await interaction.editReply({
                content: `✅ Ticket claimed by ${member}.`,
                ephemeral: true
            });
        }

        if (interaction.isButton() && interaction.customId === 'close_ticket') {
            const { channel, member, guild } = interaction;

            if (!member.roles.cache.has(config.roles.staff)) {
                return interaction.reply({
                    content: '`❌` Only staff can close tickets!',
                    ephemeral: true
                });
            }

            await interaction.deferReply({ ephemeral: true });

            setTimeout(async () => {
                try {
                    const messages = await channel.messages.fetch({ limit: 100 });
                    const transcriptData = messages
                        .filter(m => m.content.trim() !== '' || m.attachments.size > 0)
                        .map(m => ({
                            authorTag: m.author.tag,
                            authorAvatar: m.author.displayAvatarURL(),
                            content: m.content,
                            attachments: m.attachments.map(a => a.url),
                            timestamp: moment(m.createdAt).format('LLL'),
                            isEmbed: m.embeds.length > 0 ? m.embeds : null,
                        }))
                        .reverse();

                    const dataDir = path.join(__dirname, '..', 'data', 'transcripts');
                    fs.mkdirSync(dataDir, { recursive: true });

                    const transcriptFilePath = path.join(dataDir, `${channel.id}.html`);
                    fs.writeFileSync(transcriptFilePath, generateTranscriptHTML(transcriptData, channel.name), 'utf8');

                    const transcriptChannel = guild.channels.cache.get(config.channels.transcript);
                    // Attempt to find the ticket creator from the channel name or initial message
                    const channelNameParts = channel.name.split('-');
                    const ticketCreatorUsername = channelNameParts[channelNameParts.length - 1];
                    const creatorUser = guild.members.cache.find(m => m.user.username === ticketCreatorUsername) || member;

                    const openTimestamp = ticketOpenTimestamps.get(channel.id) || channel.createdAt;
                    const closeTimestamp = new Date();

                    // Create the ticket closed embed for transcript channel
                    const closedTranscriptEmbed = new EmbedBuilder()
                        .setTitle('🔒 Ticket Closed')
                        .addFields(
                            { name: 'Ticket Name', value: channel.name, inline: true },
                            { name: 'Ticket Author', value: creatorUser.toString(), inline: true },
                            { name: 'Closed By', value: member.toString(), inline: true },
                            { name: 'Open Date', value: moment(openTimestamp).format('LLL'), inline: true },
                            { name: 'Close Date', value: moment(closeTimestamp).format('LLL'), inline: true },
                            { name: 'Ticket Close Reason', value: 'Reason not specified (Requires implementation)', inline: false },
                            { name: 'Staff Message Count', value: 'Not tracked (Requires implementation)', inline: false }
                        )
                        .setColor('#ED4245')
                        .setTimestamp(closeTimestamp);

                    if (transcriptChannel) {
                         // Send the closed transcript embed first
                         await transcriptChannel.send({ embeds: [closedTranscriptEmbed] });
                         // Then send the transcript file
                        await transcriptChannel.send({
                            content: `📄 Transcript File for ${channel.name}`,
                            files: [transcriptFilePath]
                        });
                    }

                    try {
                        await creatorUser.send({
                            content: `📋 Ticket ${channel.name} has been closed.`,
                            files: [transcriptFilePath]
                        });
                    } catch (dmError) {
                        console.log(`Could not send DM transcript to user ${creatorUser.user.tag}`);
                    }

                    const closeEmbed = new EmbedBuilder()
                        .setTitle('🔒 Ticket Ditutup')
                        .setDescription(`Ticket ditutup oleh ${member}`)
                        .setColor('#ED4245')
                        .setTimestamp();

                    await channel.send({ embeds: [closeEmbed] });
                    await channel.delete();

                    // Remove the timestamp from storage
                    ticketOpenTimestamps.delete(channel.id);

                    try {
                        await interaction.editReply({
                            content: 'Ticket successfully closed and transcript saved.',
                            ephemeral: true
                        });
                    } catch (error) {
                        console.error('Error editing reply:', error);
                    }
                } catch (error) {
                    console.error('Error closing ticket:', error);
                    await interaction.editReply({
                        content: 'Failed to close ticket. Please try again later.',
                        ephemeral: true
                    });
                }
            }, 10000);
        }
    });
};

function generateTranscriptHTML(transcriptData, channelName) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Ticket Transcript - ${channelName}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #36393f;
            color: #dcddde;
            line-height: 1.6;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #2f3136;
            border-radius: 10px;
          }
          .message {
            display: flex;
            margin-bottom: 15px;
            background-color: #40444b;
            border-radius: 5px;
            padding: 10px;
          }
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 15px;
          }
          .message-content {
            flex-grow: 1;
          }
          .username {
            color: #ffffff;
            font-weight: bold;
          }
          .timestamp {
            color: #72767d;
            font-size: 0.8em;
            margin-left: 10px;
          }
          .embed {
            background-color: #2f3136;
            border: 1px solid #5865F2;
            border-radius: 5px;
            padding: 10px;
            margin-top: 5px;
          }
          .embed-title {
            font-weight: bold;
            color: #ffffff;
          }
          .embed-description {
            color: #dcddde;
          }
          .attachment {
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Ticket Transcript: ${channelName}</h1>
          ${transcriptData.map(msg => `
            <div class="message">
              <img src="${msg.authorAvatar}" alt="${msg.authorTag}" class="avatar">
              <div class="message-content">
                <div>
                  <span class="username">${msg.authorTag}</span>
                  <span class="timestamp">${msg.timestamp}</span>
                </div>
                <div>${msg.content || ''}</div>
                ${msg.isEmbed ? `
                  <div class="embed">
                    <div class="embed-title">${msg.isEmbed[0].title}</div>
                    <div class="embed-description">${msg.isEmbed[0].description}</div>
                  </div>
                ` : ''}
                ${msg.attachments.length > 0 ? `
                  <div class="attachment">
                    ${msg.attachments.map(url => `<img src="${url}" alt="Attachment" style="max-width: 100%;"/>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `;
}