const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_pubg',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Fecurity : PUBG - Premium Hybrid Cheat with Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 597.250 / $35.00
**30 DAY**  — IDR 1.082.250 / $65.00

A premium product for the game PUBG from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Built-in Spoofer:** Yes
• **Software Type:** Hybrid

### 🎯**Aim Features:**
• **Enable Aimbot** - Toggle aim functionality
• **Aim At Shoot** - Precise shot timing
• **Prediction** - Bullet trajectory prediction
• **Enemy Only** - Target enemies exclusively
• **Aim Horizontal Speed** - Horizontal movement control
• **Aim Vertical Speed** - Vertical movement control
• **Draw FOV** - Visualize targeting radius
• **Target Switch Delay** - Transition timing between targets
• **Hitscan Coefficient** - Precision adjustment
• **Hitbox Priority** - Head, Neck, Chest, Arms, Legs selection
• **Aim Key** - Custom activation binding

### 👁️**Visual (Players) Features:**
• **Enabled** - Toggle player ESP
• **Enemy only** - Show enemies only
• **Box** - Rectangle overlays
• **Box outline** - Clean box borders
• **Health** - Player health display
• **Skeleton** - Bone structure visualization
• **Maximum Distance** - Render distance control
• **Corpse Distance** - Dead body display range
• **Player info** - Nickname, distance, and other details

### 🎁**Visual (Loot) Features:**
• **Enable** - Toggle item ESP
• **Show Distance** - Distance display for items
• **Maximum Distance** - Item rendering range
• **Key Bind** - Toggle controls

### ⚙️**Misc Features:**
• **No Recoil** - Eliminate weapon recoil
• **Spectator Count** - Real-time spectator monitoring
• **Override FOV** - Custom field of view
• **Developer Mode** - Advanced debugging options
• **Menu Key** - Interface toggle
• **Menu DPI** - Menu sensitivity
• **Force Reload** - Instant reload capability
• **Cache Delay** - Performance optimization
• **Distance Unit** - Meters, Feet, Yards, Kilometers selection

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Internal + External performance
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced Aimbot** - Precision targeting with prediction
✅ **Comprehensive ESP** - Players, items, and loot awareness
✅ **StreamProof** - Safe for streaming
✅ **Professional Quality** - Industry-leading features
✅ **Regular Updates** - Latest game compatibility

### 🎮**Perfect For:**
• Competitive PUBG players
• Users wanting maximum protection
• Players seeking advanced aimbot
• Those requiring comprehensive ESP
• Streamers requiring safety
• Users wanting professional quality
• Players seeking all-in-one solution

### 🏆**PUBG Features:**
• **Battle Royale** - 100-player survival combat
• **Realistic Weapons** - Authentic firearm mechanics
• **Large Maps** - Diverse tactical environments
• **Vehicle Combat** - Mobile warfare tactics
• **Survival Gameplay** - Resource management

### 🎯**Key Features:**
• **Hybrid Technology** - Combined internal/external performance
• **Built-in Spoofer** - Complete protection integration
• **Advanced Aimbot** - Mathematical precision targeting
• **Comprehensive ESP** - Complete awareness system
• **Professional Quality** - Industry-standard features

---
**Hybrid cheat with built-in spoofer, advanced aimbot, and comprehensive ESP for ultimate PUBG dominance!**`)
            .addFields(
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security and safety.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Precision targeting with prediction, hitbox selection, and smooth control.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete awareness system for players, items, loot, and environmental information.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity PUBG premium cheat.'
                }
            )
            .setColor('#FF6B6B')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity PUBG • Hybrid • Built-in Spoofer • Advanced Aimbot & ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};