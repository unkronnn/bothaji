const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔫 SMG : DBD - External Aimbot Advanced Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 64.500 / $3.50
**7 DAY**   — IDR 184.000 / $11.00
**30 DAY**  — IDR 359.000 / $21.00

A premium product for the game Dead By Daylight from SMG group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🎯**Aimbot Features:**
• **Enable Aimbot** - Button selection for activation
• **Auto Switch** - Automatic target switching
• **Custom Prediction** - Projectile speed compensation
• **Visible Check** - Line of sight verification
• **Field of View (FOV)** - Adjustable aim area
• **Smooth** - Natural movement simulation
• **Maximum Distance** - Range limitation control
• **Show Radius** - Visual FOV indicator
• **Show Crosshair** - Custom reticle display
• **Bone Selection** - Target specific bones:
  - Head, Neck, Body, Pelvis, Knee, Hand

### 👁️**Visuals Features:**
• **Settings Mode** - Players/Hunter configuration
• **Box Mode** - Color selection + regular/corner styles
• **Box Visible State** - Color selection for visibility
• **Filled Boxes** - Color selection for solid fills
• **Name Display** - Color selection + additional settings
• **Skeleton ESP** - Color selection + additional settings
• **Distance Display** - Color selection + additional settings
• **Visible State** - Color selection + additional settings
• **Maximum Distance** - Render range control

### 🌍**World Features:**
• **Generator ESP** - Color selection + additional settings
• **Escape Door ESP** - Color selection + additional settings
• **Hatch ESP** - Color selection + additional settings
• **Totem ESP** - Color selection + additional settings
• **Traps ESP** - Color selection + additional settings
• **Meat Hook ESP** - Color selection + additional settings
• **Lockers ESP** - Color selection + additional settings
• **Pallets ESP** - Color selection + additional settings
• **Windows ESP** - Color selection + additional settings
• **Zombies ESP** - Color selection + additional settings

### ⚙️**Miscellaneous Features:**
• **Skill Check** - Off/Skip completely/Tap to timing
• **FOV Changer** - Custom field of view adjustment

### ⚙️**Settings Features:**
• **Save/Load/Reset Settings** - Configuration management
• **Font Name/Size** - Text customization options
• **Change/Reset Font** - Font management system
• **Menu Button** - Custom menu binding
• **Panic Button** - Emergency disable key

### 💎**SMG Advantages:**
✅ **Advanced Aimbot** - Professional targeting system with prediction
✅ **Visual Customization** - Extensive color and style options
✅ **External Security** - Maximum stability and safety
✅ **Built-in Spoofer** - Complete protection suite
✅ **Comprehensive ESP** - Players, objects, and world awareness
✅ **StreamProof** - Safe for content creation
✅ **Config Management** - Save and load custom settings
✅ **Font Customization** - Personalized text display

### 🎮**Perfect For:**
• Players wanting advanced aimbot functionality
• Users seeking extensive customization
• Streamers requiring safety and protection
• Players who need comprehensive ESP
• Those who prefer external stability
• Users wanting detailed control options
• Players seeking professional features

### 🔪**Dead By Daylight Features:**
• **Skill Check System** - Timing-based interactions
• **Projectile Mechanics** - Ranged killer abilities
• **Visual Clarity** - Important for tracking
• **Customization** - Personal interface options
• **Competitive Play** - Advanced techniques

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with prediction and bone selection
• **Visual Customization** - Extensive color and style personalization
• **Built-in Spoofer** - Complete protection integration
• **Comprehensive ESP** - Complete game awareness system
• **External Security** - Maximum stability and safety
• **Config Management** - Professional settings control

---
**External cheat with advanced aimbot and extensive customization for professional Dead By Daylight gameplay!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with prediction, FOV control, and multi-bone selection.'
                },
                {
                    name: '`🎨` VISUAL CUSTOMIZATION',
                    value: 'Extensive color and style personalization for all ESP elements and interface.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security and safety.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG DBD premium cheat.'
                }
            )
            .setColor('#FF6347')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG DBD • External • Advanced Aimbot • Visual Customization',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};