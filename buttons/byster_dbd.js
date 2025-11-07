const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'byster_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 Byster : DBD - Internal Lifetime Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 54.000 / $3.00
**7 DAY**   — IDR 180.500 / $10.00
**30 DAY**  — IDR 327.500 / $19.00
**LIFETIME** — IDR 1.513.000 / $90.00

A premium product for the game Dead By Daylight from Byster group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Epic Games & Microsoft Store
• **Run from Flash Drive:** -
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 👥**Visual (Players) Features:**
• **Box ESP** - Bounding box display around players
• **Name Display** - Player name identification
• **Held Item Display** - Current weapon/item in hand
• **Borrowed Time Indicator** - Perk status detection
• **Distance Display** - Range information to players
• **Aura Display** - Visual aura effects around players

### 🌍**Visual (Objects) Features:**
• **Generators** - Enable status, aura display
• **Chests** - Enable status, aura display
• **Escapes** - Enable, show only when 2 generators remaining
• **Pallets** - Enable, aura display, state information
• **Totems** - Enable, aura display, state, active only
• **Hatches** - Enable, aura display, state information
• **Meat** - Enable, aura display for collectibles

### 🎨**Unlocker Features:**
• **Cosmetics Unlocker** - Access to all character cosmetics

### ⚙️**Miscellaneous Features:**
• **Auto Skill Check** - Automatic skill check completion
• **Instant Animation** - Faster animation sequences
• **Field of View** - Customizable FOV settings
• **Jump** - Enhanced jumping mechanics
• **SpeedHack** - Movement speed modification
• **Custom Scaling** - Interface size adjustment
• **Save/Load Configs** - Configuration management

### 💎**Byster Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Lifetime Option** - Permanent access available
✅ **Cosmetics Unlocker** - All cosmetic content accessible
✅ **Multi-Client Support** - Steam, Epic Games & Microsoft Store
✅ **Auto Skill Checks** - Perfect timing on minigames
✅ **Config Management** - Save and load settings
✅ **Speed Control** - Movement and animation enhancement
✅ **Visual Customization** - FOV and scaling options

### 🎮**Perfect For:**
• Players wanting permanent access
• Cosmetic collectors and enthusiasts
• Users needing maximum performance
• Multi-platform gamers
• Players who want all clients supported
• Those seeking speed advantages
• Users who value configuration saving

### 🔪**Dead By Daylight Features:**
• **Character Customization** - Extensive cosmetic system
• **Multi-Platform** - Available on multiple launchers
• **Fast-Paced Gameplay** - Quick action sequences
• **Perk System** - Character ability customization
• **Competitive Ranking** - Skill-based matchmaking

### 🎯**Key Features:**
• **Lifetime Access** - Permanent ownership option available
• **Cosmetics Unlocker** - Complete access to all cosmetic content
• **Multi-Platform Support** - All major game launchers compatible
• **Internal Performance** - Maximum responsiveness and speed
• **Config Management** - Save and load custom settings
• **Visual Enhancement** - FOV and scaling customization

---
**Internal cheat with lifetime access and cosmetics unlocker for ultimate Dead By Daylight experience!**`)
            .addFields(
                {
                    name: '`♾️` LIFETIME ACCESS',
                    value: 'Permanent ownership option available for unlimited access to all features.'
                },
                {
                    name: '`🎨` COSMETICS UNLOCKER',
                    value: 'Complete access to all character cosmetics and customization options.'
                },
                {
                    name: '`🚀` MULTI-PLATFORM',
                    value: 'Full compatibility with Steam, Epic Games, and Microsoft Store clients.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Byster DBD premium cheat.'
                }
            )
            .setColor('#20B2AA')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Byster DBD • Internal • Lifetime Access • Cosmetics Unlocker',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};