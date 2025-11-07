const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_dbd',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Stern : DBD - External Killer Picker Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 81.000 / $4.56
**7 DAY**   — IDR 121.750 / $6.85
**30 DAY**  — IDR 370.750 / $21.68
**LIFETIME** — IDR 2.516.500 / $147.19

A premium product for the game Dead By Daylight from Stern group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** -

### 👁️**Visual Features:**
• **Player ESP** - Survivor and killer detection
• **Generator ESP** - Generator location and status
• **Generator Percentage** - Real-time repair progress display
• **Tracers** - Visual tracking lines
• **Name ESP** - Player identification tags
• **Hook ESP** - Hook location and status
• **Chest ESP** - Chest position and contents
• **Distance ESP** - Range information for all objects
• **Killer ESP** - Enhanced killer detection
• **Trap ESP** - Trap location and status
• **Hatch ESP** - Hatch location and availability
• **Locker ESP** - Locker position detection
• **Totem ESP** - Totem location and status
• **Window ESP** - Window position and state
• **Pallet ESP** - Pallet location and condition
• **Breakable ESP** - Breakable wall detection
• **Exit Gate ESP** - Exit gate status and location
• **Box ESP** - Bounding box display
• **Radar ESP** - Minimap for killers, survivors, and objects
• **Conceal System** - Hide pallets, doors, chests when broken/searched

### ⚙️**Miscellaneous Features:**
• **Anonymous Mode** - Hide player names in ESP for privacy
• **Field of View Changer** - Customizable FOV settings
• **Killer Info** - Detailed killer information display
• **Killer Ping** - Network latency information
• **Killer Picker** - Select any killer, even without DLC
• **Survivor Aura** - See survivor auras when playing as killer
• **Player Aura** - Enhanced player visibility system

### 💎**Stern Advantages:**
✅ **Killer Picker** - Access to all killers without DLC
✅ **External Security** - Maximum stability and safety
✅ **Comprehensive ESP** - Complete game awareness system
✅ **Anonymous Mode** - Privacy protection features
✅ **Lifetime Option** - Permanent access available
✅ **Radar System** - Complete minimap functionality
✅ **Generator Progress** - Real-time repair tracking
✅ **Multi-Client Support** - Steam & Epic Games compatible

### 🎮**Perfect For:**
• Killer main players wanting all characters
• Users seeking maximum ESP coverage
• Privacy-conscious players
• Competitive Dead By Daylight enthusiasts
• Players wanting lifetime access
• Those who need comprehensive game awareness
• Users who prefer external safety

### 🔪**Dead By Daylight Features:**
• **Killer Roster** - Diverse killer characters with abilities
• **Generator System** - Core repair mechanic
• **Survival Mechanics** - Hide and seek gameplay
• **Perk System** - Character customization
• **Rank System** - Competitive progression

### 🎯**Key Features:**
• **Killer Picker** - Access to all killers without requiring DLC
• **Comprehensive ESP** - Complete game awareness with all objects
• **Anonymous Mode** - Privacy protection with name hiding
• **Generator Progress** - Real-time repair percentage tracking
• **External Security** - Maximum stability and safety
• **Lifetime Access** - Permanent ownership option available

---
**External cheat with killer picker and comprehensive ESP system for ultimate Dead By Daylight dominance!**`)
            .addFields(
                {
                    name: '`🔪` KILLER PICKER',
                    value: 'Access to all killer characters without requiring DLC purchases.'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: 'Complete game awareness with all objects, players, and interactive elements.'
                },
                {
                    name: '`🔒` ANONYMOUS MODE',
                    value: 'Privacy protection features that hide player names in ESP displays.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern DBD premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern DBD • External • Killer Picker • Comprehensive ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};