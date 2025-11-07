const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔨 Mason : Counter Strike 2 - Most Affordable External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 28.250 / $1.50
**7 DAY**   — IDR 66.500 / $4.00
**30 DAY**  — IDR 103.750 / $6.00

A premium product for Counter Strike 2 from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**Advanced Aimbot Features:**

**Smart Aimbot System:**
• **Enable Toggle** - Activate/deactivate aimbot functionality
• **Weapon Selection** - Individual weapon configuration
• **Condition Selection** - Customizable aimbot working conditions
• **Hitbox Selection** - Choose specific body parts to target
• **FOV Control** - Set working radius for targeting
• **Smooth Control** - Adjust smoothness of aim movement
• **Auto Delay** - Automatic pre-firing delay
• **RCS (Recoil Control System)** - Return control management
• **RCS Compensation** - Set precise recoil control levels

### 🔍**Advanced Visual ESP:**

**Player ESP System:**
• **Enable Toggle** - Activate visual features
• **Username Display** - Show player names
• **Box ESP** - Display 2D bounding squares
• **Health Bar** - Visual health status representation
• **Player Flags** - Status indicators (plant/defuse bomb, blinded, reloading)
• **Ammo Display** - Show ammunition count
• **Weapon Display** - Show equipped weapons

### 🎨**Advanced Chams Features:**

**Cham System:**
• **Enable Toggle** - Activate chams visualization
• **Type Selection** - Choose displayed chams style
• **Visible Players** - Display chams on visible enemies
• **Invisible Players** - Show chams through walls (wallhack)

### 🌍**World Customization:**

**Environmental Modifications:**
• **Enable Toggle** - Activate world modification functions
• **World Modulation** - Change world color scheme
• **Light Modulation** - Adjust sunlight color on maps
• **Sun Modulation** - Customize sun color and intensity
• **Clouds Modulation** - Change cloud colors
• **Skybox Modulation** - Customize skybox appearance

### ⚙️**Configuration Management:**

**Config System:**
• **Create Config** - Generate custom settings files
• **Load Config** - Upload custom configuration files
• **Save Settings** - Store personalized configurations
• **Profile Management** - Multiple setting profiles

### 💎**Mason Advantages:**
✅ **MOST AFFORDABLE** - Lowest prices among premium CS2 providers
✅ **EXTERNAL TECHNOLOGY** - Maximum security and stability
✅ **STREAMPROOF PROTECTION** - Safe for content creation
✅ **ADVANCED CHAMS** - Complete player visualization system
✅ **WORLD CUSTOMIZATION** - Environmental color modifications
✅ **EASY CONFIGURATION** - Simple profile management
✅ **RECOIL MASTERY** - Advanced RCS compensation
✅ **RESOURCE OPTIMIZED** - Efficient performance usage
✅ **BUDGET-FRIENDLY** - Quality features at lowest prices
✅ **USER-FRIENDLY** - Simple, intuitive interface

### 🎮**Perfect For:**
• Budget-conscious players seeking essential CS2 features
• New users exploring CS2 cheats
• Players wanting chams and world customization
• Streamers needing affordable StreamProof options
• Users who prefer external technology safety
• Gamers who want environmental customization
• Players seeking recoil control assistance
• Users wanting simple, effective solutions

### 🎨**Customization Excellence:**
• **Advanced Chams** - Complete player visibility through walls
• **World Modulation** - Customize map appearance and colors
• **Visual Enhancement** - Improved visibility and aesthetics
• **Personal Configuration** - Customizable settings profiles

### 💰**Budget Benefits:**
• **Lowest Entry Cost** - Most affordable premium CS2 option
• **Excellent Value** - Quality features at budget prices
• **Risk-Free Trial** - Low-cost 1-day testing
• **Flexible Durations** - Multiple subscription options
• **No Compromise** - Essential features without high cost

### 🛡️**Safety Features:**
• **External Security** - Enhanced anti-detection protection
• **Stream-Ready** - Complete content creator compatibility
• **Stable Performance** - Reliable operation without crashes

---
**Most affordable external cheat with advanced chams and world customization!**`)
            .addFields(
                {
                    name: '`🔨` MOST AFFORDABLE',
                    value: 'Lowest prices among premium CS2 providers with quality features.'
                },
                {
                    name: '`🎨` CHAMS & WORLD MOD',
                    value: 'Advanced player chams and complete world customization.'
                },
                {
                    name: '`🎯` ESSENTIAL FEATURES',
                    value: 'Core aimbot, ESP, and recoil control for effective gameplay.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason CS2 premium cheat.'
                }
            )
            .setColor('#32CD32')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason CS2 • External • Most Affordable • Advanced Chams',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};