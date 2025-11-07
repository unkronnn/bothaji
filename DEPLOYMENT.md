# VPS Deployment Checklist for Yash Store Bot

## ✅ Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Node.js 18+ installed on VPS
- [ ] PM2 installed globally (`npm install -g pm2`)
- [ ] Git installed
- [ ] Required ports open (if using webhooks)

### 2. Files to Upload
- [ ] All source files from repository
- [ ] `.env` file with correct DISCORD_TOKEN
- [ ] `config/config.json` with correct settings

### 3. Configuration
- [ ] Update `.env` with production Discord token
- [ ] Verify `config/config.json` guild IDs and settings
- [ ] Check database connections if using MongoDB

### 4. Dependencies
- [ ] Run `npm install` to install all dependencies
- [ ] Verify all packages installed successfully

### 5. Bot Setup
- [ ] Create Discord application and bot
- [ ] Set correct bot permissions
- [ ] Invite bot to server with proper scopes
- [ ] Set correct guild ID in config

## 🚀 Deployment Commands

### Using PM2 (Recommended)
```bash
# Start the bot with PM2
pm2 start ecosystem.config.js

# Check status
pm2 status

# View logs
pm2 logs yash-store-bot

# Restart bot
pm2 restart yash-store-bot

# Stop bot
pm2 stop yash-store-bot

# Save PM2 configuration
pm2 save
pm2 startup
```

### Using Node.js Directly
```bash
# Start bot directly
npm start

# Or
node index.js
```

## 🔧 Common Issues & Solutions

### 1. Module Not Found
```bash
# Reinstall dependencies
npm install
# or
rm -rf node_modules package-lock.json
npm install
```

### 2. Discord Token Issues
- Verify token is correct in `.env`
- Check bot is enabled in Discord Developer Portal
- Ensure correct permissions

### 3. Guild Commands Not Registering
- Check guild ID in `config/config.json`
- Verify bot has `applications.commands` scope
- Try re-registering commands

### 4. Memory Issues
- PM2 automatically restarts on memory limit (1G)
- Monitor with `pm2 monit`

### 5. Port Issues
- Check if required ports are open
- Verify firewall settings

## 📊 Monitoring

### PM2 Monitoring
```bash
# Real-time monitoring
pm2 monit

# View logs
pm2 logs

# Check memory usage
pm2 show yash-store-bot
```

### Log Files
- `logs/err.log` - Error logs
- `logs/out.log` - Output logs
- `logs/combined.log` - Combined logs

## 🔄 Updates & Maintenance

### Updating Bot
```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Restart bot
pm2 restart yash-store-bot
```

### Adding New Commands
1. Add command file to `commands/` directory
2. Add button handlers to `buttons/` directory
3. Restart bot: `pm2 restart yash-store-bot`

## 🛡️ Security Considerations

- Never commit `.env` file to public repository
- Use environment variables for sensitive data
- Regularly update Discord token if compromised
- Monitor bot permissions regularly

## 📞 Support

If you encounter issues:
1. Check PM2 logs: `pm2 logs yash-store-bot`
2. Verify configuration files
3. Check Discord Developer Portal settings
4. Ensure all dependencies are installed

## ✅ Post-Deployment Verification

- [ ] Bot starts successfully
- [ ] Commands register correctly
- [ ] Buttons and interactions work
- [ ] No error messages in logs
- [ ] Bot responds to test commands
- [ ] All game commands function properly