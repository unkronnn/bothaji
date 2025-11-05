const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptesti')
        .setDescription('📈 | Update testimonial payment status')
        .addStringOption(option => option.setName('message_id').setDescription('Testimonial Message ID').setRequired(true))
        .addStringOption(option =>
            option.setName('status_lunas')
                .setDescription('Payment Status')
                .setRequired(true)
                .addChoices(
                    { name: 'Paid', value: 'paid' }, 
                    { name: 'Unpaid', value: 'unpaid' }
                )
        )
        .addAttachmentOption(option => option.setName('bukti_pelunasan').setDescription('Proof of payment photo').setRequired(false)),
    async execute(interaction) {
        const allowedRoles = config.roles.admin; 
        const memberRoles = interaction.member.roles.cache;
        if (!allowedRoles?.some(role => memberRoles.has(role))) {
            return interaction.reply({ content: 'Anda tidak memiliki izin untuk menggunakan perintah ini.', ephemeral: true });
        }

        const testimoniChannelId = config.channels?.testimonial;
        const testimoniChannel = interaction.guild.channels.cache.get(testimoniChannelId);

        if (!testimoniChannel) {
            console.error(`Channel testimonial tidak ditemukan: ${testimoniChannelId}`);
            return interaction.reply({ content: 'Channel testimonial tidak ditemukan.', ephemeral: true });
        }

        const messageId = interaction.options.getString('message_id');
        const statusLunas = interaction.options.getString('status_lunas');
        const buktiPelunasan = interaction.options.getAttachment('bukti_pelunasan');

        let messageToUpdate;
        try {
            messageToUpdate = await testimoniChannel.messages.fetch(messageId);
        } catch (error) {
            return interaction.reply({ content: 'Pesan testimonial tidak ditemukan.', ephemeral: true });
        }

        const oldEmbed = messageToUpdate.embeds[0];
        if (!oldEmbed) {
            return interaction.reply({ content: 'Pesan testimonial tidak memiliki embed untuk diupdate.', ephemeral: true });
        }

        const paidEmoji = module.exports.EMOJI?.STATUS?.PAID || '💰';
        const pendingEmoji = module.exports.EMOJI?.STATUS?.PENDING || '⏳';

        const newDescription = oldEmbed.description?.replace(/Status Pembayaran:.*\n/, `Status Pembayaran: ${statusLunas === 'paid' ? `${paidEmoji} Dibayar` : `${pendingEmoji} Belum Dibayar`}\n`) || oldEmbed.description;

        const newEmbed = new EmbedBuilder()
            .setColor(oldEmbed.color || module.exports.EMBED_STYLE?.COLORS?.DEFAULT || 0x2B2D31)
            .setTitle(oldEmbed.title)
            .setDescription(newDescription)
            .setFooter(oldEmbed.footer)
            .setAuthor(oldEmbed.author);

        if (buktiPelunasan) {
            newEmbed.addFields([
                {
                    name: 'Bukti Pembayaran',
                    value: 'Lihat gambar di bawah',
                    inline: false,
                },
            ]);
            newEmbed.setImage(buktiPelunasan.url);
        }

        await messageToUpdate.edit({ embeds: [newEmbed] });

        await interaction.reply({ content: 'Status pembayaran testimonial berhasil diupdate.', ephemeral: true });
    },
    EMOJI: {
        SUCCESS: '✅',
        ERROR: '❌',
        INFO: 'ℹ️',
        WARNING: '⚠️',
        SELLER: '👤',
        BUYER: '🛒',
        PRODUCT: '📦',
        PRICE: '💰',
        PAYMENT: '💳',
        STATUS: {
            PAID: '💰',
            PENDING: '💳'
        },
        DOT: '•'
    },
    EMBED_STYLE: {
        COLORS: {
            SUCCESS: 0x2ECC71,
            ERROR: 0xFF0000,
            WARNING: 0xFFAA00,
            INFO: 0x3498DB,
            DEFAULT: 0x2B2D31
        },
        THUMBNAIL_SIZE: 300
    }
};