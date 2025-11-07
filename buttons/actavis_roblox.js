const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'actavis_roblox',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Actavis : Roblox - External Game Manipulation & Combat Features')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 160.000 / $9.50
**Lifetime** — IDR 1.332.000 / $80.00

A premium product for the game Roblox from Actavis group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎮**Game Manipulation Features:**
• **Speed Hack** - WalkSpeed Modifier
• **Jump Power Modifier** - Enhanced jumping ability
• **Fly Mode** - Unlimited flight capability
• **Noclip Mode** - Walk through walls
• **Infinite Jump** - Unlimited jumping
• **Anti Stomp** - Prevention against stomping attacks
• **Rapid Fire** - Fast weapon firing
• **Headless** - Character head modification
• **Anti Aim** - Anti-aimbot protection

### 👁️**ESP & Visuals Features:**
• **Player ESP** - Boxes, names, tracers, distance indicators
• **Skeleton** - Bone structure visualization
• **Health Bar** - Visual health display
• **Health Text** - Health information display
• **OFF Arrows** - Directional indicators
• **Chams / Wallhack** - See players through walls
• **Enable Radar** - Mini-map with player positions
• **Radar** - Show Names, Distance information

### 🎯**Aimbot & Combat Features:**
• **Aimbot** - Custom FOV, smoothing, hitbox customization (head, body, etc.)
• **Aimbot Targetting** - Advanced targeting system
• **Team Check** - Friend/foe identification
• **HvH Function** - Hack versus hack capabilities
• **Triggerbot / Auto Shoot** - Automatic firing system

### 🛡️**Security & Bypass Features:**
• **Anti-Detection** - Bypasses common anti-cheat systems (like Synapse whitelist, Byfron, etc.)
• **Crash Protection** - Auto-Reattach functionality
• **Custom UI** - Spoofing and interface features

### 💎**Actavis Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Game Manipulation** - Complete control over game physics
✅ **Advanced ESP** - Comprehensive visual awareness
✅ **Professional Aimbot** - Precision targeting system
✅ **Security Features** - Anti-detection and protection
✅ **Lifetime Option** - Best long-term value
✅ **Regular Updates** - Latest game compatibility
✅ **Custom UI** - Enhanced user interface

### 🎮**Perfect For:**
• Roblox power users
• Players wanting game manipulation
• Users seeking combat advantages
• Streamers requiring safety
• Multi-game Roblox enthusiasts
• Users wanting lifetime access
• Players seeking comprehensive features

### 🎮**Roblox Features:**
• **Massive Platform** - Millions of user-created games
• **Game Diversity** - Multiple genres and experiences
• **Social Interaction** - Multiplayer and community features
• **Creative Tools** - User-generated content
• **Cross-Platform** - Available on multiple devices

### 🎯**Key Features:**
• **Game Manipulation** - Complete physics control
• **Advanced ESP** - Comprehensive awareness system
• **Professional Aimbot** - Precision targeting with customization
• **Security Features** - Anti-detection and bypass systems
• **External Design** - Safe and efficient performance

---
**External cheat with comprehensive game manipulation, advanced ESP, aimbot, and security features for ultimate Roblox platform dominance!**`)
            .addFields(
                {
                    name: '`🎮` GAME MANIPULATION',
                    value: 'Complete control over game physics including speed, flight, noclip, and jumping.'
                },
                {
                    name: '`🎯` COMBAT SYSTEM',
                    value: 'Professional aimbot with customization, triggerbot, and HvH capabilities.'
                },
                {
                    name: '`🛡️` SECURITY FEATURES',
                    value: 'Anti-detection bypasses, crash protection, and advanced safety systems.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Actavis Roblox premium cheat.'
                }
            )
            .setColor('#FF6347')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Actavis Roblox • External • Game Manipulation & Combat • Security Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};