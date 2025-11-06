const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'macro_aio',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 All-In-One Macro (All Games)')
            .setDescription(`
### 🧾**Pricing**
**30 Day Subscription**
**IDR 499.500 / $30.00**

*CONTACT ADMIN FOR 1 YEAR SUBSCRIPTION*

### 🎮**Universal Game Support:**
• **ALL GAMES** included in one package
• **PUBG, Apex Legends, Rust, Rainbow Six Siege**
• **The Finals, Valorant, Counter Strike 2, Fragpunk**
• **Plus many more FPS games**
• **Future game updates** included at no extra cost

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
✅ **Ultimate convenience** - one macro for all games
✅ **Cost-effective** for multi-game players

### 🔧**Technical Details:**
• **Software Type:** External
• **Hardware Required:** None
• **StreamProof:** Yes
• **Game Mode:** Any mode for any supported game
• **Game Client:** Any game client

### 🎯**Main Feature:**
**Universal Recoil Stabilization**
- Perfect recoil control for all supported games
- Automatic game detection
- Easy switching between games
- Consistent performance across all titles

### 💎**Why Choose AIO?**
• **Best Value** for players who enjoy multiple games
• **No need** to purchase separate macros
• **Future-proof** - new games added regularly
• **Professional grade** performance for every title

---
**The ultimate macro solution for every FPS game!**`)
            .addFields(
                {
                    name: '`⚠️` SAFETY GUARANTEE',
                    value: 'Undetected since 2019 with zero bans. Unique user structure ensures maximum safety across all games.'
                },
                {
                    name: '`💰` SAVINGS',
                    value: 'Save money compared to buying individual macros! Perfect for multi-game players.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your All-In-One macro with personalized setup for all games.'
                }
            )
            .setColor('#800080')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'All-In-One Macro • Universal Gaming Solution • Best Value',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};