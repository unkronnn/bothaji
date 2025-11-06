const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'avalanche_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏔️ Avalanche : Arena Breakout: Infinite')
            .setDescription(`
### 🧾**Pricing**
**3 DAY**   — IDR 362.500 / $20.00
**7 DAY**   — IDR 724.500 / $40.00

A premium product for the game Arena Breakout from Avalanche group.

### 💻**System Compatibility:**
• **Processors:** Intel only
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher
• **Run from flash drive:** Yes
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Internal

### 🔥**Comprehensive Feature List:**

**Aimbot Features:**
• Enable Aimbot
• FOV control with value
• Speed adjustment
• Only visible targeting
• Lock target feature
• Key 1 & Key 2 binding
• Bone selection (Random, Head, Body, Neck, Pelvis)
• RCS Value control
• Velocity Prediction
• Drop Prediction
• Separate keys for prediction and bone switching

**ESP Features:**
• **Player ESP:**
  - Distance, Skeleton, Direction
  - Name, Weapon, Inventory Value
  - Skip team option
• **SCAV ESP:**
  - Distance, Skeleton, Weapon
  - Inventory Value, Direction
• **Corpse ESP:**
  - Distance display
• **Loot ESP:**
  - Distance, Show distance
  - Weapons, Weapon adapters, Ammo
  - Armor, Recovery items
  - Mybag, Vestbag, Containers
  - Avatar, Safe, Pocket, Badge, Items
  - Price filtering (Use Price, Min. Price)

**Misc Features:**
• Crosshair with type selection
• Radar system with size, distance, scale
• Triangle display options
• Player and Scav on radar
• Color configuration for all ESP elements

### 💎**Avalanche Advantages:**
✅ **Internal Technology** - Maximum performance
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **Advanced Prediction** - Velocity and drop prediction
✅ **Comprehensive ESP** - Players, SCAV, Loot, Corpse
✅ **Radar System** - Complete battlefield awareness
✅ **Portable** - Can run from flash drive
✅ **Intel Optimized** - Best performance on Intel processors

### 🎮**Perfect For:**
• Intel processor users
• Players wanting internal performance
• Users needing prediction features
• Loot collectors with price filtering
• Players who want comprehensive ESP
• SCAV mode players

---
**Internal cheat with advanced prediction and spoofer!**`)
            .addFields(
                {
                    name: '`⚠️` INTEL ONLY',
                    value: 'Optimized specifically for Intel processors for maximum performance.'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`🔮` ADVANCED PREDICTION',
                    value: 'Velocity and drop prediction for perfect aiming accuracy.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Avalanche Arena Breakout cheat.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Avalanche Arena Breakout: Infinite • Internal with Free Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};