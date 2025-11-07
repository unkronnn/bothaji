const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const fs = require('fs');
const path = require('path');
const config = require('./config/config.json');
require('dotenv').config();

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('[❌] Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('[❌] Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('\n[INFO] Received SIGINT. Gracefully shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n[INFO] Received SIGTERM. Gracefully shutting down...');
  process.exit(0);
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  // ASCII Text Art
  console.log('Store Bot is starting...');

  console.log('[INFO] Initializing Bot...');

  // Load Commands
  console.log('[INFO] Loading commands...');
  const commands = [];
  const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    console.log(`[✅] ${file} loaded successfully`);
    await delay(200); // Small delay for better logging
  }

  // Store commands for later registration
  const loadedCommands = commands;

  // Initialize Client
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
    ],
  });
  client.commands = new Collection();

  // Load Command Handler
  console.log('[INFO] Loading Command Handler...');
  const commandHandler = require('./handlers/commandHandler.js');
  commandHandler(client);
  console.log('[✅] Command Handler loaded successfully.');

  // Load Event Handler
  console.log('[INFO] Loading Event Handler...');
  const eventHandler = require('./handlers/eventHandler.js');
  eventHandler(client);
  console.log('[✅] Event Handler loaded successfully.');

  // Load TIcket Handler
  console.log('[INFO] Loading TIcket Handler...');
  const ticketHandler = require('./handlers/ticketHandler.js');
  ticketHandler(client);
  console.log('[✅] Ticket Handler loaded successfully.');

  // Load Error Handler
  console.log('[INFO] Loading Error Handler...');
  const errorHandler = require('./handlers/errorHandler.js');
  errorHandler(client);
  console.log('[✅] Error Handler loaded successfully.');

  // Load AI Message Handler
  console.log('[INFO] Loading AI Message Handler...');
  const aiHandler = require('./handlers/aiHandler.js');
  aiHandler(client);
  console.log('[✅] AI Message Handler loaded successfully.');

  // Load Button Handler
  console.log('[INFO] Loading Button Handler...');
  const interactionHandler = require('./handlers/interactionHandler');
  interactionHandler(client);
  console.log('[✅] Button Handler loaded successfully.');
    // Load Button Handler
  console.log('[INFO] Loading Button Handler...');
  const buttonHandler = require('./handlers/buttonHandler');
  buttonHandler(client);
  console.log('[✅] Button Handler loaded successfully.');

  // Load Welcome Handler
  console.log('[INFO] Loading Welcome Handler...');
  const welcomeHandler = require('./handlers/welcomeHandler');
  welcomeHandler(client);
  console.log('[✅] Welcome Handler loaded successfully.');

  // Load Leave Handler
  console.log('[INFO] Loading Leave Handler...');
  const leaveHandler = require('./handlers/leaveHandler');
  leaveHandler(client);
  console.log('[✅] Leave Handler loaded successfully.');


  // Bot Ready
  client.once('ready', async () => {
    console.log(`[✅] Ready! Logged in as ${client.user.tag}`);
    console.log(`[INFO] Bot User ID: ${client.user.id}`);
    console.log(`[INFO] Bot Application ID: ${client.application.id}`);

    // Refresh Application Commands after bot is ready
    console.log('[INFO] Refreshing application commands (/) ...');
    try {
      const clientId = client.application.id;
      console.log(`[INFO] Using Application ID: ${clientId}`);
      console.log(`[INFO] Guild ID: ${config.guild.id}`);

      const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);
      await rest.put(
        Routes.applicationGuildCommands(clientId, config.guild.id),
        { body: loadedCommands }
      );
      console.log('[✅] Successfully registered slash commands!');
      console.log(`[✅] Total commands registered: ${loadedCommands.length}`);
    } catch (error) {
      console.error('[❌] Failed to register slash commands:');
      console.error(error.message);
    }

    // Start status auto-update system
    console.log('[INFO] Starting status auto-update system...');
    startStatusAutoUpdate(client);

    console.log('[✅] Bot is ready to use!');
  });

  // Login to Discord
  try {
    await client.login(process.env.DISCORD_TOKEN);
    console.log('[✅] Presence set successfully.');
  } catch (error) {
    console.error('[❌] Failed to login to Discord:');
    console.error(error.message);
    process.exit(1);
  }
})();

