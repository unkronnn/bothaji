const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = (client) => {
  client.on('guildMemberRemove', async member => {
    const leaveChannelId = config.guild.leaveChannelId;
    const leaveChannel = member.guild.channels.cache.get(leaveChannelId);

    if (!leaveChannel) {
      console.error(`Leave channel not found: ${leaveChannelId}`);
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(config.appearance.embedColor)
      .setTitle('\`👋\` Goodbye from HAJI UTONG! \`🚀\`')
      .setDescription(`
      Oh, \`${member.user.username}\`! You will always be a part of HAJI UTONG story, even though we have to part ways today. \`😢\`  
      
      ## **\`🎯\` Message for You:**  
      May your next adventure be full of success and sweet memories. If anything happens, remember, our door is always open! \`✨\`  
      
      \`💌\` Don't forget, if you miss HAJI UTONG, we will welcome you with open arms! \`🤗\`  
      
      Farewell and best of luck, \`${member.user.username}\`! \`🌈\` See you next time, stay spirited! \`✌️\`  
      `)
      .setThumbnail(member.user.displayAvatarURL())
      .setImage(config.server.footerImage)
      .setFooter({ text: 'HAJI UTONG | © 2025' })
      .setTimestamp();      

    await leaveChannel.send({ embeds: [embed] });
  });
};