const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'actavis_r6s',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Actavis : R6S - Internal Professional Aimbot & Visuals')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 2.490.250 / $150.00

A premium product for the game Rainbow Six Siege X from Actavis group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 🎯**Aim Features:**
• **Automatically aim at enemies (head or body)** - Intelligent targeting system
• **Smooth aiming for reduced detection** - Natural movement simulation
• **Adjustable field of view (FOV)** - Targeting radius control
• **Render FOV** - Visual targeting zone display

### 👁️**Visual Features:**
• **Enable Visuals** - Toggle ESP functionality
• **Box** - Rectangle overlays on opponents
• **Snaplines** - Directional indicator lines
• **Skeleton** - Bone structure visualization
• **Skeleton Thickness** - Adjustable bone display width
• **Box Color** - Customizable rectangle colors
• **Tracer Color** - Custom line colors
• **Skeleton Color** - Custom bone colors

### ⚙️**Config Features:**
• **Config your settings with an ingame menu** - Intuitive interface
• **Easy Setup** - Quick configuration process
• **Save Profiles** - Multiple configuration presets
• **Real-time Adjustments** - Live setting changes
• **Professional Interface** - Clean, user-friendly design

### 💎**Actavis Advantages:**
✅ **Internal Software** - Superior performance and stability
✅ **Professional Aimbot** - Smooth, natural targeting
✅ **Advanced Visuals** - Customizable ESP system
✅ **In-Game Menu** - Intuitive configuration interface
✅ **Premium Quality** - Professional-grade features
✅ **Regular Updates** - Latest game compatibility
✅ **Clean Interface** - User-friendly design
✅ **Reliable Performance** - Consistent operation

### 🎮**Perfect For:**
• Professional Rainbow Six Siege players
• Users wanting smooth, natural aimbot
• Players seeking advanced visual customization
• Those requiring premium quality
• Streamers wanting clean interface
• Users seeking professional features
• Players wanting customizable experience

### 🛡️**Rainbow Six Siege Features:**
• **Tactical Gameplay** - Strategic team-based combat
• **Destructible Environments** - Dynamic map interactions
• **Operator System** - Unique character abilities
• **Close-Quarters Combat** - Intense CQB action
• **5v5 Matches** - Competitive team play

### 🎯**Key Features:**
• **Professional Aimbot** - Smooth, natural targeting with FOV control
• **Advanced Visuals** - Customizable ESP with multiple options
• **In-Game Menu** - Intuitive configuration system
• **Internal Design** - Superior performance integration
• **Premium Quality** - Professional-grade features

---
**Internal cheat with professional smooth aimbot and advanced customizable visuals for ultimate Rainbow Six Siege performance!**`)
            .addFields(
                {
                    name: '`🎯` PROFESSIONAL AIMBOT',
                    value: 'Smooth, natural targeting with FOV control and head/body selection.'
                },
                {
                    name: '`👁️` ADVANCED VISUALS',
                    value: 'Customizable ESP system with boxes, skeleton, snaplines, and color options.'
                },
                {
                    name: '`⚙️` IN-GAME MENU',
                    value: 'Intuitive configuration interface with real-time adjustments and profile saving.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Actavis Rainbow Six Siege premium cheat.'
                }
            )
            .setColor('#FF6347')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Actavis Rainbow Six Siege • Internal • Professional Aimbot & Visuals • Premium Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};