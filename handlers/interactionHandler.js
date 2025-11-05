const fs = require('fs');
const path = require('path');
const errorHandler = require('./errorHandler');

module.exports = (client) => {
    const interactionHandlers = new Map();
    const buttonsPath = path.join(__dirname, '..', 'buttons');
    const selectMenusPath = path.join(__dirname, '..', 'selectMenus');

    try {
        const buttonFiles = fs.readdirSync(buttonsPath).filter(file => file.endsWith('.js'));
        for (const file of buttonFiles) {
            const button = require(path.join(buttonsPath, file));
            if (button.customId) {
                interactionHandlers.set(button.customId, button);
            } else {
                console.warn(`File tombol ${file} tidak memiliki properti customId.`);
            }
        }
        console.log(`✅ ${buttonFiles.length} file tombol berhasil dimuat.`);
    } catch (error) {
        console.error('❌ Gagal memuat file tombol:', error);
    }

    try {
        const selectMenuFiles = fs.readdirSync(selectMenusPath).filter(file => file.endsWith('.js'));
        for (const file of selectMenuFiles) {
            const selectMenu = require(path.join(selectMenusPath, file));
            if (selectMenu.customId) {
                interactionHandlers.set(selectMenu.customId, selectMenu);
            } else {
                console.warn(`File dropdown ${file} tidak memiliki properti customId.`);
            }
        }
        console.log(`✅ ${selectMenuFiles.length} file dropdown berhasil dimuat.`);
    } catch (error) {
        console.error('❌ Gagal memuat file dropdown:', error);
    }

    client.on('interactionCreate', async interaction => {
        console.log(`Menerima interaksi dengan customId: ${interaction.customId}, tipe: ${interaction.type}`);

        if (interaction.isStringSelectMenu() && interaction.customId === 'product_selection') {
            const selectedValue = interaction.values[0]; // Dapatkan nilai yang dipilih

            const handler = interactionHandlers.get(selectedValue); // Cari handler berdasarkan nilai

            if (handler) {
                try {
                    await handler.execute(interaction);
                } catch (error) {
                    console.error(`❌ Error saat menjalankan handler untuk ${selectedValue}:`, error);
                    await errorHandler(client, interaction, error);
                }
            } else {
                console.warn(`⚠️ Tidak ada handler untuk nilai dropdown: ${selectedValue}`);
            }
        } else if (interaction.isButton()) {
            const handler = interactionHandlers.get(interaction.customId);
            if (handler) {
                try {
                    await handler.execute(interaction);
                } catch (error) {
                    console.error(`❌ Error saat menjalankan handler untuk tombol ${interaction.customId}:`, error);
                    await errorHandler(client, interaction, error);
                }
            } else {
                console.warn(`⚠️ Tidak ada handler untuk tombol customId: ${interaction.customId}`);
            }
        }
    });
};