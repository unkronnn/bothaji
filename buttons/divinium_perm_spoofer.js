const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'divinium_perm_spoofer',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔒 Divinium : Permanent Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 TIME**  — IDR 322.750 / $19.00
**LIFETIME** — IDR 977.750 / $58.00

### 📝**What is a Permanent Spoofer?**
A permanent spoofer changes your device's HWID (the unique identifier that gets banned) and ensures the new HWID remains even after shutting down, restarting, or resetting your PC. Unlike temporary spoofers that revert after a reboot, our permanent spoofer guarantees long-term protection, keeping you unbanned regardless of your key duration.

### 🔧**Variant Differences:**

**1 Time (24-hour key):**
• Permanently changes your system identifiers
• Best for legitimate players wanting future protection
• Spoof remains even after reinstall

**Lifetime:**
• Unlimited access to re-spoof anytime
• Perfect for cheaters who anticipate future bans
• Permanent spoof with unlimited re-spoofer usage

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy
• **Windows Reinstall:** Not required but highly recommended

### 🎮**Supported Motherboards:**
Asus, MSI, Gigabyte, Aorus, Asrock, NZXT, Biostar

### 🎯**Supported Games/Anti-Cheats:**
Fortnite, Apex Legends, Rust, Dungeonborn, Dark and Darker, Arena Breakout Infinite, Delta Force, Call of Duty, Rainbow Six Siege, Escape from Tarkov, and most other games.

---
**Permanent protection for your gaming account!**`)
            .addFields(
                {
                    name: '`⚠️` IMPORTANT',
                    value: 'This spoofer permanently modifies your system identifiers. Windows reinstall is recommended for best results.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to purchase your permanent spoofer.'
                }
            )
            .setColor('#4B0082')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Permanent HWID Protection by Divinium',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};