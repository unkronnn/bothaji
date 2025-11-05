const fs = require('fs');
const path = require('path');
const errorHandler = require('./errorHandler'); // Pastikan path ini benar

module.exports = (client) => {
    const interactionHandlers = new Map();
    const buttonsPath = path.join(__dirname, '..', 'buttons');
    const selectMenusPath = path.join(__dirname, '..', 'selectMenus');

    // Load button handlers
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

    // Load select menu handlers
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
        const handler = interactionHandlers.get(interaction.customId);

        if (handler) {
            try {
                await handler.execute(interaction);
            } catch (error) {
                console.error(`❌ Error saat menjalankan handler untuk ${interaction.customId}:`, error);
                await errorHandler(client, interaction, error);
            }
        }
    });
};