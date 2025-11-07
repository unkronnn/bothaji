const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'unicore_genshinimpact',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🦄 Unicore : Genshin Impact - Internal with Comprehensive Features')
            .setDescription(`
### 🧾**Pricing**
**2 DAY**   — IDR 59.250 / $3.50
**7 DAY**   — IDR 112.750 / $6.50
**30 DAY**  — IDR 274.750 / $16.00

A premium product for the game Genshin Impact from Unicore group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Genshin Impact Launcher & Epic Games
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 👁️**Advanced Visual ESP:**
• **Max Distance Control** - Adjustable ESP range
• **Box Display** - Outlined and thin box options
• **Name Display** - Entity identification
• **Distance Measurement** - Range calculation
• **Monster Detection** - Elite and Common monsters
• **Animal Tracking** - Pickup animals and drop items
• **Regional Items** - Sumeru, Liyue, Inazuma, Mondstadt, Fontaine specialties
• **Chest Detection** - Common, Exquisite, Precious, and Remarkable chests
• **Buried Chests** - Hidden treasure and search points
• **Seelie Tracking** - Spirit companion locations
• **Time Trial Challenges** - Challenge locations display
• **Special Entities** - Floating Anemo Slime, Bloatty Floatty, Ancient Rime
• **Oculus Collection** - All 5 types of oculi tracking
• **Crimson Agates** - Dragonspine special items
• **Ore Detection** - All ore types identification
• **Visual Builder** - Add any object to ESP
• **Objects Logger** - Track and log game objects

### 🗺️**Interactive Map Features:**
• **Animals Locations** - Wildlife tracking
• **Chests Map** - Treasure location overlay
• **Enemies Position** - Monster placement display
• **Experience Points** - EXP source locations
• **Fishing Spots** - Fishing area identification
• **Inventory Materials** - Resource collection guide
• **Landmarks** - Point of interest marking
• **Local Specialties** - Regional specialty items
• **Ores Distribution** - Mining location map
• **Puzzle Chests** - Special chest locations
• **Special Items** - Unique collectible tracking
• **Waypoints** - Teleport point display
• **Wood Resources** - Logging location guide

### 🛡️**Combat & Defense Features:**
• **Monster Immunity** - Disable monster AI attacks
• **Monster Freeze** - Completely immobilize enemies
• **God Mode** - Invincibility with no damage
• **No Fall Damage** - Fall protection
• **Character Transparency** - Visual invisibility
• **Cutscene Skip** - Skip story sequences
• **No Fog** - Enhanced visibility

### ⚔️ **Combat Enhancement:**
• **Rapid Fire** - Static/Dynamic mode (x999 damage)
• **One Shot Kill** - Instant elimination
• **AOE Damage** - Area damage up to 30m
• **Kill Aura** - Lethal damage radius
• **CD Reducer** - Ability cooldown elimination
• **Infinity Ultimate** - Unlimited burst usage

### 🎮 **Movement & Exploration:**
• **Noclip** - Flyhack with wind-glider in any direction
• **Infinite Stamina** - Unlimited endurance
• **FOV Changer** - Field of view adjustment
• **Weather Changer** - Environmental control
• **Custom Time** - Server/client time manipulation
• **Remove Grass** - Performance optimization
• **FPS Unlocker** - Up to 1000 FPS

### 🎣 **Resource & Automation:**
• **AOE Loot / Auto Loot** - Automatic item collection with filters
• **Auto Fishing** - Skip fishing mini-game completely
• **Magnetizer** - Attract ores/mobs/NPCs/animals
• **Auto Seelies** - Automatically complete Seelie quests

### 🔧 **System Utilities:**
• **Profile Changer** - Manual profile details modification (local)
• **UID Changer** - Client-side UID modification
• **Show FPS** - Performance monitoring
• **Adjustable Config System** - Complete settings management

### 🦄**Unicore Advantages:**
✅ **Comprehensive ESP** - Complete world visualization
✅ **Interactive Map** - Full exploration assistance
✅ **Combat Mastery** - Advanced combat enhancement
✅ **Exploration Tools** - Movement and utilities
✅ **Resource Automation** - Auto collection and fishing
✅ **Multi-client Support** - Genshin Launcher & Epic Games
✅ **Affordable Pricing** - Budget-friendly options

### 🌸**Perfect For:**
• Exploration enthusiasts seeking comprehensive assistance
• Resource collectors wanting automation
• Players requiring combat enhancement
• Completionists aiming for 100% exploration
• Multi-client users (Genshin Launcher & Epic Games)
• Users seeking internal performance
• RPG progression acceleration

### 🎮**Genshin Impact Features:**
• **Open World** - Vast explorable regions
• **Element System** - 7 elements with reactions
• **Gacha System** - Character and weapon collection
• **Story Rich** - Extensive narrative content
• **Cross-platform** - Multi-device playability

### 🎯**Key Features:**
• **Advanced ESP System** - Complete world visualization with customizable range
• **Interactive Map** - Full exploration assistance with resource tracking
• **Combat Enhancement** - Advanced combat features including god mode and damage multipliers
• **Resource Automation** - Auto loot, fishing, and collection systems

---
**Internal cheat with comprehensive ESP, interactive map, and advanced combat features for complete Genshin Impact world mastery!**`)
            .addFields(
                {
                    name: '`👁️` ADVANCED ESP SYSTEM',
                    value: 'Complete world visualization including monsters, chests, resources, and regional specialties with customizable range.'
                },
                {
                    name: '`🗺️` INTERACTIVE MAP',
                    value: 'Full exploration assistance with comprehensive resource tracking and location discovery features.'
                },
                {
                    name: '`⚔️` COMBAT MASTERY',
                    value: 'Advanced combat enhancement including god mode, damage multipliers, and automated combat systems.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Unicore Genshin Impact premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Unicore Genshin Impact • Internal • Comprehensive Features • World Mastery',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};