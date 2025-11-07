const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'byster_fragpunk',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Byster : FragPunk - External with Silent Aim & Lifetime Option')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 101.500 / $6.00
**7 DAY**   — IDR 311.500 / $18.00
**30 DAY**  — IDR 568.500 / $33.00
**LIFETIME** — IDR 7.415.750 / $450.00

A premium product for the game FragPunk from Byster group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🎯**Advanced Aimbot Features:**
• **AIM Toggle** - Enable/disable functionality
• **Through Wall** - Wall penetration capability
• **Silent AIM** - Subtle targeting system
• **Vector AIM** - Advanced vector-based targeting
• **Invisible Skill** - Skill-based targeting control
• **Advanced Vector Mode** - Enhanced vector targeting
• **Bone Selector** - Hitbox precision targeting
• **AIM Bind** - Custom key binding
• **Lock Target** - Target retention system
• **FOV Display** - Visual field indicator
• **FOV Slider** - Precise angle adjustment
• **Smooth Slider** - Human-like movement control

### 👁️**Visual ESP Features:**
• **ESP Toggle** - Enable/disable visual system
• **Player Names** - Enemy identification
• **Box Display** - Bounding box visualization
• **Invisible Skills** - Hidden ability detection
• **Health Display** - Status information
• **Distance Measurement** - Range calculation

### 🛠️**Advanced Miscellaneous:**
• **Configuration Management** - Save, load, and reset configs
• **No Spread** - Complete accuracy enhancement
• **Custom Scale Support** - 2K and 4K monitor optimization
• **Professional Settings** - Advanced customization options

### ⚡**Byster Advantages:**
✅ **Silent Aim Technology** - Subtle and undetectable targeting
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Lifetime Option** - One-time purchase for unlimited access
✅ **Vector AIM System** - Advanced targeting technology
✅ **4K Monitor Support** - High-resolution optimization
✅ **External Safety** - Minimal detection risk
✅ **Professional Configuration** - Advanced settings management

### 💥**Perfect For:**
• Competitive players requiring lifetime access
• Users seeking subtle targeting technology
• Players with high-resolution monitors
• Those requiring built-in spoofer protection
• External safety preference users
• Streamers needing protection
• Professional players seeking investment

### 🎮**FragPunk Features:**
• **Fast-paced Combat** - Intense FPS action
• **Multiplayer Competition** - Tactical battles
• **Weapon Diversity** - Extensive arsenal
• **Strategic Gameplay** - Combat tactics
• **Skill-based Systems** - Ability integration

### 🎯**Key Features:**
• **Silent Aim Technology** - Subtle and undetectable targeting system
• **Lifetime Option** - One-time purchase for unlimited access
• **Built-in Spoofer** - Complete hardware protection included
• **4K Monitor Support** - High-resolution display optimization

---
**External cheat with silent aim technology, built-in spoofer, and lifetime option for complete FragPunk FPS mastery!**`)
            .addFields(
                {
                    name: '`⚡` SILENT AIM TECHNOLOGY',
                    value: 'Subtle and undetectable targeting system with advanced vector-based mechanics.'
                },
                {
                    name: '`♾️` LIFETIME OPTION',
                    value: 'One-time purchase option for unlimited lifetime access to all features and updates.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Byster FragPunk premium cheat.'
                }
            )
            .setColor('#FF8C00')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Byster FragPunk • External • Silent Aim • Lifetime Option',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};