const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lexy_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Lexy : DBD - External Premium Spoofer Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 140.500 / $8.00
**7 DAY**   — IDR 513.750 / $30.00
**30 DAY**  — IDR 1.002.250 / $60.00

A premium product for the game Dead By Daylight from Lexy group.

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
• **Controller Support:** Yes
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🔥**Features:**
• Please check the available media for a list of features!

### 💎**Lexy Advantages:**
✅ **Premium External Technology** - Maximum security and stability
✅ **Built-in Spoofer** - Complete protection suite
✅ **StreamProof** - Safe for content creation
✅ **Controller Support** - Full controller compatibility
✅ **Multi-OS Support** - Wide Windows compatibility
✅ **Multi-BIOS Support** - UEFI & Legacy compatibility
✅ **Premium Quality** - High-end features and performance
✅ **Flexible Pricing** - Multiple duration options

### 🎮**Perfect For:**
• Premium Dead By Daylight players
• Controller users
• Streamers requiring maximum safety
• Players wanting premium protection
• Users who prefer external stability
• Those needing comprehensive features
• Players seeking high-quality service

### 🔪**Dead By Daylight Features:**
• **Controller Support** - Gamepad compatibility
• **Asymmetrical Horror** - 4v1 gameplay mechanics
• **Competitive Ranking** - Skill-based progression
• **Cosmetic System** - Character customization
• **Perk Diversity** - Strategic build variety

### 🎯**Key Features:**
• **External Security** - Maximum stability and safety
• **Built-in Spoofer** - Complete protection integration
• **StreamProof** - Content creation friendly
• **Controller Support** - Full gamepad compatibility
• **Premium Quality** - High-end performance
• **Multi-Platform Support** - Wide compatibility

### 💡**Why Choose Lexy:**
• **Premium Protection** - Built-in spoofer technology
• **External Stability** - Maximum security and reliability
• **Controller Ready** - Full gamepad compatibility included
• **Content Creation Safe** - StreamProof protection
• **Professional Grade** - Premium features and support
• **Flexible Options** - Multiple pricing choices

---
**Premium external cheat with built-in spoofer and controller support for Dead By Daylight!**`)
            .addFields(
                {
                    name: '`🛡️` PREMIUM PROTECTION',
                    value: 'Built-in spoofer technology provides complete protection suite.'
                },
                {
                    name: '`🎮` CONTROLLER SUPPORT',
                    value: 'Full gamepad compatibility for comfortable gameplay experience.'
                },
                {
                    name: '`⭐` PREMIUM QUALITY',
                    value: 'High-end external technology with maximum stability and performance.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Lexy DBD premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Lexy DBD • External • Built-in Spoofer • Controller Support',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};