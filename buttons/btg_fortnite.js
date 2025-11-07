const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'btg_fortnite',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎮 BTG : Fortnite - External with Visual ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 76.250 / $4.50
**7 DAY**   — IDR 302.250 / $17.50
**30 DAY**  — IDR 566.750 / $34.00

A premium product for the game Fortnite from Break The Game group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Epic Games
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** External

### 👁️**Visual Player ESP:**
• **ESP Skeleton** - Bone structure visualization
• **ESP Boxes 2D** - Bounding box display
• **ESP Lines** - Directional indicators to players
• **ESP Distance** - Range calculation
• **ESP Names** - Player identification display
• **ESP Bots/NPCs** - AI entity identification
• **ESP Nation** - Team/region indication
• **ESP Health Bar** - Visual health status
• **ESP Team Number** - Squad member identification
• **Background Text** - Enhanced text visibility

### 🎨**Customization Features:**
• **ESP Color Control** - Customizable color schemes
• **Menu Toggle** - Show/hide program interface
• **Language Switching** - Multi-language support

### 🎮**BTG Advantages:**
✅ **Visual ESP System** - Complete player visualization
✅ **Multi-language Support** - International accessibility
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Latest Windows Support** - Including Windows 25H2
✅ **Epic Games Client** - Official launcher compatibility
✅ **Affordable Pricing** - Budget-friendly options

### 🍇**Perfect For:**
• Visual ESP enthusiasts
• Players seeking comprehensive player awareness
• Multi-language users
• Streamers requiring safety features
• Epic Games launcher users
• Players with latest Windows versions
• Those wanting external safety

### 🎮**Fortnite Features:**
• **Battle Royale** - 100-player survival competition
• **Building Mechanics** - Structure creation and editing
• **Cosmetic System** - Skins, emotes, and customization
• **Season Updates** - Constant content evolution
• **Cross-platform Play** - Multi-device gaming

### 🎯**Key Features:**
• **Visual ESP System** - Complete player visualization with detailed information
• **Multi-language Support** - Accessibility for international players
• **External Design** - Safe and undetectable implementation
• **Epic Games Compatibility** - Optimized for official launcher

---
**External cheat with comprehensive visual ESP system and multi-language support for complete Fortnite battle royale awareness!**`)
            .addFields(
                {
                    name: '`👁️` VISUAL ESP SYSTEM',
                    value: 'Complete player visualization with skeleton, boxes, lines, distance, names, and health information.'
                },
                {
                    name: '`🌍` MULTI-LANGUAGE SUPPORT',
                    value: 'International accessibility with language switching capabilities for global players.'
                },
                {
                    name: '`🎮` EXTERNAL SAFETY',
                    value: 'Safe and undetectable external implementation with minimal detection risk.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BTG Fortnite premium cheat.'
                }
            )
            .setColor('#FF6B35')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BTG Fortnite • External • Visual ESP • Multi-Language',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};