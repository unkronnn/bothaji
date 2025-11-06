const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'pussycat_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🐱 PussyCat : Counter Strike 2 - Ultra Budget with Lifetime')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 30.000 / $1.50
**7 DAY**   — IDR 68.250 / $4.00
**31 DAY**  — IDR 83.250 / $5.00
**LIFETIME** — IDR 332.750 / $20.00

A premium product for Counter Strike 2 from PussyCat group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**PussyCat Premium Features:**

**Exclusive Lifetime Option:**
• **Lifetime Access** - One-time payment for permanent use
• **No Monthly Renewals** - Pay once, use forever
• **Incredible Value** - Best long-term investment
• **Budget-Friendly** - Most affordable lifetime option available
• **Risk-Free Trial** - Low-cost 1-day testing option

**External Technology Excellence:**
• **External Architecture** - Maximum security and stability
• **StreamProof Technology** - Safe for content creation
• **Advanced Security** - Reduced detection risk through external design
• **Performance Optimized** - Minimal impact on game performance
• **Easy Setup** - Simple installation and configuration

**Essential CS2 Features:**
• **Core Aimbot** - Precision aiming assistance
• **Visual ESP** - Player information and positioning
• **Radar System** - Strategic battlefield awareness
• **Loot Detection** - Item and equipment identification
• **Customization Options** - Personalized settings

### 💎**PussyCat Advantages:**
✅ **LIFETIME ACCESS** - Only provider offering affordable lifetime option
✅ **ULTRA BUDGET** - Lowest prices among premium CS2 providers
✅ **EXTERNAL TECHNOLOGY** - Maximum security through external design
✅ **STREAMPROOF PROTECTION** - Complete streaming safety
✅ **EASY TO USE** - Simple, user-friendly interface
✅ **RISK-FREE TESTING** - Low-cost 1-day trial option
✅ **LONG-TERM VALUE** - Exceptional return on investment
✅ **WIDE COMPATIBILITY** - UEFI & Legacy BIOS support

### 🎮**Perfect For:**
• Budget-conscious players seeking lifetime access
• New users exploring CS2 cheats
• Long-term CS2 enthusiasts wanting permanent solution
• Streamers needing affordable StreamProof options
• Players who prefer external technology safety
• Users wanting excellent long-term value
• Casual players seeking slight competitive advantage
• Gamers who hate subscription models

### 💰**Lifetime Value Proposition:**
• **One-Time Investment** - No recurring subscription fees
• **Permanent Access** - Never pay again for updates
• **Future-Proof** - Includes all future game updates
• **Best ROI** - Superior return over long-term use
• **Peace of Mind** - No subscription management required

### ⚔️**Counter-Strike 2 Support:**
• **Modern Combat** - Optimized for CS2 gameplay mechanics
• **Tactical Enhancement** - Strategic gameplay improvement
• **Competitive Edge** - Slight advantage for fair gameplay
• **Regular Updates** - Keeps up with CS2 changes

### 📈**Financial Benefits:**
• **Break-even Point** - Less than 6 months for lifetime vs monthly
• **Long-term Savings** - Significant savings over extended use
• **No Price Increases** - Lock in current lifetime price
• **Asset Value** - Permanent access to premium features

### 🛡️**Safety Features:**
• **External Security** - Advanced anti-detection technology
• **Stream-Ready** - Complete content creator compatibility
• **Stable Performance** - Reliable operation without crashes

---
**Ultra budget external cheat with exclusive lifetime access option!**`)
            .addFields(
                {
                    name: '`🐱` LIFETIME ACCESS',
                    value: 'Most affordable lifetime option - pay once, use forever!'
                },
                {
                    name: '`💰` ULTRA BUDGET',
                    value: 'Lowest prices with premium features and incredible value.'
                },
                {
                    name: '`🛡️` EXTERNAL SAFETY',
                    value: 'Maximum security through external technology architecture.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your PussyCat CS2 premium cheat.'
                }
            )
            .setColor('#FF69B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'PussyCat CS2 • External • Lifetime Access • Ultra Budget',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};