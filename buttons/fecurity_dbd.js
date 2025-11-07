const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : DBD - Hybrid Spoofer Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 290.250 / $17.00
**30 DAY**  — IDR 582.750 / $35.00

A premium product for the game Dead By Daylight from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Run from Flash Drive:** -
• **Software Type:** Hybrid
• **Built-in Spoofer:** Yes

### 👥**Visual (Players) Features:**
• **Box ESP** - Bounding box display around players
• **Health Display** - Visual health status indicators
• **Level Display** - Player level information
• **Nickname Display** - Player name identification
• **Skeleton ESP** - Bone structure visualization
• **Distance Display** - Range information to players

### 👁️**Visual (Misc) Features:**
• **Active Display** - Toggle miscellaneous visual features
• **Distance Display** - Range information for objects
• **Categories ESP** - Multiple object categories:
  - Totem detection
  - Generator status
  - Hatch location
  - Trap positions
  - Window states
  - Pallet locations
  - Chest contents
  - Exit information
  - Breakable wall status
  - Item detection

### ⚙️**Miscellaneous Features:**
• **Auto Skill Checks** - Automatic skill check completion
• **Force Disable Skill Checks** - Complete skill check bypass
• **Trap Immunity** - Protection from trap effects

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of internal and external features
✅ **Built-in Spoofer** - Complete protection suite
✅ **Auto Skill Checks** - Perfect timing on all minigames
✅ **Trap Immunity** - Protection from trap mechanics
✅ **Comprehensive ESP** - Players and world object detection
✅ **StreamProof** - Safe for content creation
✅ **Multi-Client Support** - Steam & Epic Games compatibility
✅ **Category Filtering** - Organized ESP system

### 🎮**Perfect For:**
• Players wanting maximum protection
• Users who need auto skill checks
• Trap-immunity seekers
• Streamers requiring safety
• Players preferring hybrid technology
• Those needing comprehensive ESP
• Users seeking spoofer protection

### 🔪**Dead By Daylight Features:**
• **4v1 Asymmetrical** - Team survival vs killer
• **Skill Check Mechanics** - Timing-based interactions
• **Trap System** - Killer placed hazards
• **Generator Repair** - Core objective system
• **Escape Mechanics** - Multiple exit strategies

### 🎯**Key Features:**
• **Hybrid Technology** - Advanced system combining best features
• **Built-in Spoofer** - Complete protection integration
• **Auto Skill Checks** - Perfect timing on skill check minigames
• **Trap Immunity** - Protection from all trap types
• **Comprehensive ESP** - Complete game awareness system
• **Multi-Client Support** - Full platform compatibility

---
**Hybrid cheat with built-in spoofer and auto skill checks for maximum Dead By Daylight protection!**`)
            .addFields(
                {
                    name: '`🛡️` HYBRID TECHNOLOGY',
                    value: 'Advanced system combining the best of internal and external features with spoofer protection.'
                },
                {
                    name: '`⚡` AUTO SKILL CHECKS',
                    value: 'Perfect automatic timing on all skill check minigames with optional force disable.'
                },
                {
                    name: '`🔒` TRAP IMMUNITY',
                    value: 'Complete protection from trap effects and hazards for enhanced survivability.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity DBD premium cheat.'
                }
            )
            .setColor('#9B59B6')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity DBD • Hybrid • Built-in Spoofer • Auto Skill Checks',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};