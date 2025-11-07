const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'bc_fortnite',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔷 BC : Fortnite - External with Aimbot & Flash Drive Support')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 395.500 / $24.27

A premium product for the game Fortnite from BC group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Windowed
• **Game Mode:** Battle Royale
• **StreamProof:** Yes
• **Game Client:** Epic Games
• **Run from Flash Drive:** Yes
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎯**Aimbot Features:**
• **Aim Toggle** - On/off control
• **Bone Selection** - Target point customization
• **Aim Key Binding** - Custom control setup
• **FOV Control** - Field of view adjustment
• **Aim Speed** - Movement velocity control
• **FOV Change** - Dynamic field adjustment
• **LBM (Left Mouse Button)** - Primary fire control

### 👁️**Visual ESP Features:**
• **Weapon Display** - Current equipment visualization
• **Bone Structure** - Target point identification
• **Box ESP** - Bounding box display
• **Line ESP** - Directional indicators
• **Visibility Colors** - Spotted/NoVis color differentiation
• **Transparency Control** - Opacity adjustment
• **Text Size Adjustment** - Display customization

### 📡**Radar System:**
• **Radar Toggle** - Mini-map activation
• **Radar Distance** - Range control
• **Radar Scale** - Size adjustment
• **Player Display** - Human tracking
• **Loot Display** - Item visualization
• **Control Keys** - ALT/CTRL bindings

### 🛠️**Advanced Miscellaneous:**
• **Menu Access** - F6 or Home key interface
• **Panic Button** - End key emergency shutdown
• **Crosshair Display** - Custom aiming aid
• **Crosshair Customization** - Color, type, size, transparency control

### 🔷**BC Advantages:**
✅ **Flash Drive Support** - Portable operation capability
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Radar System** - Complete mini-map overview
✅ **Visual ESP** - Player and equipment display
✅ **Simple Interface** - Easy to use controls
✅ **Panic Button** - Quick emergency shutdown

### 🍇**Perfect For:**
• Players needing portable solutions
• Users preferring external safety
• Streamers requiring radar functionality
• Players seeking simple operation
• Flash drive operation users
• Windowed mode players
• Those wanting emergency shutdown

### 🎮**Fortnite Features:**
• **Battle Royale** - 100-player survival competition
• **Building Mechanics** - Strategic construction system
• **Cosmetic Customization** - Character personalization
• **Seasonal Content** - Regular updates and evolution
• **Cross-platform Integration** - Multi-device gameplay

### 🎯**Key Features:**
• **Flash Drive Support** - Portable operation allowing use across multiple systems
• **Radar System** - Complete mini-map overview with player and loot tracking
• **External Safety** - Minimal detection risk with external implementation
• **Simple Controls** - User-friendly interface with easy navigation

---
**External cheat with aimbot, radar system, and flash drive support for portable Fortnite battle royale operations!**`)
            .addFields(
                {
                    name: '`💾` FLASH DRIVE SUPPORT',
                    value: 'Portable operation capability allowing use across multiple systems without installation.'
                },
                {
                    name: '`📡` RADAR SYSTEM',
                    value: 'Complete mini-map overview with player tracking, loot display, and customizable controls.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Minimal detection risk with external implementation and emergency shutdown features.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC Fortnite premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC Fortnite • External • Flash Drive Support • Radar System',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};