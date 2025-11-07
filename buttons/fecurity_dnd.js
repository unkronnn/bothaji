const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_dnd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚔️ Fecurity : DND - Premium Hybrid Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 60.000 / $3.50
**3 DAY**   — IDR 102.500 / $6.00
**7 DAY**   — IDR 136.750 / $8.00
**30 DAY**  — IDR 249.750 / $15.00
**90 DAY**  — IDR 499.500 / $30.00

A premium product for the game Dark and Darker from Fecurity group.

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
• **Game Client:** Steam & DND Launcher
• **Run from Flash Drive:** -
• **Software Type:** Hybrid
• **Built-in Spoofer:** Yes

### 👁️**Visual Features:**
• Enable Visual toggle
• **Enemy Only** - Show enemies only
• **Bounding Box** - 2D box display
• **Box Outline** - Box outline styles
• **Skeleton ESP** - Bone structure display
• **Skeleton Thickness** - Adjustable bone thickness
• **Health Display** - Visual health bars
• **Shield Display** - Shield status
• **Players** - Show all players
• **Monsters** - Monster ESP
• **Portals** - Portal locations
• **Ores** - Mining resource locations
• **Traps** - Trap detection
• **Chests** - Chest locations
• **Items** - Item ESP
• **Player Info** - Nickname, Weapon, Distance

### ⚙️**Miscellaneous Features:**
• **Override FOV** - Custom field of view
• **Add FOV** - Additional FOV adjustment
• **Invisible Opacity** - Transparency settings
• **Developer Mode** - Advanced options
• **Menu DPI** - Interface scaling
• **Menu Key** - Custom menu binding
• **Force Reload** - Quick reload option
• **Distance Unit** - Meters, Feet, Yards, Kilometers

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Maximum performance and security
✅ **Built-in Spoofer** - Complete protection
✅ **Multi-Client Support** - Steam & DND Launcher
✅ **StreamProof** - Safe for streaming
✅ **Comprehensive ESP** - Full visual information
✅ **Rich Feature Set** - Extensive customization
✅ **Flexible Pricing** - Multiple duration options
✅ **Multi-OS Support** - Latest Windows compatibility

### 🎮**Perfect For:**
• Dungeon extraction enthusiasts
• Players wanting comprehensive ESP
• Users who need built-in protection
• Streamers requiring safety
• Players who want maximum features
• Users preferring hybrid technology
• Those needing flexible pricing options

### ⚔️**Dark and Darker Features:**
• **Dungeon Extraction** - Hardcore looting gameplay
• **Class System** - Different character classes
• **PvPvE Combat** - Players vs Players vs Environment
• **Medieval Setting** - Fantasy dungeon environment
• **Team Strategy** - Squad-based gameplay

### 🎯**Key Features:**
• **Full ESP Suite** - Complete visual information
• **Multi-Object Detection** - Players, monsters, items, traps
• **Hybrid Technology** - Best of internal/external
• **Built-in Spoofer** - Comprehensive protection
• **Multi-Launcher Support** - Steam & DND compatibility
• **Extensive Customization** - Detailed control options

---
**Premium hybrid cheat for Dark and Darker dungeon mastery!**`)
            .addFields(
                {
                    name: '`🛡️` HYBRID TECHNOLOGY',
                    value: 'Advanced hybrid system combining best features with built-in spoofer protection.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete visual system with multi-object detection and detailed information.'
                },
                {
                    name: '`🔧` EXTENSIVE CUSTOMIZATION',
                    value: 'Rich feature set with extensive control and personalization options.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity DND premium cheat.'
                }
            )
            .setColor('#9B59B6')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity DND • Hybrid • Built-in Spoofer • Full Feature Set',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};