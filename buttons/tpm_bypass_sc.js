const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'tpm_bypass_sc',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💻 TPM Bypass SC (Source Code)')
            .setDescription(`
### 🧾**Pricing**
**1 TIME PAYMENT** — IDR 4.057.750 / $250.00

### 📝**For Developers & Sellers**
We sell source code, suitable for developers/sellers who want to be part of your spoofer project. This is NOT a ready-to-use spoofer - it's source code for building your own spoofer.

### 🔧**Technical Specifications:**

**Key Features:**
• **Does not use drivers** - No kernel-level components
• **Fully permanent TPM spoof** - Sticks even after PC reset!
• **Modifies TPM settings** inside of TPM chip
• **Changes TPM Serial** permanently

### 💻**Development Benefits:**
✅ **Complete source code access**
✅ **No driver dependencies**
✅ **Permanent TPM modification**
✅ **Integrate into your spoofer project**
✅ **Resell rights potential**
✅ **Customizable implementation**

### 🎯**Perfect For:**
• Spoofer developers
• Anti-cheat researchers
• Security researchers
• Tool developers
• Resellers wanting their own spoofer

### ⚠️**Requirements:**
• Programming knowledge required
• Understanding of TPM technology
• Development environment setup
• Integration capabilities

### 🔒**Technical Details:**
• **Implementation:** Source code only
• **Driver Required:** No
• **Persistence:** Permanent (survives PC reset)
• **Target:** TPM chip modification
• **Complexity:** Advanced development level

---
**Complete source code for building your own TPM bypass solution!**`)
            .addFields(
                {
                    name: '`⚠️` DEVELOPER NOTICE',
                    value: 'This is source code only, not a ready-to-use product. Programming expertise required for implementation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to acquire the TPM bypass source code.'
                }
            )
            .setColor('#8B0000')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'TPM Bypass Source Code • For Developers',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};