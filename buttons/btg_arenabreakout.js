const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'btg_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 BTG : Arena Breakout: Infinite')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 142.500 / $8.50
**7 DAY**   — IDR 486.000 / $28.00
**30 DAY**  — IDR 1.066.750 / $64.00

A premium product for the game Arena Breakout: Infinite from Break The Game group.

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
• **Game Client:** Official Launcher
• **Software Type:** External

### 🔥**Visual Feature List:**

**Players ESP:**
• 2D Boxes
• Filled Boxes
• Lines (Line Type)
• Distance display
• Nicknames
• Drawing Bots toggle
• Skeleton display
• Head indicator
• Squad ID
• Health (Health Type)
• Distance actors

**Bots ESP:**
• 2D Boxes
• Filled Boxes
• Lines (Line Type)
• Distance display
• Nicknames
• Drawing Bots toggle
• Skeleton display
• Head indicator
• Squad ID
• Health (Health Type)
• Distance actors

**ESP Color Customization:**
• Changing colors to suit your tasks
• Custom color schemes for different situations

**Other Features:**
• Button to show or hide the program menu
• Language switching support

### 💎**BTG Advantages:**
✅ **Clean Visual ESP** - Focused on essential awareness features
✅ **Player & Bot ESP** - Complete battlefield awareness
✅ **Customizable Colors** - Adapt to your preferences
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

### 🎯**Key Features:**
• **Dual ESP** - Separate configurations for Players and Bots
• **Health Types** - Different health display options
• **Squad Intelligence** - Squad ID for team coordination
• **Distance Actors** - Precise distance measurements
• **Clean Interface** - Simple, effective visual presentation

---
**Clean visual ESP for tactical battlefield awareness!**`)
            .addFields(
                {
                    name: '`🎯` VISUAL FOCUSED',
                    value: 'Clean and effective visual ESP without unnecessary complexity.'
                },
                {
                    name: '`🌍` MULTI-LANGUAGE',
                    value: 'Language switching support for international accessibility.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BTG Arena Breakout cheat.'
                }
            )
            .setColor('#FF6347')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BTG Arena Breakout: Infinite • Clean Visual ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};