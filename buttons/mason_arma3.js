const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_arma3',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔧 Mason : Arma 3')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 69.750 / $4.00
**7 DAY**   — IDR 292.500 / $17.00
**30 DAY**  — IDR 518.750 / $31.00

A premium product for the game Arma 3 from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
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

### 🔥**Aimbot Features:**
• **Enabled** - Activate silent-aimbot
• **Aim Key** - Set a key for the aimbot (hold down to work)
• **Auto Switch** - Automatically switch to next target within firing range
• **Aim Spot** - Choose body part: Head/Head, Chest/Chest
• **Aim Distance Limit** - Set working distance of aimbot
• **Aim Radius** - Set working radius of aimbot

### 🔍**Visual ESP Features:**
• **Enabled** - Activate ESP
• **Show Players** - Display players
• **Show Invisible Players** - Display invisible players (admins, moderators)
• **Show Bounding Box** - Display 2D squares on players
• **Show Player Name** - Display player names
• **Show Vehicle Name** - Display vehicle names
• **Show Player Health** - Display players' health
• **Show Vehicle Health** - Display equipment strength

### 🚗**Vehicle ESP Categories:**
• **Heavy Vehicles** - Tanks, UAVs, attacking drones, turrets, mortars
• **Recon Vehicles** - Jeeps, ATVs, motorcycles, etc.
• **Air Vehicles** - Planes, helicopters, paragliders
• **Water Vehicles** - Ships and submarines
• **Show Distance** - Display distance to objectives

### ⚙️**Miscellaneous Features:**
• **Enabled** - Activate other functionality
• **Spoof Stamina** - Infinite Endurance
• **Remove Recoil** - Remove weapon recoil
• **Remove Sway** - Remove weapon shaking
• **Aspect Ratio** - Change the aspect ratio
• **Noclip** - Fly around the map, pick up items and kill players

### 🎛️**Interface Features:**
• **Menu Key** - Set key to display cheat menu
• **Save CPU** - Slow down cheat by reducing CPU load
• **Show Crosshair** - Select crosshair in center of monitor
• **Show Aim Radius** - Display aimbot trigger radius
• **Panic Key** - Urgently disable cheat during game
• **Ignore Team** - Toggle team ignoring
• **Ignore Player on Crosshair** - Add nearest player to friendly list
• **Clear Ignore List** - Remove all ignored players

### 💎**Mason Advantages:**
✅ **Affordable Pricing** - Budget-friendly military tactical solution
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **Silent Aimbot** - Undetectable aiming technology
✅ **Comprehensive Vehicle ESP** - All vehicle categories covered
✅ **Infinite Stamina** - Unlimited endurance for tactical advantage
✅ **Noclip** - Fly around the map freedom
✅ **StreamProof** - Safe for streaming
✅ **CPU Optimization** - Adjustable performance

### 🎮**Perfect For:**
• Budget-conscious military tactical players
• Users needing vehicle awareness
• Players wanting infinite stamina
• Tactical operators needing mobility (noclip)
• Streamers requiring essential features
• Players who want comprehensive battlefield awareness

### 🪖**Key Features:**
• **Silent Aimbot** with bone targeting
• **Complete Vehicle ESP** - Land, air, sea, heavy vehicles
• **Infinite Stamina** for tactical advantage
• **Noclip** for map freedom and surprise attacks
• **Team Management** - Ignore system for different server types

---
**Most affordable Arma 3 cheat with comprehensive tactical features!**`)
            .addFields(
                {
                    name: '`💰` BEST VALUE',
                    value: 'Most affordable Arma 3 cheat with silent aimbot and comprehensive ESP.'
                },
                {
                    name: '`🚗` COMPLETE VEHICLE ESP',
                    value: 'All vehicle categories - heavy, recon, air, water vehicles covered.'
                },
                {
                    name: '`⚡` INFINITE STAMINA',
                    value: 'Unlimited endurance for tactical military operations.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Arma 3 cheat.'
                }
            )
            .setColor('#32CD32')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Arma 3 • External • Silent Aimbot • Comprehensive ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};