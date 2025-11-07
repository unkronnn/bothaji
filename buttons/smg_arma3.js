const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_arma3',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔫 SMG : Arma 3')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 85.750 / $5.00
**7 DAY**   — IDR 327.000 / $19.00
**30 DAY**  — IDR 638.000 / $38.00

A premium product for the game Arma 3 from SMG group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** External

### 🔥**Aimbot Features:**
• **Aim Player** - Target players
• **Bone Selection** - Choose specific body part
• **Toggle Aimbot** - Enable/disable aimbot
• **Auto Change Target** - Automatically switch targets
• **Visible Check** - Only target visible enemies
• **FOV Control** - Field of view adjustment

### 🔍**Visual ESP (Players):**
• **Bounding Box** - Box around players
• **Vis Box** - Visibility-based box coloring
• **Painted Box** - Custom colored boxes
• **Name Display** - Show player names
• **Distance** - Show distance to players
• **Skeleton** - Display player skeleton
• **Visibility Check** - Different colors for visible/invisible
• **HP Bar** - Health bar display

### 🚗**Visual ESP (Objects):**
• **Corpse** - Display dead bodies
• **Heavy Vehicle** - Tanks, APCs, military vehicles
• **Recon Vehicle** - Jeeps, ATVs, light vehicles
• **Helicopter & Drones** - All aerial vehicles and UAVs
• **Airplane** - Fixed-wing aircraft
• **Submarine** - Underwater vehicles
• **Ship** - Surface water vessels

### ⚙️**Miscellaneous Features:**
• **FOV Change** - Adjust field of view
• **Zoom Hack** - Enhanced zoom capability
• **No Recoil** - Remove weapon recoil
• **Unlimited Stamina** - Infinite endurance
• **Config Saving** - Save your settings
• **Custom Fonts** - Customize interface appearance
• **Bind Menu** - Custom key binding system
• **Mod Battle** - Battle mode options
• **Panic Button** - Emergency cheat disable

### 💎**SMG Advantages:**
✅ **Professional Quality** - Advanced SMG brand technology
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **Advanced ESP** - Multiple box types and visibility checks
✅ **Comprehensive Vehicle Coverage** - All vehicle types included
✅ **Professional Interface** - Custom fonts and binding system
✅ **StreamProof** - Safe for streaming
✅ **Zoom & FOV Control** - Enhanced visual capabilities
✅ **Battle Mode** - Professional combat features

### 🎮**Perfect For:**
• Professional military tactical players
• Users wanting advanced ESP features
• Players needing comprehensive vehicle awareness
• Streamers requiring professional features
• Competitive operators wanting tactical advantage
• Users who appreciate professional interface customization

### 🪖**Key Features:**
• **Multiple ESP Box Types** - Bounding, Vis, Painted boxes
• **Complete Vehicle Coverage** - Land, air, sea, submarines
• **Professional Interface** - Custom fonts, bind menu, battle mode
• **Advanced Visual Control** - FOV change, zoom hack
• **Visibility System** - Color-coded visibility states

### 🎛️**Professional Interface:**
• **Custom Fonts** - Personalize your cheat interface
• **Bind Menu** - Create custom key bindings
• **Battle Mode** - Combat-focused interface options
• **Panic Button** - Instant emergency disable
• **Config Saving** - Persistent settings across sessions

---
**Professional Arma 3 cheat with advanced ESP and interface customization!**`)
            .addFields(
                {
                    name: '`🎨` PROFESSIONAL INTERFACE',
                    value: 'Custom fonts, bind menu, and battle mode for professional users.'
                },
                {
                    name: '`🚗` COMPLETE VEHICLE ESP',
                    value: 'All vehicle types including submarines and aircraft covered.'
                },
                {
                    name: '`🔍` ADVANCED ESP',
                    value: 'Multiple box types, visibility checks, and professional features.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG Arma 3 cheat.'
                }
            )
            .setColor('#DC143C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG Arma 3 • Professional ESP • Advanced Interface',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};