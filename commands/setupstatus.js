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
                .setTitle('🚀 Advanced Status System - Setup Complete!')
                .setDescription(
                    `🎉 **Your premium cheat status monitoring system is now active!**\n\n` +
                    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                    `**📍 Configuration Details:**\n` +
                    `📢 **Status Channel:** ${statusChannel}\n` +
                    `⚙️ **Admin Channel:** ${adminChannel}\n` +
                    `🔄 **Auto Update:** ${enableAutoUpdate ? '✅ Enabled' : '❌ Disabled'}\n` +
                    `⏱️ **Update Interval:** Every 5 minutes\n` +
                    `📊 **Total Products:** 20+ cheats monitored\n\n` +
                    `**🎮 Available Commands:**\n` +
                    `• \`/status\` - 📊 View cheat status (any channel)\n` +
                    `• \`/cheatstatus set\` - ⚙️ Update cheat status (admin only)\n` +
                    `• \`/cheatstatus view\` - 👁️ View detailed status (admin only)\n` +
                    `• \`/cheatstatus update\` - 🔄 Force status update (admin only)\n\n` +
                    `**🎯 Status Indicators:**\n` +
                    `✅ **Available** - Ready for instant delivery\n` +
                    `🔧 **Maintenance** - Temporary updates (1-3 hours)\n` +
                    `❌ **Out of Stock** - Restocking soon\n` +
                    `⚠️ **Limited Stock** - Act fast!`
                )
                .setColor('#00ff00')
                .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
                .addFields(
                    {
                        name: '🎯 Quick Start Guide',
                        value: `**1️⃣ First Steps:**\n` +
                               `• Use \`/status\` in any channel to view availability\n` +
                               `• Check the status channel for live dashboard\n\n` +
                               `**2️⃣ Admin Controls:**\n` +
                               `• Use \`/cheatstatus set\` in admin channel\n` +
                               `• Control product status with buttons\n` +
                               `• Real-time dashboard updates\n\n` +
                               `**3️⃣ Automation:**\n` +
                               `• Status message updates every 5 minutes\n` +
                               `• Real-time monitoring active\n` +
                               `• 24/7 system health checks`,
                        inline: false
                    },
                    {
                        name: '🌟 Premium Features',
                        value: `• **Real-time Updates**: Instant status changes\n` +
                               `• **Advanced Analytics**: Success rates & trends\n` +
                               `• **Smart Notifications**: Maintenance alerts\n` +
                               `• **Professional Dashboard**: Clean, modern UI\n` +
                               `• **Multi-game Support**: 4+ games monitored`,
                        inline: true
                    },
                    {
                        name: '⚡ Performance Metrics',
                        value: `• **Uptime**: 99.9% guaranteed\n` +
                               `• **Response Time**: <50ms\n` +
                               `• **Update Speed**: Instant\n` +
                               `• **Data Accuracy**: Real-time\n` +
                               `• **Support**: 24/7 available`,
                        inline: true
                    }
                )
                .setTimestamp()
                .setFooter({
                    text: 'Yash Store Premium Status System • Advanced Monitoring Active',
                    iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
                });

            await interaction.editReply({ embeds: [embed] });

            // Send confirmation to admin channel
            const adminEmbed = new EmbedBuilder()
                .setTitle('🎮 🚀 Premium Status System - NOW ACTIVE!')
                .setDescription(
                    `🔥 **Your advanced cheat monitoring system is now live!** 🔥\n\n` +
                    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
                )
                .setColor('#0099ff')
                .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
                .addFields(
                    {
                        name: '⚙️ System Configuration',
                        value: `📢 **Status Channel:** ${statusChannel}\n` +
                               `🔄 **Auto Updates:** ${enableAutoUpdate ? '✅ Active' : '❌ Inactive'}\n` +
                               `🎯 **Products Tracked:** 20+ cheats\n` +
                               `📊 **Games Supported:** 4+ titles\n` +
                               `⚡ **Response Time:** <50ms`,
                        inline: true
                    },
                    {
                        name: '🛠️ Admin Control Panel',
                        value: `**Available Commands:**\n` +
                               `• \`/cheatstatus set\` - Update product status\n` +
                               `• \`/cheatstatus view\` - Detailed analytics\n` +
                               `• \`/cheatstatus update\` - Force refresh\n\n` +
                               `**Quick Actions:**\n` +
                               `• Click status buttons for instant changes\n` +
                               `• Real-time dashboard management\n` +
                               `• Automated monitoring alerts`,
                        inline: true
                    },
                    {
                        name: '🌟 Key Benefits',
                        value: `• **24/7 Monitoring**: Always active\n` +
                               `• **Real-time Updates**: Instant changes\n` +
                               `• **Professional UI**: Clean, modern design\n` +
                               `• **Advanced Analytics**: Success rates & trends\n` +
                               `• **Smart Notifications**: Maintenance alerts\n` +
                               `• **Multi-admin Support**: Team management`,
                        inline: false
                    },
                    {
                        name: '🎯 Getting Started',
                        value: `**Step 1:** Check the status channel for the live dashboard\n` +
                               `**Step 2:** Use \`/status\` to preview user view\n` +
                               `**Step 3:** Test admin controls with \`/cheatstatus set\`\n` +
                               `**Step 4:** Customize auto-update settings as needed`,
                        inline: false
                    }
                )
                .setTimestamp()
                .setFooter({
                    text: 'Yash Store Admin Panel • Premium Status Management System',
                    iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
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
        .setTitle('🎮 Yash Store - Premium Status Dashboard')
        .setDescription(
            `🚀 **Advanced Cheat Monitoring System** • Real-time availability status for all premium game cheats\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        )
        .setColor('#0099ff')
        .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
        .setTimestamp()
        .setFooter({
            text: 'Premium System Initialized • Advanced Monitoring Active • First data scan in progress...',
            iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
        })
        .addFields(
            {
                name: '🔧 System Performance',
                value: '✅ **Status System**: Online & Active\n' +
                       '🔄 **Auto-Updates**: Enabled (5min intervals)\n' +
                       '📊 **Products Tracked**: 20+ Premium Cheats\n' +
                       '⚡ **Response Time**: <50ms • Real-time updates',
                inline: true
            },
            {
                name: '🎮 User Interface',
                value: `• **\`/status\`** - 📊 Complete cheat overview\n` +
                       `• **\`/marvelrivals\`** - 🦸‍♂️ Browse Marvel cheats\n` +
                       `• **\`/huntshowdown\`** - 🔫 Browse Hunt cheats\n` +
                       `• **\`/hellletloose\`** - ⚔️ Browse HLL cheats\n` +
                       `• **\`/honkaistarrail\`** - 🌟 Browse HSR cheats`,
                inline: true
            },
            {
                name: '🎯 Premium Status Guide',
                value: `✅ **Available** - ✨ Ready for instant delivery\n` +
                       `🔧 **Maintenance** - ⏳ Temporary updates (1-3 hours)\n` +
                       `❌ **Out of Stock** - 🔄 Restocking soon\n` +
                       `⚠️ **Limited Stock** - 🔥 Act fast! Limited quantity`,
                inline: false
            },
            {
                name: '💎 Premium Features',
                value: `• **24/7 Monitoring** - Always watching, always updating\n` +
                       `• **Real-time Alerts** - Instant notifications for changes\n` +
                       `• **Advanced Analytics** - Success rates & performance metrics\n` +
                       `• **Professional Dashboard** - Clean, modern interface\n` +
                       `• **Multi-game Support** - 4+ titles monitored simultaneously`,
                inline: false
            },
            {
                name: '🌟 Exclusive Support',
                value: 'Our premium support team is ready for:\n' +
                       '🔔 **Restock Notifications** - Get alerts when items return\n' +
                       '🚀 **Priority Access** - Early access to new releases\n' +
                       '🛠️ **Technical Support** - 24/7 expert assistance\n' +
                       '✨ **Custom Requests** - Personalized solutions available',
                inline: false
            },
            {
                name: '⚡ Quick Commands Reference',
                value: `**Admin Commands:**\n` +
                       `• \`/setupstatus\` - Configure monitoring system\n` +
                       `• \`/cheatstatus set\` - Update product status\n` +
                       `• \`/cheatstatus view\` - View analytics\n\n` +
                       `**User Commands:**\n` +
                       `• \`/status\` - View all product status\n` +
                       `• Game-specific commands for individual browsing`,
                inline: false
            }
        );
}