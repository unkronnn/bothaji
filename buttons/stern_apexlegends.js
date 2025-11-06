const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_apexlegends',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Stern : Apex Legends')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 81.000 / $4.55
**7 DAY**   — IDR 182.500 / $10.27
**30 DAY**  — IDR 370.750 / $21.68
**LIFETIME** — IDR 1.931.250 / $112.96

A premium product for the game Apex Legend from Stern group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Software Type:** External

### 🔥**Premium Feature List:**

**Aimbot Features:**
• Enable/Disable toggle
• Visibility check
• Changeable Bone selection
• Custom FOV control
• Custom Smooth adjustment
• Circle FOV display
• Ignore Knocked players
• Maximum Distance targeting

**Visual ESP:**
• 2D Box ESP
• Corner Box ESP
• Seer Health display
• Skeleton ESP
• Distance ESP
• Name ESP
• Health Bar
• Shield Bar
• Tracers ESP
• Player Glow (visible & invisible colors)
• Visible Check functionality

**Miscellaneous Features:**
• Spectator Count
• Skin Changer
• Freecam
• Instant Grapple

### 💎**Stern Advantages:**
✅ **LIFETIME OPTION** - Only cheat with lifetime access available
✅ **StreamProof** - Safe for streaming activities
✅ **Comprehensive ESP** - All essential visual features
✅ **Advanced Aimbot** - Professional targeting system
✅ **Skin Changer** - Customize your appearance
✅ **Universal Client Support** - Steam & Epic Games
✅ **Competitive Pricing** - Great value for features

### 🎮**Perfect For:**
• Long-term players (lifetime option)
• Users who want lifetime access
• Players who need skin customization
• Streamers requiring StreamProof protection
• Competitive players seeking comprehensive features

### ⭐**Exclusive Feature:**
**LIFETIME ACCESS** - The only Apex cheat offering lifetime subscription for unlimited use!

---
**The only Apex cheat with lifetime access option!**`)
            .addFields(
                {
                    name: '`⭐` LIFETIME ACCESS',
                    value: 'Only cheat offering lifetime access - pay once, use forever!'
                },
                {
                    name: '`🎨` SKIN CHANGER',
                    value: 'Customize your legend appearance with built-in skin changer.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern Apex Legends cheat.'
                }
            )
            .setColor('#1E90FF')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern Apex Legends • Lifetime Access Available',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};