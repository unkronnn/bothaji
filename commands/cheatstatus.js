const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cheatstatus')
        .setDescription('🔧 Manage cheat status (Admin Only)')
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('Set status for a specific cheat')
                .addStringOption(option =>
                    option.setName('cheat')
                        .setDescription('Select the cheat')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Byster - Marvel Rivals', value: 'byster_marvelrivals' },
                            { name: 'Unicore - Marvel Rivals', value: 'unicore_marvelrivals' },
                            { name: 'Ancient - Marvel Rivals', value: 'ancient_marvelrivals' },
                            { name: 'Stern - Marvel Rivals', value: 'stern_marvelrivals' },
                            { name: 'BC - Marvel Rivals', value: 'bc_marvelrivals' },
                            { name: 'Lexy - Marvel Rivals', value: 'lexy_marvelrivals' },
                            { name: 'PussyCat - Marvel Rivals', value: 'pussycat_marvelrivals' },
                            { name: 'SMG - Marvel Rivals', value: 'smg_marvelrivals' },
                            { name: 'Phoenix - Hunt Showdown', value: 'phoenix_huntshowdown' },
                            { name: 'Lexy - Hunt Showdown', value: 'lexy_huntshowdown' },
                            { name: 'Ancient - Hunt Showdown', value: 'ancient_huntshowdown' },
                            { name: 'Stern - Hunt Showdown', value: 'stern_huntshowdown' },
                            { name: 'Mason - Hunt Showdown', value: 'mason_huntshowdown' },
                            { name: 'SMG - Hunt Showdown', value: 'smg_huntshowdown' },
                            { name: 'Lexy - Hell Let Loose', value: 'lexy_hll' },
                            { name: 'Stern - Hell Let Loose', value: 'stern_hll' },
                            { name: 'PussyCat - Hell Let Loose', value: 'pussycat_hll' },
                            { name: 'Mason - Hell Let Loose', value: 'mason_hll' },
                            { name: 'SMG - Hell Let Loose', value: 'smg_hll' },
                            { name: 'Unicore - Honkai Star Rail', value: 'unicore_honkaistarrail' }
                        )
                )
                .addStringOption(option =>
                    option.setName('status')
                        .setDescription('Set the status')
                        .setRequired(true)
                        .addChoices(
                            { name: '✅ Available', value: 'available' },
                            { name: '🔧 Maintenance', value: 'maintenance' },
                            { name: '❌ Out of Stock', value: 'out_of_stock' },
                            { name: '⚠️ Limited Stock', value: 'limited_stock' }
                        )
                )
                .addStringOption(option =>
                    option.setName('message')
                        .setDescription('Status message (optional)')
                        .setRequired(false)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('view')
                .setDescription('View current status of all cheats')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('update')
                .setDescription('Update the status message in status channel')
        ),
    async execute(interaction) {
        // Check if user has admin permissions
        if (!interaction.member.permissions.has('Administrator')) {
            return interaction.reply({
                content: '❌ | You need administrator permissions to use this command.',
                ephemeral: true
            });
        }

        await interaction.deferReply({ ephemeral: true });

        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'set') {
            await handleSetStatus(interaction);
        } else if (subcommand === 'view') {
            await handleViewStatus(interaction);
        } else if (subcommand === 'update') {
            await handleUpdateStatus(interaction);
        }
    },
};

async function handleSetStatus(interaction) {
    try {
        const cheat = interaction.options.getString('cheat');
        const status = interaction.options.getString('status');
        const message = interaction.options.getString('message') || getDefaultMessage(status);

        // Read current status file
        const statusFile = path.join(__dirname, '../config/cheatStatus.json');
        let statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));

        // Determine which game category
        let gameCategory = null;
        for (const [game, cheats] of Object.entries(statusData)) {
            if (game !== 'globalSettings' && cheats[cheat]) {
                gameCategory = game;
                break;
            }
        }

        if (!gameCategory) {
            return interaction.editReply({
                content: '❌ | Cheat not found in database.',
                ephemeral: true
            });
        }

        // Update status
        statusData[gameCategory][cheat] = {
            status: status,
            lastCheck: new Date().toISOString(),
            message: message
        };

        // Save to file
        fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));

        const embed = new EmbedBuilder()
            .setTitle('✅ Cheat Status Updated')
            .setDescription(
                `Successfully updated status for **${formatCheatName(cheat)}**\n\n` +
                `**New Status:** ${getStatusEmoji(status)} ${formatStatusName(status)}\n` +
                `**Message:** ${message}\n` +
                `**Updated:** ${new Date().toLocaleString()}`
            )
            .setColor(getStatusColor(status))
            .setTimestamp()
            .setFooter({
                text: 'Cheat Status Management',
                iconURL: interaction.client.user.displayAvatarURL()
            });

        await interaction.editReply({ embeds: [embed] });

        // Auto-update status message
        await updateStatusMessage(interaction.client);

    } catch (error) {
        console.error('Error setting cheat status:', error);
        await interaction.editReply({
            content: '❌ | Failed to update cheat status. Please try again.',
            ephemeral: true
        });
    }
}

