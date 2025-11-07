const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ambani_fortnite',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💎 Ambani : Fortnite - External with Aimbot & Advanced ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 183.250 / $11.00
**7 DAY**   — IDR 512.000 / $30.00
**30 DAY**  — IDR 999.000 / $60.00

A premium product for the game Fortnite from Ambani group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Epic Games
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🎯**Advanced Aimbot System:**
• **Team Protection** - Ignore friendly players
• **Knocked Filtering** - Skip eliminated enemies
• **Custom FOV** - Field of view adjustment
• **Custom Smooth** - Human-like movement control
• **Max Distance** - Range limitation
• **Hitbox Selection** - Head, Neck, Chest, Pelvis targeting
• **Custom Prediction** - Movement calculation system

### 👁️**Visual Player ESP:**
• **Player Names** - Enemy identification
• **Distance Display** - Range calculation
• **Skeleton ESP** - Bone structure visualization
• **Box Styles** - Corner and Filled box options
• **Weapon Information** - Current equipment display
• **Ammo Count** - Weapon ammunition tracking
• **Snap Lines** - Bottom and Top directional indicators
• **Status Flags** - Reloading and Crouching indication
• **Custom Render Distance** - ESP range control

### 🌍**Visual World ESP:**
• **Weapon ESP** - Firearms with rarity filter
• **Consumable ESP** - Health and utility items
• **Chest ESP** - Supply container location
• **Custom Render Distance** - World object range control

### 💎**Ambani Advantages:**
✅ **Advanced Aimbot** - Professional targeting with prediction
✅ **Comprehensive ESP** - Complete player and world visualization
✅ **Built-in Spoofer** - Complete hardware protection
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Customizable Features** - Extensive configuration options
✅ **Premium Quality** - High-end implementation

### 🍇**Perfect For:**
• Competitive players requiring precision
• Users seeking comprehensive ESP coverage
• Streamers needing safety features
• Players wanting advanced aimbot control
• Those requiring built-in protection
• Users with Epic Games launcher
• Players seeking premium quality

### 🎮**Fortnite Features:**
• **Battle Royale** - 100-player survival competition
• **Building Mechanics** - Strategic construction system
• **Cosmetic System** - Character customization options
• **Seasonal Updates** - Regular content evolution
• **Cross-platform Play** - Multi-device integration

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with hitbox selection and prediction
• **Comprehensive ESP System** - Complete player and world visualization with detailed information
• **Built-in Spoofer** - Complete hardware protection system included
• **External Design** - Safe and undetectable implementation

---
**External cheat with advanced aimbot, comprehensive ESP system, and built-in spoofer for complete Fortnite battle royale dominance!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with hitbox selection, custom prediction, and team protection.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP SYSTEM',
                    value: 'Complete player and world visualization with detailed information and customizable display.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ambani Fortnite premium cheat.'
                }
            )
            .setColor('#20B2AA')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ambani Fortnite • External • Advanced Aimbot • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};