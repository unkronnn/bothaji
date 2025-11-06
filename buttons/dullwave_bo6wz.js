const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'dullwave_bo6wz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🌊 DullWave : BO6 / Warzone - Premium Internal Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 79.750 / $4.50
**7 DAY**   — IDR 258.750 / $15.00
**30 DAY**  — IDR 582.250 / $34.00

A premium product for Black Ops 6 / Warzone from DullWave group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam, Battle.Net & Xbox Game Pass
• **Software Type:** Internal

### 🔥**DullWave Premium Features:**

**Internal Technology Excellence:**
• **Internal Architecture** - Direct game integration for maximum performance
• **Multi-Client Support** - Steam, Battle.net, Xbox Game Pass compatibility
• **Full Resolution Support** - Including fullscreen mode
• **Advanced Integration** - Deep game hooking for optimal features
• **Premium Quality** - Professional-grade internal cheat development

**Call of Duty Dominance:**
• **Black Ops 6 Support** - Latest BO6 gameplay compatibility
• **Warzone Integration** - Battle Royale excellence
• **Advanced Features** - Premium internal functionality
• **Performance Optimized** - Minimal impact on game performance

### 💎**DullWave Advantages:**
✅ **Internal Technology** - Maximum performance through direct game integration
✅ **Multi-Client Compatibility** - Works with Steam, Battle.net, and Xbox Game Pass
✅ **Full Resolution Support** - Complete display compatibility including fullscreen
✅ **Premium Development** - High-quality internal cheat architecture
✅ **Advanced Features** - Professional-grade functionality
✅ **Performance Optimized** - Efficient resource usage
✅ **Affordable Pricing** - Competitive rates for internal technology
✅ **Multi-Platform Support** - Broad game client compatibility

### 🎮**Perfect For:**
• Players seeking maximum performance through internal technology
• Users who need fullscreen mode support
• Multi-platform gamers (Steam, Battle.net, Xbox Game Pass)
• Competitive players wanting direct game integration
• Users who prefer internal over external solutions
• Performance-conscious players
• Call of Duty enthusiasts across multiple platforms

### ⚔️**Technical Excellence:**
• **Direct Game Integration** - Internal hooking for optimal performance
• **Advanced Architecture** - Professional internal cheat design
• **Resource Optimization** - Efficient memory and CPU usage
• **Multi-Client Architecture** - Support for various game launchers
• **Fullscreen Compatibility** - Complete display mode support

### 🏆**Call of Duty Specialization:**
• **Black Ops 6 Focus** - Optimized for BO6 gameplay mechanics
• **Warzone Excellence** - Battle Royale specialized features
• **Modern Warfare Integration** - Latest COD game support
• **Cross-Platform Capability** - Works across different game clients

### 🎯**Internal vs External Benefits:**
• **Superior Performance** - Direct game memory access
• **Advanced Features** - More capabilities than external alternatives
• **Lower Detection Risk** - Modern internal anti-detection methods
• **Better Stability** - Direct integration reduces conflicts
• **Enhanced Customization** - Deeper game control options

### 📈**Why Choose Internal:**
• **Maximum Performance** - Unmatched speed and responsiveness
• **Advanced Capabilities** - Features not possible with external cheats
• **Direct Integration** - Seamless gameplay experience
• **Professional Quality** - Premium internal development standards
• **Future-Proof** - Adaptable to game updates and changes

---
**Premium internal cheat for maximum Call of Duty performance!**`)
            .addFields(
                {
                    name: '`🌊` INTERNAL POWER',
                    value: 'Direct game integration for maximum performance and features.'
                },
                {
                    name: '`🖥️` FULLSCREEN SUPPORT',
                    value: 'Complete display compatibility including fullscreen mode.'
                },
                {
                    name: '`🎮` MULTI-CLIENT',
                    value: 'Support for Steam, Battle.net, and Xbox Game Pass.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your DullWave BO6/WZ premium cheat.'
                }
            )
            .setColor('#008B8B')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'DullWave BO6/WZ • Internal • Maximum Performance • Multi-Client',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};