const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_hll',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Mason : Hell Let Loose - Detailed External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 97.750 / $5.50
**7 DAY**   — IDR 319.250 / $19.00
**30 DAY**  — IDR 648.500 / $39.00

A premium product for the game Hell Let Loose from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🔥**Key Features:**
• **Advanced Aimbot System**
  - Enabled / Activate the aimbot
  - Aim key / Set a key for the aimbot to work (hold down the selected key)
  - Aim spot / Choosing a body part for the aimbot, you can choose from: head/head, chest/chest
  - Aim radius / Set the aimbot's working radius

• **Comprehensive Visuals**
  - Enabled / Activate the ESP
  - Show radar / Display radar
  - Show bounding box / Display 2D squares on the opponent
  - Show player role / Display the player's role in the squad
  - Show player weapon / Display the name of the weapon in the enemy's hands
  - Show player health / Display the enemy's health count
  - Show grenades / Display grenades
  - Show vehicles / Display ground vehicles
  - Show enemy tanks
  - Show supplies
  - Show outposts / Display outposts
  - Show garrisons / Display garrisons
  - Show artillery / Display artillery
  - Show snapline / Display a line to the enemy
  - Show distance / Display the distance to the enemy
  - Ignore team / Ignore players in the team
  - Render distance / Set the display distance ESP

• **Performance Enhancements**
  - Enabled / Activate other functionality
  - Fast ADS / Fast Targeting
  - Remove recoil / Disable recoil
  - Remove sway / Disable swinging

• **Interface Options**
  - Save cpu / Slow down the cheat by reducing the CPU load
  - Show crosshair / Display crosshair in the center of the monitor
  - Show aim radius
  - Radar position / Setting the radar position (when the "show radar" function is enabled in the "visualization" tab)

### 💎**Mason Advantages:**
✅ **Detailed Visual System** - Comprehensive ESP information
✅ **Advanced Aimbot** - Multiple targeting options
✅ **Strategic Information** - Role-based tactical data
✅ **Performance Optimized** - CPU saving features
✅ **Interface Customization** - Extensive UI control
✅ **Battlefield Awareness** - Complete tactical overview
✅ **StreamProof** - Safe for content creation
✅ **Professional Quality** - High-end performance

### 🎮**Perfect For:**
• Strategic Hell Let Loose players
• Users wanting comprehensive battlefield information
• Players requiring tactical advantages
• Streamers needing safety
• Those wanting detailed ESP
• Users seeking performance optimization
• Competitive tactical gamers

### ⚔️**Hell Let Loose Features:**
• **Tactical Combat** - 50v50 strategic warfare
• **Role-Based Gameplay** - Different squad roles
• **Strategic Points** - Outposts and garrisons
• **Vehicle Combat** - Tanks and ground vehicles
• **Artillery Support** - Long-range tactical weapons

### 🎯**Key Features:**
• **Detailed ESP System** - Comprehensive battlefield information
• **Advanced Aimbot** - Multiple targeting options with radius control
• **Strategic Information** - Role, health, weapon tracking
• **Performance Options** - CPU optimization features
• **Interface Control** - Customizable UI elements
• **Battlefield Overview** - Complete tactical awareness

### 💡**Why Choose Mason:**
• **Detailed Information** - Most comprehensive ESP system available
• **Tactical Advantage** - Role-based strategic information
• **Performance Optimized** - CPU saving for better gameplay
• **Customizable Interface** - Extensive UI control options
• **Complete Battlefield Awareness** - Full tactical overview
• **Professional Quality** - High-end performance and reliability

---
**Detailed external cheat for Hell Let Loose with comprehensive ESP and tactical information!**`)
            .addFields(
                {
                    name: '`📊` DETAILED ESP',
                    value: 'Most comprehensive battlefield information system available.'
                },
                {
                    name: '`⚙️` PERFORMANCE OPTIMIZED',
                    value: 'CPU saving features for optimal gameplay performance.'
                },
                {
                    name: '`🎯` STRATEGIC ADVANTAGE',
                    value: 'Complete tactical overview with role-based information.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Hell Let Loose detailed cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Hell Let Loose • External • Detailed ESP • Strategic Info',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};