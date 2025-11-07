const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'oracle_valorant_spoofer',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎯 Oracle : Valorant Spoofer')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 999.000 / $60.00
**LIFETIME** — IDR 2.996.500 / $180.00

### 🌟**Meet Oracle : HWID Spoofer - Your Ultimate Valorant Solution!**

Tired of complicated setups, bricked motherboards, hardware compatibility issues, and endless headaches? Say goodbye to all those issues with Oracle : HWID Spoofer, the ultimate solution that gives you full control over your serials!

### 💎**Key Features:**

**💎 Utmost Safety:**
• Does NOT flash your BIOS
• Install and uninstall with one click
• No risk of bricking your motherboard
• Won't invalidate your warranty!

**💎 Full Compatibility:**
• Supports all motherboards
• Works seamlessly with TPM 2.0
• HVCI and Secure Boot enabled support!

**💎 One-Click Magic:**
• One click to get spoofed and ready to play
• Restore original serials anytime with one additional click
• No complicated setup required

**💎 Anonymity:**
• Prioritize your privacy
• Does NOT collect your data (except minimum needed)
• Pay with cryptocurrencies for complete anonymity!

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Windows Reinstall:** Not required but highly recommended
• **Motherboards:** Any motherboard (including Laptops)
• **Spoof Type:** Temporary

### 🛡️**Advanced Bypass Features:**
✅ Supported HCVI, TPM & SB Bypass: **YES**
✅ New TPM Chip for Valorant Required: **NO**
✅ Bios Update Required: **NO**

### 🎯**Supported Games:**
**Valorant** - Specifically optimized for Valorant's anti-cheat system

---
**The safest, most convenient Valorant spoofer on the market!**`)
            .addFields(
                {
                    name: '`⚠️` SAFETY GUARANTEE',
                    value: 'Oracle does NOT modify your BIOS or hardware. Completely safe and reversible.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Oracle Valorant spoofer.'
                }
            )
            .setColor('#FF1493')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Oracle - The Ultimate Valorant Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};