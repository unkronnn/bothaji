const fs = require('fs');
const path = require('path');
const errorHandler = require('./errorHandler'); // Import error handler

module.exports = (client) => {
  const commandFiles = fs.readdirSync(path.join(__dirname, '..', 'commands')).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.data.name, command);
  }

  client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      // Panggil error handler
      await errorHandler(client, interaction, error);
    }
  });
};