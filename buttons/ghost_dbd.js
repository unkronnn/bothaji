const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ghost_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👻 Ghost : DBD - External Visual Customization Cheat')
            .setDescription(`
### 🧾**Pricing**
**2 DAY**   — IDR 79.000 / $4.00
**7 DAY**   — IDR 150.250 / $8.00
**30 DAY**  — IDR 245.000 / $14.00

A premium product for the game Dead By Daylight from Ghost group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
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

### 👥**Visual (Players) Features:**
• **Enable Visual** - Toggle player ESP system
• **Box ESP** - Bounding box display
• **Name Display** - Player identification tags
• **Distance Display** - Adjustable range information
• **Visual Color** - Customizable color schemes
• **Visual Preview** - Preview customization options

### 🌍**Visual (Objects) Features:**
• **Pallet ESP** - Location and status information
• **Totem ESP** - Position and state display
• **Escape ESP** - Exit location and status
• **Hatch ESP** - Hatch position and availability
• **Generator ESP** - Generator location and status
• **Closet ESP** - Locker position detection
• **Chest ESP** - Chest position and contents
• **Distance Display** - Adjustable object range
• **Visual Color** - Customizable object colors

### ⚙️**Settings Features:**
• **Enable Icon** - Toggle icon display system

### 💎**Ghost Advantages:**
✅ **Built-in Spoofer** - Complete protection suite
✅ **Visual Customization** - Extensive color and style options
✅ **External Security** - Maximum stability and safety
✅ **StreamProof** - Safe for content creation
✅ **Simple Interface** - User-friendly controls
✅ **Adjustable Range** - Customizable detection distances
✅ **Color Customization** - Personalized visual themes
✅ **Object Filtering** - Focus on important elements

### 🎮**Perfect For:**
• Players who want visual customization
• Streamers requiring safety and spoofer
• Users preferring simple interfaces
• Budget-conscious players
• Those who need external security
• Players wanting personalized visuals
• Users seeking essential ESP features

### 🔪**Dead By Daylight Features:**
• **Visual Clarity** - Important for tracking objectives
• **Object Recognition** - Key to survival strategy
• **Position Awareness** - Critical for escape planning
• **Color Coding** - Enhances visual communication
• **Distance Management** - Essential for tactical decisions

### 🎯**Key Features:**
• **Built-in Spoofer** - Complete protection integration
• **Visual Customization** - Extensive color and style personalization
• **External Security** - Maximum stability and safety
• **Simple Interface** - User-friendly control system
• **Adjustable Range** - Customizable detection distances
• **StreamSafe Operation** - Content creation friendly

---
**External cheat with visual customization and built-in spoofer for enhanced Dead By Daylight experience!**`)
            .addFields(
                {
                    name: '`🎨` VISUAL CUSTOMIZATION',
                    value: 'Extensive color and style customization options for personalized gameplay.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security.'
                },
                {
                    name: '`🔒` EXTERNAL SECURITY',
                    value: 'Maximum stability and safety with external technology.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ghost DBD premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ghost DBD • External • Visual Customization • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};