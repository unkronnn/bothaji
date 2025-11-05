const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const os = require('os');
const packageJson = require('../package.json');
const config = require('../config/config.json');
const errorHandler = require('../handlers/errorHandler');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('about')
    .setDescription('🛠️ | Display complete information about the bot'),
  async execute(interaction) {
    try {

      await interaction.channel.sendTyping();

      const guild = interaction.guild;
      const memberCount = guild?.memberCount || 'N/A';
      const serverCount = interaction.client.guilds.cache.size;

      const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2);
      const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);
      const usedMemory = (totalMemory - freeMemory).toFixed(2);
      const cpuModel = os.cpus()[0].model;
      const osType = os.type();
      const osRelease = os.release();
      const ping = Math.round(interaction.client.ws.ping);

      const embed = new EmbedBuilder()
        .setColor(config.appearance.embedColor)
        .setTitle('`🤖` Bot Information')
        .setDescription(`${packageJson.description}`)
        .setThumbnail(interaction.client.user.displayAvatarURL({ dynamic: true }))
        .addFields(
          { 
            name: '`📊` Bot Stats', 
            value: `**• Servers:** ${serverCount}\n**• Members:** ${memberCount}`, 
            inline: true 
          },
          { 
            name: '`🖥️` System', 
            value: `**• OS:** ${osType} ${osRelease}\n**• CPU:** ${cpuModel.substring(0, 20)}...`, 
            inline: true 
          },
          { 
            name: '`⚙️` Performance', 
            value: `**• Ping:** ${ping}ms\n**• RAM:** ${usedMemory}/${totalMemory} GB`, 
            inline: true 
          },
          { 
            name: '`🛠️` Development', 
            value: `**• Version:** ${packageJson.version}\n**• discord.js:** v${packageJson.dependencies['discord.js']}`, 
            inline: true 
          },
          { 
            name: '`👤` Creator', 
            value: `**• Name:** ${packageJson.author.name}\n**• Contact:** [GitHub](${packageJson.author.url})`, 
            inline: true 
          }
        )
        .setFooter({ text: `©️ ${config.server.name} - About Us` })
        .setTimestamp();

      const actionRow = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setLabel('Report Bug')
            .setStyle(ButtonStyle.Link)
            .setURL(packageJson.bugs.url)
            .setEmoji('🐞')
        );

      await interaction.reply({ 
        embeds: [embed], 
        components: [actionRow],
        ephemeral: false 
      });
    } catch (error) {
      console.error('Error in about command:', error);
      errorHandler(error, interaction);
    }
  },
};
