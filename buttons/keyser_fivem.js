const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'keyser_fivem',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔑 Keyser : Five M - Internal with Built-in Spoofer & Lifetime Option')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 126.250 / $7.50
**7 DAY**   — IDR 240.750 / $14.00
**30 DAY**  — IDR 328.500 / $19.50
**LIFETIME** — IDR 821.250 / $49.00

A premium product for the game GTA V (Five M) from Keyser Software group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Any Windows Version
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolution:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Five M
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** Internal

### 🔑**Keyser Advantages:**
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Lifetime Option** - One-time purchase for unlimited access
✅ **Universal Compatibility** - Any Windows version support
✅ **Stream Protection** - Content creator safe
✅ **Internal Performance** - Direct game integration
✅ **FiveM Optimization** - Dedicated multiplayer support
✅ **Premium Quality** - High-end implementation

### 🏎️**Perfect For:**
• Players seeking lifetime access
• Users requiring built-in spoofer protection
• Streamers and content creators
• Players with diverse Windows versions
• FiveM multiplayer enthusiasts
• Those wanting internal performance
• Players seeking long-term value

### 🎮**GTA V Features:**
• **Open World** - Vast San Andreas environment
• **Multiplayer RP** - FiveM roleplaying communities
• **Criminal Activities** - Heists and illegal operations
• **Vehicle Customization** - Extensive car modifications
• **Character Development** - Personal progression

### ⚙️**Technical Excellence:**
• **Internal Implementation** - Direct game memory access
• **Built-in Spoofer** - Complete hardware protection
• **Universal Compatibility** - All Windows versions supported
• **StreamProof Technology** - Safe for content creation
• **Lifetime Access** - One-time purchase option

### 🎯**Key Features:**
• **Built-in Spoofer** - Complete hardware protection system included
• **Lifetime Option** - Unlimited access with one-time payment
• **Universal Compatibility** - Support for any Windows version
• **Internal Design** - High-performance direct game integration

### 💎**Premium Benefits:**
• **Complete Protection** - Hardware spoofer integrated
• **Lifetime Value** - Best long-term investment option
• **Performance Optimization** - Internal design for maximum efficiency
• **Multi-platform Support** - Universal Windows compatibility
• **Professional Quality** - High-end development standards

---
**Premium internal cheat with built-in spoofer and lifetime option for complete FiveM and GTA V multiplayer dominance!**`)
            .addFields(
                {
                    name: '`🔑` UNIVERSAL COMPATIBILITY',
                    value: 'Support for any Windows version with complete compatibility across all systems.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`♾️` LIFETIME OPTION',
                    value: 'One-time purchase option for unlimited lifetime access to all features.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Keyser FiveM premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Keyser FiveM • Internal • Built-in Spoofer • Lifetime Option',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};