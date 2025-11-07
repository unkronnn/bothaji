const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'vsharp_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔪 V-Sharp : Delta Force - Lifetime External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 140.000 / $8.00
**7 DAY**   — IDR 426.750 / $25.50
**30 DAY**  — IDR 832.500 / $50.00
**LIFETIME** — IDR 2.497.250 / $150.00

A premium product for the game Delta Force from V-Sharp group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Garena & Epic Games
• **Hardware Required:** -
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Toggle aimbot functionality
• **Aim Prediction** - Projectile trajectory calculation
• **Custom FOV** - Adjustable field of view
• **Custom Smooth** - Adjustable smoothing intensity
• **Custom KeyBind** - Custom activation binding
• **Custom HitBox** - Target hitbox selection

### 👁️**Visuals (Players) Features:**
• **Draw Box** - Bounding box display
• **Draw Skeleton** - Bone structure visualization
• **Draw Health** - Health status display
• **Draw Armor** - Armor status display
• **Draw Bots** - AI and NPC detection
• **Visible Check** - Line of sight verification
• **Team Check War** - Team identification in combat
• **Team Check OP** - Team identification in operations
• **Render Distance** - Adjustable rendering range

### 👁️**Visuals (Loot) Features:**
• **Item Box** - Item bounding boxes
• **Item Distance** - Range information
• **Item Max Distance** - Maximum loot range
• **Item Max Value** - Filter items by value in operations

### ⚙️**Miscellaneous Features:**
• **StreamProof** - Safe for content creation
• **Anti-Screenshot Protection** - Prevent screenshot capture

### 💎**V-Sharp Advantages:**
✅ **Lifetime Option** - Permanent access available
✅ **Built-in Spoofer** - Complete protection suite
✅ **StreamProof** - Safe for content creation
✅ **Anti-Screenshot** - Advanced protection
✅ **Multi-Client Support** - Steam, Garena & Epic Games
✅ **Team Identification** - Advanced team detection
✅ **Loot Filtering** - Value-based item filtering
✅ **Bot Detection** - AI and NPC identification

### 🎮**Perfect For:**
• Players wanting lifetime access
• Streamers requiring maximum protection
• Users seeking advanced safety features
• Multi-platform gamers
• Those who need bot detection
• Players wanting loot optimization
• Users who value anti-screenshot protection

### 🪖**Delta Force Features:**
• **Multi-Launcher Support** - Various game platforms
• **Team-Based Combat** - Squad coordination
• **AI Enemies** - Computer-controlled opponents
• **Equipment Economy** - Item value system
• **Content Creation** - Streaming and recording

### 🎯**Key Features:**
• **Lifetime Access** - Permanent ownership option available
• **Anti-Screenshot Protection** - Advanced safety for content creators
• **Built-in Spoofer** - Complete protection integration
• **Multi-Client Support** - Full compatibility across platforms
• **Team Identification** - Advanced team detection system
• **Loot Filtering** - Value-based item optimization

---
**External cheat with lifetime access and anti-screenshot protection for ultimate Delta Force safety!**`)
            .addFields(
                {
                    name: '`♾️` LIFETIME ACCESS',
                    value: 'Permanent ownership option available for unlimited access to all features.'
                },
                {
                    name: '`🛡️` ANTI-SCREENSHOT',
                    value: 'Advanced protection system prevents screenshot capture for content creators.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated with StreamProof technology.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your V-Sharp Delta Force premium cheat.'
                }
            )
            .setColor('#DC143C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'V-Sharp Delta Force • External • Lifetime Access • Anti-Screenshot',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};