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

    const gameStatus = {}; // Track status per game for simplified display

    console.log(`[INFO] Generating status embed with data for ${Object.keys(statusData).length} categories`);

    // Calculate statistics and game status
    for (const [game, cheats] of Object.entries(statusData)) {
      if (game === 'globalSettings') continue;

      const gameStats = {
        available: 0,
        maintenance: 0,
        out_of_stock: 0,
        limited_stock: 0,
        total: 0
      };

      console.log(`[INFO] Processing game: ${game} with ${Object.keys(cheats).length} cheats`);

      for (const [cheat, info] of Object.entries(cheats)) {
        totalCheats++;
        gameStats.total++;
        if (info.status === 'available') {
          allAvailable++;
          gameStats.available++;
        }
        statusCounts[info.status] = (statusCounts[info.status] || 0) + 1;
        gameStats[info.status]++;
      }

      gameStatus[game] = gameStats;
      console.log(`[INFO] Game ${game}: ${gameStats.available}/${gameStats.total} available`);
    }

    const successRate = totalCheats > 0 ? Math.round((allAvailable/totalCheats) * 100) : 0;
    console.log(`[INFO] Total cheats: ${totalCheats}, Available: ${allAvailable}, Success rate: ${successRate}%`);

    // Set embed color based on overall availability
    let overallColor;
    let overallStatusEmoji;
    if (successRate >= 80) {
      overallColor = '#00ff00'; // Green
      overallStatusEmoji = '🟢';
    } else if (successRate >= 60) {
      overallColor = '#ffaa00'; // Yellow
      overallStatusEmoji = '🟡';
    } else {
      overallColor = '#ff0000'; // Red
      overallStatusEmoji = '🔴';
    }

    const embed = new EmbedBuilder()
      .setTitle(`${overallStatusEmoji} YASH STORE - COMPREHENSIVE CHEAT MONITOR`)
      .setDescription(
        `🚀 **Real-time cheat availability** • Automatic updates • **${totalCheats}+** products across **${Object.keys(gameStatus).length}** games monitored\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
      )
      .setColor(overallColor)
      .setThumbnail('https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg')
      .setTimestamp()
      .setFooter({
        text: `Last Update: ${new Date().toLocaleString()} • Auto-refresh • Yash Store Premium`,
        iconURL: 'https://cdn.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg'
      });

    // Comprehensive Game Status Overview
    const gameStatusLines = [];
    for (const [game, stats] of Object.entries(gameStatus)) {
      const gameName = formatGameName(game);
      const gameSuccessRate = Math.round((stats.available / stats.total) * 100);

      let statusEmoji;
      if (gameSuccessRate >= 80) {
        statusEmoji = '🟢';
      } else if (gameSuccessRate >= 60) {
        statusEmoji = '🟡';
      } else {
        statusEmoji = '🔴';
      }

      // Add more detailed status information
      let statusDetails = [];
      if (stats.limited_stock > 0) statusDetails.push(`${stats.limited_stock} ⚠️`);
      if (stats.maintenance > 0) statusDetails.push(`${stats.maintenance} 🔧`);
      if (stats.out_of_stock > 0) statusDetails.push(`${stats.out_of_stock} ❌`);

      const detailsText = statusDetails.length > 0 ? ` (${statusDetails.join(', ')})` : '';

      gameStatusLines.push(`${statusEmoji} **${gameName}**: ${stats.available}/${stats.total} available (${gameSuccessRate}%)${detailsText}`);
    }

    embed.addFields(
      {
        name: '📊 **GAME STATUS OVERVIEW**',
        value: gameStatusLines.join('\n'),
        inline: false
      },
      {
        name: '📈 **SYSTEM STATISTICS**',
        value: `✅ **Available:** ${statusCounts.available} products\n` +
               `🔧 **Maintenance:** ${statusCounts.maintenance} products\n` +
               `❌ **Out of Stock:** ${statusCounts.out_of_stock} products\n` +
               `⚠️ **Limited Stock:** ${statusCounts.limited_stock} products\n\n` +
               `🎯 **Overall Success Rate:** ${successRate}% (${allAvailable}/${totalCheats})`,
        inline: true
      },
      {
        name: '⚙️ **SYSTEM PERFORMANCE**',
        value: `🔄 **Next Update:** <t:${Math.floor(Date.now() / 1000) + 300}:R>\n` +
               `⚡ **Update Speed:** Instant\n` +
               `🕐 **Interval:** Every 5 minutes\n` +
               `🌟 **System Health:** Online`,
        inline: true
      }
    );

    // Special alerts section
    const alerts = [];
    if (statusCounts.limited_stock > 0) {
      alerts.push(`🔥 **LIMITED STOCK FLASH SALE!**\n${statusCounts.limited_stock} products with limited availability - Act fast!`);
    }
    if (statusCounts.maintenance > 0) {
      alerts.push(`🔧 **MAINTENANCE IN PROGRESS**\n${statusCounts.maintenance} products temporarily unavailable - Updates incoming`);
    }
    if (successRate < 50) {
      alerts.push(`⚠️ **LOW AVAILABILITY WARNING**\nHigh demand detected - Check back soon for restocks`);
    }

    if (alerts.length > 0) {
      embed.addFields({
        name: '🚨 **ACTIVE ALERTS**',
        value: alerts.join('\n\n'),
        inline: false
      });
    }

    // Quick commands reference
    embed.addFields({
      name: '💡 **QUICK COMMANDS**',
      value: `• **\`/status\`** - View detailed status\n` +
             `• **Admin Panel** - Status control buttons\n` +
             `• **Auto-updates** - No manual refresh needed`,
      inline: false
    });

    return embed;
  }

  function formatGameName(game) {
    const names = {
      'marvelrivals': 'Marvel Rivals',
      'huntshowdown': 'Hunt Showdown',
      'hellletloose': 'Hell Let Loose',
      'honkaistarrail': 'Honkai Star Rail',
      'fortnite': 'Fortnite',
      'apexlegends': 'Apex Legends',
      'cs2': 'CS2',
      'dayz': 'DayZ',
      'deadbydaylight': 'Dead By Daylight',
      'gtav': 'GTA V',
      'valorant': 'Valorant',
      'pubg': 'PUBG',
      'dota2': 'Dota 2',
      'warzone': 'Warzone',
      'bo7': 'Black Ops 7',
      'arenabreakout': 'Arena Breakout',
      'deltaforce': 'Delta Force',
      'deadlock': 'Deadlock',
      'fragpunk': 'Fragpunk',
      'mobilegames': 'Mobile Games',
      'genshinimpact': 'Genshin Impact',
      'fivem': 'FiveM',
      'callofduty': 'Call of Duty',
      'arcraiders': 'Arc Raiders',
      'battlefield': 'Battlefield',
      'spoofer': 'HWID Spoofer',
      'tools': 'Tools & Utilities',
      'othergames': 'Other Games',
      'dma': 'DMA Hardware',
      'escapefromtarkov': 'Escape From Tarkov'
    };
    return names[game] || game.charAt(0).toUpperCase() + game.slice(1);
  }

  // Initial update after 10 seconds
  setTimeout(updateStatus, 10000);

  // Set up recurring updates - every 2 minutes for better responsiveness
  const updateIntervalMs = 120000; // 2 minutes (was 5 minutes)
  updateInterval = setInterval(updateStatus, updateIntervalMs);

  console.log(`[✅] Enhanced status auto-update system started (interval: ${updateIntervalMs/1000} seconds)`);
  console.log('[INFO] Status updates will run automatically - no manual /status command needed!');

  // Handle shutdown gracefully
  const shutdownHandler = (signal) => {
    if (updateInterval) {
      clearInterval(updateInterval);
      console.log(`[INFO] Status auto-update stopped (${signal})`);
    }
  };

  process.on('SIGINT', () => shutdownHandler('SIGINT'));
  process.on('SIGTERM', () => shutdownHandler('SIGTERM'));
}