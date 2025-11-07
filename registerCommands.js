const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config/config.json');
require('dotenv').config();

const commands = [];
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

console.log(`Loading ${commandFiles.length} command files...`);

for (const file of commandFiles) {
  try {
    const command = require(`./commands/${file}`);
    if (command.data) {
      commands.push(command.data.toJSON());
      console.log(`✅ Loaded: ${command.data.name}`);
    }
  } catch (error) {
    console.error(`❌ Error loading ${file}:`, error.message);
  }
}

console.log(`Total commands to register: ${commands.length}`);

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    console.log(`Using Client ID: ${config.guild.client}`);
    console.log(`Using Guild ID: ${config.guild.id}`);

    // First, try to delete existing commands
    try {
      await rest.put(
        Routes.applicationGuildCommands(config.guild.client, config.guild.id),
        { body: [] }
      );
      console.log('✅ Cleared existing guild commands');
    } catch (error) {
      console.log('⚠️ Could not clear existing commands:', error.message);
    }

    // Register new commands
    await rest.put(
      Routes.applicationGuildCommands(config.guild.client, config.guild.id),
      { body: commands }
    );

    console.log(`✅ Successfully registered ${commands.length} application (/) commands.`);

    // List the game commands specifically
    const gameCommands = ['roblox', 'thefinals', 'valorant', 'warthunder', 'wutheringwaves', 'zenlesszonezero', 'marvelrivals', 'narakabladepoint', 'overwatch2', 'payday3', 'pubg', 'rainbowsixsiege', 'rdr2'];
    const availableGameCommands = commands.filter(cmd => gameCommands.includes(cmd.name));
    console.log(`🎮 Game commands available: ${availableGameCommands.map(cmd => cmd.name).join(', ')}`);

  } catch (error) {
    console.error('❌ Error registering commands:', error);
    if (error.code === 50001) {
      console.error('Missing Access: Ensure bot has applications.commands scope');
    } else if (error.code === 10013) {
      console.error('Invalid User: Check the CLIENT_ID in config');
    }
  }
})();
