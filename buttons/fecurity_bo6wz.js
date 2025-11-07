const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_bo6wz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Fecurity : BO6 / BO7 / MW3 / WZ - Premium Hybrid Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**3 DAY**   — IDR 160.250 / $9.50
**7 DAY**   — IDR 221.500 / $13.00
**30 DAY**  — IDR 498.750 / $30.00
**90 DAY**  — IDR 1.080.500 / $65.00

A premium product for COD BO6 / BO7 / MW3 / WZ from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Games Supported:** COD BO6 / BO7 / MW3 / WZ (AIO Bundle)
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Battle.Net & Xbox Game Pass
• **Software Type:** Hybrid
• **Built-in Spoofer:** Yes (FREE!)

### 🔥**Advanced Aimbot Features:**

**Aimbot System:**
• Enable Aimbot toggle
• **Aim at Shoot** - Reactive aiming on fire
• **Aim at Scope** - Automatic aiming when scoping
• **Visible Only** - Target only visible enemies
• **Draw FOV** - Visual field of view indicator
• **Gamepad Support** - Console controller compatibility
• **Prediction System** - Advanced bullet prediction
• **Ignore Knocked Targets** - Smart target filtering
• **Target Switch Delay** - Strategic target management

**EASY Mode Aimbot:**
• Controllable horizontal & vertical degrees per second (0-30°)
• Setupable FOV (0-15°)
• Perfect for beginners

**PRO Mode (Graph-Based Aimbot):**
• Dynamic FOV based on distance to target
• Time-based FOV changes with aim duration
• Distance-based degrees per second adjustment
• Time-based aim control customization

### 🔍**Visual ESP Features:**

**Player ESP:**
• General ESP with enable toggle
• Enemy only filtering
• Box ESP with multiple styles
• OOV Indicators (Out of View indicators)
• Health display system
• Shield visualization
• Skeleton ESP with thickness control
• Complete Player Info (Nickname, distance, weapon, ping, kills, rank)

**Glow ESP:**
• Enable Glow toggle
• Fill Glow options
• Visibility check system
• Glow thickness control
• Multiple Types: Default, Textured, Thermal, Noisy

### 💎**Loot System:**
• Enable Loot ESP
• Distance indicator for all items
• **Complete Categories:** Other, Ammo, Weapon, Armor, Money, Self, Booster, Gas Mask, Killstreak, Tactical, Nades, Usable, Modification, Contract, Perk, Container, Market Station, Exchanger
• **Full Customization:** Name, underlining, icon, in-game name color, in-game distance color
• **Keybind Support** for loot visibility

### ⚙️**Developer Mode:**
• **Disable Anti-Screenshot** - Complete protection
• **DOT 1 & DOT 2** - Advanced developer tools
• **STAB** - Stability enhancements
• **Velocity Up-rate** - Performance optimization
• **Cache Delay** - Memory management
• **Dump Image** - Debug capabilities
• **Force Reset** - Quick system reset

### 🎯**Miscellaneous Features:**
• **Custom Clantag** - Personalized clan tags
• **No-Recoil** - Zero weapon recoil
• **Distance Unit Selection** (Feet, Yard, Meter)

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Maximum performance combining safety with power
✅ **AIO Bundle** - Multiple games with one subscription
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **Advanced Aimbot** - Both EASY and PRO modes
✅ **Graph-Based System** - Professional-grade aim control
✅ **Complete ESP Suite** - Player, Glow, and Loot ESP
✅ **Developer Mode** - Professional customization tools
✅ **Multi-Client Support** - Steam, Battle.net, Xbox Game Pass
✅ **Full Resolution Support** - Including fullscreen
✅ **Gamepad Compatibility** - Console controller support

### 🎮**Perfect For:**
• Competitive Call of Duty players
• Multi-game enthusiasts (MW3, BO6, BO7, WZ)
• Players wanting professional-grade features
• Streamers requiring complete StreamProof protection
• Users who need advanced loot detection
• Competitive operators needing tactical advantage
• Players wanting hybrid technology benefits

### 🏆**Call of Duty Excellence:**
• **Multiple Title Support** - Latest COD games covered
• **AIO Convenience** - One product for multiple games
• **Advanced Warfare** - Modern combat systems
• **Professional Features** - Developer mode and customization
• **Complete Protection** - Built-in spoofer and anti-screenshot

---
**Ultimate hybrid cheat for Call of Duty domination!**`)
            .addFields(
                {
                    name: '`🎯` PRO MODE AIMBOT',
                    value: 'Graph-based aimbot with dynamic FOV and precision control.'
                },
                {
                    name: '`💎` AIO BUNDLE',
                    value: 'Multiple Call of Duty games with one subscription.'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity BO6/WZ premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity BO6/WZ • Hybrid • AIO Bundle • Professional Grade',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};