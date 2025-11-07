const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'unicore_etheriarestart',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🦄 Unicore : Etheria Restart - Internal with Advanced Features')
            .setDescription(`
### 🧾**Pricing**
**2 DAY**   — IDR 29.750 / $1.50
**7 DAY**   — IDR 75.250 / $4.50
**30 DAY**  — IDR 165.000 / $9.50

A premium product for the game Etheria Restart from Unicore group.

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
• **Game Client:** Official Launcher
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 👁️**Visual Features:**
• **Name Display** - Entity and player identification
• **Distance Measurement** - Range calculation for all objects
• **Box ESP** - Bounding box visualization
• **Radar System** - Mini-map overview
• **Monster ESP** - Enemy creature detection
• **Treasure Chest ESP** - Container location highlighting
• **Entity Display** - All object identification
• **Debug Names** - Development information display
• **Custom ESP Builder** - Adjustable visual configuration

### ⚔️**Combat Features:**
• **Dumb Enemies** - AI manipulation for easier combat

### 🏃‍♂️**Player Features:**
• **Noclip** - Walk through walls and obstacles

### 🌐**Teleportation System:**
• **Mouse Teleport** - Click-to-move functionality
• **Entities Teleport** - Object teleportation
• **Auto Teleport** - Configured location teleportation

### 🛠️**Utility Features:**
• **FOV Changer** - Field of view adjustment
• **Free Camera** - Detached camera movement
• **Full Bright** - Enhanced visibility
• **Game Speedup x50** - Time manipulation (up to 50x speed)
• **Hide UI** - Interface removal for clean visuals
• **Config System** - Adjustable settings management

### 🦄**Unicore Advantages:**
✅ **Internal Performance** - Direct game integration
✅ **Advanced Visuals** - Comprehensive ESP system
✅ **Teleportation** - Complete movement control
✅ **Game Manipulation** - Speed and time control
✅ **Universal Compatibility** - All system formats supported
✅ **Affordable Pricing** - Budget-friendly options
✅ **Configurable System** - Full customization support

### 🌟**Perfect For:**
• RPG enthusiasts seeking enhanced gameplay
• Players wanting comprehensive ESP features
• Users requiring teleportation capabilities
• Those seeking game speed manipulation
• Players with diverse system configurations
• Users wanting internal performance
• RPG progression acceleration

### 🎮**Etheria Restart Features:**
• **RPG Gameplay** - Character progression and development
• **Treasure Hunting** - Loot collection and discovery
• **Combat System** - Dynamic battle mechanics
• **Exploration** - World discovery and navigation
• **Monster Battles** - Enemy encounters and challenges

### 🎯**Key Features:**
• **Advanced ESP System** - Complete visual awareness with customizable display
• **Teleportation Control** - Full movement freedom with mouse and auto teleport
• **Game Manipulation** - Speed control and UI customization
• **Internal Design** - High-performance direct game integration

---
**Internal cheat with advanced ESP, teleportation system, and game manipulation for complete Etheria Restart mastery!**`)
            .addFields(
                {
                    name: '`👁️` ADVANCED ESP SYSTEM',
                    value: 'Complete visual awareness with name, distance, box, radar, monster, and treasure chest display.'
                },
                {
                    name: '`🌐` TELEPORTATION CONTROL',
                    value: 'Full movement freedom with mouse teleport, entities teleport, and auto teleportation system.'
                },
                {
                    name: '`🛠️` GAME MANIPULATION',
                    value: 'Complete control with speed adjustment, free camera, UI customization, and configurable settings.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Unicore Etheria Restart premium cheat.'
                }
            )
            .setColor('#9400D3')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Unicore Etheria Restart • Internal • Advanced Features • Game Manipulation',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};