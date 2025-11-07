const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'unbanmethod_purchase',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔓 Account Unban Method - Purchase Details')
            .setDescription(`
### 🧾**Pricing Information**
**Account Unban Method**
**IDR 336.500 / $20.00**

### 📝**What You Get:**
✅ Complete method with detailed instructions
✅ Tips and Tricks to increase success rate
✅ All links and services needed included
✅ Private method (no public YouTube methods)

### 🎮**Supported Games:**
• Valorant
• Fortnite
• Rainbow Six
• Hypixel
• Rocket League
• Apex Legends
• And many more games!

### ❌**Not Supported:**
• COD/RUST/FIVEM/ROBLOX

### ⚠️**Success Rate:**
**80% chance of success** with proper execution

### 📋**Requirements:**
• Email for the banned/locked account (must be changeable)
• Standard account information (DOB, passwords, 2FA, devices, etc.)

---
**Ready to get your account back? Contact our staff to purchase!**`)
            .addFields(
                {
                    name: '`⚠️` ATTENTION',
                    value: 'Please read and understand the service details before purchasing. By buying this service, you agree to our Terms of Service (TOS). Results are not guaranteed and depend on proper execution of the method.'
                },
                {
                    name: '`📞` Contact Support',
                    value: 'Please create a ticket or contact our staff team to proceed with your purchase.'
                }
            )
            .setColor('#00FF00')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Professional Account Recovery Service',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};