const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'vision_eft',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👁️ Vision : EFT - Internal with Advanced Aimbot & Visual Features')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 160.250 / $9.00
**7 DAY**   — IDR 711.500 / $40.00
**30 DAY**  — IDR 1.369.750 / $80.00

A premium product for the game Escape From Tarkov from Vision group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher
• **Controller Support:** No
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 🎯**Advanced Aimbot:**
• **Active Aimbot** - Toggle functionality
• **Aimbot Key** - Custom binding
• **FOV Size Control** - Adjustable field of view
• **Draw FOV** - Visual field indicator
• **Bone Selection** - Target precision
• **Mark Target** - Target highlighting
• **Aimbot Smooth** - Human-like movement

### 👁️**Comprehensive Visual ESP:**
• **Player ESP** - Complete player visualization
• **Box ESP** - Bounding box display
• **Line ESP** - Directional indicators
• **Distance Display** - Range calculation
• **Skeleton ESP** - Bone structure visualization
• **Name Display** - Player identification
• **Head ESP** - Critical point highlighting
• **Weapon Display** - Current equipment
• **Health Bars** - Visual health status
• **Health Text** - Numerical health values
• **Role Display** - Player role identification
• **Max Distance** - Range limitations

### 💰**Advanced Loot System:**
• **Item ESP Toggle** - Enable/disable loot display
• **Item Name Display** - Object identification
• **Item Price Display** - Value information
• **Loot Distance** - Range calculation
• **Container Identification** - Storage type display
• **Container Icon** - Visual type indicators
• **Max Items Distance** - Loot range limitation
• **Max Container Distance** - Container range setting
• **Min Price Filter** - Value threshold control
• **Corpse Display** - Dead body tracking

### 🛠️**Advanced Miscellaneous:**
• **Extraction Points** - All exit locations
• **Grenade ESP** - Explosive tracking
• **Ammo Count Display** - Current ammunition
• **Crosshair Overlay** - Custom aiming aid
• **Thermal Vision** - Heat detection mode
• **Night Vision** - Enhanced dark vision
• **No Visor Effect** - Visor removal
• **Zero Recoil** - Complete recoil elimination
• **Zero Sway** - Weapon sway removal

### 👁️**Vision Advantages:**
✅ **Premium Aimbot** - Advanced targeting with smooth control
✅ **Complete ESP System** - Full player and loot visualization
✅ **Advanced Loot Management** - Comprehensive item tracking
✅ **Extraction Assistance** - All exit point identification
✅ **Universal Compatibility** - All system formats supported
✅ **Stream Protection** - Content creator safe
✅ **Professional Quality** - High-end implementation

### 🔫**Perfect For:**
• Professional raiders
• Players requiring precise aimbot control
• Users wanting comprehensive loot management
• Streamers needing extraction assistance
• Players with diverse system configurations
• Those seeking premium quality features
• Users requiring thermal/night vision

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with smooth control and FOV adjustment
• **Complete ESP System** - Full player visualization with detailed information
• **Advanced Loot Management** - Comprehensive item tracking with value filtering
• **Thermal & Night Vision** - Enhanced visibility modes for all conditions

---
**Premium internal cheat with advanced aimbot, comprehensive ESP system, and enhanced vision modes for tactical Escape From Tarkov dominance!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with smooth control, FOV adjustment, and bone selection.'
                },
                {
                    name: '`👁️` COMPLETE ESP SYSTEM',
                    value: 'Full player visualization with health, weapons, roles, and comprehensive information display.'
                },
                {
                    name: '`💰` ADVANCED LOOT MANAGEMENT',
                    value: 'Comprehensive item tracking with price filtering, container identification, and distance control.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Vision EFT premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Vision EFT • Internal • Advanced Aimbot • Enhanced Vision Modes',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};