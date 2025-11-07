const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ovix_gtav',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎭 Ovix : GTA V - Internal for Legacy & Enhanced Editions')
            .setDescription(`
### 🧾**Pricing**
**LIFETIME** — IDR 100.000 / $6.00

A premium product for the game GTA V Legacy & Enhanced from Ovix group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam & Epic Games
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 🎭**Ovix Advantages:**
✅ **Lifetime Access** - One-time purchase for unlimited use
✅ **Multi-platform Support** - Steam & Epic Games compatibility
✅ **Legacy & Enhanced** - Support for all GTA V editions
✅ **Internal Performance** - Direct game integration
✅ **Universal Compatibility** - All Windows versions supported
✅ **Budget Friendly** - Most affordable lifetime option
✅ **Simple Operation** - Easy to use interface

### 🏎️**Perfect For:**
• Budget-conscious players seeking lifetime access
• Steam and Epic Games users
• Legacy & Enhanced edition players
• Those wanting internal performance
• Single-player enthusiasts
• Users seeking unlimited access
• Players with diverse system configurations

### 🎮**GTA V Features:**
• **Story Mode** - Rich single-player campaign
• **Open World** - Massive San Andreas map
• **Character Switching** - Multiple protagonist system
• **Vehicle Variety** - Extensive transportation options
• **Mission Variety** - Diverse gameplay activities

### ⚙️**Technical Features:**
• **Internal Implementation** - Direct game memory access
• **Multi-platform Support** - Steam & Epic Games compatibility
• **Universal Compatibility** - All Windows versions supported
• **Lifetime Access** - One-time purchase option
• **Budget Design** - Affordable pricing structure

### 🎯**Key Features:**
• **Lifetime Access** - Unlimited access with one-time payment
• **Multi-platform Support** - Compatible with Steam and Epic Games
• **Legacy & Enhanced** - Support for all GTA V editions
• **Internal Design** - High-performance direct game integration

### 💎**Budget Benefits:**
• **Lifetime Value** - Most affordable lifetime option at just $6.00
• **Multi-platform Flexibility** - Support for both Steam and Epic Games
• **Universal Compatibility** - All Windows versions and GTA V editions
• **Internal Performance** - Direct game integration for optimal performance

---
**Budget-friendly internal cheat with lifetime access and multi-platform support for complete GTA V single-player mastery!**`)
            .addFields(
                {
                    name: '`♾️` LIFETIME ACCESS',
                    value: 'Unlimited lifetime access with one-time payment - most affordable option available.'
                },
                {
                    name: '`🎮` MULTI-PLATFORM SUPPORT',
                    value: 'Compatible with both Steam and Epic Games launchers for maximum flexibility.'
                },
                {
                    name: '`🏎️` LEGACY & ENHANCED',
                    value: 'Support for all GTA V editions including Legacy and Enhanced versions.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ovix GTA V premium cheat.'
                }
            )
            .setColor('#8A2BE2')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ovix GTA V • Internal • Lifetime Access • Multi-Platform',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};