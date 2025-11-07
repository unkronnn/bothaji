const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const config = require('../config/config.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setupstatus')
        .setDescription('🔧 Setup cheat status system (Admin Only)')
        .addChannelOption(option =>
            option.setName('statuschannel')
                .setDescription('Channel where status will be displayed')
                .setRequired(true)
                .addChannelTypes(0) // Text channel
        )
        .addChannelOption(option =>
            option.setName('adminchannel')
                .setDescription('Admin channel for status management (optional)')
                .setRequired(false)
                .addChannelTypes(0) // Text channel
        )
        .addBooleanOption(option =>
            option.setName('enableautoupdate')
                .setDescription('Enable automatic status updates')
                .setRequired(false)
        ),
    async execute(interaction) {
        // Check if user has admin permissions
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({
                content: '❌ | You need Administrator permissions to use this command.',
                ephemeral: true
            });
        }

        try {
            await interaction.deferReply({ ephemeral: true });

            const statusChannel = interaction.options.getChannel('statuschannel');
            const adminChannel = interaction.options.getChannel('adminchannel') || interaction.channel;
            const enableAutoUpdate = interaction.options.getBoolean('enableautoupdate') ?? true;

            // Check if cheat status file exists, create if not
            const statusFile = path.join(__dirname, '../config/cheatStatus.json');
            let statusData;

            if (!fs.existsSync(statusFile)) {
                // Create default status data
                statusData = createDefaultStatusData();
            } else {
                statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
            }

            // Update global settings
            statusData.globalSettings = {
                statusChannelId: statusChannel.id,
                adminChannelId: adminChannel.id,
                autoUpdate: enableAutoUpdate,
                updateInterval: 300000, // 5 minutes
                statusMessageId: null
            };

            // Save updated configuration
            fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));

            // Send initial status message to status channel
            const statusEmbed = createInitialStatusEmbed();
            const statusMessage = await statusChannel.send({ embeds: [statusEmbed] });

            // Update status message ID in configuration
            statusData.globalSettings.statusMessageId = statusMessage.id;
            fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));

            const embed = new EmbedBuilder()
                .setTitle('✅ Cheat Status System Setup Complete')
                .setDescription(
                    `The cheat status system has been successfully configured!\n\n` +
                    `**Status Channel:** ${statusChannel}\n` +
                    `**Admin Channel:** ${adminChannel}\n` +
                    `**Auto Update:** ${enableAutoUpdate ? 'Enabled' : 'Disabled'}\n` +
                    `**Update Interval:** Every 5 minutes\n\n` +
                    `**Available Commands:**\n` +
                    `• \`/status\` - View cheat status (any channel)\n` +
                    `• \`/cheatstatus set\` - Update cheat status (admin only)\n` +
                    `• \`/cheatstatus view\` - View detailed status (admin only)\n` +
                    `• \`/cheatstatus update\` - Force status message update (admin only)\n\n` +
                    `**Status Indicators:**\n` +
                    `✅ Available\n🔧 Under Maintenance\n❌ Out of Stock\n⚠️ Limited Stock`
                )
                .setColor('#00ff00')
                .addFields(
                    {
                        name: '🎯 Next Steps',
                        value: `1. Use \`/status\` in any channel to view cheat availability\n` +
                               `2. Use \`/cheatstatus set\` in admin channel to update status\n` +
                               `3. The status message will auto-update every 5 minutes`,
                        inline: false
                    }
                )
                .setTimestamp()
                .setFooter({
                    text: 'Yash Store Status System',
                    iconURL: interaction.client.user.displayAvatarURL()
                });

            await interaction.editReply({ embeds: [embed] });

            // Send confirmation to admin channel
            const adminEmbed = new EmbedBuilder()
                .setTitle('🔔 Status System Activated')
                .setDescription(`The cheat status monitoring system has been activated in this server.`)
                .setColor('#0099ff')
                .addFields(
                    {
                        name: 'Configuration',
                        value: `**Status Channel:** ${statusChannel}\n` +
                               `**Auto Update:** ${enableAutoUpdate ? 'Enabled' : 'Disabled'}\n` +
                               `**Total Cheats Monitored:** 20+`,
                        inline: true
                    },
                    {
                        name: 'Admin Commands',
                        value: `Use \`/cheatstatus\` commands here to:\n` +
                               `• Set cheat status\n` +
                               `• View detailed statistics\n` +
                               `• Update status message`,
                        inline: true
                    }
                )
                .setTimestamp()
                .setFooter({
                    text: 'Admin Panel - Status Management',
                    iconURL: interaction.client.user.displayAvatarURL()
                });

            await adminChannel.send({ embeds: [adminEmbed] });

        } catch (error) {
            console.error('Error setting up status system:', error);
            await interaction.editReply({
                content: '❌ | Failed to setup status system. Please check my permissions and try again.',
                ephemeral: true
            });
        }
    },
};

