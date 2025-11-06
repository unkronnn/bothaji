const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'macro_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔫 Counter Strike 2 No Recoil Macro')
            .setDescription(`
### 🧾**Pricing**
**30 Day Subscription**
**IDR 200.000 / $12.00**

*CONTACT ADMIN FOR 1 YEAR SUBSCRIPTION*

### 🎮**Game-Specific Features:**
• **Optimized for CS2** recoil patterns
• **All weapons supported** (AK-47, M4A4, AWP, etc.)
• **Perfect for competitive** matchmaking
• **Economy-friendly** pricing for CS players

### 🖥️**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Any Windows Version x64
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy
• **Mouse:** Any mouse supported!

### ⚡**Key Benefits:**
✅ **100% Safety** with special hardware equipment
✅ **No detections** since 2019
✅ **Unique structure** for each user
✅ **Any mouse sensitivity** and DPI support
✅ **StreamProof** - invisible to streaming
✅ **External software** - no injections required

### 🔧**Technical Details:**
• **Software Type:** External
• **Hardware Required:** None
• **StreamProof:** Yes
• **Game Mode:** Any (Competitive, Casual, Wingman)
• **Game Client:** Steam

### 🎯**Main Feature:**
**Recoil Stabilization**
- Perfect recoil control for CS2's updated mechanics
- Optimized for one-tap and spray control
- Natural movement patterns

---
**Master CS2 with professional recoil control at the best price!**`)
            .addFields(
                {
                    name: '`⚠️` SAFETY GUARANTEE',
                    value: 'Undetected since 2019 with zero bans. Unique user structure ensures maximum safety.'
                },
                {
                    name: '`💰` BEST VALUE',
                    value: 'Most affordable macro in our collection with the same safety guarantees!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your CS2 macro with personalized setup.'
                }
            )
            .setColor('#FFA500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'CS2 No Recoil Macro • Undetected Since 2019 • Best Price',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};