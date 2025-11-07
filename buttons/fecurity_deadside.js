const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_deadside',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : Deadside - Hybrid Spoofer Aimbot Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 290.250 / $17.00
**30 DAY**  — IDR 557.750 / $33.50

A premium product for the game Deadside from Fecurity group.

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
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** Hybrid
• **Built-in Spoofer:** Yes

### 🎯**Aim (Aimbot) Features:**
• **Enable/Disable** - Toggle aimbot functionality
• **Aim at Shoot** - Target when shooting
• **Visible Check** - Line of sight verification
• **Enemy Only** - Target enemies exclusively
• **Recoil Compensation** - Remove weapon recoil
• **Draw FOV** - Visual field of view indicator
• **Target Switch Delay** - Switch timing control
• **Unique Hitbox System** - Advanced hitbox targeting
• **Changeable FOV** - Adjustable 0-15° field of view

### 👁️**Visual Features:**
• **Enable** - Toggle visual ESP system
• **Enemy Only** - Show enemies exclusively
• **Box ESP** - Bounding box display
• **Box Outline** - Box outline rendering
• **Health Display** - Health status bars
• **Skeleton ESP** - Bone structure visualization
• **Maximum Distance** - Adjustable rendering range

### ⚙️**Miscellaneous Features:**
• **Camera FOV Override** - Custom field of view
• **No Spread** - Remove bullet spread
• **No Barrel Collision** - Ignore barrel obstructions
• **Instant Hit** - Immediate bullet impact

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of internal and external features
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced Aimbot** - Professional targeting system
✅ **Unique Hitbox** - Advanced targeting technology
✅ **Recoil Control** - Complete weapon stability
✅ **Visual ESP** - Complete game awareness
✅ **Camera Control** - Custom FOV settings
✅ **Bullet Optimization** - Enhanced projectile behavior

### 🎮**Perfect For:**
• Competitive Deadside players
• Users wanting maximum protection
• Players seeking advanced aimbot
• Streamers requiring safety
• Those who prefer hybrid technology
• Users needing comprehensive features
• Players wanting weapon control

### 🧟**Deadside Features:**
• **Looter Shooter** - Scavenge and survive mechanics
• **Post-Apocalyptic** - Wasteland environment
• **Base Building** - Construction and defense
• **PvP Combat** - Player vs player battles
• **Resource Management** - Strategic gameplay

### 🎯**Key Features:**
• **Hybrid Technology** - Advanced system combining best features
• **Built-in Spoofer** - Complete protection integration
• **Advanced Aimbot** - Professional targeting with unique hitbox system
• **Weapon Control** - Complete recoil and spread elimination
• **Visual ESP** - Complete game awareness system
• **Camera Customization** - Enhanced viewing experience

---
**Hybrid cheat with built-in spoofer and advanced aimbot for ultimate Deadside domination!**`)
            .addFields(
                {
                    name: '`🛡️` HYBRID TECHNOLOGY',
                    value: 'Advanced system combining the best of internal and external features with spoofer protection.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with unique hitbox technology and recoil control.'
                },
                {
                    name: '`🔫` WEAPON CONTROL',
                    value: 'Complete elimination of recoil, spread, and barrel collision for perfect accuracy.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Deadside premium cheat.'
                }
            )
            .setColor('#9B59B6')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Deadside • Hybrid • Built-in Spoofer • Advanced Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};