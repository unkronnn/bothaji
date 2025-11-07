const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔧 Mason : Arena Breakout: Infinite (Aim Only)')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 55.750 / $3.00
**7 DAY**   — IDR 212.750 / $12.00
**30 DAY**  — IDR 389.250 / $23.00

A premium product for the game Arena Breakout: Infinite from Mason group.

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
• **Game Client:** Official Launcher
• **Software Type:** External

### 🔥**Aimbot Features:**

**Core Aimbot:**
• **Key** - Activation and operation key of the PCM aimbot (Right mouse button, cannot be changed)
• **Simple and clean interface** - Focused on essential aiming functionality

**Hotkey Controls:**
• **F1** - Increase FOV
• **F2** - Reduce FOV
• **F3** - Increase smoothness
• **F4** - Reduce smoothness
• **F5** - Reset all settings to default

### 💎**Mason Advantages:**
✅ **Most Affordable** - Budget-friendly pricing
✅ **Aim-Only Design** - Focused on essential functionality
✅ **Simple Controls** - Easy-to-use hotkey system
✅ **External Safety** - Maximum security
✅ **StreamProof** - Safe for streaming
✅ **Lightweight** - Minimal resource usage
✅ **Quick Setup** - Ready to use immediately
✅ **Reliable Performance** - Stable and consistent

### 🎮**Perfect For:**
• Budget-conscious players
• Users wanting only aimbot functionality
• Players who prefer simple controls
• Streamers needing essential features
• New players to cheating
• Users who want lightweight software
• Those who want quick and effective solution

### 🎯**Key Features:**
• **Right Mouse Activation** - Natural aimbot activation
• **FOV Adjustment** - Customize your aiming field of view
• **Smoothness Control** - Adjust aimbot smoothness for natural movement
• **Quick Reset** - Instantly reset to default settings
• **Essential Functionality** - No unnecessary features or complexity

### 📝**Usage Instructions:**
1. Activate with Right Mouse Button (default)
2. Use F1/F2 to adjust FOV for targeting range
3. Use F3/F4 to adjust smoothness for natural movement
4. Press F5 to reset all settings if needed
5. Focus on gameplay while the aimbot assists your targeting

---
**Most affordable aim-only solution for essential aiming!**`)
            .addFields(
                {
                    name: '`💰` BEST VALUE',
                    value: 'Most affordable option with reliable aimbot functionality.'
                },
                {
                    name: '`⚡` SIMPLE CONTROLS',
                    value: 'Easy-to-use hotkey system with intuitive FOV and smoothness controls.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Arena Breakout aimbot.'
                }
            )
            .setColor('#32CD32')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Arena Breakout: Infinite • Aim Only • Best Value',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};