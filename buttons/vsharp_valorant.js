const { EmbedBuilder } = require('discord.js');

module.exports = {
    customId: 'vsharp_valorant',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ V-Sharp : Valorant - Memory Aim & Advanced ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 140.000 / $8.00
**7 DAY**   — IDR 426.750 / $25.50
**30 DAY**  — IDR 832.500 / $50.00
**Lifetime** — IDR 2.497.250 / $150.00

A premium product for the game Valorant from V-Sharp group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI
• **Hardware Required:** No additional requirements

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Riot Games
• **Supported HCVI, TPM & SB Bypass:** Yes
• **Run from flash drive:** No
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Toggle aimbot functionality
• **Memory Aim** - Direct memory-based aiming
• **Aim key** - Custom activation binding
• **FOV Slider** - Targeting radius control
• **Smoothing** - Aiming smoothness adjustment
• **Aim bone** - Target bone selection
• **Draw FOV** - Visual targeting zone
• **RCS (Recoil Control System)** - Automatic recoil compensation

### 👁️**Visuals (Players) Features:**
• **Enable Player ESP** - Toggle player ESP
• **Box ESP (2D, Corner)** - Multiple box styles
• **Skeleton ESP** - Bone structure visualization
• **Head ESP** - Head position tracking
• **Snaplines** - Directional indicator lines
• **Distance ESP** - Distance information display
• **Health + Shield (Bar and Text)** - Health and shield indicators
• **Character & Weapon Names** - Equipment identification
• **Skills Position** - Ability cooldown display
• **Enable/Disable FakePlayer and Team ESP** - Toggle options

### 👁️**Visuals (Radar) Features:**
• **Enable Radar** - Toggle radar display
• **Draw Teammates** - Show friendly positions
• **Draw Enemies** - Show enemy positions
• **Draw Dormants** - Show inactive players
• **Arrow Length** - Arrow indicator length
• **Arrow Thickness** - Arrow thickness control
• **Radar Scale** - Radar size adjustment

### ⚙️**Misc Features:**
• **LineUp Helper** - Tactical positioning assistance

### 💎**V-Sharp Advantages:**
✅ **Memory Aim** - Advanced memory-based targeting
✅ **Advanced ESP** - Comprehensive visual system
✅ **Lifetime Option** - Best long-term value
✅ **HCVI/TPM/SB Bypass** - Complete bypass system
✅ **StreamProof** - Safe for streaming
✅ **Professional Quality** - Industry-leading features
✅ **Regular Updates** - Latest game compatibility
✅ **No Hardware Requirements** - Works on any system

### 🎮**Perfect For:**
• Professional Valorant players
• Users wanting memory-based aimbot
• Players seeking comprehensive ESP
• Those wanting lifetime access
• Streamers needing bypass
• Users requiring no hardware restrictions
• Players wanting professional features
• Those seeking best long-term value

### 🎯**Valorant Features:**
• **Tactical FPS** - 5v5 competitive gameplay
• **Agent Abilities** - Unique character powers
• **Precise Gunplay** - Skill-based shooting mechanics
• **Strategic Gameplay** - Team coordination required
• **Multiple Maps** - Diverse tactical environments

### 🎯**Key Features:**
• **Memory Aim** - Advanced memory-based targeting technology
• **Comprehensive ESP** - Complete visual awareness system
• **Lifetime Access** - One-time payment for unlimited use
• **Bypass System** - Complete protection integration
• **Professional Quality** - Industry-standard features

---
**External cheat with memory aim technology and comprehensive ESP for ultimate Valorant tactical advantage!**`)
            .addFields(
                {
                    name: '`🧠` MEMORY AIM',
                    value: 'Advanced memory-based targeting technology with RCS and bone selection.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete visual system with player ESP, radar, and tactical information.'
                },
                {
                    name: '`👑` LIFETIME ACCESS',
                    value: 'One-time payment provides unlimited access forever - best long-term investment.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your V-Sharp Valorant premium cheat.'
                }
            )
            .setColor('#FFB6C1')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'V-Sharp Valorant • External • Memory Aim & Advanced ESP • Lifetime Access',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};