const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_bo6',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Lexy : MW3 / WZ / BO6 - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 140.500 / $8.00
**7 DAY**   — IDR 671.250 / $40.00
**30 DAY**  — IDR 1.002.250 / $60.00

A premium product for Call of Duty MW3 / WZ / BO6 from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Games Supported:** Modern Warfare 3, DMZ, Warzone and Black Ops 6
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Battle.Net
• **Software Type:** External
• **Built-in Spoofer:** Yes (FREE!)

### 🔥**Lexy Premium Features:**

**External Technology Excellence:**
• **External Architecture** - Maximum security and stability
• **Multi-Game Support** - MW3, WZ, BO6 compatibility
• **Free Built-in Spoofer** - Complete protection solution
• **StreamProof Technology** - Safe for content creation
• **Professional Grade** - Premium quality features

**Combat Enhancement:**
• **Precision Aimbot** - Advanced targeting system
• **Visual ESP** - Comprehensive battlefield awareness
• **Loot Detection** - Strategic item location
• **Player Information** - Complete enemy data
• **Customization** - Tailored gameplay experience

### 💎**Lexy Advantages:**
✅ **Premium External Technology** - Maximum security and reliability
✅ **Multi-Game Bundle** - MW3, Warzone, BO6 support
✅ **Free Built-in Spoofer** - No additional cost required
✅ **Professional Features** - High-end functionality
✅ **StreamProof Protection** - Complete streaming safety
✅ **Multi-Client Support** - Steam and Battle.Net compatibility
✅ **Legacy BIOS Support** - Wider system compatibility
✅ **Premium Pricing** - Reflects superior quality and features

### 🎮**Perfect For:**
• Serious Call of Duty competitive players
• Users who prefer external technology safety
• Players requiring premium features
• Streamers needing robust protection
• Multi-game enthusiasts (MW3, WZ, BO6)
• Users wanting comprehensive battlefield awareness
• Competitive operators seeking tactical advantage

### 🏆**Call of Duty Domination:**
• **Modern Warfare 3** - Latest MW3 gameplay support
• **Warzone Integration** - Battle Royale excellence
• **Black Ops 6** - Future-proof BO6 compatibility
• **DMZ Mode** - Tactical extraction gameplay
• **Multi-Platform** - Steam and Battle.Net support

### 🎯**Key Differentiators:**
• **External Focus** - Maximum security over internal risks
• **Premium Quality** - Higher-tier features and reliability
• **Professional Grade** - Serious competitive features
• **Comprehensive Support** - Multiple game titles
• **Advanced Protection** - Built-in spoofer technology
• **Stream-Ready** - Content creator friendly

### 🔧**Technical Excellence:**
• **Legacy BIOS Support** - Compatible with older systems
• **External Architecture** - Enhanced stability and security
• **Resource Optimization** - Efficient performance
• **Multi-Client Architecture** - Broad game support
• **Advanced Detection Avoidance** - Cutting-edge protection

---
**Premium external cheat for serious Call of Duty competitors!**`)
            .addFields(
                {
                    name: '`⚡` PREMIUM EXTERNAL',
                    value: 'Maximum security external technology with professional features.'
                },
                {
                    name: '`🎮` MULTI-GAME BUNDLE',
                    value: 'MW3, Warzone, and Black Ops 6 support in one package.'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included at no extra cost.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy BO6 premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy BO6 • External • Premium Quality • Multi-Game Bundle',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};