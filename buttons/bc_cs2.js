const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'bc_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ BC : Counter Strike 2 - Internal Technology Cheat')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 182.500 / $11.20

A premium product for Counter Strike 2 from BC group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** Yes
• **Software Type:** Internal

### 🔥**Advanced Visual ESP Features:**

**Player ESP System:**
• **Boxes** - Player boundary visualization
• **Healthbars** - HP status monitoring
• **Armor Display** - Equipment visualization
• **Directional Lines** - Player-to-player connections
• **Skeleton ESP** - Bone structure overlay
• **Skeleton Size Control** - Adjustable bone thickness
• **Name Display** - Player identification
• **Weapon Detection** - Current weapon visibility
• **Off-Screen Arrows** - Out-of-view indicators
• **Spectator Detection** - Observer monitoring
• **Invisible/Visible Filtering** - Status-based display
• **Point of Interest** - Strategic location marking
• **Arrow Size** - Indicator scaling
• **Size Control** - ESP element adjustment

### 🎯**Advanced Aimbot System:**
• **Recoil Compensation** - Complete spray control
• **Target Lock System** - Focus targeting
• **Auto-Wall Feature** - Penetration capability
• **Aim Key** - Custom activation
• **Trigger Key** - Auto-fire control
• **Trigger Delay** - Firing timing
• **FOV Control** - Targeting area adjustment
• **Smooth Aiming** - Natural movement simulation
• **RCS (Recoil Control System)** - Advanced recoil management
• **Target Selection** - Smart prioritization

### ⚙️**Miscellaneous Features:**
• **Menu Access** - [Insert] key for quick access
• **Menu Color** - Interface customization
• **Local FOV** - Personal field of view
• **Target FOV** - Target-specific zoom

### 💎**BC Advantages:**
✅ **Internal Technology** - Direct game integration for maximum performance
✅ **Flash Drive Support** - Portable operation capability
✅ **Comprehensive ESP** - Complete battlefield awareness
✅ **Advanced Aimbot** - Professional targeting with RCS
✅ **Auto-Wall Feature** - Penetration capabilities
✅ **Full Resolution Support** - All display modes including fullscreen
✅ **StreamProof Technology** - Safe for content creation
✅ **Spectator Detection** - Observer monitoring system
✅ **Customizable Interface** - Personalized menu colors and settings
✅ **Advanced Features** - Professional-grade functionality

### 🎮**Perfect For:**
• Serious CS2 players seeking maximum performance
• Users who prefer internal technology advantages
• Players needing portable cheat solution
• Competitive operators requiring advanced features
• Streamers needing comprehensive ESP
• Users wanting auto-wall capabilities
• Players who value full resolution support
• Enthusiasts seeking professional-grade tools

### ⚔️**Internal Technology Benefits:**
• **Direct Game Integration** - Maximum performance and responsiveness
• **Advanced Capabilities** - Features not possible with external cheats
• **Superior Speed** - Unmatched reaction times
• **Deep Game Access** - Complete control over game mechanics
• **Enhanced Stability** - Reliable operation

### 🔧**Technical Excellence:**
• **64-Bit Optimization** - Designed for modern systems
• **Memory Management** - Efficient resource usage
• **Anti-Detection** - Advanced protection methods
• **Performance Optimized** - Minimal impact on game performance

### 🏆**Counter-Strike 2 Specialization:**
• **Modern Warfare** - Optimized for CS2 updated mechanics
• **Enhanced Graphics** - Full support for CS2 visual improvements
• **Tactical Advantage** - Strategic battlefield awareness
• **Professional Tools** - Tournament-level features

---
**Internal technology cheat with advanced CS2 features and portable operation!**`)
            .addFields(
                {
                    name: '`⚡` INTERNAL POWER',
                    value: 'Direct game integration for maximum performance and features.'
                },
                {
                    name: '`💾` PORTABLE OPERATION',
                    value: 'Run from flash drive for maximum convenience.'
                },
                {
                    name: '`🎯` AUTO-WALL FEATURE',
                    value: 'Advanced penetration capabilities for tactical advantage.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC CS2 premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC CS2 • Internal • Portable Operation • Advanced Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};