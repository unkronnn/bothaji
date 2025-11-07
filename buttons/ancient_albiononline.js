const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_albiononline',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Ancient : Albion Online')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 256.000 / $15.00
**30 DAY**  — IDR 499.500 / $30.00

A premium product for the game Albion Online from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD (1000 series+)
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** External

### 🔥**Comprehensive Feature List:**

**Main Controls:**
• Zoom control
• Transparency adjustment
• Point Scale control
• Text Scale adjustment
• Disable radar keybind
• Disable player keybind

**Players ESP:**
• Enable/disable toggle
• Draw Is On Mount detection
• Name display
• Health bar
• Distance indicator
• Draw Players in your party

**World Resources ESP:**
• Tier filtering for all resources
• Wood detection
• Rock detection
• Fiber detection
• Ore detection
• Hide detection

**Chests & Loot:**
• Regular chests display
• Hidden chests detection
• Avalon Drone chests
• Lootbag ESP (Player & Mob)

**Mobs & Creatures:**
• Tier-based mob filtering
• Resource mobs detection
• Draw Hostile mobs
• Draw Boss mobs
• Draw Miniboss
• Draw Debug mobs
• Wisp ESP (Common, Uncommon, Rare, Epic, Legendary)
• Mists Boss detection

**Dungeon Features:**
• Draw Distance to dungeons
• Debug information
• Solo dungeon detection
• Group dungeon detection
• Corrupted dungeon detection
• Hellgate detection
• Mist Portal detection

### 💎**Ancient Advantages:**
✅ **Free Built-in Spoofer** - No need to purchase separately
✅ **Comprehensive ESP** - Players, Resources, Mobs, Dungeons
✅ **Advanced Filtering** - Tier-based filtering for all content
✅ **Specialized Features** - Avalon Drone & Hidden chests
✅ **StreamProof** - Safe for streaming
✅ **External Technology** - Maximum safety

---
**Complete Albion Online solution with free spoofer!**`)
            .addFields(
                {
                    name: '`⚠️` FREE SPOOFER',
                    value: 'Built-in spoofer included - save money on separate purchase!'
                },
                {
                    name: '`🔍` COMPREHENSIVE ESP',
                    value: 'Complete world awareness with players, resources, mobs, and dungeons.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient Albion Online cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient Albion Online • External with Free Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};