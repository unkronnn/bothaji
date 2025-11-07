const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'byster_deadlock',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 Byster : Deadlock - Internal PSilent Aimbot Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 68.000 / $4.00
**7 DAY**   — IDR 232.750 / $13.00
**30 DAY**  — IDR 441.250 / $26.00

A premium product for the game Deadlock from Byster group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 🎯**Aimbot Features:**
• **Enable PSilent** - Toggle PSilent aimbot mode
• **AIM Button** - Custom aimbot activation binding
• **Memory Aimbot** - Advanced memory-based targeting
• **Bone Selector** - Target specific bones
• **Target Lock on Aim (Player)** - Player targeting lock
• **Target Lock on Aim (Souls)** - Soul entity targeting
• **Magic Bullet** - Bullet trajectory manipulation
• **Draw FOV** - Visual field of view indicator
• **FOV Control** - Adjustable aimbot radius
• **Targeting Souls** - Soul entity targeting system

### 👁️**Visual Features:**
• **Enable ESP** - Toggle ESP functionality
• **Snaplines** - Visual lines to targets
• **Show HP** - Health status display
• **Show LVL** - Level information display
• **Show Skeletons** - Bone structure visualization
• **Show Distance** - Range information display
• **Show Hero Name** - Hero identification
• **Show Player Name** - Player name tags
• **Show Box** - Bounding box display
• **Chams** - Colorful character models
• **FPS Indicator** - Performance monitoring

### ⚙️**Miscellaneous Features:**
• **Save Configs** - Configuration management
• **Load Config** - Load saved settings
• **Reset Config** - Restore default settings
• **Menu Binding** - Custom menu opening key
• **Menu Display** - Click or Hold menu options
• **Custom Scaling** - 2K and 4K monitor support

### 💎**Byster Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **PSilent Aimbot** - Advanced invisible targeting
✅ **Magic Bullet** - Bullet manipulation technology
✅ **Memory Aimbot** - Advanced memory-based targeting
✅ **Comprehensive ESP** - Complete game awareness
✅ **4K Support** - High-resolution monitor compatibility
✅ **Config Management** - Save/load system
✅ **Performance Monitor** - FPS tracking included

### 🎮**Perfect For:**
• Competitive Deadlock players
• Users wanting PSilent technology
• Players with high-end monitors
 Those seeking advanced targeting
• Users wanting maximum performance
• Competitive gamers
• Players who need comprehensive ESP

### 🔮**Deadlock Features:**
• **Hero-Based Combat** - Unique character abilities
• **Fast-Paced Action** - Quick reflex gameplay
• **Target Acquisition** - Quick targeting needed
• **High Graphics** - Visual intensive game
• **Competitive Matches** - Ranked gameplay

### 🎯**Key Features:**
• **PSilent Aimbot** - Advanced invisible targeting technology
• **Magic Bullet** - Bullet trajectory manipulation
• **Memory Aimbot** - Advanced memory-based targeting system
• **Internal Performance** - Maximum responsiveness
• **4K Support** - High-resolution compatibility
• **Comprehensive ESP** - Complete game awareness

---
**Internal cheat with PSilent aimbot and magic bullet technology for ultimate Deadlock performance!**`)
            .addFields(
                {
                    name: '`🔇` PSILENT AIMBOT',
                    value: 'Advanced invisible targeting technology with memory-based precision.'
                },
                {
                    name: '`🪄` MAGIC BULLET',
                    value: 'Bullet trajectory manipulation for guaranteed hits and advanced control.'
                },
                {
                    name: '`⚡` INTERNAL PERFORMANCE',
                    value: 'Maximum responsiveness with 4K support and performance monitoring.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Byster Deadlock premium cheat.'
                }
            )
            .setColor('#20B2AA')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Byster Deadlock • Internal • PSilent Aimbot • Magic Bullet',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};