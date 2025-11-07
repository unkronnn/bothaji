const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'extreme_naraka_skin',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('✨ Extreme : Naraka Skin Changer - External Cosmetic Unlock')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 150.000 / $8.00
**30 DAY**  — IDR 293.000 / $17.00

A premium product for the game Naraka Bladepoint from Extreme group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Epic Games & Official Naraka Launcher
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎨**Unlocked Features:**
• **All outfits skin unlocked** - Complete wardrobe access
• **All weapons skin unlocked** - Every weapon skin available
• **Enabled breast physics** - Enhanced character physics

### 💎**Extreme Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Complete Cosmetic Unlock** - All outfits and weapons
✅ **Breast Physics** - Enhanced character visuals
✅ **StreamProof** - Safe for streaming
✅ **Multiple Client Support** - Works with all game launchers
✅ **Regular Updates** - Latest content supported
✅ **Safe to Use** - Cosmetic only modifications

### 🎮**Perfect For:**
• Players wanting cosmetic dominance
• Users seeking visual customization
• Streamers requiring safety
• Those wanting all outfits
• Users who prefer external performance
• Players seeking breast physics
• Those who want complete wardrobe access

### ⚔️**Naraka Bladepoint Features:**
• **Melee Combat** - Close-quarters fighting system
• **Hero Abilities** - Unique character powers
• **Parkour Movement** - Agile traversal mechanics
• **Battle Royale** - Last man standing gameplay
• **Mythical Setting** - Eastern-inspired world

### 🎯**Key Features:**
• **All Outfits Unlocked** - Complete cosmetic access
• **All Weapons Skins** - Every weapon customization
• **Breast Physics** - Enhanced character animations
• **External Design** - Safe and efficient performance
• **Cosmetic Only** - No gameplay advantages

---
**External skin changer with complete outfit and weapon unlock system including enhanced breast physics for ultimate cosmetic customization!**`)
            .addFields(
                {
                    name: '`👗` COMPLETE OUTFITS',
                    value: 'Unlock all available outfits in the game for complete character customization.'
                },
                {
                    name: '`⚔️` ALL WEAPONS SKINS',
                    value: 'Access every weapon skin available for maximum visual customization.'
                },
                {
                    name: '`💃` ENHANCED PHYSICS',
                    value: 'Enabled breast physics for more realistic and appealing character animations.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Extreme Naraka Skin Changer premium cheat.'
                }
            )
            .setColor('#FF69B4')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Extreme Naraka Skin Changer • External • Complete Cosmetic Unlock • Breast Physics',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};