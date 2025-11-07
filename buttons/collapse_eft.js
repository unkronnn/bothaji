const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'collapse_eft',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏗️ Collapse : EFT - Internal with Aimbot & Visual ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 128.500 / $7.50
**7 DAY**   — IDR 366.250 / $21.00
**30 DAY**  — IDR 713.750 / $42.00

A premium product for the game Escape From Tarkov from Collapse group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** BSG Launcher
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 🎯**Advanced Aimbot:**
• **Active Aimbot** - Toggle on/off functionality
• **Aimbot Bind** - Custom key binding
• **Bone Selection** - Head, Body, Chest targeting
• **FOV Control** - Adjustable radius
• **Distance Range** - Target distance limitation

### 👁️**Visual Player ESP:**
• **Box ESP** - Bounding box display
• **Skeleton ESP** - Bone structure visualization
• **Nickname** - Player name identification
• **Price Display** - Player loot value
• **Health Bar** - Health status indication
• **Weapon Info** - Current weapon display
• **Ammo Type** - Ammunition information
• **Player Level** - Experience level display
• **Kill/Death Stats** - Performance tracking
• **Distance Measurement** - Range calculation

### 💰**Visual Loot ESP:**
• **Loot Items** - All item highlighting
• **Corpse Display** - Dead body identification
• **Price Summation** - Total loot value
• **Price Colors** - Value-based coloring
• **Minimum Price Filter** - Value threshold setting
• **Distance Range** - Item distance control

### 📋**Quest System:**
• **Active Quests** - Current objectives display
• **Quest Names** - Mission identification
• **Quest Distance** - Objective range tracking

### 🚪**Exit Point ESP:**
• **PMC Exits** - Player exit locations
• **Scav Exits** - Scav exit points
• **Exit Names** - Location identification
• **Exit Distance** - Distance to extraction

### 🛠️**Miscellaneous Features:**
• **Draw FOV** - Visual field of view indicator
• **Draw Crosshair** - Custom crosshair overlay
• **No Recoil** - Complete recoil elimination
• **No Sway** - Weapon sway removal
• **My Ammo Display** - Current ammunition count
• **Grenade ESP** - Grenade visibility
• **No Visor** - Remove visor effects
• **Infinite Stamina** - Unlimited stamina
• **Oxygen Management** - Breath control
• **Speed Modification** - Movement speed adjustment

### 🏗️**Collapse Advantages:**
✅ **Internal Performance** - Direct game integration
✅ **Advanced Aimbot** - Professional targeting system
✅ **Comprehensive ESP** - Complete visual awareness
✅ **Quest Integration** - Mission assistance system
✅ **Exit Points** - Extraction location display
✅ **Universal Compatibility** - All system formats supported
✅ **BSG Launcher Support** - Official client optimization

### 🔫**Perfect For:**
• Competitive raiders
• Players seeking aim assistance
• Users wanting comprehensive ESP
• Quest completion enthusiasts
• Players with BSG Launcher
• Those needing extraction assistance
• Users seeking internal performance

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with full customization
• **Complete ESP System** - Players, loot, quests, and exit points
• **Quest Integration** - Mission assistance and objective tracking
• **Internal Design** - High-performance direct game integration

---
**Internal cheat with advanced aimbot, comprehensive ESP system, and quest integration for complete Escape From Tarkov dominance!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with bone selection, FOV control, and distance limitations.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete visual awareness covering players, loot, quests, and extraction points.'
                },
                {
                    name: '`📋` QUEST INTEGRATION',
                    value: 'Mission assistance system with objective tracking and completion support.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Collapse EFT premium cheat.'
                }
            )
            .setColor('#808080')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Collapse EFT • Internal • Advanced Aimbot • Comprehensive ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};