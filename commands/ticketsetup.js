// File: commands/setup-ticket.js
// Command untuk setup button ticket tunggal

const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticketsetup')
        .setDescription('Setup the ticket system with a single Open Ticket button'),
    
    async execute(interaction) {
        // Embed untuk panel ticket
        const ticketEmbed = new EmbedBuilder()
            .setTitle('TICKET SYSTEM')
            .setDescription('\n\n**Need something?**\nOpen a ticket and let us help you!\n\n **Working Hours:**\n24/7 except Eating and Sleeping\n\n_Click the button below to create a ticket. Our team will assist you shortly!_')
            .setColor('#5865F2')
            .setThumbnail('https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=1272&height=1272')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120") // Replace with your image URL
            .setFooter({ 
                text: 'Click Open Ticket to get started', 
                iconURL: interaction.guild.iconURL() 
            })
            .setTimestamp();

        // Button untuk membuka ticket
        const ticketButton = new ButtonBuilder()
            .setCustomId('open_ticket')
            .setLabel('Open Ticket')
            .setStyle(ButtonStyle.Primary)
            .setEmoji('🎫');

        const actionRow = new ActionRowBuilder().addComponents(ticketButton);

        // Kirim embed dengan button
        await interaction.reply({
            embeds: [ticketEmbed],
            components: [actionRow]
        });
    },
};