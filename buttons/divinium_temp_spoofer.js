const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'divinium_temp_spoofer',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Divinium : Temporary Spoofer')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 213.500 / $12.50
**30 DAY**  — IDR 407.500 / $24.00
**90 DAY**  — IDR 775.750 / $46.00
**LIFETIME** — IDR 977.750 / $58.00

### 📝**What is a Temporary Spoofer?**
A temporary spoofer changes your device's HWID only while it's powered on. The original HWID returns after restarting the device, as the change isn't saved permanently and only applies during use.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy
• **Windows Reinstall:** Not required but highly recommended

### 🎮**Supported Motherboards:**
**All motherboards are supported** - Full compatibility guaranteed!

### 🛡️**Supported Anti-Cheats:**
• **Easy Anti-Cheat** (Fortnite, Apex Legends, etc.)
• **BattlEye** (Rainbow Six Siege, DayZ, etc.)
• **Ricochet** (Call of Duty)
• **ACE** (Delta Force, Arena Breakout Infinite, etc.)

### ⚡**Usage Instructions:**
1. Run the spoofer before launching your game
2. Your HWID is spoofed while your PC is on
3. Original HWID returns after restart
4. Perfect for temporary gaming sessions

---
**Temporary protection with full anti-cheat compatibility!**`)
            .addFields(
                {
                    name: '`⚠️` USAGE NOTE',
                    value: 'This spoofer is active only while your PC is powered on. Restart your PC to restore original HWID.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to select your subscription duration.'
                }
            )
            .setColor('#FF8C00')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Temporary HWID Protection by Divinium',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};