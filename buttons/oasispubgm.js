const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'oasispubgm', // Ganti dengan customId yang sesuai
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(`\`💳\` OASIS PUBGM (iOS)`) // Ganti dengan judul
            .setDescription(`
### 🧾**Pricelist**
* 1 Day  — IDR 60.000 / $4
* 7 Day  — IDR 180.000 / $12
* 30 Day  — IDR 380.000 / $25

### 📝**Feature:**
* NOTE : INSTAL WAJIB MENGGUNAKAN GBOX / ESIGN
* ESP | Aimbot
* Recoil Compensation
* Skin & Kill Message
* Hide ESP Recording / Live
──────────────────`)
            .addFields(
                { 
                    name: '\`⚠️\` ATTENTION', 
                    value: 'Please read and understand the product description before placing an order.By purchasing, you agree to our Terms of Service (TOS).' 
                }
            )
            .setColor('#E50914') // Ganti dengan warna yang sesuai
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120") // Replace with your image URL
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700") // Ganti dengan URL thumbnail
            .setFooter({ 
                text: `Original Product by HAJI UTONG`, 
                iconURL: interaction.guild.iconURL() 
            });

        await interaction.reply({ 
            embeds: [embed], 
            components: [], 
            ephemeral: true 
        });
    },
};
