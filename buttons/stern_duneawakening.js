const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_duneawakening',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 Stern : Dune: Awakening - External with Aimbot & Lifetime Option')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 487.750 / $28.52
**LIFETIME** — IDR 2.146.000 / $125.51

A premium product for the game Dune: Awakening from Stern group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Epic Games
• **Run from Flash Drive:** No
• **Built-in Spoofer:** No
• **Software Type:** External

### 🎯**Aimbot Features:**
• **Player Aimbot** - Advanced targeting system
• **Aim Key** - Customizable activation key
• **Smooth Settings** - Human-like aim smoothing
• **FOV Settings** - Adjustable field of view
• **Circle FOV** - Visual field of view indicator
• **Max Distance** - Target distance limitation
• **Delay Settings** - Aim delay customization
• **Aim Assist** - Subtle aim assistance
• **Team Check** - Prevent targeting allies

### 👁️**Visual Player Features:**
• **Player SkeletonESP** - Bone structure visualization
• **Player BoxESP** - Bounding box display
• **Player Distance** - Distance measurement
• **Player Weapon** - Current weapon display
• **Player Name** - Name identification
• **Player Level** - Level information
• **Player Line** - Directional indicators
• **Team Check** - Team identification
• **Eyes Direction** - View direction display
• **Set Maximum Distance** - ESP distance control

### 🗺️**Visual World Features:**
• **Blood Water Extractor** - Resource location display
• **Generator** - Power source identification
• **Loot Container** - Container highlighting
• **Scrap Metal** - Resource location ESP
• **Azurite** - Mineral detection
• **Temp Loot Container** - Temporary container ESP
• **Scrap Electronics** - Electronic resource display
• **Respawn Beacon** - Beacon location tracking
• **NPC Soldier** - Enemy position identification

### 📡**Radar System:**
• **Enable Radar** - Mini-map overview system

### 💎**Stern Advantages:**
✅ **Advanced Aimbot** - Professional targeting system
✅ **Lifetime Option** - One-time purchase available
✅ **Complete ESP** - Full visual awareness system
✅ **Multi-client Support** - Steam & Epic Games compatible
✅ **Stream Protection** - Content creator safe
✅ **Professional Features** - High-end functionality
✅ **Lifetime Value** - Best long-term investment

### 🏜️**Perfect For:**
• Competitive players requiring aim assistance
• Users wanting lifetime access option
• Players needing comprehensive ESP system
• Streamers requiring safety features
• Users with Steam or Epic Games
• Those wanting professional aimbot
• Players seeking long-term value

### 🔮**Dune: Awakening Features:**
• **Desert Combat** - Intense battle scenarios
• **Resource Control** - Strategic resource management
• **Survival Elements** - Harsh environment navigation
• **Political Systems** - Complex faction dynamics
• **Story Integration** - Rich narrative elements

### 🎯**Key Features:**
• **Advanced Aimbot** - Professional targeting with full customization
• **Complete ESP System** - Full visual awareness of players and world
• **Lifetime Option** - One-time purchase for unlimited access
• **Multi-client Support** - Works with Steam and Epic Games

---
**External cheat with advanced aimbot, comprehensive ESP, and lifetime option for ultimate Dune: Awakening control!**`)
            .addFields(
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Professional targeting system with full customization and human-like smoothing.'
                },
                {
                    name: '`👁️` COMPLETE ESP',
                    value: 'Full visual awareness system covering players, resources, and world objects.'
                },
                {
                    name: '`💎` LIFETIME OPTION',
                    value: 'One-time purchase option for unlimited lifetime access.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern Dune: Awakening premium cheat.'
                }
            )
            .setColor('#C0C0C0')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern Dune: Awakening • External • Advanced Aimbot • Lifetime Option',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};