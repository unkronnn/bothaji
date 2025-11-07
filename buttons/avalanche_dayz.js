const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'avalanche_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🧟 Avalanche : DayZ - Premium Internal Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 63.500 / $3.50
**3 DAY**   — IDR 126.750 / $7.00
**7 DAY**   — IDR 253.500 / $14.00
**30 DAY**  — IDR 523.250 / $30.00

A premium product for the game DayZ from Avalanche group.

### 💻**System Compatibility:**
• **Processors:** Intel
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** Yes
• **Software Type:** Internal
• **Built-in Spoofer:** Yes

### 👁️**ESP Features:**
• **Player ESP** - Distance, Skeleton, Weapon display
• **Zombie ESP** - Distance, Skeleton detection
• **Item ESP** - Distance display with filtering
• **Other ESP** - Cars, Animals, Corpses detection
• **Combat Mode** - Hotkey to toggle Item ESP

### 🎯**Aimbot Features:**
• **Crosshair** - Custom crosshair display
• **Silent Aimbot** - Invisible aiming assistance
• **Randomize Hit Bone** - Unpredictable targeting
• **Magic Bullet** - Bullet trajectory manipulation
• **Legit Silent** - Legitimate silent aim mode
• **Fat Bullet** - Enhanced bullet effectiveness

### ⚙️**Miscellaneous Features:**
• **No Recoil** - Remove weapon recoil completely
• **FreeCam** - Free camera movement
• **NoClip** - Walk through walls and objects
• **Always Day** - Permanent daylight mode
• **No Sway** - Remove weapon sway
• **Bullet Drop** - Compensate bullet drop
• **Integrated Map** - Map showing players
• **Unfiltered Items** - Show all items regardless of filter

### 📡**Radar Features:**
• **Players** - Player positions on radar
• **Zombies** - Zombie locations
• **Scavs** - Scavenger positions
• **Distance** - Range indicators
• **Size** - Adjustable radar size

### ⚙️**Settings Features:**
• **Config System** - Configuration management with guide

### 💎**Avalanche Advantages:**
✅ **Internal Technology** - Maximum performance
✅ **Built-in Spoofer** - Complete protection
✅ **Flash Drive Compatible** - Portable operation
✅ **StreamProof** - Safe for content creation
✅ **No Recoil & NoClip** - Essential survival features
✅ **Magic Bullets** - Advanced combat advantages
✅ **Comprehensive ESP** - Full situational awareness
✅ **Config System** - Easy profile management

### 🎮**Perfect For:**
• Hardcore survival enthusiasts
• Players wanting maximum performance
• Streamers requiring safety
• Users who need built-in protection
• Players wanting portable operation
• Those seeking advanced combat features
• Users who prefer internal technology

### 🧟**DayZ Features:**
• **Open World Survival** - Massive post-soviet landscape
• **PvPvE Combat** - Players vs zombies vs environment
• **Loot Economy** - Scarcity drives survival
• **Base Building** - Construct shelters and defenses
• **Vehicle Mechanics** - Repair and drive vehicles

### 🎯**Key Features:**
• **Internal Performance** - Maximum responsiveness
• **Built-in Spoofer** - Complete protection suite
• **NoClip & FreeCam** - Ultimate movement freedom
• **Magic Bullets** - Advanced combat manipulation
• **Comprehensive Radar** - Full tactical awareness
• **Config Management** - Easy profile switching

---
**Premium internal cheat for DayZ survival mastery with ultimate freedom!**`)
            .addFields(
                {
                    name: '`⚡` INTERNAL PERFORMANCE',
                    value: 'Maximum responsiveness and performance with internal technology.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite with integrated spoofer technology.'
                },
                {
                    name: '`🌟` ULTIMATE FEATURES',
                    value: 'NoClip, FreeCam, Magic Bullets, and Always Day for total control.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Avalanche DayZ premium cheat.'
                }
            )
            .setColor('#00BFFF')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Avalanche DayZ • Internal • Built-in Spoofer • Ultimate Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};