function createDefaultStatusData() {
    return {
        marvelrivals: {
            byster_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - All features working" },
            unicore_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Internal technology" },
            ancient_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Advanced aimbot" },
            stern_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Lifetime option" },
            bc_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Flash drive support" },
            lexy_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Built-in spoofer" },
            pussycat_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Affordable option" },
            smg_marvelrivals: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Advanced features" }
        },
        huntshowdown: {
            phoenix_huntshowdown: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Comprehensive ESP" },
            lexy_huntshowdown: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Premium protection" },
            ancient_huntshowdown: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Config management" },
            stern_huntshowdown: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Lifetime option" },
            mason_huntshowdown: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Zoom features" },
            smg_huntshowdown: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Battle mode" }
        },
        hellletloose: {
            lexy_hll: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Built-in spoofer" },
            stern_hll: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Multi-client support" },
            pussycat_hll: { status: "available", lastCheck: new Date().toISOString(), message: "Available - StreamProof" },
            mason_hll: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Detailed information" },
            smg_hll: { status: "available", lastCheck: new Date().toISOString(), message: "Available - Speedhack features" }
        },
        honkaistarrail: {
            unicore_honkaistarrail: { status: "available", lastCheck: new Date().toISOString(), message: "Available - 15x battle speed" }
        },
        globalSettings: {
            autoUpdate: true,
            updateInterval: 300000,
            statusMessageId: null
        }
    };
}

function createInitialStatusEmbed() {
    const EmbedBuilder = require('discord.js').EmbedBuilder;

    return new EmbedBuilder()
        .setTitle('🎮 Yash Store - Cheat Status Dashboard')
        .setDescription('Real-time availability status for all game cheats')
        .setColor('#0099ff')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .setTimestamp()
        .setFooter({
            text: 'Status system initialized • First scan in progress...',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        })
        .addFields(
            {
                name: '🔧 System Status',
                value: '✅ **Status System Online**\n' +
                       '🔄 **Auto-Update Enabled**\n' +
                       '📊 **Monitoring 20+ Cheats**\n' +
                       '⚡ **Real-Time Updates**',
                inline: true
            },
            {
                name: '📱 User Commands',
                value: `• \`/status\` - View cheat availability\n` +
                       `• \`/marvelrivals\` - Browse Marvel cheats\n` +
                       `• \`/huntshowdown\` - Browse Hunt cheats\n` +
                       `• \`/hellletloose\` - Browse HLL cheats`,
                inline: true
            },
            {
                name: '🎯 Status Legend',
                value: `✅ **Available** - Ready for purchase\n` +
                       `🔧 **Maintenance** - Temporary unavailable\n` +
                       `❌ **Out of Stock** - Currently sold out\n` +
                       `⚠️ **Limited Stock** - Low stock warning`,
                inline: false
            },
            {
                name: '📞 Support',
                value: 'Contact our staff for:\n' +
                       '• Restock notifications\n' +
                       '• Priority access for new releases\n' +
                       '• Technical support\n' +
                       '• Custom requests',
                inline: false
            }
        );
}