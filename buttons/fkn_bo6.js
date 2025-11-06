const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fkn_bo6',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('👑 FKN : BO6 / Warzone - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 242.750 / $14.50
**30 DAY**  — IDR 496.750 / $30.00
**LIFETIME** — IDR 993.250 / $60.00

A premium product for Call of Duty Black Ops 6 from FKN group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Warzone Support (Zombies not supported)
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**FKN Premium Features:**

**Exclusive Lifetime Option:**
• **Lifetime Access** - One-time payment for permanent access
• **No Monthly Renewals** - Pay once, use forever
• **Long-term Value** - Excellent investment for dedicated players
• **Premium Quality** - Professional-grade external technology
• **Continuous Updates** - Lifetime access includes all updates

**External Technology Excellence:**
• **External Architecture** - Maximum security and stability
• **Warzone Specialized** - Optimized for Battle Royale gameplay
• **StreamProof Technology** - Safe for content creation
• **Advanced Security** - Reduced detection risk through external design
• **Performance Optimized** - Minimal impact on game performance

### 💎**FKN Advantages:**
✅ **LIFETIME OPTION** - Only provider offering permanent access
✅ **External Technology** - Maximum security and stability
✅ **Warzone Specialized** - Focused Battle Royale optimization
✅ **StreamProof Protection** - Complete streaming safety
✅ **Premium Quality** - Professional-grade features
✅ **Cost-Effective Lifetime** - Best long-term value proposition
✅ **Legacy BIOS Support** - Compatible with older systems
✅ **Multi-Platform Disk Support** - GPT & MBR compatibility

### 🎮**Perfect For:**
• Dedicated Call of Duty players seeking lifetime access
• Long-term Warzone enthusiasts
• Users who prefer one-time payments over subscriptions
• Streamers needing reliable StreamProof protection
• Players who value external technology safety
• Competitive operators wanting permanent solutions
• Users looking for the best long-term value

### ⚔️**Call of Duty Specialization:**
• **Black Ops 6 Focus** - Optimized for BO6 gameplay
• **Warzone Excellence** - Battle Royale specialized features
• **Steam Compatibility** - Dedicated Steam client support
• **Modern Combat** - Latest COD game mechanics support

### 🏆**Lifetime Value Proposition:**
• **One-Time Investment** - No recurring subscription fees
• **Permanent Access** - Never pay again for updates
• **Future-Proof** - Includes all future game updates
• **Best ROI** - Superior return on investment over time
• **Peace of Mind** - No subscription management required

### 🎯**Why Choose Lifetime:**
• **Cost Savings** - Significant savings over long-term use
• **Convenience** - No subscription renewals or management
• **Permanent Access** - Always have access when you need it
• **Investment Value** - Better financial decision for dedicated players
• **Continuous Support** - Lifetime includes ongoing updates

### 📈**Financial Benefits:**
• **Break-even Point** - Less than 2 years for lifetime vs monthly
• **Long-term Savings** - Substantial savings over extended use
• **No Price Increases** - Lock in current lifetime price
• **Asset Value** - Permanent access to premium features

### 🔧**Technical Excellence:**
• **External Security** - Advanced anti-detection technology
• **Stream-Ready** - Complete content creator compatibility
• **Multi-System Support** - Wide hardware compatibility
• **Professional Development** - Premium coding standards

---
**Premium external cheat with exclusive lifetime access option!**`)
            .addFields(
                {
                    name: '`👑` LIFETIME ACCESS',
                    value: 'Only provider offering permanent access with one-time payment.'
                },
                {
                    name: '`⚔️` WARZONE SPECIALIZED',
                    value: 'Focused optimization for Battle Royale gameplay excellence.'
                },
                {
                    name: '`💰` BEST VALUE',
                    value: 'Superior long-term investment compared to subscriptions.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your FKN BO6 premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'FKN BO6 • External • Lifetime Access • Premium Value',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};