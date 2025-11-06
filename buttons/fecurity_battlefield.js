const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_battlefield',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : Battlefield Series (BF 2042/BF5/BF1/BF6)')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 160.250 / $9.50
**7 DAY**   — IDR 597.250 / $35.00
**30 DAY**  — IDR 1.168.000 / $70.00

A premium product for the game Battlefield 2042, Battlefield 1, Battlefield 5 & Battlefield 6 from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Origin & EA
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Hybrid

### 🔥**Advanced Aimbot Features:**

**Main Aimbot:**
• Enable Aimbot toggle
• Aim At Scope (ADS) functionality
• Prediction system
• Aimbot FOV control
• Draw Aimbot FOV circle
• Degree Per Second components
• Vertical/Horizontal Degree per Second
• Target Switch Delay
• Nearest Coefficient
• Visible Only targeting
• Hitbox Priority system
• **Recoil Compensation**
• Multiple Aimbot keys (Primary, Secondary, Toggle)

**Advanced Aimbot:**
• Controllable horizontal & vertical degrees (0 - 30°)
• Changeable FOV (0 - 15°)

**Silent Aimbot:**
• Silent aiming capability
• Changeable FOV (0 - 15°)

### 🔍**Visual ESP Features:**

**Player ESP:**
• Enable toggle
• Enemy only display
• Box ESP
• Outline Box
• Health display
• Skeleton ESP
• Vehicle Visuals
• Maximum Distance control
• Full Player Info (Name, Distance, Weapon)

**Vehicle ESP:**
• Enable toggle
• Enemy only display
• Visible Only Health
• Display Name
• Display Distance
• Maximum Distance control

### ⚙️**Miscellaneous Features:**
• Invisible Opacity control
• Developer Mode
• Menu Key customization
• Menu DPI adjustment
• Force Reload Menu option
• Distance Unit selection (Meters, Feet, Yards, Kilometers)

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of external and internal
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **Multi-Game Support** - BF 2042, BF5, BF1, BF6 compatibility
✅ **Universal Client Support** - Steam, Origin & EA
✅ **Advanced Aimbot** - Prediction, recoil compensation, multiple keys
✅ **Comprehensive ESP** - Players and vehicles
✅ **Professional Quality** - Trusted Fecurity brand
✅ **Full Resolution Support** - Including fullscreen

### 🎮**Perfect For:**
• Players who own multiple Battlefield games
• Competitive players needing advanced aimbot
• Users wanting hybrid technology benefits
• Players who want universal client compatibility
• Streamers requiring StreamProof protection
• Professional tactical operators

### 🎯**Key Features:**
• **Multi-Game Compatibility** - One purchase for 4 Battlefield games
• **Advanced Aimbot** - Prediction, recoil compensation, silent aim
• **Professional ESP** - Complete player and vehicle awareness
• **Hybrid Technology** - External safety with internal performance

---
**Premium hybrid cheat supporting multiple Battlefield games!**`)
            .addFields(
                {
                    name: '`🎮` MULTI-GAME SUPPORT',
                    value: 'One cheat for BF 2042, BF5, BF1, and BF6 - incredible value!'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`🔥` ADVANCED AIMBOT',
                    value: 'Prediction, recoil compensation, silent aim, and multiple key support.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Battlefield series cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Battlefield Series • Hybrid • Multi-Game Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};