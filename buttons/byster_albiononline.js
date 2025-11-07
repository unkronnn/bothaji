const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'byster_albiononline',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🗺️ Byster : Albion Online')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 108.250 / $6.00
**7 DAY**   — IDR 310.250 / $18.00
**30 DAY**  — IDR 932.000 / $55.00

A premium product for the game Albion Online from Byster group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Software Type:** External

### 🔥**Advanced Feature List:**

**Visual ESP:**
• Display players
• Display mobs
• Display wisps
• Display crystal mobs
• Display dungeons
• Show radar
• Adjustable ESP radius
• Adjustable radar size
• Battle mode (Tab key)

**Loot ESP:**
• Enable loot display
• Display wood resources
• Display ore resources
• Display stone resources
• Display hide resources
• Display cotton resources
• Loot quality selection
• Resource type filtering

**Color Customization:**
• Loot color control
• Ore color control
• Wood color control
• Cotton color control
• Stone color control
• Player color control
• Mob color control
• Crystal mob color control
• Wisp color control
• Hide color control

### 🌟 **Avalon Portal System:**
**Mini-map Display:**
• Display mini-map of current location
• Information about location and zone name
• List of available zones with Tier indication

**Available Zones:**
• **Firos-Osinsum** (T6)
• **Hebos-Ulamsum** (T6)
• **Coues-Exakrom** (T4)
• **Oebos-Ixakaum** (T4)
• **Fieos-Aiuttum** (T6)
• **Cetos-Obaelos** (T6)
• **Tetos-Igaelum** (T6)
• **Xurites-Ataglos** (T6)
• **Quaent-Al-Vynsum** (T6)

**Portal Features:**
• Zone search functionality
• Display of active portals on the map
• Real-time portal status updates

### 💎**Byster Advantages:**
✅ **Avalon Portal System** - Unique portal mapping feature
✅ **Advanced Color Customization** - Full control over ESP colors
✅ **Comprehensive ESP** - Players, mobs, resources, dungeons
✅ **Quality Filtering** - Filter loot by quality tiers
✅ **StreamProof** - Safe for streaming
✅ **Universal Client Support** - Steam & Official Launcher
✅ **Zone Intelligence** - Complete zone and portal information

### 🎮**Perfect For:**
• Avalon raiders and explorers
• Players who need zone intelligence
• Resource farmers with quality filtering
• Portal campers and hunters
• Players who want full customization

---
**Advanced Albion Online cheat with unique Avalon Portal System!**`)
            .addFields(
                {
                    name: '`🌟` AVALON PORTAL SYSTEM',
                    value: 'Unique feature showing all active portals and zone information!'
                },
                {
                    name: '`🎨` FULL CUSTOMIZATION',
                    value: 'Complete color control over all ESP elements.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Byster Albion Online cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Byster Albion Online • Advanced Portal System',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};