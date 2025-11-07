const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_fragpunk',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : FragPunk - Hybrid with Unique Hitbox & Built-in Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 72.250 / $4.00
**3 DAY**   — IDR 90.500 / $5.00
**7 DAY**   — IDR 180.750 / $10.00
**30 DAY**  — IDR 347.750 / $20.00
**90 DAY**  — IDR 956.000 / $55.00

A premium product for the game FragPunk from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **AIO/Bundle Support:** FragPunk & COD BO6/MW3/MW2/MW1
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** Hybrid

### 🎯**Advanced Aimbot Features:**
• **Aimbot Toggle** - Enable/disable functionality
• **Aim at Shoot** - Optimized shot timing
• **Aim at Scope** - Scoped targeting enhancement
• **Visible Only** - Target verification system
• **Draw FOV** - Visual field indicator
• **Prediction System** - Movement calculation
• **Target Switch Delay** - Switch timing control
• **Unique Hitbox System** - Absolutely unique targeting technology

### 👁️**Visual Player ESP:**
• **Player ESP** - Complete player visualization
• **Player Box** - Bounding box display
• **Player Enemy Check** - Hostile identification
• **Enhanced Visible Check** - Advanced visibility detection
• **Player Health** - Health status display
• **Player Armor** - Protection level indication
• **Player Name** - Enemy identification
• **Player Skeleton** - Bone structure visualization
• **Player Distance** - Range calculation

### 🛡️**Fecurity Advantages:**
✅ **Unique Hitbox System** - Absolutely unique targeting technology
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Hybrid Technology** - Advanced external/internal design
✅ **AIO Bundle Support** - Multiple game compatibility
✅ **Stream Protection** - Content creator safe
✅ **Enhanced Visibility** - Advanced detection systems
✅ **Premium Features** - High-end functionality

### 💥**Perfect For:**
• Players seeking unique targeting technology
• Users requiring built-in spoofer protection
• Multi-game enthusiasts (AIO bundle)
• Streamers needing safety features
• Competitive players requiring precision
• Users wanting hybrid technology
• Those seeking premium quality

### 🎮**FragPunk Features:**
• **Fast-paced Combat** - Intense FPS battles
• **Multiplayer Modes** - Various gameplay options
• **Weapon Variety** - Diverse arsenal
• **Strategic Gameplay** - Tactical combat
• **Character Customization** - Player personalization

### 🎯**Key Features:**
• **Unique Hitbox System** - Absolutely unique targeting technology unavailable elsewhere
• **Built-in Spoofer** - Complete hardware protection system included
• **AIO Bundle Support** - Compatibility with multiple COD games and FragPunk
• **Hybrid Technology** - Advanced design combining external and internal benefits

---
**Hybrid cheat with unique hitbox system, built-in spoofer, and AIO bundle support for complete FragPunk and COD gaming dominance!**`)
            .addFields(
                {
                    name: '`🎯` UNIQUE HITBOX SYSTEM',
                    value: 'Absolutely unique targeting technology providing precision unavailable in other cheats.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security and safety.'
                },
                {
                    name: '`🎮` AIO BUNDLE SUPPORT',
                    value: 'Multi-game compatibility supporting FragPunk and COD BO6/MW3/MW2/MW1 in one package.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity FragPunk premium cheat.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity FragPunk • Hybrid • Unique Hitbox • AIO Bundle',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};