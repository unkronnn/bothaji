const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'bc_deadlock',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔵 BC : Deadlock - Internal Maphack Cheat')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 185.500 / $11.28

A premium product for the game Deadlock from BC group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** Yes
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 🎯**Aimbot (Heroes) Features:**
• **Enabled** - Hot key on hold (auto if not set)
• **Horizontal Only** - Horizontal aiming control
• **Hitbox** - Target hitbox selection
• **Field Of View** - Aimbot working radius
• **Speed** - Aimbot speed control
• **Smooth** - Natural movement simulation
• **Switch Delay** - Target switching delay

### 🎯**Aimbot (Orbs) Features:**
• **Enabled** - Toggle orb targeting
• **Speed** - Orb tracking speed
• **Smooth** - Smooth orb targeting

### 🎯**Aimbot (Combos) Features:**
• **Bebop Hook** - Automatic Bebop hook combo
• **Speed** - Combo execution speed
• **Range** - Effective combo range
• **Info** - Combo status information

### 👁️**Visual (Players) Features:**
• **Enabled** - Hot key activation
• **Team** - Team identification
• **Name** - Player name display
• **Hero** - Hero identification
• **Box** - Bounding box ESP
• **Health** - Health status display
• **Ultimate** - Ultimate ability status
• **Distance** - Range information

### 👁️**Visual (World) Features:**
• **Enabled** - Hot key activation
• **Team** - Team world ESP
• **Name** - World object names
• **Health** - World object health

### 👁️**Visual (Filter) Features:**
• **Trooper** - Standard trooper filtering
• **Trooper (Neutral)** - Neutral trooper detection
• **Boss** - Boss enemy filtering
• **Mid Boss** - Mid-boss detection
• **Souls** - Soul entity filtering
• **Props** - Environmental object filtering

### 👁️**Visual (Other) Features:**
• **Aim FOV** - Aimbot field of view display
• **Aim Point** - Current aim target indicator
• **Spectators** - Spectator list display

### ⚙️**Misc (Config) Features:**
• **Refresh** - Refresh configuration list
• **Create** - Create new configurations
• **Save** - Save current settings
• **Load** - Load saved configurations
• **Delete** - Remove configurations

### ⚙️**Misc (Automation) Features:**
• **Dash Jump** - Automatic dash jumping
• **Active Reload** - Automatic active reloading
• **Extra** - Additional automation features

### ⚙️**Misc (Maphack) Features:**
• **Enabled** - Toggle maphack functionality
• **Players** - Show player positions on map
• **Shops** - Display shop locations
• **Camps** - Show camp positions

### 💎**BC Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Maphack System** - Complete map awareness
✅ **Hero Aimbot** - Advanced hero targeting
✅ **Combo Automation** - Automatic ability combos
✅ **Comprehensive ESP** - Players, world, and filtering
✅ **Flash Drive Support** - Portable operation
✅ **Config Management** - Save/load system
✅ **Automation Features** - Gameplay automation

### 🎮**Perfect For:**
• Players wanting map awareness
• Hero combo enthusiasts
• Users seeking internal performance
• Competitive Deadlock players
• Those needing automation
• Players who want portability
• Users seeking comprehensive features

### 🔮**Deadlock Features:**
• **Hero Abilities** - Unique character powers
• **Map Navigation** - Complex battlefield layouts
• **Team Coordination** - Strategic positioning
• **Combo System** - Ability chaining
• **Objective Control** - Point capture mechanics

### 🎯**Key Features:**
• **Maphack System** - Complete map awareness with all locations
• **Hero Aimbot** - Advanced targeting for all heroes
• **Combo Automation** - Automatic ability execution
• **Internal Performance** - Maximum responsiveness
• **Comprehensive ESP** - Complete game awareness
• **Portable Operation** - Flash drive compatible

---
**Internal cheat with maphack and hero combo automation for complete Deadlock domination!**`)
            .addFields(
                {
                    name: '`🗺️` MAPHACK SYSTEM',
                    value: 'Complete map awareness showing players, shops, and camps.'
                },
                {
                    name: '`🦸` HERO AIMBOT',
                    value: 'Advanced targeting system with hero-specific combos and abilities.'
                },
                {
                    name: '`⚙️` AUTOMATION',
                    value: 'Automatic dash jumping, active reload, and combo execution.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC Deadlock premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC Deadlock • Internal • Maphack • Hero Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};