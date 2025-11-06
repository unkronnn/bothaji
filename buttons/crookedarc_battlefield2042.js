const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarc_battlefield2042',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚙️ Crooked Arm\'s : Battlefield 2042')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 175.250 / $10.00
**7 DAY**   — IDR 612.250 / $36.00
**31 DAY**  — IDR 1.005.000 / $60.00

A premium product for the game Battlefield 2042 from Crooked Arm's group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Windowed (Fullscreen requires specific methods)
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & EA
• **Run from flash drive:** Yes
• **Software Type:** External

### 🔥**Visual ESP Features:**
• Only visible players
• Friends identification
• Name display
• Line connections
• Skeleton ESP
• Box types (Disabled, 2D Box, 3D Box)
• Health display
• Distance indicator
• Vehicles detection
• Size line for box/skeleton
• Skeleton distance control
• Additional distance settings
• Backlight distance

### 📡**Radar System:**
• Enable radar
• Backlight distance control
• Position by X/Y
• Size by Width/Height
• Alpha transparency

### 🎯**Aimbot Features:**
• Enable aimbot
• Enable prediction
• Mouse movement type
• Aim priority system
• Crosshair display
• Distance targeting
• Aim on vehicles
• Visibility Check
• Control radius
• Draw FOV circle
• FOV adjustment
• Draw prediction circle
• Advanced settings
• **Velocity modifier**
• Bone selection
• Key binding

### 🎨**Color System:**
• Color friends
• Color hidden enemy
• Color visible enemy
• Target color

### 💎**Crooked Arm's Advantages:**
✅ **Portable** - Can run from flash drive
✅ **Futuristic ESP** - Advanced visual features for modern warfare
✅ **Advanced Prediction** - Velocity modifier for modern combat
✅ **Comprehensive Radar** - Tactical battlefield overview
✅ **Vehicle ESP** - Complete vehicle awareness
✅ **Color System** - Full customization
✅ **StreamProof** - Safe for streaming
✅ **Future-Ready** - Optimized for Battlefield 2042's advanced features

### 🎮**Perfect For:**
• Battlefield 2042 players (futuristic warfare)
• Users wanting portable external software
• Modern tactical operators
• Players who need advanced prediction
• Streamers requiring visual features
• Competitive players in futuristic combat
• Users who want comprehensive battlefield awareness

### 🚁**Battlefield 2042 Features:**
• **Futuristic Combat** - Modern weapons and vehicles
• **Advanced Technology** - Prediction for modern warfare
• **Future Warfare** - Adapted for next-gen combat
• **Specialized ESP** - Enhanced for 2042's unique features

### 🎯**Key Features:**
• **Velocity Modifier** - Advanced prediction for modern combat
• **Advanced ESP** - Multiple box types and skeleton
• **Comprehensive Radar** - Customizable positioning
• **Vehicle Support** - Complete vehicle detection
• **Portable Design** - Flash drive compatibility
• **Color Customization** - Full control over ESP colors

---
**Futuristic external cheat with advanced prediction for Battlefield 2042!**`)
            .addFields(
                {
                    name: '`🚁` FUTURISTIC COMBAT',
                    value: 'Advanced features optimized for Battlefield 2042\'s modern warfare.'
                },
                {
                    name: '`⚡` VELOCITY MODIFIER',
                    value: 'Advanced prediction system for modern combat physics.'
                },
                {
                    name: '`💾` PORTABLE',
                    value: 'Can run from flash drive for maximum portability.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s Battlefield 2042 cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s Battlefield 2042 • External • Velocity Modifier • Portable',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};