const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : Arena Breakout: Infinite')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 108.500 / $6.00
**7 DAY**   — IDR 632.000 / $35.00
**30 DAY**  — IDR 1.303.750 / $75.00

A premium product for the game Arena Breakout: Infinite from Fecurity group.

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
• **Game Client:** Steam
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Hybrid

### 🔥**Premium Feature List:**

**Aimbot Features:**
• Enable Aimbot toggle
• Aim at shoot functionality
• Visibility check
• Enemy only targeting
• Changeable FOV (0 - 15°)
• **Recoil compensation**
• Draw FOV circle
• Unique hitbox system

**Visual ESP (Player):**
• Enable/disable checkbox
• Enemy only display
• Box ESP
• Box outline
• Health display
• Shield display
• Skeleton ESP
• Maximum distance control
• Player info (nickname, distance, weapon)

**Visual ESP (Loot):**
• Enable/disable checkbox
• Maximum distance setting
• Loot ESP keybind
• Item detection and display

**Miscellaneous Features:**
• Different distance units (meters, yards, feet)
• Unit conversion for international users

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of external and internal
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **StreamProof** - Safe for streaming
✅ **Full Resolution Support** - Including fullscreen
✅ **Premium Brand** - Trusted Fecurity quality
✅ **Recoil Compensation** - Advanced weapon control
✅ **Universal Distance Units** - International user friendly
✅ **Unique Hitbox System** - Advanced targeting precision

### 🎮**Perfect For:**
• Users wanting hybrid technology
• Competitive players needing recoil control
• Streamers requiring StreamProof protection
• Players who want fullscreen support
• International users (unit options)
• Those who want premium quality
• Users needing advanced hitbox precision

### 🎯**Key Features:**
• **Hybrid Performance** - Combines external safety with internal power
• **Advanced Aimbot** - Recoil compensation and unique hitbox system
• **Player ESP** - Comprehensive battlefield awareness
• **Loot ESP** - Item detection with keybind control
• **Professional Quality** - Trusted Fecurity brand reliability

---
**Premium hybrid cheat with built-in protection!**`)
            .addFields(
                {
                    name: '`🛡️` HYBRID TECHNOLOGY',
                    value: 'Combines external safety with internal performance for the best experience.'
                },
                {
                    name: '`⚠️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`🎯` UNIQUE HITBOX',
                    value: 'Advanced hitbox system for superior targeting precision.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Arena Breakout cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Arena Breakout: Infinite • Premium Hybrid Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};