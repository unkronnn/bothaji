const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_apexlegends',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔧 Mason : Apex Legends')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 55.750 / $3.00
**7 DAY**   — IDR 212.750 / $12.00
**30 DAY**  — IDR 389.250 / $23.00

A premium product for the game Apex Legend from Mason group.

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
• **Run from flash drive:** Yes
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** External

### 🔥**Comprehensive Feature List:**

**Aimbot Features:**
• Tab enabled / Enable Aimbot
• Aim key / Set activation key
• Aim radius / Set the radius of aimbot operation
• Aim smooth / Set smoothness of aimbot
• Aim spot / Set body part for targeting
• Auto switch / Automatically switch to next target within radius

**Visual ESP:**
• Tab enabled / Enable functions
• Show players / Display players
• Show dummies
• Show bounding box / Display square on opponent
• Show snapline / Display lines to enemy
• Show health bar / Display enemy health
• Show shield bar / Display enemy shield
• Show name / Display enemy class name
• Show weapon / Display enemy weapons
• Show distance / Display distance to enemy

**Loot ESP:**
• Show ground loot / Display loot
• Show loot name key / Set key to display loot name
• Show weapon loot / Display selected weapons
• Show ammo loot / Display selected cartridges
• Show attachment loot / Display weapon accessories
• Show gear loot / Display selected armor
• Show grenade loot / Display selected grenades
• Show supply loot / Display first aid kits and shields
• Ignore team / Don't display teammates
• Player distance limit / Set display distance limit
• Loot distance limit / Set item display distance limit
• Minimal loot rarity / Filter loot by rarity (common, rare, epic)

**Miscellaneous Features:**
• Tab enabled / Enable functions
• Reduce recoil / Weapon recoil control
• Recoil reduce percentage / Adjust reduction strength

**Config Management:**
• Save CPU / Optimize CPU resources
• Menu key / Set menu activation key
• Panic key / Immediate cheat shutdown
• Battle mode key / Enable player-only display mode
• Load config from clipboard
• Save config to clipboard

### 💎**Mason Advantages:**
✅ **Portable** - Can run from flash drive
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **StreamProof** - Safe for streaming
✅ **Comprehensive Loot System** - Advanced item filtering
✅ **Config Management** - Save/load configurations
✅ **CPU Optimization** - Resource efficient
✅ **Budget-Friendly** - Great value for features

---
**Portable external cheat with advanced features!**`)
            .addFields(
                {
                    name: '`💾` PORTABLE',
                    value: 'Can run directly from flash drive for maximum portability and security.'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Apex Legends cheat.'
                }
            )
            .setColor('#32CD32')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Apex Legends • Portable External Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};