// Status Auto-Update System
function startStatusAutoUpdate(client) {
  const fs = require('fs');
  const path = require('path');

  let updateInterval;

  async function updateStatus() {
    try {
      const statusFile = path.join(__dirname, './config/cheatStatus.json');

      if (!fs.existsSync(statusFile)) {
        console.log('[INFO] Status file not found, skipping auto-update');
        return;
      }

      const statusData = JSON.parse(fs.readFileSync(statusFile, 'utf8'));

      if (!statusData.globalSettings?.autoUpdate) {
        console.log('[INFO] Auto-update is disabled');
        return;
      }

      const statusChannelId = statusData.globalSettings.statusChannelId;
      if (!statusChannelId) {
        console.log('[INFO] Status channel not configured, skipping auto-update');
        return;
      }

      const channel = await client.channels.fetch(statusChannelId).catch(() => null);
      if (!channel) {
        console.log('[WARNING] Status channel not found, skipping auto-update');
        return;
      }

      // Generate updated status embed
      const embed = generateStatusEmbed(statusData);

      // Update existing message or create new one
      if (statusData.globalSettings.statusMessageId) {
        try {
          const message = await channel.messages.fetch(statusData.globalSettings.statusMessageId);
          await message.edit({ embeds: [embed] });
          console.log(`[✅] Status auto-updated successfully at ${new Date().toLocaleTimeString()}`);
        } catch (error) {
          console.log('[INFO] Status message not found, creating new one...');
          const newMessage = await channel.send({ embeds: [embed] });
          statusData.globalSettings.statusMessageId = newMessage.id;
          fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
        }
      }

    } catch (error) {
      console.error('[ERROR] Failed to auto-update status:', error.message);
    }
  }

  function generateStatusEmbed(statusData) {
    const EmbedBuilder = require('discord.js').EmbedBuilder;

    let allAvailable = 0;
    let totalCheats = 0;
    const statusCounts = {
      available: 0,
      maintenance: 0,
      out_of_stock: 0,
      limited_stock: 0
    };

    // Calculate statistics
    for (const [game, cheats] of Object.entries(statusData)) {
      if (game === 'globalSettings') continue;

      for (const [cheat, info] of Object.entries(cheats)) {
        totalCheats++;
        if (info.status === 'available') allAvailable++;
        statusCounts[info.status] = (statusCounts[info.status] || 0) + 1;
      }
    }

    const successRate = totalCheats > 0 ? Math.round((allAvailable/totalCheats) * 100) : 0;

    // Set embed color based on overall availability
    let overallColor;
    if (successRate >= 80) {
      overallColor = '#00ff00'; // Green
    } else if (successRate >= 60) {
      overallColor = '#ffaa00'; // Yellow
    } else {
      overallColor = '#ff0000'; // Red
    }

    const embed = new EmbedBuilder()
      .setTitle('🎮 Yash Store - Live Cheat Status Dashboard')
      .setDescription('Real-time availability status for all game cheats • Auto-updated every 5 minutes')
      .setColor(overallColor)
      .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
      .setTimestamp()
      .setFooter({
        text: `Last updated: ${new Date().toLocaleString()} • Auto-refresh active • Success Rate: ${successRate}%`,
        iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
      })
      .addFields(
        {
          name: '📊 Live Statistics',
          value: `✅ **Available:** ${statusCounts.available}\n` +
                 `🔧 **Maintenance:** ${statusCounts.maintenance}\n` +
                 `❌ **Out of Stock:** ${statusCounts.out_of_stock}\n` +
                 `⚠️ **Limited Stock:** ${statusCounts.limited_stock}\n\n` +
                 `📈 **Overall Success Rate:** ${successRate}% (${allAvailable}/${totalCheats})`,
          inline: true
        },
        {
          name: '🔄 Update Information',
          value: `**Next Update:** <t:${Math.floor(Date.now() / 1000) + 300}:R>\n` +
                 `**Auto-Update:** Active\n` +
                 `**Update Interval:** Every 5 minutes\n` +
                 `**System Status:** Online`,
          inline: true
        }
      );

    // Add alerts if needed
    const alerts = [];
    if (statusCounts.limited_stock > 0) {
      alerts.push(`🚨 **Limited Stock Alert:** ${statusCounts.limited_stock} cheat(s) with limited availability!`);
    }
    if (statusCounts.maintenance > 0) {
      alerts.push(`🔧 **Maintenance Notice:** ${statusCounts.maintenance} cheat(s) currently under maintenance`);
    }

    if (alerts.length > 0) {
      embed.addFields({
        name: '🚨 Active Alerts',
        value: alerts.join('\n'),
        inline: false
      });
    }

    return embed;
  }

  // Initial update after 10 seconds
  setTimeout(updateStatus, 10000);

  // Set up recurring updates
  const updateIntervalMs = 300000; // 5 minutes
  updateInterval = setInterval(updateStatus, updateIntervalMs);

  console.log(`[✅] Status auto-update system started (interval: ${updateIntervalMs/1000} seconds)`);

  // Handle shutdown gracefully
  process.on('SIGINT', () => {
    if (updateInterval) {
      clearInterval(updateInterval);
      console.log('[INFO] Status auto-update stopped');
    }
  });

  process.on('SIGTERM', () => {
    if (updateInterval) {
      clearInterval(updateInterval);
      console.log('[INFO] Status auto-update stopped');
    }
  });
}