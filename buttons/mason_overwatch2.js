const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_overwatch2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎮 Mason : Overwatch 2 - External Vector Aimbot & ESP')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 111.500 / $6.50
**7 DAY**   — IDR 399.000 / $24.00
**30 DAY**  — IDR 778.250 / $46.00

A premium product for the game Overwatch 2 from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎯**Aimbot Features:**
• **Aimbot vector** - Enable vector aimbot
• **Aimbot FOV** - Set the radius of the aimbot operation
• **Smooth** - Set the aimbot's smoothness
• **Sensitivity (set from game settings)** - Set the aimbot sensitivity, with additional settings in the game
• **Aimbot key** - Set a key for the aimbot to work, the aimbot works only when you hold down the selected key
• **Change team** - Switch targeting team preference

### 👁️**Visual Features:**
• **Draw ESP** - Display 2D squares on opponents
• **Draw FOV** - Display the aimbot's working radius
• **Change team** - Change the display command, additionally set the "X" key for convenience

### 💎**Mason Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Vector Aimbot** - Mathematical precision targeting
✅ **Visual ESP** - Clean opponent detection
✅ **StreamProof** - Safe for streaming
✅ **Customizable Settings** - Adjustable FOV and smoothness
✅ **Team Switch** - Flexible targeting options
✅ **Professional Quality** - Industry-leading performance

### 🎮**Perfect For:**
• Competitive Overwatch 2 players
• Users wanting precise aimbot
• Players seeking visual awareness
• Streamers requiring safety
• Those wanting professional quality
• Users who prefer external performance
• Players seeking team flexibility

### 🎯**Overwatch 2 Features:**
• **Hero Shooter** - Diverse character roster
• **Team Combat** - 5v5 strategic gameplay
• **Unique Abilities** - Hero-specific powers
• **Multiple Game Modes** - Various objectives
• **Competitive Ranking** - Skill-based matchmaking

### 🎯**Key Features:**
• **Vector Aimbot** - Mathematical precision targeting
• **Visual ESP** - Clean opponent detection
• **External Design** - Safe and efficient performance
• **StreamProof** - Safe for streaming content
• **Professional Quality** - Industry-standard features

---
**External cheat with vector aimbot and visual ESP for ultimate Overwatch 2 competitive advantage!**`)
            .addFields(
                {
                    name: '`🎯` VECTOR AIMBOT',
                    value: 'Mathematical precision targeting with customizable FOV and smoothness settings.'
                },
                {
                    name: '`👁️` VISUAL ESP',
                    value: 'Clean 2D square overlays on opponents with FOV visualization.'
                },
                {
                    name: '`🔄` TEAM FLEXIBILITY',
                    value: 'Switch targeting teams and customize display preferences easily.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Overwatch 2 premium cheat.'
                }
            )
            .setColor('#FF9500')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Overwatch 2 • External • Vector Aimbot & Visual ESP • Professional Quality',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};