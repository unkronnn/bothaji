const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_fortnite',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : Fortnite - Hybrid with Advanced Aimbot & Built-in Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 160.250 / $9.50
**7 DAY**   — IDR 512.000 / $30.00
**30 DAY**  — IDR 1.082.250 / $65.00

A premium product for the game Fortnite from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Epic Games
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** Hybrid

### 🎯**Advanced Aimbot Features:**
• **Enable Toggle** - On/off control
• **Prediction System** - Target movement calculation
• **Aim At Shoot** - Shot timing optimization
• **Aimbot FOV** - Field of view control
• **Aim Type - Vectored** - Advanced targeting method
• **Enemy Only** - Friendly fire prevention
• **Vertical Degree Per Second** - Vertical speed control
• **Horizontal Degree Per Second** - Horizontal speed control
• **Draw FOV** - Visual field indicator
• **Target Switch Delay** - Switch timing control
• **Nearest Coefficient** - Distance-based targeting
• **Hitbox Priority** - Target point selection
• **Dual Aim Keys** - Primary and secondary bindings
• **Toggle Key** - Mode switch control
• **Recoil Compensation** - Complete recoil elimination
• **Hitscan Hitbox Priority** - Precise bone selection (Head, Neck, Chest, Arms, Legs, Feet)

### 👁️**Visual Player ESP:**
• **Enable Toggle** - ESP on/off control
• **Enemy Only** - Opponent focus mode
• **Box Display** - Bounding box visualization
• **Box Outline** - Enhanced border display
• **Skeleton ESP** - Bone structure display
• **Skeleton Thickness** - Line size adjustment
• **Maximum Distance** - Range limitation
• **Player Info** - Nickname, Distance, Weapon display

### 💰**Visual Loot ESP:**
• **Enable Toggle** - Loot display control
• **Item Names** - Object identification
• **Distance Display** - Range calculation
• **Toggle Key** - Quick access binding
• **Maximum Distance** - Loot range setting

### 🛠️**Advanced Miscellaneous:**
• **FOV Override** - Custom field of view
• **Invisible Opacity** - Transparency control
• **Developer Mode** - Advanced debugging options
• **Menu DPI** - Interface scaling
• **Menu Key** - Custom binding
• **Force Reload** - Quick configuration reload
• **Distance Units** - Meters, Feet, Yards, Kilometers

### 🛡️**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of external/internal design
✅ **Advanced Aimbot** - Professional targeting system
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Comprehensive ESP** - Player and loot visualization
✅ **Universal Compatibility** - All Windows versions
✅ **Stream Protection** - Content creator safe
✅ **Premium Features** - High-end functionality

### 🍇**Perfect For:**
• Competitive players requiring precision
• Users seeking comprehensive protection
• Streamers needing safety features
• Players wanting advanced aimbot control
• Those with diverse system configurations
• Users requiring loot visualization
• Players seeking premium quality

### 🎮**Fortnite Features:**
• **Battle Royale** - Survival competition
• **Building System** - Tactical structure creation
• **Cosmetic Collection** - Character customization
• **Seasonal Content** - Regular updates
• **Cross-platform Integration** - Multi-device play

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with prediction and recoil compensation
• **Built-in Spoofer** - Complete hardware protection system included
• **Hybrid Design** - Advanced technology combining external and internal benefits
• **Comprehensive ESP** - Complete player and loot visualization system

---
**Hybrid cheat with advanced aimbot, built-in spoofer, and comprehensive ESP for complete Fortnite battle royale domination!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with prediction, recoil compensation, and precise bone selection.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security and safety.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete player and loot visualization with detailed information and customization options.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Fortnite premium cheat.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Fortnite • Hybrid • Built-in Spoofer • Advanced Aimbot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};