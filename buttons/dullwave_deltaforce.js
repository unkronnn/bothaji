const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'dullwave_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌊 DullWave : Delta Force - Internal Budget Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 139.250 / $8.00
**3 DAY**   — IDR 298.500 / $17.00
**7 DAY**   — IDR 497.250 / $28.00
**30 DAY**  — IDR 1.164.250 / $68.00

A premium product for the game Delta Force: Hawk Ops from DullWave group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** -
• **Game Client:** Steam, WeGame & Garena
• **Run from Flash Drive:** -
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 🔥**Features:**
• Please check the available media for a list of features!

### 💎**DullWave Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Budget-Friendly** - Affordable pricing options
✅ **Multi-Client Support** - Steam, WeGame & Garena compatibility
✅ **Full Resolution Support** - All display modes compatible
✅ **Simple Operation** - Easy to use interface
✅ **Stable Performance** - Reliable and consistent operation
✅ **Multiple Durations** - Flexible timing options
✅ **Internal Speed** - Fast response time

### 🎮**Perfect For:**
• Budget-conscious Delta Force players
• New players seeking basic advantages
• Casual tactical shooter enthusiasts
• Users preferring internal performance
• Multi-platform gamers
• Players who want simple operation
• Those seeking affordable options

### 🪖**Delta Force Features:**
• **Tactical Combat** - Modern military warfare
• **Multi-Launcher** - Various game platforms
• **Team Coordination** - Squad-based gameplay
• **Equipment Management** - Gear and weapons
• **Strategic Gameplay** - Planning and execution

### 🎯**Key Features:**
• **Internal Performance** - Maximum responsiveness
• **Budget Pricing** - Affordable access to features
• **Multi-Client Support** - Steam, WeGame & Garena compatible
• **Full Compatibility** - All resolutions supported
• **Simple Interface** - Easy to use controls
• **Reliable Operation** - Stable performance

### 💡**Why Choose DullWave:**
• **Affordable Entry** - Budget-friendly pricing options
• **Internal Speed** - Maximum performance and responsiveness
• **Simple Design** - Easy to use interface
• **Multi-Platform Support** - Works with all major launchers
• **Flexible Options** - Multiple pricing choices
• **Consistent Performance** - Reliable operation

---
**Budget-friendly internal cheat for Delta Force with essential features and maximum performance!**`)
            .addFields(
                {
                    name: '`💰` BUDGET-FRIENDLY',
                    value: 'Affordable pricing options make it accessible for players on any budget.'
                },
                {
                    name: '`⚡` INTERNAL PERFORMANCE',
                    value: 'Maximum responsiveness and speed with internal technology.'
                },
                {
                    name: '`🎯` SIMPLE OPERATION',
                    value: 'Easy to use interface with reliable stable performance.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your DullWave Delta Force premium cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'DullWave Delta Force • Internal • Budget-Friendly • Simple Operation',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};