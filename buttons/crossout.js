const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crossout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🚗 BC : CrossOut - Premium Internal Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY** — IDR 227.000 / $13.80

A premium product for the game CrossOut from BC group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** -
• **Game Client:** Steam
• **Run from Flash Drive:** Yes
• **Software Type:** Internal

### 🎯**Aimbot Features:**

**Aimbot System:**
• Enable Aimbot toggle
• **Lock Target** - Automatic target locking
• **Dynamic FOV** - Adjustable field of view
• **Draw FOV** - Visual FOV indicator
• **FOV Slider** - Precise FOV control
• **Smooth X** - Horizontal smoothing
• **Smooth Y** - Vertical smoothing

### 🔍**ESP Features:**
• Enable ESP toggle
• **Bounding Box** - Visual boxes around opponents
• **Box Type** - Different box styles
• **Box Thickness** - Adjustable line thickness
• **Box Rounding** - Rounded corner options
• **Box Background** - Background fill options
• **Box Line** - Line style customization
• **Health Bar** - Visual health indicators
• **Distance Display** - Show distance to enemies
• **Name Display** - Show player names

### 📡**Radar Features:**
• Enable Radar toggle
• **Radar Type** - Different radar styles
• **Position X** - Horizontal positioning
• **Position Y** - Vertical positioning
• **Size Control** - Adjustable radar size
• **Distance Range** - Maximum radar range
• **Point Clamp** - Radar point positioning
• **Point Type** - Different point styles
• **Point Size** - Adjustable point size

### ⚙️**Settings Features:**
• **Menu Key** - Insert key for menu
• **Panic Key** - Emergency disable key
• **Language Options** - Multiple language support

### 💎**BC Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Steam Client Support** - Full Steam compatibility
✅ **Flash Drive Compatible** - Portable operation
✅ **Advanced Aimbot** - Comprehensive targeting features
✅ **Rich ESP System** - Detailed visual information
✅ **Customizable Radar** - Full radar control
✅ **Multi-OS Support** - Wide compatibility range
✅ **Flexible BIOS** - UEFI & Legacy support

### 🎮**Perfect For:**
• Vehicular combat enthusiasts
• Post-apocalyptic battle builders
• Players who craft custom war machines
• Competitive CrossOut participants
• Users who prefer internal performance
• Players needing comprehensive features
• Those who want portable operation

### 🚗**CrossOut Features:**
• **Vehicle Building** - Create custom battle machines
• **Post-Apocalyptic Setting** - Wasteland combat environment
• **Crafting System** - Build from interchangeable parts
• **MMO Action** - Large-scale multiplayer battles
• **Customization** - Unique war machine designs

### 🎯**Key Features:**
• **Dynamic Aimbot** - Advanced targeting with FOV control
• **Comprehensive ESP** - Full visual information system
• **Custom Radar** - Complete radar customization
• **Internal Performance** - Maximum responsiveness
• **Multi-Platform Support** - Wide system compatibility
• **Portable Operation** - Flash drive support

---
**Premium internal cheat for CrossOut vehicular domination!**`)
            .addFields(
                {
                    name: '`🎯` DYNAMIC AIMBOT',
                    value: 'Advanced targeting system with FOV control and smoothing.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Full visual information system with customizable display options.'
                },
                {
                    name: '`📡` CUSTOM RADAR',
                    value: 'Complete radar system with positioning and style controls.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC CrossOut premium cheat.'
                }
            )
            .setColor('#FF6B35')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC CrossOut • Internal • Vehicular Combat • Full Feature Set',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};