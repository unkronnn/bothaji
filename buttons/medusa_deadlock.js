const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'medusa_deadlock',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐍 Medusa : Deadlock - Advanced External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 17.750 / $1.00
**7 DAY**   — IDR 71.250 / $4.00
**30 DAY**  — IDR 145.750 / $8.50

A premium product for the game Deadlock from Medusa group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD (Xeon & FX Processors)
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🎯**Aim Features:**
• **Enable** - Key binding activation
• **Smooth** - Natural movement simulation
• **Radius** - Adjustable aim area
• **Max Distance** - Range limitation control
• **Bone Selection** - Head/Pelvis targeting
• **Line to Target** - Solid/Gradient with custom color
• **Radius Style** - Solid/Gradient with custom color
• **Filled Radius Style** - Solid/Gradient with custom color

### 👁️**Visual Features:**
• **Box Style** - Corners & Outline, Corners, Box & Outline, Box (custom color)
• **Filled Box Style** - Solid/Gradient with custom color
• **Health Bar Style** - Solid/Gradient with custom color
• **HP Text** - Customizable health text color
• **Player Information** - Name, Distance with custom color
• **Line Style** - Solid/Gradient with custom color
• **Max Distance** - Adjustable rendering range

### 🔧**Config Features:**
• **List** - View all configurations
• **Add** - Create new configs
• **Save** - Save current settings
• **Load** - Load saved configurations
• **Rename** - Rename configurations
• **Delete** - Remove configs
• **Default Auto-load** - Auto-load favorite config
• **Export** - Export configurations
• **Export All** - Backup all configs
• **Import** - Import configurations
• **Reset Settings** - Restore defaults

### ⚙️**Settings Features:**
• **Menu Key** - Custom menu binding
• **Panic Key** - Emergency disable
• **Battle Modes Key** - Combat mode toggle
• **Primary Color** - Theme color selection
• **Style** - Solid/Gradient themes
• **Theme** - Dark/Light interface
• **DPI Scale** - 100-150% interface scaling
• **Language** - English/Russian/Chinese
• **Watermark** - Icon/Text watermark options
• **Save/Load** - Quick settings management

### 💎**Medusa Advantages:**
✅ **Advanced External Technology** - Maximum security and stability
✅ **Extensive Customization** - Complete visual personalization
✅ **Professional Config System** - Advanced profile management
✅ **Multi-Language Support** - International accessibility
✅ **Advanced Aimbot** - Professional targeting features
✅ **Visual Customization** - Complete style control
✅ **Battle Mode** - Combat-optimized settings
✅ **Professional Interface** - Advanced UI customization

### 🎮**Perfect For:**
• Professional Deadlock players
• Users wanting maximum customization
• International players
• Streamers requiring safety
• Those seeking advanced features
• Players needing professional tools
• Users who want complete control

### 🔮**Deadlock Features:**
• **Hero-Based Combat** - Unique character abilities
• **Fast-Paced Action** - Quick reflex gameplay
• **Team Coordination** - Strategic 6v6 battles
• **Ability Combos** - Special power combinations
• **Competitive Matches** - Ranked gameplay system

### 🎯**Key Features:**
• **Professional Customization** - Complete visual and style control
• **Advanced Config System** - Professional profile management
• **Multi-Language Support** - International accessibility
• **External Security** - Maximum stability and safety
• **Advanced Aimbot** - Professional targeting features
• **Battle Optimization** - Combat-ready features

---
**Advanced external cheat with extensive customization and professional config system for Deadlock!**`)
            .addFields(
                {
                    name: '`🎨` EXTENSIVE CUSTOMIZATION',
                    value: 'Complete visual and style control with advanced color and theme options.'
                },
                {
                    name: '`⚙️` PROFESSIONAL CONFIGS',
                    value: 'Advanced profile management with export/import and multi-language support.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with bone selection and custom styles.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Medusa Deadlock premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Medusa Deadlock • External • Advanced Customization • Professional Configs',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};