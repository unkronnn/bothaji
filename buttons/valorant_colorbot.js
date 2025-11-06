const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'valorant_colorbot',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎨 Valorant Colorbot (HARDWARE)')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 78.750 / $4.60
**7 DAY**   — IDR 243.000 / $15.00
**30 DAY**  — IDR 437.250 / $27.00
**90 DAY**  — IDR 836.750 / $51.00
**1 YEAR**  — IDR 2.056.500 / $127.00

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🛠️**Hardware Requirements:**
• **KMBox Net / Makcu:** Required
• **Second PC:** Optional (for better security)
• **Game Client:** Any game platform

### 🎯**Feature List:**

**Aimbot Features:**
• Aimbot On/Off toggle
• Aimbot FOV control
• Aim Key assignment
• Head offset adjustment
• Bezier On/Off (for smooth movement)
• Enemy Color selection (Yellow, Purple)
• Multiple aimbot configs (switch between different aim styles)
• Aim Speed control
• Aim Bezier Speed adjustment

**Triggerbot Features:**
• Triggerbot On/Off toggle
• Trigger Key assignment
• Trigger Delay adjustment
• First Shot Delay setting

**Silentbot Features:**
• Silentbot On/Off toggle
• Silentbot Key assignment
• Silentbot speed control
• Silentbot cooldown setting
• Silentbot Bezier smoothing

**Hardware Configuration:**
• Makcu device support
• KMBox Net support
• Test movement functionality

**Custom UI Features:**
• Show/Hide UI with Hotkey
• Theme Color selection
• Adjustable Transparency
• Dark / Classic UI Mode switching
• Auto Config Save functionality

### 🎮**Game-Specific:**
**Valorant Only** - Specifically optimized for Valorant's anti-cheat system with hardware-based detection methods.

---
**Hardware-based color detection for Valorant!**`)
            .addFields(
                {
                    name: '`⚠️` HARDWARE REQUIREMENT',
                    value: 'KMBox Net or Makcu device required for this colorbot to function properly.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to select your subscription duration and get hardware setup assistance.'
                },
                {
                    name: '`💡` ADVANTAGE',
                    value: 'More affordable than Universal AI with specialized Valorant optimization!'
                }
            )
            .setColor('#FF1493')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Valorant Colorbot • Hardware-Based Detection',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};