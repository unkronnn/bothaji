const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_apexlegends',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Ancient : Apex Legends')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 60.000 / $3.50
**7 DAY**   — IDR 256.000 / $15.00
**30 DAY**  — IDR 499.500 / $30.00

A premium product for the game Apex Legend from Ancient group.

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
• **Game Client:** Steam & EA App
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** External

### 🔥**Advanced Feature List:**

**Aimbot Features:**
• Enable toggle
• Ignore Knocked players
• Aim Only Visible
• Draw FOV
• FOV slider control
• Aim Bind assignment
• Smooth slider control
• Second Aim Bind
• Second Smooth slider

**Aimbot Misc:**
• Lock Target feature
• Aim Bone selection (Head, Neck, Chest, Stomach, Nearest)
• RCS Pitch slider
• RCS Yaw slider

**Triggerbot:**
• Enable toggle
• Trigger Bind
• Trigger Delay slider
• Trigger Distance slider

**Visual ESP:**
• Render Distance slider
• Draw Box (visible & invisible colors)
• Draw Knocked with color
• Draw Skeleton with color
• Draw Glow (visible & invisible colors)
• Draw Name with color
• Draw Distance with color
• Draw Health & Shield
• Draw Weapon with color
• Draw Offscreen indicators
• Draw Info & Seer abilities

**Style Customization:**
• Box Type (Default | Outline | Filled)
• Text Background colors
• Draw Kills, Rank, Level, Team
• Offscreen Range slider
• Glow Type selection
• Skeleton Thickness slider
• Seer Type configuration
• Weapon Type (Text, Icon)

**Loot ESP:**
• Enable with Icons & Names
• Loot Glow with colors
• Death Box display
• Distance rendering
• Categories: Weapons, Gear, Regen, Attachments, Ammo, Special
• Smart Loot system
• Custom Loot configuration

**Miscellaneous:**
• FOV Changer
• Auto Grapple & Wall Jump
• Auto Super Glide
• Auto Tap Strafe
• Big Map Radar
• Spectator Count
• FPS Limit & Display
• Config Save/Load system

---
**Feature-rich external cheat with built-in spoofer!**`)
            .addFields(
                {
                    name: '`⚠️` BUILT-IN SPOOFER',
                    value: 'Includes FREE built-in spoofer - no need to purchase separately!'
                },
                {
                    name: '`⚙️` MOST FEATURES',
                    value: 'Comprehensive cheat with advanced customization options.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient Apex Legends cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient Apex Legends • External with Free Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};