const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_albiononline',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔧 Mason : Albion Online')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 55.750 / $3.00
**7 DAY**   — IDR 199.500 / $12.00
**30 DAY**  — IDR 518.750 / $31.00

A premium product for the game Albion Online from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Software Type:** External

### 🔥**Comprehensive Feature List:**

**Main ESP Controls:**
• Show Resources (wood, stone, ore, etc.)
• Show Mobs
• Show Players
• Show NPCs
• Show Chests
• Show Mists
• Show Mounts

**Visual Color Customization:**
• Mobs color control
• NPC color control
• Players color control
• Mounts color control
• Mists color control
• Resource color by TIER:
  - TIER 1 color
  - TIER 2 color
  - TIER 3 color
  - TIER 4 color
  - TIER 5 color
  - TIER 6 color
  - TIER 7 color
  - TIER 8 color
• Chests color control

### 📡 **Advanced Radar System:**
**Radar Options:**
• Transparent radar control
• Adjustable radar size
• Radar X position control
• Radar Y position control
• Radar zoom control
• Object scanning radius control

### 📦 **Resource Filtering:**
• Enable filter toggle
• Display items by TIER:
  - Only 1st TIER items
  - Only 2nd TIER items
  - Only 3rd TIER items
  - Only 4th TIER items
  - Only 5th TIER items
  - Only 6th TIER items
  - Only 7th TIER items
  - Only 8th TIER items

### 🎯 **Chest Filtering:**
• Only 1st TIER chests
• Only 2nd TIER chests
• Only 3rd TIER chests
• Only 4th TIER chests

### 💎**Mason Advantages:**
✅ **Most Affordable** - Budget-friendly pricing
✅ **Advanced Radar** - Complete radar customization
✅ **Tier-Based Filtering** - Filter resources and chests by tier
✅ **Comprehensive ESP** - All game objects detected
✅ **Full Color Control** - Customize every ESP element
✅ **StreamProof** - Safe for streaming
✅ **Universal Client Support** - Steam & Official Launcher

### 🎮**Perfect For:**
• Budget-conscious players
• Resource farmers needing tier filtering
• Players who want radar customization
• Chest hunters and collectors
• New players learning resource locations

---
**Most affordable Albion Online cheat with advanced radar!**`)
            .addFields(
                {
                    name: '`💰` BEST VALUE',
                    value: 'Most affordable option with comprehensive features and advanced radar system.'
                },
                {
                    name: '`📡` ADVANCED RADAR',
                    value: 'Complete radar customization with position, size, and transparency control.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Albion Online cheat.'
                }
            )
            .setColor('#32CD32')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Albion Online • Advanced Radar • Best Value',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};