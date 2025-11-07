const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_arksurvival',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔫 SMG : ARK Survival Ascended')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 128.750 / $7.50
**7 DAY**   — IDR 490.500 / $29.00
**30 DAY**  — IDR 897.250 / $54.00

A premium product for the game ARK: Survival Ascended from SMG group.

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
• **Game Client:** Steam
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** External

### 🔥**Comprehensive Feature List:**

**Player ESP:**
• Bounding Box
• Skeleton display
• Name, Distance, Health, Level
• Line to Player
• Toggle Players/Sleepers/Dead Players
• Visibility Check
• Toggle Tribe/Enemy
• Max Distance Slider

**Dino ESP:**
• Bounding Box
• Distance, Name, Health, Level
• Line to Dino
• Toggle Wild/Tamed/Dead Dino
• Visibility Check
• Sorting by Name/Level
• Toggle Tribe
• Max Distance Slider

**Advanced Aimbot:**
• Toggle Aimbot
• Aim Player/Dino
• Custom Bone Target
• Aim Style (FOV, Distance, etc.)
• Aim Smoothing Toggle
• Smooth Size Control
• Show FOV
• FOV Size control
• Draw Target Locked
• Toggle Aim Players
• Visibility Check
• Max Distance Slider
• Prediction
• Fine-Tuning Ballistics
• Ignore Allies

**Object ESP (Structures & Items):**
**Turrets:**
• Tek Generator, Generator
• Lite, Heavy, Tek Turret
• Anti Flyer, Tesla, Organic Turret

**Teleportation & Crafting:**
• Transmitter
• Mini/Mid/Teleport
• Replicator, Forge
• Industrial/Steam Forge
• Chemistry Bench, Incubator
• Fabricator, Gene Infuser

**Storage & Structures:**
• Industrial Cooking, Grill, Grinder
• Preserving Bin, Gas Collector
• Tribe Tower, Oil Pump
• Trough, Tek Trough
• Cloning Chamber, Cryo Fridge
• Tek Shield, Vault, Barrel
• Large Storage, Library, Box
• Treasure, Fridge
• Modern Bed, Coffin, Simple Bed
• Sleeping Bag, Tek Bed

**Vehicles & Explosives:**
• Raft, Motor Raft
• C4, Sea Mine
• Bags, Dropped Items

**Special Features:**
• Explorer Notes
• Orbital and Cave Drops
• Structures (giving spam)
• Show Turret Info Ammo
• Number of slots
• Ignore Allies
• Ignore Empty
• Custom Colors
• Health display
• Custom Titles
• Max Distance Slider

**Miscellaneous:**
• Custom Crosshair
• Photo Mode Through Walls
• FOV Change
• Zoom Hack
• Unlock Researcher's Notes (quickly gain level 72+)
• Config Saving
• Custom Fonts
• Bind Menu, Mod Battle, Panic Button

### 💎**SMG Advantages:**
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **Advanced Aimbot** - Professional targeting with prediction
✅ **Comprehensive ESP** - Players, Dinos, Objects
✅ **Complete Object Coverage** - All structures and items
✅ **Quality of Life** - Level unlock, crosshair, zoom
✅ **StreamProof** - Safe for streaming
✅ **Customization** - Colors, fonts, distances
✅ **Professional Features** - Battle mode, panic button

### 🎮**Perfect For:**
• Competitive ARK players
• Base raiders and defenders
• Players needing advanced aimbot
• Power users wanting comprehensive coverage
• Streamers needing essential features
• Players who want leveling advantages

---
**Most comprehensive ARK cheat with aimbot and full ESP!**`)
            .addFields(
                {
                    name: '`🔫` ADVANCED AIMBOT',
                    value: 'Professional aimbot with prediction, fine-tuning, and bone targeting.'
                },
                {
                    name: '`🏗️` COMPLETE ESP COVERAGE',
                    value: 'Every structure, item, and player element covered - the most comprehensive available.'
                },
                {
                    name: '`⚡` LEVEL BOOST',
                    value: 'Unlock Researcher\'s Notes to quickly reach level 72+!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG ARK Survival Ascended cheat.'
                }
            )
            .setColor('#2E8B57')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG ARK Survival Ascended • Advanced Aimbot • Comprehensive ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};