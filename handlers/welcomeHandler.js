const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const { createCanvas, loadImage, registerFont } = require('canvas');
const config = require('../config/config.json');
const path = require('path');

// You can add custom fonts if needed
registerFont(path.resolve(__dirname, '../fonts/PlusJakartaSans-VariableFont_wght.ttf'), { family: 'Plus Jakarta Sans' });

module.exports = (client) => {
  client.on('guildMemberAdd', async member => {
    try {
      const welcomeChannelId = config.guild.welcomeChannelId;
      const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);

      if (!welcomeChannel) {
        console.error(`Welcome channel not found: ${welcomeChannelId}`);
        return;
      }

      // Create welcome banner
      const banner = await createWelcomeBanner(member);
      const attachment = new AttachmentBuilder(banner, { name: 'welcome-banner.png' });

      const embed = createWelcomeEmbed(member, attachment);

      await welcomeChannel.send({ 
        embeds: [embed],
        files: [attachment]
      });

    } catch (error) {
      console.error('Error in welcome event:', error);
      // Fallback message if something goes wrong
      welcomeChannel?.send(`Welcome to HAJI UTONG, ${member}! 🎉`);
    }
  });
};

async function createWelcomeBanner(member) {
  // Create canvas
  const canvas = createCanvas(1100, 300);
  const ctx = canvas.getContext('2d');

  try {
    // Draw background with gradient
    const gradient = ctx.createLinearGradient(0, 0, 1100, 0);
    gradient.addColorStop(0, '#3B82F6');   
    gradient.addColorStop(0.5, '#3B82F6');  
    gradient.addColorStop(1, '#3B82F6');   
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1100, 300);

    // Add decorative pattern
    drawBackgroundPattern(ctx);

    // Load and draw user avatar
    const avatar = await loadImage(member.user.displayAvatarURL({ extension: 'png', size: 256 }));
    drawAvatar(ctx, avatar);

    // Add text content
    drawWelcomeText(ctx, member);

    // Add decorative elements
    drawDecorations(ctx);

    return canvas.toBuffer();

  } catch (error) {
    console.error('Error creating banner:', error);
    throw error;
  }
}

function drawBackgroundPattern(ctx) {
  // Add subtle hexagon pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  
  for (let x = 0; x < 1100; x += 30) {
    for (let y = 0; y < 300; y += 30) {
      drawHexagon(ctx, x, y, 15);
    }
  }

  // Add a subtle gradient overlay
  const overlay = ctx.createLinearGradient(0, 0, 0, 300);
  overlay.addColorStop(0, 'rgba(2, 8, 23, 0.1)');
  overlay.addColorStop(1, 'rgba(2, 8, 23, 0.2)');
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, 1100, 300);
}

function drawHexagon(ctx, x, y, radius) {
  const angle = Math.PI / 3;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    ctx.lineTo(x + radius * Math.cos(angle * i), y + radius * Math.sin(angle * i));
  }
  ctx.closePath();
  ctx.stroke();
}

function drawAvatar(ctx, avatar) {
  // Draw avatar circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(150, 150, 80, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  
  // Draw avatar image
  ctx.drawImage(avatar, 70, 70, 160, 160);
  ctx.restore();

  // Draw avatar border
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(150, 150, 80, 0, Math.PI * 2);
  ctx.stroke();

  // Add subtle shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 5;
}

function drawWelcomeText(ctx, member) {
  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // Username
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 50px "Plus Jakarta Sans"';
  ctx.fillText(`Welcome, ${member.user.username}!`, 280, 120);

  // User info
  ctx.font = '500 28px "Plus Jakarta Sans"';
  const joinDate = new Date(member.joinedTimestamp).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const accountAge = getAccountAge(member.user.createdTimestamp);
  
  // Info lines
  const info = [
    `Member #${member.guild.memberCount}`,
    `Joined: ${joinDate}`,
    `Account Age: ${accountAge}`
  ];

  info.forEach((text, index) => {
    ctx.fillText(text, 280, 170 + (index * 40));
  });
}

function drawDecorations(ctx) {
  // Add decorative elements
  const decorations = ['✨', '🚀', '💫'];
  ctx.font = '700 30px "Plus Jakarta Sans"';
  
  decorations.forEach((decoration, index) => {
    ctx.fillText(decoration, 950 + (index * 40), 50);
  });

  // Add bottom accent line
  const lineGradient = ctx.createLinearGradient(0, 280, 1100, 280);
  lineGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
  lineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
  lineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 280);
  ctx.lineTo(1100, 280);
  ctx.stroke();
}

function createWelcomeEmbed(member, attachment) {
  return new EmbedBuilder()
    .setColor(config.appearance.embedColor || '#4F46E5')
    .setTitle('\`✨\` Welcome to HAJI UTONG! \`✨\`')
    .setDescription(`
Hey ${member}! \`👋\` You're now officially part of the HAJI UTONG family! \`🚀\` Get ready for an amazing hosting experience. \`🔥\`

**\`🛠️\` Essential Checkpoints: \`👀\`**  
• **Terms of Service**: <#1338437118846042123> \`📜\`  
• **Special Offers**: <#1434066066853724250> \`💸\`  
• **Announcements**: <#1424080601400742050> \`📢\`  

\`💡\` **Pro Tips:** Don't forget to check our special promotions at <#1434066066853724250> for extra savings! We might have some surprises for you. \`🎁\`

Enjoy our services! If you need any help, just ask. We're here for you, anytime. \`🤝\`  

\`🌟\` **HAJI UTONG - Gaming Chair Service!** \`🚀\``)
    .setImage('attachment://welcome-banner.png')
    .setFooter({ text: 'HAJI UTONG | ©️ 2025' })
    .setTimestamp();
}

function getAccountAge(timestamp) {
  const now = Date.now();
  const age = now - timestamp;
  const days = Math.floor(age / (1000 * 60 * 60 * 24));
  
  if (days < 30) return `${days} days`;
  if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? 's' : ''}`;
  }
  
  const years = Math.floor(days / 365);
  return `${years} year${years > 1 ? 's' : ''}`;
}