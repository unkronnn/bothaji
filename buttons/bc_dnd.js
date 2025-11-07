const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'bc_dnd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚔️ BC : DND - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**30 DAY** — IDR 370.500 / $22.53

A premium product for the game Dark and Darker from BC group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Run from Flash Drive:** Yes
• **Software Type:** External
• **Built-in Spoofer:** -

### 🎯**Aimbot Features:**
• **Aim Toggle** - Enable/disable aimbot
• **Bone Selection** - Target specific bones
• **Aim Key** - Custom aim binding
• **FOV Control** - Adjustable aim field
• **Aim Speed** - Smooth targeting
• **LBM (Left Button Mouse)** - Mouse button support

### 👁️**Visual ESP Features:**

**Players ESP:**
• **Name Display** - Player names
• **Class Display** - Player classes
• **Text Size** - Adjustable text
• **Box ESP** - Bounding boxes
• **Bone ESP** - Skeleton display
• **Health Bars** - Visual health
• **Line ESP** - Snaplines to players
• **Crosshair** - Center indicator

**Monsters ESP:**
• **Monster Names** - Enemy identification
• **Monster Boxes** - Monster boundaries
• **Monster Key** - Important monsters
• **Monster Health** - Health status

**Loot ESP:**
• **Weapon Display** - Weapon locations
• **Armor Display** - Armor pieces
• **Key Display** - Special keys
• **Utility Items** - Useful items
• **Accessories** - Valuable accessories
• **Misc Items** - Various loot
• **Chest Locations** - Treasure chests
• **Ore Deposits** - Mining resources
• **Trap Detection** - Trap locations
• **Plant Locations** - Useful plants

### 📡**Radar Features:**
• **Draw Radar** - Toggle radar display
• **Radar Distance** - Adjustable range
• **Radar Scale** - Size control
• **Players on Radar** - Player positions
• **Monsters on Radar** - Enemy locations
• **Loot on Radar** - Item positions
• **CTRL Key** - Radar controls
• **ALT Key** - Alternative radar functions

### ⚙️**Settings Features:**
• **Menu Keys** - F6 or Home for menu
• **Easy Configuration** - User-friendly interface

### 💎**BC Advantages:**
✅ **External Technology** - Maximum security
✅ **StreamProof** - Complete streaming safety
✅ **Flash Drive Compatible** - Portable operation
✅ **Multi-Client Support** - Steam & Official Launcher
✅ **Aimbot System** - Precise targeting
✅ **Comprehensive ESP** - Players, monsters, and loot
✅ **Advanced Radar** - Complete situational awareness
✅ **Full Loot System** - All item types covered

### 🎮**Perfect For:**
• Competitive dungeon crawlers
• Players wanting aimbot functionality
• Loot collection specialists
• Streamers requiring safety
• Users preferring external security
• Players who want portable operation
• Those needing comprehensive radar

### ⚔️**Dark and Darker Features:**
• **Dungeon Extraction** - Risk vs reward gameplay
• **Medieval Combat** - Fantasy weapons and magic
• **Team Strategy** - Squad coordination
• **Resource Competition** - Limited loot availability
• **PvPvE Elements** - Complex combat scenarios

### 🎯**Key Features:**
• **Precise Aimbot** - Advanced targeting with bone selection
• **Complete ESP Suite** - Players, monsters, and comprehensive loot
• **Advanced Radar** - Full situational awareness
• **External Security** - Maximum safety and stability
• **Multi-Launcher Support** - Steam & Official compatibility
• **Portable Operation** - Flash drive ready

---
**Premium external cheat for Dark and Darker extraction mastery!**`)
            .addFields(
                {
                    name: '`🎯` PRECISE AIMBOT',
                    value: 'Advanced targeting system with bone selection and FOV control.'
                },
                {
                    name: '`💎` COMPREHENSIVE LOOT ESP',
                    value: 'Complete loot detection system covering all item types and resources.'
                },
                {
                    name: '`📡` ADVANCED RADAR',
                    value: 'Full radar system with players, monsters, and loot positioning.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC DND premium cheat.'
                }
            )
            .setColor('#E74C3C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC DND • External • Aimbot & ESP • Full Loot System',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};