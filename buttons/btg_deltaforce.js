const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'btg_deltaforce',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ BTG : Delta Force - Visual ESP External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 112.250 / $6.50
**7 DAY**   — IDR 328.500 / $19.00
**30 DAY**  — IDR 800.000 / $47.00

A premium product for the game Delta Force from Break The Game group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Garena
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 👁️**Visual Features:**
• **2D Boxes** - Flat bounding boxes around players
• **Filled Boxes** - Solid box display with fills
• **Lines** - Snaplines with multiple line types
• **Distance** - Range information display
• **Nicknames** - Player name identification
• **Drawing Bots** - AI/NPC detection and display
• **Skeleton** - Bone structure visualization
• **Head** - Head position indicators
• **Squad ID** - Team identification numbers
• **Health Display** - Health status with multiple health types
• **Distance Actors** - Range-based actor detection

### 🎯**Aimbot Features:**
• **Aim Bone** - Multiple bone type selection
• **Aim Button** - Custom activation binding
• **Aim FOV Size** - Adjustable field of view
• **Aim Distance** - Range limitation control
• **Aim Speed** - Targeting speed adjustment
• **Draw Aim FOV** - Visual FOV indicator

### 🎨**ESP Color Customization:**
• **Changing Colors** - Adjust colors to suit your preferences
• **Custom Color Schemes** - Personalized color palettes
• **Adaptive Colors** - Dynamic color adjustment

### ⚙️**Other Features:**
• **Menu Toggle** - Show/hide program menu
• **Language Switching** - Multi-language support

### 💎**BTG Advantages:**
✅ **External Security** - Maximum stability and safety
✅ **Comprehensive ESP** - Complete player information display
✅ **Advanced Visuals** - Multiple ESP styles and options
✅ **Customizable Colors** - Personalized color schemes
✅ **Multi-Language** - International accessibility
✅ **Simple Interface** - User-friendly controls
✅ **Reliable Performance** - Stable and consistent operation
✅ **Bot Detection** - AI and NPC identification

### 🎮**Perfect For:**
• Players wanting comprehensive visual ESP
• Users seeking external security
• Color customization enthusiasts
• International players
• Streamers requiring safety
• Those who need bot detection
• Players who want simple operation

### 🪖**Delta Force Features:**
• **Tactical Combat** - Modern military warfare
• **Squad-Based** - Team coordination required
• **AI Enemies** - Computer-controlled opponents
• **Equipment Variety** - Diverse gear and weapons
• **Strategic Gameplay** - Planning and coordination

### 🎯**Key Features:**
• **Comprehensive Visual ESP** - Complete player information system
• **Advanced ESP Styles** - Multiple visualization options
• **Color Customization** - Personalized color schemes
• **Bot Detection** - AI and NPC identification
• **External Security** - Maximum stability and safety
• **Multi-Language Support** - International accessibility

---
**External cheat with comprehensive visual ESP and color customization for tactical Delta Force awareness!**`)
            .addFields(
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete player information system with multiple visualization styles and bot detection.'
                },
                {
                    name: '`🎨` COLOR CUSTOMIZATION',
                    value: 'Personalized color schemes with adaptive adjustment for optimal visibility.'
                },
                {
                    name: '`🔒` EXTERNAL SECURITY',
                    value: 'Maximum stability and safety with external technology and reliable performance.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BTG Delta Force premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BTG Delta Force • External • Visual ESP • Color Customization',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};