async function handleViewStatus(interaction) {
    try {
        const statusFile = path.join(__dirname, '../config/cheatStatus.json');
        const statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));

        const embed = new EmbedBuilder()
            .setTitle('📊 Current Cheat Status Overview')
            .setDescription('Real-time status of all available cheats')
            .setColor('#0099ff')
            .setTimestamp()
            .setFooter({
                text: 'Last updated: ' + new Date().toLocaleString(),
                iconURL: interaction.client.user.displayAvatarURL()
            });

        let allAvailable = 0;
        let totalCheats = 0;

        // Add fields for each game category
        for (const [game, cheats] of Object.entries(statusData)) {
            if (game === 'globalSettings') continue;

            const gameFields = [];
            for (const [cheat, info] of Object.entries(cheats)) {
                totalCheats++;
                if (info.status === 'available') allAvailable++;

                gameFields.push(`${getStatusEmoji(info.status)} **${formatCheatName(cheat)}**: ${info.message}`);
            }

            if (gameFields.length > 0) {
                embed.addFields({
                    name: `🎮 ${formatGameName(game)}`,
                    value: gameFields.slice(0, 10).join('\n'), // Limit to 10 per field
                    inline: false
                });
            }
        }

        // Add summary
        embed.addFields(
            {
                name: '📈 Summary',
                value: `**Available:** ${allAvailable}/${totalCheats} cheats\n**Success Rate:** ${Math.round((allAvailable/totalCheats) * 100)}%`,
                inline: true
            },
            {
                name: '🎯 Status Legend',
                value: `✅ Available\n🔧 Maintenance\n❌ Out of Stock\n⚠️ Limited Stock`,
                inline: true
            }
        );

        await interaction.editReply({ embeds: [embed] });

    } catch (error) {
        console.error('Error viewing cheat status:', error);
        await interaction.editReply({
            content: '❌ | Failed to load cheat status. Please try again.',
            ephemeral: true
        });
    }
}

async function handleUpdateStatus(interaction) {
    try {
        await updateStatusMessage(interaction.client);

        const embed = new EmbedBuilder()
            .setTitle('✅ Status Message Updated')
            .setDescription('The cheat status message has been successfully updated in the status channel.')
            .setColor('#00ff00')
            .setTimestamp()
            .setFooter({
                text: 'Status Management System',
                iconURL: interaction.client.user.displayAvatarURL()
            });

        await interaction.editReply({ embeds: [embed] });

    } catch (error) {
        console.error('Error updating status message:', error);
        await interaction.editReply({
            content: '❌ | Failed to update status message. Please check the channel configuration.',
            ephemeral: true
        });
    }
}

async function updateStatusMessage(client) {
    try {
        const statusFile = path.join(__dirname, '../config/cheatStatus.json');
        const statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));

        const statusChannelId = statusData.globalSettings?.statusChannelId;
        if (!statusChannelId) return;

        const channel = await client.channels.fetch(statusChannelId).catch(() => null);
        if (!channel) return;

        // Generate status embed
        const embed = generateStatusEmbed(statusData);

        // Try to edit existing message or send new one
        if (statusData.globalSettings.statusMessageId) {
            try {
                const message = await channel.messages.fetch(statusData.globalSettings.statusMessageId);
                await message.edit({ embeds: [embed] });
            } catch {
                // Message not found, create new one
                const newMessage = await channel.send({ embeds: [embed] });
                statusData.globalSettings.statusMessageId = newMessage.id;
                fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
            }
        } else {
            const newMessage = await channel.send({ embeds: [embed] });
            statusData.globalSettings.statusMessageId = newMessage.id;
            fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
        }

    } catch (error) {
        console.error('Error updating status message:', error);
    }
}

