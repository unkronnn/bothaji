const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_bo6wz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💎 Ancient : BO6 / BO7 / WZ - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**3 DAY**   — IDR 102.500 / $6.00
**7 DAY**   — IDR 170.750 / $10.00
**30 DAY**  — IDR 333.000 / $20.00
**90 DAY**  — IDR 832.500 / $50.00

A premium product for Call of Duty Warzone, Black Ops 6 & Black Ops 7 from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD (1000 series+)
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Software Type:** External
• **Built-in Spoofer:** Yes (FREE!)

### 🔥**Advanced Aimbot Features:**

**General Aimbot System:**
• Enable Aimbot toggle
• **Aim Key** - Custom activation key binding
• **Draw FOV** - Visual field of view indicator
• **FOV Color** - Customizable FOV ring color
• **FOV Radius** - Adjustable aim area size
• **Smooth** - Natural-looking aim movement
• **Smooth Value** - Fine-tune smoothness level
• **Draw Crosshair** - Central aiming reference
• **Prediction Dot** - Advanced bullet prediction
• **Target Line** - Visual target connection
• **Max Aim Distance** - Range limitation for targeting
• **Prediction System** - Ballistic compensation
• **Target Visible Check** - Only target visible enemies
• **Humanize Aimbot** - Naturalistic aiming behavior

**Target Selection:**
• **Target Bones:** Head, Neck, Chest, Arms, Pelvis
• **Target Switch Delay** - Strategic target management
• **Smart Filtering** - Advanced target prioritization

### 🔍**Visual ESP Features:**

**Main ESP System:**
• **Box ESP** - Visible/Invisible color coding
• **Corner Box** - Alternative box style
• **Bot Tag** - AI identification
• **Distance Display** - Color-coded distance information
• **Healthbar** - Visual health status
• **Player Info** - Kills, Rank, Team ID (unique colors)
• **Nickname Display** - Color-coded player names
• **Skeleton ESP** - Visible/Invisible color options
• **Active Weapon** - Show equipped weapons
• **Teammate Display** - Friendly player visibility
• **Downed Player Status** - Knocked player identification
• **Visible Only Mode** - Filter for line-of-sight targets
• **Max ESP Distance** - 10-1000m adjustable range

### 🗺️**Radar System:**
• Enable Radar toggle
• **Radar Size** - Adjustable minimap dimensions
• **Draw Player** - Show player positions
• **Max Show Distance** - Radar range control
• **Radar Scale** - Zoom and scaling options

### 🧭**Off-Arrow Indicators:**
• Enable off-screen arrows
• **Arrow Types:** Arc, Triangle styles
• **Arrows Range** - Distance indicator range
• **Visible/Invisible Color** - Status-based coloring

### ⚔️**Battle Mode:**
• **Battle Mode Key** - Quick toggle for combat situations
• Streamlined interface for intense gameplay

### 🎒**Items & Loot System:**
• **Items Master** - Comprehensive item management
• **Categories:** Armor, Ammo, Weapon, Crate, Misc, Lethal, Tactical, FieldUpgrade, Money, Medical, Killstreak, Perk Pack
• **Category Toggle** - Enable/disable specific item types
• **Item Name Display** - Show item identification
• **Item Distance** - Distance to items
• **Max Item Distance** - 1-1000m range control
• **Color Customization** - Item-specific color coding

### ⚙️**Settings & Configuration:**
• **Show FPS Overlay** - Performance monitoring
• **Set Overlay FPS** - Custom FPS display
• **Config Management:**
  - Add new configurations
  - Load saved settings
  - Share configurations
  - Delete unwanted configs

### 💎**Ancient Advantages:**
✅ **Budget-Friendly** - Excellent value for money
✅ **Free Built-in Spoofer** - No additional cost required
✅ **Advanced Aimbot** - Humanize and prediction systems
✅ **Comprehensive ESP** - Full visual battlefield awareness
✅ **Radar System** - Strategic positioning tool
✅ **Items Management** - Complete loot detection
✅ **Config Sharing** - Easy setup sharing
✅ **StreamProof** - Safe for content creation
✅ **Multi-Game Support** - BO6, BO7, WZ compatibility

### 🎮**Perfect For:**
• Budget-conscious players seeking quality features
• Call of Duty enthusiasts wanting comprehensive ESP
• Players who need item and loot detection
• Streamers requiring StreamProof protection
• Users who want radar and off-screen indicators
• Competitive operators needing tactical advantage
• Players who value configuration sharing

### ⚔️**Call of Duty Excellence:**
• **Black Ops 6** - Latest BO6 gameplay support
• **Black Ops 7** - Future-ready BO7 compatibility
• **Warzone Integration** - Battle Royale excellence
• **Multi-Platform** - Steam and Official Launcher support
• **Advanced Graphics** - Nvidia 1000 series+ optimization

---
**Budget-friendly external cheat with comprehensive features!**`)
            .addFields(
                {
                    name: '`💎` BUDGET PREMIUM',
                    value: 'Excellent value with advanced features at competitive pricing.'
                },
                {
                    name: '`🎯` HUMANIZE AIMBOT',
                    value: 'Natural-looking aim behavior with advanced prediction.'
                },
                {
                    name: '`🗺️` RADAR SYSTEM',
                    value: 'Complete battlefield awareness with radar and off-screen indicators.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient BO6/WZ premium cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient BO6/WZ • External • Budget Premium • Comprehensive Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};