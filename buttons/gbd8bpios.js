const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'gbd8bpios',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('`🎯` GBD 8BP (iOS)')
            .setDescription(`
### 🧾**Pricelist**
* 1 Day  — IDR 50.000
* 7 Day  — IDR 150.000
* 30 Day  — IDR 280.000

### 📝**Feature:**
* Line Prediction
* Aim Speed | Auto Aim
* Extended Guidelines
* Lines Transparency
* Reset Guest Account
* Import Shot Prediction
* Hide ESP Recording / Live
──────────────────`)
            .addFields(
                {
                    name: '`⚠️` ATTENTION',
                    value: 'Please read and understand the product description before placing an order. By purchasing, you agree to our Terms of Service (TOS).'
                }
            )
            .setColor('#E50914')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: `Original Product by HAJI UTONG`,
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};