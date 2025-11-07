const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fkn_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 FKN : DBD - Internal Lifetime Spoofer Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 142.500 / $8.50
**30 DAY**  — IDR 274.250 / $16.00
**LIFETIME** — IDR 662.250 / $40.00

A premium product for the game Dead By Daylight from FKN group.

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
• **Software Type:** Internal
• **Built-in Spoofer:** Yes

### 🔥**Features:**
• Please check the available media for a list of features!

### 💎**FKN Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Built-in Spoofer** - Complete protection suite
✅ **Lifetime Option** - Permanent access available
✅ **StreamProof** - Safe for content creation
✅ **Multi-OS Support** - Wide Windows compatibility
✅ **Multi-BIOS Support** - UEFI & Legacy compatibility
✅ **Internal Speed** - Fast response time
✅ **Affordable Lifetime** - Cost-effective permanent access

### 🎮**Perfect For:**
• Players wanting lifetime access
• Users seeking maximum performance
• Streamers requiring safety and protection
• Those who prefer internal technology
• Budget-conscious lifetime seekers
• Players wanting comprehensive features
• Users who need spoofer protection

### 🔪**Dead By Daylight Features:**
• **Fast-Paced Action** - Quick reaction gameplay
• **Competitive Matches** - Ranked gameplay system
• **Skill-Based Mechanics** - Timing and precision required
• **Character Progression** - Unlock system
• **Team Strategy** - Coordination required

### 🎯**Key Features:**
• **Internal Performance** - Maximum responsiveness
• **Built-in Spoofer** - Complete protection integration
• **Lifetime Access** - Permanent ownership option
• **StreamProof** - Content creation friendly
• **Multi-Platform Support** - Wide compatibility
• **Affordable Pricing** - Cost-effective options

### 💡**Why Choose FKN:**
• **Lifetime Value** - Permanent access at affordable pricing
• **Internal Speed** - Maximum performance and responsiveness
• **Complete Protection** - Built-in spoofer technology
• **Content Creation Safe** - StreamProof protection
• **Professional Grade** - High-quality features
• **Cost-Effective** - Best value for lifetime access

---
**Internal cheat with lifetime access and built-in spoofer for ultimate Dead By Daylight experience!**`)
            .addFields(
                {
                    name: '`♾️` LIFETIME ACCESS',
                    value: 'Permanent ownership option available at affordable pricing.'
                },
                {
                    name: '`⚡` INTERNAL PERFORMANCE',
                    value: 'Maximum responsiveness and speed with internal technology.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your FKN DBD premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'FKN DBD • Internal • Lifetime Access • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};