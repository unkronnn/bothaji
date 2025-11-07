const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'btg_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ BTG : DayZ - Silent Aim External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 130.250 / $7.50
**7 DAY**   — IDR 555.000 / $33.00
**30 DAY**  — IDR 1.082.500 / $64.00

A premium product for the game DayZ from BTG group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🎯**Aim Features:**
• **Turn on Silent Aim** - Enable invisible aimbot
• **Bone Selection** - Target specific bones
• **Select Button** - Custom activation binding
• **Trigger Distance** - Range control
• **Draw FOV** - Visual field of view
• **FOV Size** - Adjustable FOV radius

### 👁️**Visual Features (Players, Zombies):**
• **Player Skeletons** - Bone structure display
• **Player Nicknames** - Name identification
• **Zombie Display** - Zombie detection system
• **Filled Player Boxes** - Solid bounding boxes
• **Filled Zombie Boxes** - Solid zombie boxes
• **Distance Display** - Range information
• **Player Lines** - Snaplines to players
• **Zombie Lines** - Lines to zombies
• **2D Player Boxing** - 2D box overlay
• **2D Zombie Boxing** - 2D zombie boxes
• **Item in Hands** - Current weapon display
• **Text Background** - Background for text clarity
• **Show Dead Players** - Corpse detection
• **ESP Rendering Distance** - Adjustable range

### 💎**Loot Features:**
• **Cloth ESP** - Clothing items
• **Food ESP** - Food items
• **Backpacks ESP** - Storage containers
• **Weapon ESP** - Firearms
• **Melee Weapons ESP** - Close combat weapons
• **Cartridges & Magazines ESP** - Ammunition
• **Camping ESP** - Camping gear
• **Drinks ESP** - Beverages
• **Medical Products ESP** - Medical supplies
• **Cooking ESP** - Cooking equipment
• **Craft ESP** - Crafting materials
• **Weapon Silencers ESP** - Suppressors
• **Containers ESP** - Storage items
• **Navigation ESP** - Maps and compasses
• **Weapon Optics ESP** - Scopes and sights
• **Vehicle Parts ESP** - Car components
• **Tools ESP** - Utility items

### 🌐**Other Features:**
• **Menu Toggle** - Show/hide program menu
• **Language Switching** - Multi-language support

### 💎**BTG Advantages:**
✅ **Silent Aim Technology** - Invisible aiming system
✅ **Comprehensive ESP** - Players, zombies, and loot
✅ **Multi-Language Support** - International accessibility
✅ **External Security** - Maximum stability
✅ **StreamProof** - Content creation safe
✅ **Advanced Visuals** - Professional ESP system
✅ **Extensive Loot ESP** - 17+ loot categories
✅ **Bone Selection** - Precise targeting control

### 🎮**Perfect For:**
• Players wanting stealth advantages
• Users needing comprehensive ESP
• International players
• Streamers requiring safety
• Those preferring external stability
• Users seeking silent aim technology
• Players wanting detailed loot information

### 🧟**DayZ Features:**
• **Stealth Gameplay** - Tactical survival mechanics
• **Loot Economy** - Resource management
• **Player Interactions** - Complex social dynamics
• **Base Building** - Construction elements
• **Vehicle Mechanics** - Transportation system

### 🎯**Key Features:**
• **Silent Aim Technology** - Invisible aiming advantage
• **Comprehensive ESP** - Complete visual information
• **Multi-Language Support** - International accessibility
• **External Security** - Maximum stability and safety
• **Extensive Loot System** - 17+ categories covered
• **Professional Visuals** - High-quality ESP display

---
**External cheat with silent aim technology and comprehensive ESP for DayZ!**`)
            .addFields(
                {
                    name: '`🔇` SILENT AIM',
                    value: 'Invisible aiming system with bone selection and distance control.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete visual system with players, zombies, and 17+ loot categories.'
                },
                {
                    name: '`🌐` MULTI-LANGUAGE',
                    value: 'International accessibility with multiple language support.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BTG DayZ premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BTG DayZ • External • Silent Aim • Multi-Language',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};