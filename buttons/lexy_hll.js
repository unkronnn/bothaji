const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_hll',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Lexy : Hell Let Loose - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 120.500 / $7.00
**7 DAY**   — IDR 438.500 / $26.00
**30 DAY**  — IDR 655.000 / $39.00

A premium product for the game Hell Let Loose from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🔥**Key Features:**
• **Aimbot System**
  - Enable Aimbot with Smooth Aim Toggle
  - Smooth Scale Adjustment
  - Field of View (FOV) Adjustment
  - Maximum Distance Limit
  - Selectable Hitbox (Head, Neck, Pelvis, Random)

• **Visual ESP**
  - Skeleton ESP with customizable colors
  - Head Circle for precise targeting
  - Distance ESP
  - Box ESP with multiple styles
  - Player Name display
  - Health Bar monitoring
  - Platform Info
  - Line ESP with positioning options
  - Distance Scale adjustment

• **World ESP**
  - AmmoBox detection
  - SupplyBox tracking
  - Mine warnings
  - Grenade ESP
  - Smoke detection
  - Tank spotting
  - Vehicle identification
  - Radio detection
  - Maximum Distance Slider (300m+)

• **ESP Color Customization**
  - Full color control for all ESP elements
  - Skeleton, Box, Name, Line colors
  - Platform, Head Circle, Distance colors
  - Custom colors for all World ESP items

• **Miscellaneous Features**
  - No Recoil with value slider
  - No Spread with value slider
  - No Sway elimination
  - Rapid Fire toggle
  - Fire Type Selector (Normal, Medium, High, Instant)
  - LongNeck with adjustable height
  - ESP Scale Adjustment
  - Radar Toggle with size slider

• **Keybind System**
  - Menu Key configuration
  - Aimbot Key with multiple modes
  - Key Modes: Always, Hold, Toggle

### 💎**Lexy Advantages:**
✅ **Premium External Technology** - Maximum security and stability
✅ **Built-in Spoofer** - Complete protection suite
✅ **StreamProof** - Safe for content creation
✅ **Multi-OS Support** - Wide Windows compatibility
✅ **Multi-BIOS Support** - UEFI & Legacy compatibility
✅ **Comprehensive Aimbot** - Advanced targeting system
✅ **Complete ESP Suite** - Visual and World ESP
✅ **Full Customization** - Extensive configuration options

### 🎮**Perfect For:**
• Competitive Hell Let Loose players
• Users wanting tactical advantage
• Streamers requiring safety
• Players who prefer external stability
• Those needing built-in spoofer
• Users seeking comprehensive features
• Players wanting full control

### ⚔️**Hell Let Loose Features:**
• **Massive Battles** - 50v50 tactical warfare
• **Realistic Combat** - Authentic WWII experience
• **Team Coordination** - Squad-based gameplay
• **Strategic Gameplay** - Communication essential
• **Dynamic Battlefields** - Large-scale combat

### 🎯**Key Features:**
• **External Security** - Maximum stability and safety
• **Built-in Spoofer** - Complete protection integration
• **StreamProof** - Content creator friendly
• **Premium Quality** - High-end performance
• **Advanced Aimbot** - Comprehensive targeting options
• **Complete ESP Suite** - Visual and World ESP
• **Full Customization** - Extensive settings control

### 💡**Why Choose Lexy:**
• **Premium Protection** - Built-in spoofer technology
• **External Stability** - Maximum security and reliability
• **Content Creation Safe** - StreamProof protection
• **Professional Grade** - Premium features and support
• **Comprehensive Features** - Complete cheat suite
• **Advanced Customization** - Extensive control options

---
**Premium external cheat for Hell Let Loose with built-in spoofer and comprehensive features!**`)
            .addFields(
                {
                    name: '`🛡️` PREMIUM PROTECTION',
                    value: 'Built-in spoofer technology provides complete protection suite.'
                },
                {
                    name: '`⭐` EXTERNAL QUALITY',
                    value: 'High-end external technology with maximum stability and comprehensive features.'
                },
                {
                    name: '`🎥` STREAMER FRIENDLY',
                    value: 'StreamProof protection makes it safe for content creation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy Hell Let Loose premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy Hell Let Loose • External • Built-in Spoofer • Comprehensive Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};