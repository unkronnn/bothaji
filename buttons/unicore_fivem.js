const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'unicore_fivem',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🦄 Unicore : Five M - Internal with Advanced ESP & Aimbot')
            .setDescription(`
### 🧾**Pricing**
**2 DAY**   — IDR 39.500 / $2.00
**7 DAY**   — IDR 84.500 / $5.00
**30 DAY**  — IDR 201.500 / $12.00

A premium product for the game GTA 5 from Unicore group.

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
• **Game Client:** Five M
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 👁️**Advanced Visual ESP:**
• **Category Filtering** - Peds/Players/Vehicles/Pickups/Animals
• **Name Display** - Entity identification
• **Distance Measurement** - Range calculation
• **Box ESP** - Bounding box visualization
• **Max Distance Control** - ESP range limitation
• **Weapon Ammo Display** - Ammunition tracking
• **Vehicle Skeleton** - Vehicle structure visualization
• **Color by Type** - Type-based color coding
• **ESP Filtering** - Filter for Peds and Players
• **Local Player Display** - Self-visualization options
• **Vehicle Details** - Engine health, Body health, Tank health
• **Door Lock Status** - Vehicle access information
• **Animal Health** - Wildlife status display
• **Animal ESP Filter** - Wildlife filtering options
• **Visuals Builder** - Add any server object to visuals
• **Friend List** - Team management system

### 🎯**Advanced Aimbot System:**
• **Category Support** - All weapons compatibility
• **Nearest Bone** - Auto-closest targeting
• **Vehicle Ignore** - Skip vehicle targets
• **Animal Targeting** - Wildlife aim assistance
• **Visible Only** - Target verification
• **Max Distance** - Range limitation
• **Hitbox Selection** - Head/Neck/Chest/Body/Nearest
• **Aim Type Filters** - Advanced targeting options
• **Silent Aim** - Subtle targeting system
• **Hit Chance Control** - Accuracy adjustment
• **Smooth Control** - Human-like movement
• **FOV Control** - Field of view adjustment
• **Recoil Compensation (RCS)** - Complete recoil elimination
• **Smooth Settings** - Movement naturalization
• **FOV Radius** - Targeting area control
• **Recoil Value** - Compensation strength
• **No Spread Full** - Complete accuracy enhancement

### 🛠️**Advanced Miscellaneous:**
• **Crosshair Display** - Custom aiming aid
• **FPS Counter** - Performance monitoring
• **Aimbot Information** - Target details display
• **Health Control** - Heal slider (0-100)
• **Suicide Option** - Quick respawn
• **FOV Changer** - Field of view modification
• **Noclip Clear** - Movement freedom
• **Tasks Green Zone Bypass** - Mission assistance
• **Perfect Drive** - Vehicle control enhancement

### 📡**Radar System:**
• **Name Display** - Entity identification
• **Window Size Control** - Dimension adjustment
• **Point Size** - Display element control
• **Scale Adjustment** - Magnification control
• **Component Filtering** - Peds/Animals/Players/Vehicles/Weapon/Ammo/Builders/Others

### 🌃**GTAO Features:**
• **Spawner System** - Object spawning capabilities
• **God Mode** - Invincibility toggle
• **Infinite Ammo** - Unlimited ammunition
• **Infinite Clip** - No reload required
• **Explosive Bullet** - Explosive ammunition

### 🦄**Unicore Advantages:**
✅ **Advanced ESP** - Complete visual system with filtering
✅ **Professional Aimbot** - Comprehensive targeting system
✅ **FiveM Optimized** - Dedicated FiveM support
✅ **Visual Builder** - Custom object addition
✅ **Comprehensive Features** - Extensive functionality
✅ **Internal Performance** - Direct game integration
✅ **Affordable Pricing** - Budget-friendly options

### 🏎️**Perfect For:**
• FiveM roleplay enthusiasts
• Players requiring comprehensive ESP
• Users seeking advanced aimbot control
• RP server participants
• Budget-conscious players
• FiveM multiplayer users
• Those wanting internal performance

### 🎮**GTA V Features:**
• **Open World** - Massive San Andreas map
• **Criminal Gameplay** - Heists and missions
• **Vehicle Variety** - Extensive transportation options
• **Character Customization** - Personal appearance options
• **Multiplayer RP** - Roleplaying communities

### 🎯**Key Features:**
• **Advanced ESP System** - Complete visual awareness with category filtering and custom object addition
• **Professional Aimbot** - Comprehensive targeting with silent aim, recoil compensation, and hit chance control
• **FiveM Optimization** - Dedicated support for FiveM multiplayer roleplaying servers
• **Internal Design** - High-performance direct game integration

---
**Internal cheat with advanced ESP, professional aimbot system, and comprehensive FiveM features for complete GTA V roleplaying mastery!**`)
            .addFields(
                {
                    name: '`👁️` ADVANCED ESP SYSTEM',
                    value: 'Complete visual awareness with category filtering, custom object addition, and comprehensive entity information.'
                },
                {
                    name: '`🎯` PROFESSIONAL AIMBOT',
                    value: 'Comprehensive targeting system with silent aim, recoil compensation, and advanced hit chance control.'
                },
                {
                    name: '`🎮` FIVEM OPTIMIZATION',
                    value: 'Dedicated support for FiveM multiplayer roleplaying servers with specialized features.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Unicore FiveM premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Unicore FiveM • Internal • Advanced ESP • Professional Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};