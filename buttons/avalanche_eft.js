const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'avalanche_eft',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏔️ Avalanche : EFT - Internal with Advanced ESP & Flash Drive Support')
            .setDescription(`
### 🧾**Pricing**
**3 DAY**   — IDR 145.250 / $8.00
**7 DAY**   — IDR 362.500 / $20.00
**30 DAY**  — IDR 871.500 / $50.00

A premium product for the game Escape From Tarkov from Avalanche group.

### 💻**System Compatibility:**
• **Processors:** Intel
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Run from Flash Drive:** Yes
• **Built-in Spoofer:** Yes
• **Software Type:** Internal

### 🎯**Advanced Aim System:**
• **Crosshair Display** - Custom crosshair overlay
• **Aim Type Selection** - Multiple aim modes
• **Aim Enable Toggle** - On/off control
• **Auto Aimbot** - Automatic targeting
• **Draw FOV & Size** - Visual field indicators
• **Dynamic FOV** - Adjustable field of view
• **Custom Aim Key** - Personalized binding
• **Visibility Check** - Target verification
• **Silent Aim** - Subtle targeting
• **Random Bone** - Unpredictable targeting
• **Only Leg Mode** - Leg-specific targeting
• **Only Body Mode** - Torso-specific targeting

### 👁️**Visual Player ESP:**
• **Player ESP** - Complete player visualization
• **Distance Display** - Range calculation
• **Box ESP** - Bounding box display
• **Name Display** - Player identification
• **Skeleton ESP** - Bone structure visualization
• **Weapon Info** - Current equipment display
• **Direction Indicator** - Movement direction
• **Scav ESP** - AI scav identification
• **Combat Mode** - Engagement status
• **Corpse Display** - Dead body tracking
• **Exit Points** - Extraction locations

### 💰**Visual Loot ESP:**
• **Lootable Items** - All pickupable objects
• **Food Items** - consumable identification
• **Money Display** - Currency highlighting
• **Key Items** - Key visualization
• **Ammo Types** - Ammunition identification
• **Weapon Display** - Firearms highlighting
• **Grenade Items** - Explosive tracking
• **Medical Items** - Med supplies display
• **Containers** - Storage unit identification
• **Barter Items** - Trade goods visualization
• **Weapon Parts** - Component identification
• **Magazines** - Ammo clip display
• **Suppressors** - Silencer identification
• **Sights** - Scope tracking

### 🗺️**Visual Other Features:**
• **Custom Drawing** - Selective display options
• **Price Filter** - Value-based filtering
• **Other Loot** - Additional item tracking
• **Debug Mode** - Development information
• **Valuable List** - High-priority items
• **Mine Detection** - Explosive tracking

### 📡**Radar System:**
• **Radar Enable** - Mini-map activation
• **Size Control** - Adjustable dimensions
• **Distance Setting** - Range configuration
• **Player Display** - Human tracking
• **Scav Display** - AI identification

### 🛠️**Advanced Miscellaneous:**
• **Loot Through Wall** - Risky wall looting
• **No Visor Effect** - Visor removal
• **Night Vision** - Enhanced dark vision
• **Thermal Vision** - Heat detection
• **Grenade Power** - Enhanced throw strength

### 🏔️**Avalanche Advantages:**
✅ **Flash Drive Support** - Portable operation capability
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Advanced ESP** - Comprehensive item and player tracking
✅ **Silent Aim** - Subtle targeting system
✅ **Intel Optimization** - Processor-specific performance
✅ **Steam Support** - Multiple client compatibility
✅ **Professional Features** - High-end functionality

### 🔫**Perfect For:**
• Players needing portable solutions
• Users requiring advanced ESP systems
• Those wanting silent aim functionality
• Intel processor users
• Steam and official launcher players
• Users seeking comprehensive item tracking
• Players wanting flash drive compatibility

### 🎯**Key Features:**
• **Advanced ESP System** - Complete player and loot visualization
• **Silent Aim Technology** - Subtle and undetectable targeting
• **Flash Drive Support** - Portable operation capability
• **Built-in Spoofer** - Complete hardware protection included

---
**Internal cheat with advanced ESP, silent aim, and flash drive support for professional Escape From Tarkov operations!**`)
            .addFields(
                {
                    name: '`👁️` ADVANCED ESP SYSTEM',
                    value: 'Complete visualization covering players, extensive loot categories, and environmental objects.'
                },
                {
                    name: '`🎯` SILENT AIM TECHNOLOGY',
                    value: 'Subtle targeting system with visibility checks and unpredictable bone selection.'
                },
                {
                    name: '`💾` FLASH DRIVE SUPPORT',
                    value: 'Portable operation capability allowing use across multiple systems without installation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Avalanche EFT premium cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Avalanche EFT • Internal • Advanced ESP • Flash Drive Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};