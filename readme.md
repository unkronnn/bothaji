# Panduan Instalasi Bot StoreBot

Panduan ini akan membantu Anda menginstal dan mengonfigurasi bot Discord StoreBot menggunakan file konfigurasi dan variabel lingkungan yang disediakan oleh ZeroCloud.

## Prasyarat

1. **Node.js** dan **npm**: Pastikan Anda telah menginstal Node.js dan npm di mesin Anda. Anda dapat mengunduhnya dari [sini](https://nodejs.org/).
2. **Token Bot Discord**: Pastikan Anda memiliki token bot dari Discord Developer Portal.
3. **Google Gemini Key**: Kunci API Google Gemini Anda untuk layanan AI yang ingin Anda gunakan.
4. **Kunci Midtrans**: Kunci server dan klien untuk integrasi pembayaran Midtrans.

## Instruksi Setup

### 1. Clone Repositori

Clone repositori bot dari GitHub atau unduh source code-nya.

```bash
git clone https://github.com/username/repo.git
cd repo
```

### 2. Instal Dependensi

Instal semua dependensi yang diperlukan dengan npm.

```bash
npm install
```

### 3. Buat File `.env`

Buat file `.env` di root direktori proyek Anda dan isi dengan variabel lingkungan berikut:

```plaintext
DISCORD_TOKEN=
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
GOOGLE_API_KEY=
```

Gantilah nilai `your_discord_token`, `your_azure_api_key`, `your_midtrans_server_key`, dan `your_midtrans_client_key` dengan nilai yang sesuai.

### 4. Konfigurasi `config.json`

Buat file `config.json` di direktori `config` dan isi dengan template kosong berikut. Lengkapi nilai sesuai dengan server Discord Anda.

```json
{
  "server": {
    "name": "Your Server Name",
    "url": "https://yourserverurl.com",
    "logoURL": "https://yourserverurl.com/logo.png",
    "footerImage": "https://yourserverurl.com/footer.png",
    "emoji": ":your_emoji:"
  },
  "guild": {
    "client": "your_client_id",
    "id": "your_guild_id"
  },
  "roles": {
    "staff": "your_staff_role_id",
    "access": "your_access_role_id",
    "allowedRoles": ["role_id_1", "role_id_2", "role_id_3", "role_id_4"],
    "buyer": "your_buyer_role_id"
  },
  "channels": {
    "dmLogs": "your_dm_logs_channel_id",
    "testimonial": "your_testimonial_channel_id",
    "feedback": "your_feedback_channel_id",
    "allowed": ["allowed_channel_id_1"],
    "ticketCategory": "your_ticket_category_id",
    "ticket": "your_ticket_channel_id",
    "transcript": "your_transcript_channel_id",
    "promo": "your_promo_channel_id",
    "payment": "your_payment_channel_id",
    "error": "your_error_channel_id",
    "qrislog": "your_qrislog_channel_id"
  },
  "appearance": {
    "embedColor": "#your_embed_color"
  }
}
```

### 5. Menjalankan Bot

Jalankan bot dengan perintah berikut:

```bash
node index.js
```

Bot Anda sekarang seharusnya aktif dan berjalan di server Discord Anda.

Jika Anda menemui masalah atau membutuhkan bantuan lebih lanjut, silakan hubungi tim support Yash Digital Store.

Selamat mencoba!# bothaji
