const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'dullwave_duneawakening',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌊 DullWave : Dune: Awakening - Internal Budget-Friendly Option')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 99.500 / $6.00
**3 DAY**   — IDR 199.000 / $12.00
**7 DAY**   — IDR 397.750 / $23.00
**30 DAY**  — IDR 582.250 / $34.00

A premium product for the game Dune: Awakening from DullWave group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 💎**DullWave Advantages:**
✅ **Budget-Friendly** - Affordable pricing options
✅ **Internal Performance** - Direct game integration
✅ **Flexible Duration** - Multiple time period options
✅ **Steam Support** - Dedicated Steam client compatibility
✅ **Universal Resolution** - All display modes supported
✅ **Simple Design** - Easy to use interface
✅ **Quick Setup** - Fast installation and configuration

### 🏜️**Perfect For:**
• Budget-conscious players
• Users preferring internal solutions
• Players needing short-term access
• Steam client users
• Those wanting simple operation
• Users with various display preferences
• Players seeking affordable options

### 🔮**Dune: Awakening Features:**
• **Desert Warfare** - Strategic desert combat
• **Spice Control** - Resource management gameplay
• **Faction Systems** - Political and military alliances
• **Survival Mechanics** - Environmental challenges
• **Story-driven Campaign** - Rich narrative content

### ⚙️**Technical Features:**
• **Internal Implementation** - Direct game memory access
• **Steam Client Support** - Optimized for Steam version
• **Universal Resolution** - Supports all display modes
• **Budget-Friendly Pricing** - Multiple affordable options
• **Simple Operation** - User-friendly interface

### 🎯**Key Features:**
• **Internal Design** - Direct game integration for performance
• **Budget Options** - Affordable pricing for all player types
• **Steam Compatible** - Dedicated Steam client support
• **Flexible Duration** - Multiple time period options

---
**Budget-friendly internal cheat offering reliable performance for Dune: Awakening desert survival!**`)
            .addFields(
                {
                    name: '`💰` BUDGET FRIENDLY',
                    value: 'Affordable pricing options starting from just $6.00 per day.'
                },
                {
                    name: '`⚙️` INTERNAL DESIGN',
                    value: 'Direct game integration providing reliable performance and features.'
                },
                {
                    name: '`⏰` FLEXIBLE DURATION',
                    value: 'Multiple time period options from 1 day to 30 days to suit your needs.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your DullWave Dune: Awakening budget cheat.'
                }
            )
            .setColor('#4169E1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'DullWave Dune: Awakening • Internal • Budget Friendly • Steam Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};