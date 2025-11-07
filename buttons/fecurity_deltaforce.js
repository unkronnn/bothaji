const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : Delta Force (Private) - Hybrid Spoofer Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 367.250 / $22.00
**7 DAY**   — IDR 1.710.250 / $100.00
**30 DAY**  — IDR 3.336.750 / $200.00

A premium product for the game Delta Force: Hawk Ops from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Garena & WeGame
• **Run from Flash Drive:** -
• **Software Type:** Hybrid
• **Built-in Spoofer:** Yes
• **Status:** Private/Limited Access

### 🎯**Aim (Aimbot) Features:**
• **Enable/Disable** - Toggle aimbot functionality
• **Aim at Shoot** - Target when shooting
• **Visible Check** - Line of sight verification
• **Enemy Only** - Target enemies exclusively
• **No Spread** - Remove bullet spread
• **Changeable FOV** - Adjustable 0-15° field of view
• **Recoil Compensation** - Remove weapon recoil
• **Draw FOV** - Visual field of view indicator
• **Target Switch Delay** - Switch timing control
• **Unique Hitbox System** - Advanced targeting technology

### 👁️**Visual Features:**
• **Enable** - Toggle visual ESP system
• **Enemy Only** - Show enemies exclusively
• **Box ESP** - Bounding box display
• **Box Outline** - Box outline rendering
• **Health Display** - Health status bars
• **Skeleton ESP** - Bone structure visualization
• **Maximum Distance** - Adjustable rendering range
• **Player Info** - Detailed player information
• **Prediction Dot** - Target prediction indicator
• **Vehicle ESP** - Vehicle detection system
• **Loot ESP** - Item and equipment detection

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of internal and external features
✅ **Built-in Spoofer** - Complete protection suite
✅ **Private Access** - Limited availability for exclusivity
✅ **Unique Hitbox** - Advanced targeting technology
✅ **Recoil Control** - Complete weapon stability
✅ **Visual ESP** - Complete game awareness
✅ **Multi-Client Support** - Steam, Garena & WeGame compatible
✅ **Vehicle & Loot** - Comprehensive item detection

### 🎮**Perfect For:**
• Exclusive players wanting premium features
• Users seeking maximum protection
• Players requiring advanced targeting
• Streamers requiring top-tier safety
• Those who want private access
• Users needing comprehensive features
• Competitive Delta Force players

### 🪖**Delta Force Features:**
• **Tactical Combat** - Modern military warfare
• **Vehicle Combat** - Military vehicle battles
• **Equipment Management** - Gear and weapon systems
• **Multi-Launcher** - Various game platforms
• **Competitive Ranking** - Elite player progression

### 🎯**Key Features:**
• **Hybrid Technology** - Advanced system combining best features
• **Built-in Spoofer** - Complete protection integration
• **Private Access** - Limited availability for exclusivity
• **Unique Hitbox** - Advanced targeting technology
• **Comprehensive ESP** - Complete game awareness with vehicles and loot
• **Multi-Client Support** - Full compatibility across platforms

---
**Private hybrid cheat with built-in spoofer and unique hitbox system for elite Delta Force domination!**`)
            .addFields(
                {
                    name: '`🔒` PRIVATE ACCESS',
                    value: 'Limited availability exclusive cheat with advanced features and protection.'
                },
                {
                    name: '`🛡️` HYBRID TECHNOLOGY',
                    value: 'Advanced system combining the best of internal and external features with spoofer.'
                },
                {
                    name: '`🎯` UNIQUE HITBOX',
                    value: 'Revolutionary targeting system with advanced hitbox technology for precision.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Delta Force premium private cheat.'
                }
            )
            .setColor('#9B59B6')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Delta Force • Private • Hybrid • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};