const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'btg_apexlegends',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 BTG : Apex Legends')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 96.250 / $5.50
**7 DAY**   — IDR 218.750 / $13.00
**30 DAY**  — IDR 506.750 / $30.00

A premium product for the game Apex Legend from Break The Game group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**Feature List:**

**Visual ESP:**
• Skeleton players
• 2D Boxes Players
• Filled Boxes Players
• Lines Players
• Distance Players
• NickNames Players
• Armor Bar
• Text background
• Distance to draw ESP
• Distance to draw Items
• Draw spectators count

**Aimbot:**
• Enable Aim Bot
• Aim Bone selection
• FOV Size control
• Aim Key assignment
• Distance targeting
• Aim Speed control
• Draw Aim FOV

**Loot ESP:**
• Resources & BackPacks
• Food & Medical Items
• Weapons & Ammo
• Traps & Barrels
• Hemps & Containers
• Doors & Boxes
• Deployables & Turrets
• Stashes & Vehicles
• Tools & Clothes
• Animals

**Other Features:**
• Menu show/hide button
• Language switching support

---
**Comprehensive external cheat for Apex Legends!**`)
            .addFields(
                {
                    name: '`⚠️` EXTERNAL SOFTWARE',
                    value: 'Safe external cheat with comprehensive ESP and aimbot features.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BTG Apex Legends cheat.'
                }
            )
            .setColor('#FF6347')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BTG Apex Legends • External Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};