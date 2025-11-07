const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'collapse_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏢 Collapse : DBD - Internal Premium Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 154.000 / $9.00
**7 DAY**   — IDR 487.750 / $29.00
**30 DAY**  — IDR 951.250 / $56.00

A premium product for the game Dead By Daylight from Collapse group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Run from Flash Drive:** -
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 👥**ESP (Player) Features:**
• **Killer ESP** - Colored killer identification
• **Survivor ESP** - Colored survivor detection
• **Health Display** - Visual health status
• **Rank Display** - Player rank information
• **Perks Display** - Active perks identification
• **Nickname Display** - Player name tags
• **Character Display** - Character identification
• **Skeleton ESP** - Bone structure visualization
• **Distance Range** - Adjustable detection range

### 🌍**ESP (World) Features:**
• **Totem ESP** - Color, active status, distance display
• **Generator ESP** - Color, active status, repair progress, distance
• **Trap ESP** - Color, active status, armed only, distance
• **Hatch ESP** - Color, active status, current state, distance
• **Window ESP** - Color, active status, distant filtering, distance
• **Pallet ESP** - Color, active status, distant filtering, distance
• **Chest ESP** - Color, active status, closed only, distance
• **Exit ESP** - Color, active status, distance information
• **Breakable Wall ESP** - Color, active status, distance
• **Event ESP** - Color, active status, distance information

### ⚙️**Miscellaneous Features:**
• **Auto Skill Checks** - Automatic skill check completion (bind to spacebar)
• **No Knock** - Prevent knockdown effects
• **Unlock All Skins** - Safe skin unlocking (use at own risk)
• **SpeedHack** - Safe speed modification (use at own risk)
• **SpeedHack Key** - Custom activation binding
• **Speed Percentage** - Adjustable speed multiplier

### 💎**Collapse Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Auto Skill Checks** - Perfect timing on all skill checks
✅ **Comprehensive ESP** - Complete game awareness system
✅ **Skin Unlocker** - Access to all cosmetic content
✅ **Speed Control** - Movement speed modification
✅ **StreamProof** - Safe for content creation
✅ **Multi-Client Support** - Steam & Epic Games compatibility
✅ **Full Resolution Support** - All display modes compatible

### 🎮**Perfect For:**
• Competitive Dead By Daylight players
• Users wanting perfect skill checks
• Skin collectors and enthusiasts
• Streamers requiring safety
• Players who need maximum performance
• Those seeking comprehensive ESP
• Users wanting movement advantages

### 🔪**Dead By Daylight Features:**
• **Asymmetrical Gameplay** - 4v1 horror survival
• **Skill Check System** - Timing-based minigames
• **Generator Repair** - Core survival mechanic
• **Chase Mechanics** - Intense pursuit sequences
• **Cosmetic System** - Extensive character customization

### 🎯**Key Features:**
• **Auto Skill Checks** - Perfect timing on all skill check minigames
• **Comprehensive ESP** - Complete awareness of all game elements
• **Skin Unlocker** - Access to all cosmetic content
• **Internal Performance** - Maximum responsiveness and speed
• **Multi-Client Support** - Full compatibility across platforms
• **StreamSafe Operation** - Content creation friendly

---
**Premium internal cheat with auto skill checks and comprehensive ESP for Dead By Daylight mastery!**`)
            .addFields(
                {
                    name: '`⚡` AUTO SKILL CHECKS',
                    value: 'Perfect automatic timing on all skill check minigames for maximum performance.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete game awareness with players, world objects, and interactive elements.'
                },
                {
                    name: '`🎨` SKIN UNLOCKER',
                    value: 'Access to all cosmetic content with safe unlocking technology.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Collapse DBD premium cheat.'
                }
            )
            .setColor('#DC143C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Collapse DBD • Internal • Auto Skill Checks • Skin Unlocker',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};