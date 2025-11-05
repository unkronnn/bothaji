const { EmbedBuilder } = require('discord.js');
const crypto = require('crypto');
const config = require('../config/config.json');

// Function to handle errors
module.exports = async (client, interaction, error) => {
    try {
        // Generate a unique error code
        const errorCode = crypto.randomBytes(5).toString('hex');

        // Capture additional information for diagnostics
        const errorDetails = {
            errorCode,
            timestamp: new Date().toISOString(),
            interaction: interaction ? {
                id: interaction.id,
                commandName: interaction.commandName,
                guildId: interaction.guildId,
                channelId: interaction.channelId,
                userId: interaction.user?.id
            } : null,
            error: {
                name: error?.name || 'Unknown Error',
                message: error?.message || 'No error message',
                stack: error?.stack || 'No stack trace'
            }
        };

        // Log the error to the console (simplified to avoid spam)
        console.error(`[${errorCode}] ${errorDetails.error.name}: ${errorDetails.error.message}`);

        // Initialize variables with default values
        const errorMessage = errorDetails.error.message.length > 1024 
            ? errorDetails.error.message.substring(0, 512) + '...' 
            : errorDetails.error.message;

        const errorStack = errorDetails.error.stack.length > 1024 
            ? errorDetails.error.stack.substring(0, 512) + '...' 
            : errorDetails.error.stack;

        // Embed for Developer (Error Log)
        const errorEmbed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('🚨 Comprehensive Error Report')
            .addFields(
                { 
                    name: '🆔 Error Code', 
                    value: `\`${errorCode}\``, 
                    inline: true 
                },
                { 
                    name: '⏰ Timestamp', 
                    value: errorDetails.timestamp, 
                    inline: true 
                },
                { 
                    name: '📡 Interaction Details', 
                    value: `
                    • Command: ${errorDetails.interaction?.commandName || 'Unknown'}
                    • Guild: ${errorDetails.interaction?.guildId || 'N/A'}
                    • Channel: ${errorDetails.interaction?.channelId || 'N/A'}
                    • User: ${errorDetails.interaction?.userId || 'N/A'}
                    `, 
                    inline: false 
                },
                { 
                    name: '❗ Error Type', 
                    value: errorDetails.error.name || 'Unknown Error', 
                    inline: true 
                },
                { 
                    name: '💬 Error Message', 
                    value: `\`\`\`${errorMessage}\`\`\``, 
                    inline: false 
                },
                { 
                    name: '📋 Stack Trace', 
                    value: `\`\`\`${errorStack}\`\`\``, 
                    inline: false 
                }
            )
            .setTimestamp();

        // Attempt to send an error message to the user
        try {
            if (interaction && typeof interaction.reply === 'function') {
                await interaction.reply({ 
                    content: `❌ A system error occurred. Error Code: \`${errorCode}\`. Please contact support.`, 
                    ephemeral: true 
                });
            } else if (interaction && typeof interaction.followUp === 'function') {
                await interaction.followUp({ 
                    content: `❌ A system error occurred. Error Code: \`${errorCode}\`. Please contact support.`, 
                    ephemeral: true 
                });
            }
        } catch (replyError) {
            console.error('Failed to send error message to user:', replyError);
        }

        // Send error log to the error channel
        if (client && client.channels && config.channels?.error) {
            try {
                const errorChannel = client.channels.cache.get(config.channels.error);
                if (errorChannel) {
                    await errorChannel.send({ embeds: [errorEmbed] });
                }
            } catch (channelError) {
                console.error('Failed to send error log to channel:', channelError);
            }
        }

    } catch (criticalError) {
        // Fallback error logging for critical errors
        console.error('CRITICAL: Fatal error in error handling', {
            criticalError: criticalError.message,
            criticalStack: criticalError.stack
        });
    }
};