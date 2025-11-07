const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'dullwave_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌊 DullWave : DayZ - Internal Budget Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 79.750 / $4.50
**7 DAY**   — IDR 298.500 / $17.00
**30 DAY**  — IDR 485.250 / $30.00

A premium product for the game DayZ from DullWave group.

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
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 🔥**Features:**
• Please check the available media for a list of features!

### 💎**DullWave Advantages:**
✅ **Internal Technology** - Maximum performance
✅ **Budget-Friendly** - Affordable pricing options
✅ **Full Resolution Support** - All display modes
✅ **Simple Operation** - Easy to use
✅ **Stable Performance** - Reliable operation
✅ **Multiple Durations** - Flexible timing options
✅ **Internal Speed** - Fast response time
✅ **Budget Quality** - Cost-effective solution

### 🎮**Perfect For:**
• Budget-conscious DayZ players
• New players wanting basic advantages
• Casual survival enthusiasts
• Users preferring internal performance
• Players on a budget
• Those wanting simple operation
• Users seeking affordability

### 🧟**DayZ Features:**
• **Survival Gameplay** - Harsh post-apocalyptic world
• **Resource Gathering** - Scavenging mechanics
• **Base Building** - Construction elements
• **Vehicle Repair** - Transportation system
• **Player Interactions** - Social dynamics

### 🎯**Key Features:**
• **Internal Performance** - Maximum responsiveness
• **Budget Pricing** - Affordable access
• **Simple Interface** - Easy operation
• **Full Compatibility** - All resolutions supported
• **Stable Operation** - Reliable performance
• **Cost-Effective** - Budget-friendly option

### 💡**Why Choose DullWave:**
• **Affordable Entry** - Budget-friendly pricing
• **Internal Speed** - Maximum performance
• **Simple Design** - Easy to use interface
• **Flexible Options** - Multiple duration choices
• **Reliable Operation** - Stable performance
• **Full Support** - All resolutions compatible

---
**Budget-friendly internal cheat for DayZ with essential performance features!**`)
            .addFields(
                {
                    name: '`💰` BUDGET-FRIENDLY',
                    value: 'Affordable pricing options make it accessible for all players.'
                },
                {
                    name: '`⚡` INTERNAL SPEED',
                    value: 'Maximum performance and responsiveness with internal technology.'
                },
                {
                    name: '`🎯` SIMPLE OPERATION',
                    value: 'Easy to use interface with reliable stable performance.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your DullWave DayZ premium cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'DullWave DayZ • Internal • Budget-Friendly • Simple Operation',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};