function generateStatusEmbed(statusData) {
    let allAvailable = 0;
    let totalCheats = 0;
    const statusCounts = {
        available: 0,
        maintenance: 0,
        out_of_stock: 0,
        limited_stock: 0
    };

    const embed = new EmbedBuilder()
        .setTitle('🎮 Yash Store - Cheat Status Dashboard')
        .setDescription('Real-time availability status for all game cheats')
        .setColor('#0099ff')
        .setTimestamp()
        .setFooter({
            text: 'Last updated: ' + new Date().toLocaleString() + ' • Auto-refresh every 5 minutes',
            iconURL: 'https://cdn.discordapp.com/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        });

    // Process each game category
    for (const [game, cheats] of Object.entries(statusData)) {
        if (game === 'globalSettings') continue;

        const gameFields = [];
        for (const [cheat, info] of Object.entries(cheats)) {
            totalCheats++;
            if (info.status === 'available') allAvailable++;
            statusCounts[info.status] = (statusCounts[info.status] || 0) + 1;

            gameFields.push(`${getStatusEmoji(info.status)} **${formatCheatName(cheat)}**: ${info.message}`);
        }

        if (gameFields.length > 0) {
            embed.addFields({
                name: `🎮 ${formatGameName(game)}`,
                value: gameFields.slice(0, 8).join('\n'),
                inline: false
            });
        }
    }

    // Add summary field
    const successRate = Math.round((allAvailable/totalCheats) * 100);
    embed.addFields(
        {
            name: '📊 Current Statistics',
            value: `✅ **Available:** ${statusCounts.available}\n` +
                   `🔧 **Maintenance:** ${statusCounts.maintenance}\n` +
                   `❌ **Out of Stock:** ${statusCounts.out_of_stock}\n` +
                   `⚠️ **Limited Stock:** ${statusCounts.limited_stock}\n\n` +
                   `📈 **Success Rate:** ${successRate}% (${allAvailable}/${totalCheats})`,
            inline: true
        },
        {
            name: '🔄 Update Information',
            value: `**Next Update:** <t:${Math.floor(Date.now() / 1000) + 300}:R>\n` +
                   `**Auto-Update:** ${statusData.globalSettings?.autoUpdate ? 'Enabled' : 'Disabled'}\n` +
                   `**Last Manual Update:** Check admin commands`,
            inline: true
        }
    );

    // Set color based on overall status
    if (successRate >= 80) {
        embed.setColor('#00ff00'); // Green - Good
    } else if (successRate >= 60) {
        embed.setColor('#ffaa00'); // Yellow - Okay
    } else {
        embed.setColor('#ff0000'); // Red - Poor
    }

    return embed;
}

function getStatusEmoji(status) {
    const emojis = {
        available: '✅',
        maintenance: '🔧',
        out_of_stock: '❌',
        limited_stock: '⚠️'
    };
    return emojis[status] || '❓';
}

function getStatusColor(status) {
    const colors = {
        available: '#00ff00',
        maintenance: '#ffaa00',
        out_of_stock: '#ff0000',
        limited_stock: '#ff9900'
    };
    return colors[status] || '#808080';
}

function formatStatusName(status) {
    const names = {
        available: 'Available',
        maintenance: 'Under Maintenance',
        out_of_stock: 'Out of Stock',
        limited_stock: 'Limited Stock'
    };
    return names[status] || 'Unknown';
}

function formatCheatName(cheat) {
    const names = {
        'byster_marvelrivals': 'Byster',
        'unicore_marvelrivals': 'Unicore',
        'ancient_marvelrivals': 'Ancient',
        'stern_marvelrivals': 'Stern',
        'bc_marvelrivals': 'BC',
        'lexy_marvelrivals': 'Lexy',
        'pussycat_marvelrivals': 'PussyCat',
        'smg_marvelrivals': 'SMG',
        'phoenix_huntshowdown': 'Phoenix',
        'lexy_huntshowdown': 'Lexy',
        'ancient_huntshowdown': 'Ancient',
        'stern_huntshowdown': 'Stern',
        'mason_huntshowdown': 'Mason',
        'smg_huntshowdown': 'SMG',
        'lexy_hll': 'Lexy',
        'stern_hll': 'Stern',
        'pussycat_hll': 'PussyCat',
        'mason_hll': 'Mason',
        'smg_hll': 'SMG',
        'unicore_honkaistarrail': 'Unicore'
    };
    return names[cheat] || cheat;
}

function formatGameName(game) {
    const names = {
        'marvelrivals': 'Marvel Rivals',
        'huntshowdown': 'Hunt: Showdown',
        'hellletloose': 'Hell Let Loose',
        'honkaistarrail': 'Honkai: Star Rail'
    };
    return names[game] || game;
}

function getDefaultMessage(status) {
    const messages = {
        available: 'Available and working perfectly',
        maintenance: 'Currently under maintenance',
        out_of_stock: 'Currently out of stock',
        limited_stock: 'Limited stock available'
    };
    return messages[status] || 'Status unknown';
}