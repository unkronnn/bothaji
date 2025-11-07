const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'vision_r6s',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👁️ Vision : R6S - Internal Visual ESP & Advanced Aimbot')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 142.500 / $8.00
**7 DAY**   — IDR 587.000 / $33.00
**30 DAY**  — IDR 1.027.250 / $60.00

A premium product for the game Rainbow Six Siege from Vision group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** UPlay (Ubisoft Connect), Steam, Epic Games
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 👁️**Visual Features:**
• **Player ESP** - Enemy player detection and display
• **ESP Box** - Rectangle overlays on opponents
• **ESP Line (Up, Center, Bottom)** - Directional indicator lines
• **Player Distance** - Precise distance calculation
• **Skeleton** - Full bone structure visualization
• **Name** - Player name display
• **Head** - Head position tracking
• **Health (Bar, Text)** - Health status indicators
• **Team Check** - Friend/foe identification
• **Max Distance** - Adjustable render distance

### 🎯**Aimbot Features:**
• **Active Aimbot** - Real-time targeting assistance
• **Aimbot Keys** - Customizable activation keys
• **FOV Size** - Targeting radius control
• **Draw FOV** - Visual targeting zone display
• **Hitboxes** - Target bone selection
• **Mark Target** - Visual target indicators
• **Sensitivity** - Customizable aim sensitivity
• **Crosshair** - Custom crosshair options

### 💎**Vision Advantages:**
✅ **Internal Software** - Superior performance and stability
✅ **Advanced Visual ESP** - Complete enemy awareness
✅ **Professional Aimbot** - Precision targeting system
✅ **Multi-Client Support** - UPlay, Steam, Epic Games
✅ **Customizable Settings** - Extensive configuration options
✅ **Reliable Performance** - Consistent and stable
✅ **Regular Updates** - Latest game compatibility
✅ **Professional Quality** - Industry-leading features

### 🎮**Perfect For:**
• Competitive Rainbow Six Siege players
• Users wanting maximum awareness
• Players seeking precise aiming
• Those requiring internal performance
• Multi-platform players
• Users wanting comprehensive features
• Players seeking tactical advantages

### 🛡️**Rainbow Six Siege Features:**
• **Tactical Gameplay** - Strategic team-based combat
• **Destructible Environments** - Dynamic map interactions
• **Operator System** - Unique character abilities
• **Close-Quarters Combat** - Intense CQB action
• **5v5 Matches** - Competitive team play

### 🎯**Key Features:**
• **Internal Design** - Superior performance integration
• **Advanced Visual ESP** - Complete awareness system
• **Professional Aimbot** - Precision targeting with customization
• **Multi-Client Support** - Works with all platforms
• **Comprehensive Settings** - Extensive configuration options

---
**Internal cheat with advanced visual ESP and professional aimbot for ultimate Rainbow Six Siege tactical dominance!**`)
            .addFields(
                {
                    name: '`👁️` ADVANCED VISUAL ESP',
                    value: 'Complete enemy awareness with skeleton, distance, health, and directional indicators.'
                },
                {
                    name: '`🎯` PROFESSIONAL AIMBOT',
                    value: 'Precision targeting with customizable FOV, hitboxes, and sensitivity settings.'
                },
                {
                    name: '`🔧` INTERNAL PERFORMANCE',
                    value: 'Superior performance and stability with direct game integration.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Vision Rainbow Six Siege premium cheat.'
                }
            )
            .setColor('#4A90E2')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Vision Rainbow Six Siege • Internal • Advanced Visual ESP & Aimbot • Professional Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};