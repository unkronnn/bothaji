const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_hll',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Stern : Hell Let Loose - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 304.000 / $17.11
**30 DAY**  — IDR 487.750 / $28.52
**LIFETIME** — IDR 1.931.250 / $112.96

A premium product for the game Hell Let Loose from Stern group.

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
• **Game Client:** Steam & Epic Games
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🔥**Key Features:**
• **Advanced Aim System**
  - Precision Aimbot with smooth control
  - Customizable Aim Key configuration
  - Smooth Settings for natural aiming
  - FOV Settings for target acquisition
  - Circle FOV visualization
  - Max Distance targeting
  - Delay Settings for stealth
  - Aim Assist functionality
  - Team Check for friendly fire prevention

• **Comprehensive Visual ESP**
  - Skeleton ESP for player tracking
  - Player Box ESP with multiple styles
  - Player Distance calculations
  - Player Weapon identification
  - Player Name display
  - Player Level information
  - Player Line for directional awareness
  - Team Check integration
  - Eyes Direction tracking
  - Set Maximum Distance limits

• **Strategic Radar**
  - Enable Radar for mini-map awareness
  - Real-time player positioning
  - Configurable radar settings

• **World Information**
  - Vehicle detection and tracking
  - Garrison identification for strategic points

• **Performance Enhancements**
  - No Sway elimination for accurate shooting
  - No Recoil removal for perfect control
  - No Jump Delay for faster movement

### 💎**Stern Advantages:**
✅ **Premium External Technology** - Maximum performance
✅ **Multi-Client Support** - Steam & Epic Games
✅ **StreamProof Protection** - Safe for content creation
✅ **Advanced Aim System** - Comprehensive targeting
✅ **Detailed Visual ESP** - Extensive player information
✅ **Strategic Features** - Radar and world tracking
✅ **Lifetime Option** - Permanent access available
✅ **Professional Quality** - High-end performance

### 🎮**Perfect For:**
• Serious Hell Let Loose competitors
• Users wanting lifetime access
• Epic Games players
• Streamers needing safety
• Players requiring comprehensive ESP
• Those wanting multi-platform support
• Competitive tactical gamers

### ⚔️**Hell Let Loose Features:**
• **Large-Scale Combat** - 50v50 tactical warfare
• **Realistic WWII Experience** - Authentic gameplay
• **Team-Based Strategy** - Squad coordination
• **Strategic Communication** - Essential for victory
• **Dynamic Battlefields** - Tactical positioning

### 🎯**Key Features:**
• **Multi-Platform Support** - Steam & Epic Games compatibility
• **Advanced Aim System** - Comprehensive targeting options
• **Detailed ESP Suite** - Extensive player information
• **Strategic Radar** - Tactical awareness tool
• **StreamProof Technology** - Content creation safe
• **Lifetime Access** - Permanent ownership option

### 💡**Why Choose Stern:**
• **Multi-Client Compatibility** - Works on Steam & Epic Games
• **Advanced Features** - Comprehensive aim and ESP systems
• **Professional Quality** - High-end performance
• **Lifetime Option** - One-time permanent purchase
• **StreamProof Safe** - Content creator friendly
• **Strategic Tools** - Radar and world tracking

---
**Premium external cheat for Hell Let Loose with lifetime option and multi-client support!**`)
            .addFields(
                {
                    name: '`🎮` MULTI-CLIENT SUPPORT',
                    value: 'Compatible with both Steam and Epic Games clients.'
                },
                {
                    name: '`⏰` LIFETIME ACCESS',
                    value: 'Permanent ownership option available for dedicated players.'
                },
                {
                    name: '`🔥` PREMIUM FEATURES',
                    value: 'Advanced aim system with comprehensive ESP capabilities.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern Hell Let Loose premium cheat.'
                }
            )
            .setColor('#FF6B35')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern Hell Let Loose • External • Multi-Client • Lifetime Available',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};