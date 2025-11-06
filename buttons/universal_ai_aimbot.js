const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'universal_ai_aimbot',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🤖 Universal AI Aimbot')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 78.750 / $4.60
**7 DAY**   — IDR 296.250 / $17.00
**30 DAY**  — IDR 541.750 / $32.00
**90 DAY**  — IDR 1.322.000 / $80.00
**1 YEAR**  — IDR 2.925.750 / $177.00

### 💻**System Requirements:**
• **Processors:** Intel i5 10th Gen+ / Ryzen 5 5th Gen+ (Laptops not supported)
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** RTX 3060+ / AMD equivalent
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Supported Games:**
**Core Games:**
• Valorant
• CS2
• Fortnite
• Apex Legends
• Blood Strike (PC)

**Plus 15+ other FPS titles** (Only games known and recognized by AI)

### 🛠️**Hardware Requirements:**
• **KMBox Net / Makcu:** Required (except Blood Strike and CS2)
• **Second PC:** Optional (for better security)
• **Game Client:** Any game platform

### 🎯**Feature List:**

**Aimbot Settings:**
• Enable/Disable toggle
• Aimbot FOV control
• TriggerRange adjustment
• Offset Preset (predefined bone targeting)
• Manual Offset targeting
• X-speed / Y-speed (aim speed control)
• Smoothing (aim smoothness)
• Second aimbot instance (same settings)

**Triggerbot:**
• Enable/Disable toggle
• Triggerbot Delay (delay between shots)
• Sensitivity adjustment (Lower/Higher)
• First Shot Delay

**RCS (Recoil Control System):**
• Enable/Disable toggle
• RCS Strength (recoil compensation level)

**Hardware Modes:**
• Mouse mode (no KMBox required)
• KMENT mode (requires KMBox)

**Screenshot Modes:**
• GPU Mode (higher AI FPS, may affect game performance)
• CPU Mode (stable game performance, lower AI FPS)

**AI Configuration:**
• Confidence (detection threshold)
• IOU (accuracy vs. speed trade-off)

**Advanced Features:**
• Detection Window (shows AI's visual input)
• Adaptive TriggerRange (dynamically adjusts FOV)
• Box Scale (size of detection box)
• Custom hotkey assignments

---
**Universal AI solution for 15+ FPS games!**`)
            .addFields(
                {
                    name: '`⚠️` SYSTEM REQUIREMENTS',
                    value: 'High-end PC required. Laptops not supported. Minimum RTX 3060 / Intel i5 10th Gen needed.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to select your subscription duration.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Universal AI Aimbot • Advanced Visual Recognition',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};