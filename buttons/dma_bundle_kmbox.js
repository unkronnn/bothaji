const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'dma_bundle_kmbox',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💻 DMA Bundle (KMBOX B+ NET)')
            .setDescription(`
### 🧾**Pricing**
**Complete DMA Hardware Bundle**
**IDR 5.450.000 / $330.00**

### 🔒**What is DMA Hardware?**
DMA Bundle is a full hardware package built for external game manipulation via Direct Memory Access. This prevents cheats from running directly on the game process or system CPU, making anti-cheat software (like Easy Anti-Cheat, BattleEye, etc.) have a very hard time detecting it. It's like spying on the game from "outside the room".

### 📦**What's Included?**

**🔧 DMA CARD 75T (No FW)**
• Premium DMA boards with advanced Xilinx® 7 series Artix-7 75T FPGA chip
• Designed for supreme performance
• Pre-installed test firmware only (custom firmware sold separately)

**🖥️ FUSER DICHEN 6TH GEN**
• Merges display outputs from two separate computers into one
• Enhances gaming with advanced visual aids without detection risk
• Overlays enhanced visuals from secondary computer onto primary display
• Eliminates unnecessary backgrounds for clean output
• Mimics single-computer setup with added security layers

**⌨️ KMBOX B+ NET**
• Renowned for secure mouse and keyboard input management
• Perfect for dual-computer setups
• Allows auxiliary computer to direct mouse activity on primary gaming computer
• No software required on the primary gaming computer

### ⚠️**Important Notes:**
• **DMA Firmware not included** - Must be purchased separately
• **Taxes and customs duties not included** - Buyer responsible for additional fees
• **International shipping available** - Contact for shipping details

### 🎯**Perfect For:**
• Advanced users seeking undetected gaming setup
• External game manipulation experts
• Security-conscious gamers
• Professional gaming applications

---
**Complete hardware solution for advanced external gaming!**`)
            .addFields(
                {
                    name: '`⚠️` HARDWARE NOTICE',
                    value: 'This is physical hardware that will be shipped. DMA firmware must be purchased separately.'
                },
                {
                    name: '`📞` PURCHASE & SHIPPING',
                    value: 'Contact our staff for purchasing information and shipping details.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Professional DMA Hardware Bundle • External Gaming Solution',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};