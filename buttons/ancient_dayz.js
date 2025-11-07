const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏛️ Ancient : DayZ - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 120.000 / $7.00
**7 DAY**   — IDR 512.000 / $30.00
**30 DAY**  — IDR 999.000 / $60.00

A premium product for the game DayZ from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD (1000 series+)
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🎯**Aimbot Features:**
• **Enable** - Toggle aimbot functionality
• **Hitbox Selection** - Head, neck, chest targeting
• **Aimbot Key** - Custom activation key
• **Target Selection** - Players, Zombies targeting
• **Draw FOV** - Visual field of view indicator
• **Draw Aim Point** - Show aim target point

### 👁️**Visual Features:**
• **Enable** - Toggle visual ESP system
• **Draw Skeleton** - Bone structure display
• **Draw Box** - Bounding box ESP
• **Draw Name** - Player name display
• **Draw Distance** - Distance information
• **Draw Health** - Health status bars
• **Draw Item in Hands** - Current weapon display
• **Draw Corpse** - Dead player detection

### 🌍**World Features:**
• **Food** - Food item locations
• **Medical** - Medical supplies
• **Other Items** - Miscellaneous items
• **Vehicle Parts** - Car component locations
• **Weapons** - Weapon spawn points
• **Ammunition** - Ammo locations
• **Attachments** - Weapon attachments
• **Animals** - Animal positions
• **Vehicles** - Vehicle locations
• **Draw Villages** - Village locations
• **Draw Cities** - City locations
• **Draw Castles** - Castle positions
• **Draw Airfields** - Airfield locations
• **Draw Military Bases** - Military base positions
• **Draw Others** - Additional points of interest

### ⚙️**Miscellaneous Features:**
• **No Grass** - Remove grass for better visibility
• **Custom Time** - Time control settings
• **Night Vision** - Enhanced night visibility

### ⚙️**Settings Features:**
• **Save Settings** - Save current configuration
• **Load Settings** - Load saved configurations
• **Delete Settings** - Remove saved profiles

### 💎**Ancient Advantages:**
✅ **External Technology** - Maximum security and stability
✅ **Built-in Spoofer** - Complete protection
✅ **Comprehensive World ESP** - Complete map awareness
✅ **Advanced Aimbot** - Precise targeting control
✅ **High Graphics Support** - Latest GPU compatibility
✅ **StreamProof** - Safe for content creation
✅ **Rich Visual Features** - Detailed ESP system
✅ **Config Management** - Profile saving/loading

### 🎮**Perfect For:**
• Players wanting maximum security
• Users who need comprehensive map awareness
• Streamers requiring safety
• Players with high-end graphics cards
• Those who prefer external stability
• Users needing world domination features
• Players wanting detailed ESP control

### 🧟**DayZ Features:**
• **Post-Soviet Setting** - Authentic Chernarus landscape
• **Survival Mechanics** - Hunger, thirst, health management
• **Player Interactions** - Complex social dynamics
• **Loot Scarcity** - Resource management challenges
• **Environmental Hazards** - Weather and infection

### 🎯**Key Features:**
• **External Security** - Maximum stability and safety
• **Built-in Spoofer** - Complete protection suite
• **World Domination** - Complete map awareness
• **Advanced Aimbot** - Precise targeting control
• **High Graphics Support** - Latest GPU compatibility
• **Config Management** - Easy profile management

---
**Premium external cheat for DayZ with complete world domination features!**`)
            .addFields(
                {
                    name: '`🗺️` WORLD DOMINATION',
                    value: 'Complete map awareness with all points of interest and locations.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Precise targeting with hitbox selection and visual indicators.'
                },
                {
                    name: '`🛡️` EXTERNAL SECURITY',
                    value: 'Maximum stability and safety with built-in spoofer protection.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient DayZ premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient DayZ • External • World ESP • Advanced Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};