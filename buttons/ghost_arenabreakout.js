const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ghost_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👻 Ghost : Arena Breakout: Infinite (Radar)')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 104.500 / $6.00
**7 DAY**   — IDR 372.500 / $22.00
**30 DAY**  — IDR 726.750 / $43.00

A premium product for the game Arena Breakout: Infinite from Ghost group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Official Game Launcher, Steam & Epic Games
• **Run from flash drive:** Yes
• **Software Type:** Internal

### 🔥**Radar-Only Features:**

**Players Radar:**
• Show Players
• Show Price (Inventory Value)
• Show Distance
• Show Name
• Show Direction
• Show Team
• Show Team ID

**Bots Radar:**
• Show Bots
• Show Price (Inventory Value)
• Show Distance
• Show Name
• Show Direction

**Corpses Radar:**
• Show Corpses
• Show Price (Inventory Value)
• Show Distance

### 💎**Ghost Advantages:**
✅ **Radar-Only Solution** - Focused on essential awareness
✅ **Internal Technology** - Maximum performance
✅ **Universal Client Support** - Works on all game launchers
✅ **Full Resolution Support** - Including fullscreen
✅ **Price Information** - Shows player inventory value
✅ **Team Intelligence** - Team and Team ID display
✅ **Portable** - Can run from flash drive
✅ **Lightweight** - Focused on radar functionality

### 🎮**Perfect For:**
• Players who only want radar functionality
• Streamers who need subtle awareness
• Budget-conscious users
• Players focused on tactical positioning
• Users who want lightweight software
• Those who need inventory value intelligence

### 🎯**Key Features:**
• **Price Intelligence** - See how much other players are carrying
• **Team Awareness** - Know who's friendly and team composition
• **Complete Coverage** - Players, Bots, and Corpses
• **Minimal Detection** - Radar-only approach reduces detection risk

---
**Stealthy internal radar solution with price intelligence!**`)
            .addFields(
                {
                    name: '`👻` RADAR-ONLY',
                    value: 'Focused on essential radar functionality for minimal detection risk.'
                },
                {
                    name: '`💰` PRICE INTELLIGENCE',
                    value: 'Shows player inventory values - know who\'s carrying valuable loot!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ghost Arena Breakout radar.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ghost Arena Breakout: Infinite • Internal Radar Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};