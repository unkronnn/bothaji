const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : DBD - External Budget Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 50.000 / $3.00
**7 DAY**   — IDR 204.750 / $12.00
**31 DAY**  — IDR 299.500 / $18.00

A premium product for the game Dead By Daylight from PussyCat group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 🔥**Features:**
• Please check the available media for a list of features!

### 💎**PussyCat Advantages:**
✅ **External Technology** - Maximum security and stability
✅ **Budget-Friendly** - Affordable pricing options
✅ **StreamProof** - Safe for content creation
✅ **Multi-Client Support** - Steam & Epic Games compatibility
✅ **Multi-OS Support** - Wide Windows compatibility
✅ **Multi-BIOS Support** - UEFI & Legacy compatibility
✅ **Essential Features** - Core functionality included
✅ **Reliable Service** - Stable and consistent operation

### 🎮**Perfect For:**
• Budget-conscious Dead By Daylight players
• New players seeking basic advantages
• Casual horror game enthusiasts
• Streamers on a budget
• Users who prefer external safety
• Players needing essential features
• Those seeking affordable options

### 🔪**Dead By Daylight Features:**
• **4v1 Asymmetrical** - Unique multiplayer dynamic
• **Horror Survival** - Tense atmospheric gameplay
• **Skill Progression** - Character development system
• **Match-Based** - Individual round gameplay
• **Social Deduction** - Strategic player interactions

### 🎯**Key Features:**
• **External Security** - Maximum stability and safety
• **Budget Pricing** - Affordable access to features
• **StreamProof** - Content creator friendly
• **Multi-Client Support** - Steam & Epic Games compatibility
• **Essential Functionality** - Core cheat features
• **Reliable Operation** - Consistent performance

### 💡**Why Choose PussyCat:**
• **Affordable Entry** - Budget-friendly pricing options
• **External Safety** - Maximum security and stability
• **Stream Ready** - Safe for content creation
• **Essential Features** - Core functionality for effective gameplay
• **Multi-Client Support** - Works with Steam and Epic Games
• **Consistent Performance** - Reliable operation

---
**Budget-friendly external cheat for Dead By Daylight with essential features and maximum security!**`)
            .addFields(
                {
                    name: '`💰` BUDGET-FRIENDLY',
                    value: 'Affordable pricing options make it accessible for players on any budget.'
                },
                {
                    name: '`🔒` EXTERNAL SAFETY',
                    value: 'Maximum security and stability with external technology.'
                },
                {
                    name: '`🎥` STREAM READY',
                    value: 'StreamProof protection makes it safe for content creation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat DBD premium cheat.'
                }
            )
            .setColor('#FFB6C1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat DBD • External • Budget-Friendly • Essential Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};