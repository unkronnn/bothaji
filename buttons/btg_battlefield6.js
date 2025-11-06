const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'btg_battlefield6',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 BTG : Battlefield 6')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.250 / $4.50
**7 DAY**   — IDR 355.500 / $21.00
**30 DAY**  — IDR 800.000 / $47.00

A premium product for the game Battlefield 6 from Break The Game group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**Visual ESP Features:**
• Skeleton ESP
• Boxes (multiple types)
• Filled boxes
• Lines to players
• Distance indicator
• Nicknames display
• Team number identification
• Health display
• Teammates identification
• Player distance measurement

### 🎨**ESP Color Customization:**
• Change colors to suit your tactical needs
• Custom color schemes for different situations

### 💎**BTG Advantages:**
✅ **Clean Visual ESP** - Focused on essential battlefield awareness
✅ **Skeleton ESP** - Advanced bone visualization
✅ **Multiple Box Types** - Customizable box styles
✅ **Team Intelligence** - Team numbers and identification
✅ **Color Customization** - Adaptable to your preferences
✅ **StreamProof** - Safe for streaming
✅ **External Technology** - Maximum security
✅ **Lightweight Design** - Focused on core features
✅ **Multi-language Support** - Accessible to international users

### 🎮**Perfect For:**
• Players wanting clean visual ESP
• Streamers needing essential features
• Users who prefer external safety
• Players focused on tactical awareness
• International users (language support)
• Those who want lightweight software
• Competitive players needing team information

### 🪖**Battlefield 6 Features:**
• **Modern Combat** - Latest Battlefield gameplay
• **Advanced Visuals** - Enhanced graphics support
• **Team Warfare** - Squad-based combat system
• **Tactical Operations** - Strategic gameplay elements

### 🎯**Key Features:**
• **Skeleton ESP** - Advanced bone visualization for precise targeting
• **Team Intelligence** - Team numbers and friendly identification
• **Multiple Box Types** - Customizable visual options
• **Health Display** - Complete player status information
• **Distance Measurement** - Precise tactical distance data
• **Clean Interface** - Simple, effective visual presentation

### 🌍**International Features:**
• **Multi-language Support** - Language switching capability
• **Universal Compatibility** - Works with different language settings
• **Global Accessibility** - Designed for international players

---
**Clean visual ESP with team intelligence and customization!**`)
            .addFields(
                {
                    name: '`👥` SKELETON ESP',
                    value: 'Advanced bone visualization for precise tactical awareness.'
                },
                {
                    name: '`🎨` COLOR CUSTOMIZATION',
                    value: 'Adaptable color schemes for different tactical situations.'
                },
                {
                    name: '`🌍` MULTI-LANGUAGE',
                    value: 'Language switching support for international players.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BTG Battlefield 6 cheat.'
                }
            )
            .setColor('#FF6347')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BTG Battlefield 6 • External • Skeleton ESP • Team Intelligence',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};