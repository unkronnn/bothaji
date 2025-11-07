const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_gtav',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🧱 Mason : GTA V - External for Multiple RP Platforms')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 41.750 / $2.50
**7 DAY**   — IDR 119.750 / $7.00
**30 DAY**  — IDR 194.500 / $11.00

A premium product for the game GTA V from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** RageMp, Majestic, GTA5 RP & Alt:V
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎯**Advanced Aimbot Features:**
• **Aimbot Toggle** - Enable/disable functionality
• **Aim Key Binding** - Custom control setup
• **Aim Spot Selection** - Target bone customization
• **Aim Radius** - Targeting area control
• **Aim Smooth** - Human-like movement
• **Auto Switch** - Target change automation
• **Ignore Pedestrians** - Bot filtering system

### 🔫 **Triggerbot System:**
• **Triggerbot Toggle** - Automatic firing
• **Trigger Key** - Custom binding
• **Trigger Delay** - Timing control
• **Ignore Friendly** - Team protection

### 👁️**Visual ESP Features:**
• **Player Display** - Human visualization
• **Pedestrian Display** - Bot identification
• **Bounding Box** - Target highlighting
• **Weapon Display** - Current equipment tracking
• **Snapline Display** - Directional indicators
• **Health Bar** - Status visualization
• **Vehicle Display** - Transportation tracking
• **Waypoint Display** - Map marker visibility
• **Distance Display** - Range calculation
• **World Render Distance** - Object display range
• **Vehicle Render Distance** - Transport display range

### 🛠️**Advanced Miscellaneous:**
• **God Mode** - Invulnerability (can be banned)
• **Desync Mode** - Alternative invulnerability for RP servers (can be banned)
• **Run Speed** - Movement velocity control
• **Swim Speed** - Aquatic speed adjustment
• **Wanted Level** - Police attention control
• **Super Jump** - Enhanced jumping ability
• **Max Health** - Health maximization
• **Force Ignore** - AI disregard system
• **Infinite Stamina** - Unlimited endurance
• **No Ragdoll** - Fall immunity
• **No Collision** - Phase through objects
• **Anti Freeze** - Admin freeze protection
• **Vehicle God Mode** - Transport invulnerability
• **Force Seatbelt** - Automatic safety
• **Vehicle Speed** - Acceleration control
• **No Deformation** - Vehicle damage prevention
• **Remove Recoil** - Accuracy enhancement
• **Remove Spread** - Perfect accuracy
• **Extended Weapon Range** - Distance increase
• **Explosive Melee** - Enhanced close combat
• **Super Damage** - Increased weapon damage
• **Anti Target** - Missile protection
• **Anti AFK** - Inactivity prevention
• **NoClip** - Wall phase movement
• **Waypoint Teleport** - Map-based travel
• **Vehicle Flip** - Self-recovery
• **Suicide** - Quick respawn

### ⚙️**Settings Interface:**
• **CPU Optimization** - Resource saving
• **Menu Key** - Interface access
• **Panic Key** - Emergency shutdown
• **Battle Mode Key** - Combat toggle
• **Crosshair Display** - Aiming aid
• **FOV Display** - Targeting area visualization
• **Radar Display** - Mini-map system
• **Player-Only Radar** - Human tracking
• **Radar Size** - Dimension control
• **Radar Radius** - Coverage area

### 🧱**Mason Advantages:**
✅ **Multi-platform Support** - RageMp, Majestic, GTA5 RP, Alt:V
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Comprehensive Features** - Extensive functionality
✅ **Latest Windows Support** - Including Windows 25H2
✅ **Budget-friendly** - Affordable pricing
✅ **Radar System** - Complete situational awareness

### 🏎️**Perfect For:**
• Multi-platform RP players
• Users across different GTA V servers
• Streamers requiring safety features
• Budget-conscious players
• Users with latest Windows versions
• Those wanting external safety
• Players requiring radar functionality

### 🎮**GTA V Features:**
• **Multiplatform RP** - Various roleplaying communities
• **Open World** - Vast San Andreas environment
• **Vehicle Diversity** - Extensive transport options
• **Criminal Activities** - Heists and missions
• **Character Customization** - Personal development

### 🎯**Key Features:**
• **Multi-platform Support** - Compatible with RageMp, Majestic, GTA5 RP, and Alt:V
• **External Safety** - Minimal detection risk with external implementation
• **Comprehensive Features** - Extensive functionality including god mode, teleportation, and weapon modifications
• **Latest Windows Support** - Optimized for Windows 25H2 and all recent versions

---
**External cheat with multi-platform RP support, comprehensive features, and external safety for complete GTA V roleplaying dominance!**`)
            .addFields(
                {
                    name: '`🎮` MULTI-PLATFORM SUPPORT',
                    value: 'Compatible with RageMp, Majestic, GTA5 RP, and Alt:V roleplaying platforms.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Minimal detection risk with safe external implementation and stream protection.'
                },
                {
                    name: '`🛠️` COMPREHENSIVE FEATURES',
                    value: 'Extensive functionality including god mode, teleportation, weapon modifications, and radar system.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason GTA V premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason GTA V • External • Multi-Platform RP • Comprehensive Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};