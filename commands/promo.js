const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

const DEFAULT_USD_RATE = 16297.35; // 1 USD = 16.297,35 IDR

function formatCurrency(amount) {
	return amount.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}

function parseDuration(durationStr) {
	if (!durationStr) return null;
	const units = { m: 60000, h: 3600000, d: 86400000, w: 604800000 };
	const match = durationStr.toLowerCase().match(/^(\d+)\s*(m|h|d|w)$/);
	if (!match) return null;
	return Date.now() + parseInt(match[1]) * units[match[2]];
}

function createDiscordTimestamp(date, format = 'R') {
	return `<t:${Math.floor(date / 1000)}:${format}>`;
}

function generateProgressBar(current, total, length = 10) {
	if (total <= 0) return '█'.repeat(length);
	const progress = Math.round((current / total) * length);
	return '█'.repeat(progress) + '░'.repeat(length - progress);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('promo')
		.setDescription('💸 | Buat dan kirim pesan promosi')
		.addStringOption(option =>
			option.setName('product_name')
				.setDescription('Nama produk')
				.setRequired(true))
		.addNumberOption(option =>
			option.setName('original_price')
				.setDescription('Harga asli dalam IDR')
				.setRequired(true))
		.addNumberOption(option =>
			option.setName('promo_price')
				.setDescription('Harga promo dalam IDR')
				.setRequired(true))
		.addNumberOption(option =>
			option.setName('usd_rate')
				.setDescription('Kurs manual (contoh: 16000)')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('duration')
				.setDescription('Durasi promo (1d, 2h, dst)')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('promo_message')
				.setDescription('Pesan tambahan')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('promo_code')
				.setDescription('Kode promo')
				.setRequired(false))
		.addBooleanOption(option =>
			option.setName('ping_everyone')
				.setDescription('Ping @everyone?')
				.setRequired(false)),

	async execute(interaction) {
		const allowedRoles = config.roles.allowedRoles;
		const memberRoles = interaction.member.roles.cache;

		if (!memberRoles.some(role => allowedRoles.includes(role.id))) {
			return interaction.reply({ content: '`❌` | Anda tidak memiliki izin.', ephemeral: true });
		}

		const productName = interaction.options.getString('product_name');
		const originalPriceIdr = interaction.options.getNumber('original_price');
		const promoPriceIdr = interaction.options.getNumber('promo_price');
		const usdRateInput = interaction.options.getNumber('usd_rate');
		const usdRate = usdRateInput ? 1 / usdRateInput : 1 / DEFAULT_USD_RATE;

		const durationInput = interaction.options.getString('duration');
		const promoMessage = interaction.options.getString('promo_message') || '';
		const promoCode = interaction.options.getString('promo_code');
		const pingEveryone = interaction.options.getBoolean('ping_everyone') ?? false;

		const endTime = durationInput ? parseDuration(durationInput) : null;
		if (durationInput && !endTime) {
			return interaction.reply({
				content: '`❌` | Format durasi tidak valid (gunakan: 1d, 2h, dst)',
				ephemeral: true
			});
		}

		const originalPriceUsd = originalPriceIdr * usdRate;
		const promoPriceUsd = promoPriceIdr * usdRate;
		const savingsIdr = originalPriceIdr - promoPriceIdr;
		const savingsUsd = originalPriceUsd - promoPriceUsd;
		const discountPercentage = ((savingsIdr / originalPriceIdr) * 100).toFixed(1);

		const embed = new EmbedBuilder()
			.setColor(config.appearance.embedColor)
			.setTitle('`🎉` New Promo!')
			.setDescription(`**Discount Product:** ${productName}`)
			.setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
			.addFields(
				{
					name: '`💰` Price Details',
					value: [
						`**Original Price:** ~~IDR ${formatCurrency(originalPriceIdr)}~~ / ~~USD ${formatCurrency(originalPriceUsd)}~~`,
						`**Promo Price:** IDR ${formatCurrency(promoPriceIdr)} / USD ${formatCurrency(promoPriceUsd)}`,
						`**You Save Money:** \`IDR ${formatCurrency(savingsIdr)} / USD ${formatCurrency(savingsUsd)} (${discountPercentage}% OFF)\``,
						`\n${generateProgressBar(promoPriceIdr, originalPriceIdr)} Save ${discountPercentage}%`
					].join('\n')
				}
			);

		if (promoCode) {
			embed.addFields({ name: '`🎫` Promo Code', value: `\`${promoCode.toUpperCase()}\`` });
		}

		if (endTime) {
			embed.addFields({
				name: '`⏰` Promo Period',
				value: [
					`**Start:** ${createDiscordTimestamp(Date.now(), 'f')}`,
					`**End:** ${createDiscordTimestamp(endTime, 'f')}`,
					`**Remaining:** ${createDiscordTimestamp(endTime, 'R')}`
				].join('\n')
			});
		}

		if (promoMessage) {
			embed.addFields({ name: '`📢` Extra Info', value: promoMessage });
		}

		embed.setFooter({
			text: `${config.server.name} • Limited Offer!`,
			iconURL: interaction.guild.iconURL()
		}).setTimestamp();

		const promoChannel = interaction.guild.channels.cache.get(config.channels.promo);
		if (!promoChannel) {
			return interaction.reply({
				content: '`❌` | Saluran promosi tidak ditemukan.',
				ephemeral: true
			});
		}

		await promoChannel.send({
			content: pingEveryone ? '@everyone' : '',
			embeds: [embed]
		});

		await interaction.reply({
			content: '`✅` | Promosi berhasil dikirim!',
			ephemeral: true
		});
	},
};
