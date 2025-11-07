const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_pubg',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 Ancient : PUBG - Comprehensive External All-in-One Solution')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 341.500 / $20.00
**30 DAY**  — IDR 666.000 / $40.00

A premium product for the game PUBG from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD (1000 series+ for Laptop: make sure you can disable I-GPU from Bios)
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🎯**Aim (General) Features:**
• **AimBot Type (Static, Curved)** - Choose targeting behavior
• **Aim Keys (aimkey 1 and aimkey 2)** - Dual activation keys
• **FOV** - Targeting radius control
• **Smooth** - Aiming smoothness adjustment
• **Draw FOV : Color** - Visual targeting zone
• **RCS** - Recoil control system
• **Prediction** - Bullet trajectory calculation

### 🎯**Aim (Target) Features:**
• **Bone (Head, Neck, Pelvis, Stomach)** - Target selection
• **Force Bone (Head, Neck, Pelvis, Stomach)** - Priority targeting
• **Force Key** - Instant target lock
• **Only Visible** - Target only when visible
• **Lock Target** - Maintain target lock
• **Lock Knocked** - Target downed players

### 👁️**Visual Features:**
• **Draw Distances (slider)** - Adjustable rendering distance
• **ESP Box (visible and invisible colors)** - Rectangle overlays
• **ESP Skeleton (visible and invisible colors)** - Bone structure
• **ESP Distance: color** - Distance-based coloring
• **ESP Nick: color** - Name display
• **ESP Spectator Count** - Real-time monitoring
• **ESP Health** - Health bar display
• **ESP Knocked** - Downed status indicators
• **ESP Team** - Team identification
• **ESP Kills** - Kill tracking
• **ESP Spectator** - Spectator detection
• **Show PUBG Partner** - Partner identification
• **Show Bots** - AI opponent detection

### 📡**Radar System:**
• **Enable Radar** - Toggle radar display
• **Radar size (slider)** - Adjustable radar dimensions
• **Draw Player: color** - Color-coded player markers

### 🌍**World (General) Features:**
• **AirDrop: color** - Supply drop locations
• **Corpse: color** - Dead body positions
• **Vehicle: color** - Vehicle tracking
• **Weapons: color** - Weapon identification
• **Melee Weapons: color** - Close combat items
• **Attachments: color** - Equipment display
• **Ammo: color** - Ammunition types
• **Bomb: color** - Explosive devices
• **Armor: color** - Protection items
• **Helmet: color** - Head protection
• **Backpack: color** - Storage items
• **Heal: color** - Medical supplies
• **Boosts: color** - Enhancement items

### 📦**World (Loot List) Features:**
• **Save CFG (for items only)** - Configuration saving
• **Load CFG (for items only)** - Configuration loading
• **Category Filter** - Choose weapons and other loot types
• **Distance** - Adjust rendering distance for each category separately

### ⚙️**Settings (Config) Features:**
• **Save settings** - Store configurations
• **Load settings** - Retrieve saved configurations
• **Delete settings** - Remove configurations

### ⚙️**Settings (FPS Settings) Features:**
• **Show Fps** - Frame rate display
• **Fps Locker (slider)** - Stable frame rate control

### 💎**Ancient Advantages:**
✅ **All-in-One Solution** - Complete feature package
✅ **Built-in Spoofer** - Integrated protection
✅ **Advanced Aimbot** - Multiple targeting options
✅ **Comprehensive ESP** - Complete awareness system
✅ **Radar System** - Tactical overview
✅ **World ESP** - Environmental awareness
✅ **StreamProof** - Safe for streaming
✅ **Budget-Friendly** - Best value features

### 🎮**Perfect For:**
• Budget-conscious PUBG players
• Users wanting comprehensive features
• Players seeking complete awareness
• Those requiring tactical advantages
• Streamers requiring safety
• Users wanting all-in-one solution
• Players seeking best value

### 🏆**PUBG Features:**
• **Battle Royale** - 100-player survival combat
• **Realistic Weapons** - Authentic firearm mechanics
• **Large Maps** - Diverse tactical environments
• **Vehicle Combat** - Mobile warfare tactics
• **Survival Gameplay** - Resource management

### 🎯**Key Features:**
• **All-in-One Solution** - Complete feature package
• **Built-in Spoofer** - Integrated protection system
• **Advanced Aimbot** - Multiple targeting behaviors
• **Comprehensive ESP** - Complete awareness system
• **Budget-Friendly** - Best value proposition

---
**Comprehensive external cheat with aimbot, ESP, radar, world features, and built-in spoofer for ultimate PUBG dominance!**`)
            .addFields(
                {
                    name: '`🎯` ALL-IN-ONE AIMBOT',
                    value: 'Multiple targeting types, bones selection, and advanced controls for precision aiming.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete awareness system with players, items, vehicles, and environmental information.'
                },
                {
                    name: '`📡` TACTICAL RADAR',
                    value: '2D radar system with customizable size and color-coded player tracking.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient PUBG premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient PUBG • External • All-in-One Solution • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};