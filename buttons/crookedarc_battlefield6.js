const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarc_battlefield6',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚙️ Crooked Arm\'s : Battlefield 6')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 116.750 / $7.00
**7 DAY**   — IDR 640.250 / $38.00
**31 DAY**  — IDR 950.500 / $57.00

A premium product for the game Battlefield 6 from Crooked Arm's group.

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

### 🔥**Player ESP Features:**
• Only visible players
• Friends identification
• Name display
• Line connections
• Health bars
• Box types (Disabled, 2D, 3D)
• Skeleton display
• Skeleton line thickness control
• Skeleton draw distance
• Distance indicator
• Backlight distance

### 📡**Radar System:**
• Enable radar
• Backlight distance control
• Position by X/Y
• Size adjustment
• Size by Width/Height
• Alpha transparency

### 🎯**Aimbot Features:**
• Enable aimbot
• Mouse movement type
• Aim priority system
• Crosshair display
• Distance targeting
• Aim on players in vehicles
• Visibility Check
• Control radius
• Draw FOV circle
• FOV adjustment
• Distance control
• Bone selection
• Key binding

### 🎨**Color Customization:**
• Visible players color
• Invisible players color
• My team players color
• Target player color

### 💎**Crooked Arm's Advantages:**
✅ **Portable** - Can run from flash drive
✅ **Comprehensive ESP** - Complete battlefield awareness
✅ **Advanced Aimbot** - Professional targeting system
✅ **Custom Radar** - Tactical positioning tool
✅ **Color System** - Full color customization
✅ **StreamProof** - Safe for streaming
✅ **Vehicle Support** - Aim players in vehicles
✅ **Friend System** - Team management

### 🎮**Perfect For:**
• Users wanting portable software
• Tactical operators needing battlefield awareness
• Players who need comprehensive ESP
• Streamers requiring visual features
• Users who want color customization
• Competitive players needing advanced aimbot
• Those who want multi-client support (Steam & EA)

### 🎯**Key Features:**
• **3D ESP Boxes** - Multiple box types for enhanced visualization
• **Advanced Radar** - Customizable tactical positioning
• **Vehicle Aimbot** - Target players in all situations
• **Friend System** - Team and enemy identification
• **Portable Design** - Flash drive compatibility
• **Complete Customization** - Colors, sizes, positioning

---
**Comprehensive external cheat with advanced radar and ESP!**`)
            .addFields(
                {
                    name: '`💾` PORTABLE',
                    value: 'Can run from flash drive for maximum convenience and security.'
                },
                {
                    name: '`📡` ADVANCED RADAR',
                    value: 'Customizable radar system with multiple positioning options.'
                },
                {
                    name: '`🎨` COLOR SYSTEM',
                    value: 'Full color customization for all ESP elements.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s Battlefield 6 cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s Battlefield 6 • External • Portable • Advanced Radar',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};