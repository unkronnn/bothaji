const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'phoenix_arksurvival',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Phoenix : ARK Survival Evolved')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 40.000 / $2.45
**7 DAY**   — IDR 120.250 / $7.36
**30 DAY**  — IDR 229.750 / $14.06

A premium product for the game ARK: Survival Evolved from the Phoenix group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Internal

### 🔥**Comprehensive ESP Features:**

**Player ESP:**
• Sleeping players detection
• Dead players detection
• Box ESP for players
• Skeleton display
• Head dot indicator
• Name display
• Health bar
• Distance indicator
• Ammo count
• Snaplines to players

**Animal ESP:**
• Walking dinosaurs
• Flying dinosaurs
• Water dinosaurs
• Health display
• Distance indicator
• Snaplines to dinosaurs
• Dino level display
• Tamed dinosaurs identification
• Dino filter options

**World ESP:**
• Dropped Items detection
• Death Loot display
• Supply Crates
• Storage Boxes
• Turret locations
• BeeHive locations
• Sleeping Bag detection
• Distance indicators
• Snaplines to objects

**Miscellaneous Features:**
• Render Distance control
• Customization colors
• Auto-Flak Changer
• No Grass (improved visibility)

### 💎**Phoenix Advantages:**
✅ **Most Affordable** - Budget-friendly pricing
✅ **Internal Technology** - Maximum performance
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **StreamProof** - Safe for streaming
✅ **Universal Client Support** - Steam & Epic Games
✅ **Full Resolution Support** - Including fullscreen
✅ **Comprehensive Coverage** - Players, Animals, World Objects
✅ **Quality of Life** - No Grass, Render Distance

### 🎮**Perfect For:**
• Budget-conscious players
• ARK: Survival Evolved players
• Users wanting internal performance
• Streamers needing essential features
• Players who want maximum visibility
• Those who need comprehensive ESP

### 🦕**Key Features:**
• **Complete Awareness** - Players, dinosaurs, world objects
• **Tamed/Wild Dino Filtering** - Identify which dinosaurs are claimed
• **Quality of Life** - No grass for better visibility
• **Universal Compatibility** - Works with both Steam and Epic Games

---
**Most affordable internal ARK cheat with comprehensive ESP!**`)
            .addFields(
                {
                    name: '`💰` BEST VALUE',
                    value: 'Most affordable ARK cheat with comprehensive ESP features and free spoofer!'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`🌿` NO GRASS',
                    value: 'Remove grass for better visibility and performance.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Phoenix ARK Survival Evolved cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Phoenix ARK Survival Evolved • Internal • Best Value',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};