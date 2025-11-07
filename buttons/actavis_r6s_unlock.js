const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'actavis_r6s_unlock',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔓 Actavis : R6S Unlock All - Internal Complete Cosmetic Unlock')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 2.490.250 / $150.00

A premium product for the game Rainbow Six Siege X from Actavis group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Steam
• **Built-in Spoofer:** No
• **Software Type:** Internal

### ⚠️**Important Note:**
**This product is not client-side only, which means other people can see your skin too!**

### 🔓**Unlock All Features:**
• **Unlock All Skins + Operators Tool** - Complete cosmetic access
• **2144 charms (ALL UNLOCKED)** - Every charm available
• **333 skins (ALL UNLOCKED)** - Complete skin collection
• **Unlock all headgears** - All head accessories
• **Unlock all uniforms** - Every uniform available
• **Infinite credits** - Unlimited in-game currency
• **Infinite renowns** - Unlimited progression points
• **All alpha packs** - Every reward pack unlocked

### 💎**Actavis Advantages:**
✅ **Internal Software** - Superior performance and stability
✅ **Complete Unlock** - All cosmetics available
✅ **Client-Side Visibility** - Others can see your skins
✅ **Social Dominance** - Show off rare items
✅ **Unlimited Currency** - Never worry about credits
✅ **Regular Updates** - Latest content supported
✅ **Premium Quality** - Professional-grade unlocking
✅ **Cosmetic Freedom** - Mix and match freely

### 🎮**Perfect For:**
• Players wanting complete cosmetic collection
• Users seeking social dominance
• Those wanting to show off rare items
• Players who enjoy customization
• Users wanting unlimited currency
• Collectors seeking complete sets
• Players wanting visual prestige

### 🛡️**Rainbow Six Siege Features:**
• **Tactical Gameplay** - Strategic team-based combat
• **Destructible Environments** - Dynamic map interactions
• **Operator System** - Unique character abilities
• **Close-Quarters Combat** - Intense CQB action
• **5v5 Matches** - Competitive team play

### 🎯**Key Features:**
• **Complete Cosmetic Unlock** - All skins, operators, and accessories
• **Client-Side Visibility** - Other players can see your collection
• **Unlimited Currency** - Infinite credits and renown
• **Internal Design** - Superior performance integration
• **Regular Updates** - Latest content compatibility

### ⚠️**Usage Notes:**
• **Visibility:** Other players CAN see your skins and cosmetics
• **Social Impact:** Show off your complete collection
• **Account Safety:** Use at your own discretion
• **Premium Experience:** Ultimate cosmetic domination

---
**Internal unlock all cheat with complete cosmetic access, unlimited currency, and client-side visibility for ultimate Rainbow Six Siege cosmetic dominance!**`)
            .addFields(
                {
                    name: '`🔓` COMPLETE UNLOCK',
                    value: 'All skins, operators, charms, headgears, and uniforms unlocked instantly.'
                },
                {
                    name: '`💰` UNLIMITED CURRENCY',
                    value: 'Infinite credits and renown for purchasing anything you want.'
                },
                {
                    name: '`👀` CLIENT-SIDE VISIBILITY',
                    value: 'Other players can see your skins and cosmetics for social dominance.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Actavis Rainbow Six Siege Unlock All premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Actavis Rainbow Six Siege • Internal • Complete Unlock All • Client-Side Visibility',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};