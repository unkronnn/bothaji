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