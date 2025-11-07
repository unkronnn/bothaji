const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'vision_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👁️ Vision : DayZ - Internal Magic Bullet Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 142.500 / $8.00
**7 DAY**   — IDR 587.000 / $33.00
**30 DAY**  — IDR 1.027.250 / $60.00

A premium product for the game DayZ from Vision group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Controller Support:** -
• **Run from Flash Drive:** -
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 🎯**Aimbot Features:**
• **Active Aimbot** - Toggle aimbot functionality
• **Aimbot Key** - Custom activation binding
• **FOV Size** - Adjustable field of view
• **Draw FOV** - Visual FOV indicator
• **Sensitivity** - Aim sensitivity control
• **Bone Selection** - Target specific bones
• **Magic Bullets** - Bullet trajectory manipulation
• **Skip Infecteds** - Exclude zombies from targeting
• **Mark Target** - Target marking system
• **Vector Aimbot** - Advanced vector-based targeting

### 👁️**Visual ESP Features (Players, Zombies & Animals):**
• **Players ESP** - Player detection and information
• **Line ESP** - Snaplines to targets
• **Distance Display** - Range information
• **Bone ESP** - Skeleton structure display
• **Player Name** - Name identification
• **Head ESP** - Head position indicators
• **Weapon ESP** - Current weapon display
• **Health ESP** - Health bar and text display
• **Zombie ESP** - Zombie detection system
• **Animals ESP** - Animal location system
• **Max Distance** - Adjustable rendering range

### 💎**Loot Features:**
• **Enable Item ESP** - Toggle loot detection
• **Weapons ESP** - Firearm locations
• **Ammo ESP** - Ammunition positions
• **Clothes ESP** - Apparel items
• **Vehicles ESP** - Vehicle locations
• **Food/Drinks ESP** - Consumable items
• **Bags ESP** - Backpack and storage
• **Boxes ESP** - Container items
• **Tent ESP** - Tent locations
• **Distance Control** - Range management
• **Max Distance** - Maximum detection range

### ⚙️**Miscellaneous Features:**
• **Remove Grass** - Grass removal for visibility
• **Crosshair** - Custom crosshair display
• **Custom Brightness** - Brightness control

### 💎**Vision Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Magic Bullets** - Advanced bullet manipulation system
✅ **Vector Aimbot** - Sophisticated targeting algorithm
✅ **Comprehensive ESP** - Players, zombies, animals, and loot
✅ **StreamProof** - Safe for content creation
✅ **Full Resolution Support** - All display modes compatible
✅ **Advanced Features** - Professional-level functionality
✅ **Internal Performance** - Maximum responsiveness

### 🎮**Perfect For:**
• Competitive DayZ players
• Users wanting maximum performance
• Players needing advanced aimbot
• Streamers requiring safety
• Those who prefer internal technology
• Users seeking combat advantages
• Players wanting comprehensive ESP

### 🧟**DayZ Features:**
• **Post-Apocalyptic Survival** - Harsh environment challenges
• **PvP Combat** - Intense player battles
• **Resource Scarcity** - Strategic loot management
• **Vehicle Mechanics** - Transportation system
• **Dynamic Weather** - Environmental challenges

### 🎯**Key Features:**
• **Internal Performance** - Maximum responsiveness
• **Magic Bullets** - Advanced bullet manipulation
• **Vector Aimbot** - Sophisticated targeting system
• **Comprehensive ESP** - Complete situational awareness
• **Multi-Target Support** - Players, zombies, animals
• **Professional Features** - Advanced functionality

---
**Premium internal cheat with magic bullets and vector aimbot for DayZ domination!**`)
            .addFields(
                {
                    name: '`🔫` MAGIC BULLETS',
                    value: 'Advanced bullet trajectory manipulation for ultimate combat advantage.'
                },
                {
                    name: '`🎯` VECTOR AIMBOT',
                    value: 'Sophisticated vector-based targeting with bone selection and FOV control.'
                },
                {
                    name: '`⚡` INTERNAL PERFORMANCE',
                    value: 'Maximum responsiveness and performance with internal technology.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Vision DayZ premium cheat.'
                }
            )
            .setColor('#87CEEB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Vision DayZ • Internal • Magic Bullets • Vector Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};