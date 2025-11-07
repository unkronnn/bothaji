const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_dayz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Lexy : DayZ - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 161.000 / $9.50
**7 DAY**   — IDR 849.250 / $50.00
**30 DAY**  — IDR 1.169.250 / $70.00

A premium product for the game DayZ from Lexy group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
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
• **Built-in Spoofer:** Yes

### 🔥**Features:**
• Please check the available media for a list of features!

### 💎**Lexy Advantages:**
✅ **Premium External Technology** - Maximum security and stability
✅ **Built-in Spoofer** - Complete protection suite
✅ **StreamProof** - Safe for content creation
✅ **Multi-OS Support** - Wide Windows compatibility
✅ **Multi-BIOS Support** - UEFI & Legacy compatibility
✅ **Premium Quality** - High-end features and performance
✅ **Flexible Pricing** - Multiple duration options
✅ **Reliable Service** - Stable and consistent operation

### 🎮**Perfect For:**
• Premium DayZ players
• Users wanting maximum protection
• Streamers requiring safety
• Players who prefer external stability
• Those needing built-in spoofer
• Users seeking premium features
• Players wanting reliable service

### 🧟**DayZ Features:**
• **Hardcore Survival** - Unforgiving post-apocalyptic world
• **Complex Mechanics** - Detailed survival systems
• **Player Interactions** - Dynamic social elements
• **Resource Management** - Strategic gameplay
• **Environmental Challenges** - Weather and hazards

### 🎯**Key Features:**
• **External Security** - Maximum stability and safety
• **Built-in Spoofer** - Complete protection integration
• **StreamProof** - Content creator friendly
• **Premium Quality** - High-end performance
• **Multi-Platform Support** - Wide compatibility
• **Professional Service** - Reliable operation

### 💡**Why Choose Lexy:**
• **Premium Protection** - Built-in spoofer technology
• **External Stability** - Maximum security and reliability
• **Content Creation Safe** - StreamProof protection
• **Professional Grade** - Premium features and support
• **Flexible Options** - Multiple pricing choices
• **Consistent Performance** - Reliable operation

---
**Premium external cheat for DayZ with built-in spoofer protection!**`)
            .addFields(
                {
                    name: '`🛡️` PREMIUM PROTECTION',
                    value: 'Built-in spoofer technology provides complete protection suite.'
                },
                {
                    name: '`⭐` PREMIUM QUALITY',
                    value: 'High-end external technology with maximum stability and performance.'
                },
                {
                    name: '`🎥` STREAMER FRIENDLY',
                    value: 'StreamProof protection makes it safe for content creation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy DayZ premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy DayZ • External • Built-in Spoofer • Premium Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};