const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'btg_pubg',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ BTG : PUBG - Professional Visual ESP & Loot System')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 128.250 / $7.50
**7 DAY**   — IDR 355.500 / $21.00
**30 DAY**  — IDR 1.121.000 / $67.00

A premium product for the game PUBG Steam from Break The Game group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Built-in Spoofer:** No
• **Software Type:** External

### 👁️**Visual Features:**
• **Bots** - Identify AI opponents
• **2D Boxes** - Clean rectangular overlays
• **Filled Boxes** - Solid box fills
• **Lines** - Tracer lines to targets
• **Distance** - Precise distance calculation
• **Skeleton** - Bone structure visualization
• **Health Bar** - Visual health indicators
• **Air Drop** - Supply drop locations
• **Distance Items** - Item range display
• **Text Background** - Improved readability
• **Distance Players** - Player distance filtering
• **Vehicles** - Vehicle identification and tracking

### 🎨**ESP Color System:**
• **Changing the color to suit your tasks** - Customizable color schemes
• **Visual customization** - Personalized display preferences

### 💎**Loot System:**
• **Weapon Attachment** - Attachment visualization
• **Weapons** - All weapon types
• **Helmets** - Armor level display
• **Armor** - Protection status
• **Grenades** - Explosive items
• **Boosts** - Enhancement items
• **Medicals** - Health supplies
• **BackPack** - Capacity information

### ⚡**Additional Features:**
• **Button to show or hide the program menu** - Interface toggle control

### 💎**BTG Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Professional Visual ESP** - Clean and accurate displays
✅ **Advanced Loot System** - Comprehensive item awareness
✅ **StreamProof** - Safe for streaming
✅ **Color Customization** - Personalized visual settings
✅ **Vehicle Detection** - Complete environmental awareness
✅ **Professional Quality** - Industry-leading visual features

### 🎮**Perfect For:**
• PUBG players wanting visual awareness
• Users seeking loot optimization
• Players requiring clean ESP
• Streamers requiring safety
• Those wanting color customization
• Users preferring external performance
• Players seeking comprehensive item awareness

### 🏆**PUBG Features:**
• **Battle Royale** - 100-player survival combat
• **Realistic Weapons** - Authentic firearm mechanics
• **Large Maps** - Diverse tactical environments
• **Vehicle Combat** - Mobile warfare tactics
• **Survival Gameplay** - Resource management

### 🎯**Key Features:**
• **Professional Visual ESP** - Clean and accurate overlays
• **Advanced Loot System** - Comprehensive item filtering
• **Color Customization** - Personalized visual settings
• **External Design** - Safe and efficient performance
• **Vehicle Detection** - Complete environmental awareness

---
**External cheat with professional visual ESP and advanced loot system for ultimate PUBG awareness!**`)
            .addFields(
                {
                    name: '`👁️` PROFESSIONAL ESP',
                    value: 'Clean and accurate visual overlays with customizable colors and comprehensive information.'
                },
                {
                    name: '`💎` ADVANCED LOOT',
                    value: 'Complete loot filtering system with item categorization and distance display.'
                },
                {
                    name: '`🎨` COLOR CUSTOMIZATION',
                    value: 'Personalized color schemes to suit your preferences and tasks.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BTG PUBG premium cheat.'
                }
            )
            .setColor('#FF9500')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BTG PUBG • External • Professional Visual ESP & Loot System • StreamProof',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};