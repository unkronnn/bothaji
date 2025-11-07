const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ovix_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌊 Ovix : Counter Strike 2 - Budget External Cheat')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 80.000 / $4.50
**90 DAY**  — IDR 140.000 / $8.00
**180 DAY** — IDR 219.750 / $13.00

A premium product for Counter Strike 2 from Ovix group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**Ovix Premium Features:**

**Budget-Friendly Excellence:**
• **Extended Duration Options** - Long-term subscriptions available
• **External Technology** - Maximum security and stability
• **StreamProof Protection** - Safe for content creation
• **Performance Optimized** - Efficient resource usage
• **Essential CS2 Features** - Core cheating functionality
• **Simple Interface** - User-friendly design

**External Technology Benefits:**
• **Maximum Security** - External architecture reduces detection risk
• **System Stability** - No direct game memory interference
• **Resource Friendly** - Low CPU and memory usage
• **Easy Setup** - Simple installation process
• **Reliable Performance** - Consistent operation

**Long-Term Value:**
• **30-180 Day Options** - Flexible extended subscriptions
• **Budget Pricing** - Competitive rates for quality features
• **No Hidden Costs** - Transparent pricing structure
• **Consistent Quality** - Reliable performance throughout subscription

### 💎**Ovix Advantages:**
✅ **BUDGET PRICING** - Excellent value for money
✅ **EXTERNAL TECHNOLOGY** - Maximum security through external design
✅ **STREAMPROOF SAFETY** - Complete streaming protection
✅ **LONG-TERM OPTIONS** - Extended duration subscriptions
✅ **RESOURCE EFFICIENT** - Optimized for all computer types
✅ **EASY TO USE** - Simple, straightforward interface
✅ **WIDE COMPATIBILITY** - UEFI & Legacy BIOS support
✅ **RELIABLE PERFORMANCE** - Consistent, stable operation

### 🎮**Perfect For:**
• Budget-conscious players seeking quality features
• Users preferring long-term subscription options
• CS2 players wanting essential functionality
• Streamers requiring affordable StreamProof options
• Players who prefer external technology safety
• Users with various computer specifications
• Gamers wanting straightforward, reliable cheats
• Budget-minded competitive players

### ⚔️**Counter-Strike 2 Focus:**
• **Modern Combat Support** - Optimized for CS2 mechanics
• **Tactical Enhancement** - Strategic gameplay improvement
• **Competitive Features** - Essential tools for fair advantage
• **Regular Updates** - Keeps current with CS2 changes

### 💰**Budget Excellence:**
• **Affordable Entry** - Accessible pricing for all players
• **Extended Value** - Better rates for longer commitments
• **No Compromise** - Quality features at budget prices
• **Flexible Options** - Multiple duration choices
• **Transparent Pricing** - No hidden fees or charges

### 🛡️**Safety & Security:**
• **External Architecture** - Enhanced anti-detection protection
• **StreamProof Technology** - Safe for content creation
• **Stable Performance** - Reliable operation without issues
• **System Compatibility** - Works on various hardware configurations

### 📈**Why Choose Ovix:**
• **Best Budget Option** - Quality features at lowest prices
• **Extended Duration** - Longer subscriptions for better value
• **External Safety** - Maximum security through external design
• **User-Friendly** - Simple, intuitive interface
• **Reliable Support** - Consistent performance and updates

---
**Budget external cheat with extended duration options and excellent value!**`)
            .addFields(
                {
                    name: '`🌊` BUDGET EXCELLENCE',
                    value: 'Quality features at competitive pricing with extended options.'
                },
                {
                    name: '`⏰` EXTENDED DURATION',
                    value: '30-180 day subscriptions for better long-term value.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Maximum security through external technology architecture.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ovix CS2 premium cheat.'
                }
            )
            .setColor('#008B8B')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ovix CS2 • External • Budget Pricing • Extended Duration',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};