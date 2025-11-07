Tentu, saya mengerti maksud Anda. Anda ingin membuat sistem bot Discord di mana Anda dapat mengelola status produk (cheat) Anda dari satu channel "panel admin" (`#setup-cheat`), dan status tersebut akan secara otomatis diperbarui dalam satu embed "dashboard" utama di channel publik (`#status-cheat`).

Ini adalah *prompt* (perintah) yang sangat baik untuk diberikan kepada seorang pengembang bot atau AI yang dapat membuatkan kode bot untuk Anda (seperti GPT-4, Claude, atau platform pembuat bot).

Berikut adalah draf *prompt* yang merangkum semua fitur yang Anda minta, dengan beberapa perbaikan logis agar sistemnya berjalan lancar:

-----

### 🚀 Prompt untuk Fitur Bot: Live Cheat Status Dashboard

**Peran:** Anda adalah seorang pengembang bot Discord ahli menggunakan [Python dengan discord.py / JavaScript dengan discord.js] (pilih salah satu).

**Tujuan Utama:** Buatlah fitur "Live Cheat Status" untuk bot Discord. Sistem ini harus memungkinkan admin memperbarui status berbagai produk (cheat) melalui tombol di channel admin khusus, dan secara otomatis memperbarui satu embed "dashboard" utama di channel publik.

**Struktur Channel:**

1.  **Channel Publik (misal: `#status-cheat`):** Tempat untuk menampilkan satu embed dashboard utama.
2.  **Channel Admin (misal: `#setup-cheat`):** Tempat admin mendaftarkan produk dan mengklik tombol untuk mengubah status.

-----

### Spesifikasi Fitur Lengkap

#### 1\. Database / Penyimpanan

Sistem *harus* menggunakan database (seperti SQLite, JSON file, atau database eksternal) untuk menyimpan:

  * ID channel dan ID pesan dari embed **Dashboard Utama**.
  * Daftar semua produk yang terdaftar (misal: `['mlbb', 'pubg', 'valorant']`).
  * Status *terkini* dari setiap produk (misal: `{'mlbb': 'Safety', 'pubg': 'Maintenance'}`).

#### 2\. Komando Admin (Setup Awal)

**A. `/set-dashboard [channel]`**

  * **Perizinan:** Hanya Admin.
  * **Fungsi:** Perintah ini memberitahu bot di channel mana embed Dashboard Utama harus ditempatkan.
  * **Aksi:**
    1.  Bot mengirimkan embed "Dashboard Utama" awal ke `[channel]` yang ditentukan.
    2.  Embed ini awalnya mungkin kosong atau berisi pesan "Loading...".
    3.  Bot menyimpan **Channel ID** dan **Message ID** dari embed yang baru dikirim ini ke database.

#### 3\. Komando Admin (Manajemen Produk)

**A. `/setup-produk [nama_produk]`**

  * **Perizinan:** Hanya Admin.
  * **Channel:** Perintah ini *hanya* boleh dijalankan di channel Admin (`#setup-cheat`).
  * **Fungsi:** Mendaftarkan produk baru dan membuat panel kontrol untuknya.
  * **Aksi:**
    1.  Menambahkan `[nama_produk]` ke daftar produk di database dengan status default (misal: "Maintenance").
    2.  Bot mengirimkan embed **Panel Kontrol Produk** baru di channel `#setup-cheat`.
    3.  Embed ini berisi:
          * **Judul:** `Kontrol Panel: [Nama Produk]` (misal: `Kontrol Panel: MLBB`)
          * **Status Saat Ini:** `Maintenance`
    4.  Di bawah embed ini, tambahkan 3 Tombol (Buttons) dengan `custom_id` yang unik:
          * Tombol 1: Label "Safety" (Hijau) | `custom_id: "status:safety:[nama_produk]"`
          * Tombol 2: Label "Maintenance" (Kuning) | `custom_id: "status:maintenance:[nama_produk]"`
          * Tombol 3: Label "Risk" (Merah) | `custom_id: "status:risk:[nama_produk]"`
    5.  Memanggil fungsi `update_dashboard()` untuk menambahkan produk baru ini ke dashboard utama.

**B. `/hapus-produk [nama_produk]`**

  * **Perizinan:** Hanya Admin.
  * **Fungsi:** Menghapus produk dari sistem.
  * **Aksi:** Menghapus produk dari database dan memanggil `update_dashboard()`.

#### 4\. Logika Interaksi (Tombol)

  * Bot harus mendengarkan interaksi tombol secara global.
  * Jika `custom_id` sebuah tombol dimulai dengan `status:`, bot akan:
    1.  Mengekstrak data dari `custom_id`. Contoh: `status:safety:mlbb` -\> `status_baru = 'safety'`, `produk = 'mlbb'`.
    2.  Mengirim balasan singkat (ephemeral) ke admin: "Status untuk `MLBB` telah diubah menjadi `Safety`."
    3.  Memperbarui status `produk` tersebut di dalam database.
    4.  Secara otomatis memanggil fungsi `update_dashboard()`.

#### 5\. Fungsi Inti: `update_dashboard()`

  * Ini adalah fungsi utama yang dipanggil setiap kali ada perubahan status atau produk baru ditambahkan/dihapus.
  * **Aksi:**
    1.  Mengambil **Channel ID** dan **Message ID** dari Dashboard Utama (dari database).
    2.  Mengambil *semua* produk dan status terkininya dari database.
    3.  Membuat (atau mengedit) embed **Dashboard Utama**.
    4.  Contoh tampilan embed:
          * **Judul:** `🔴 LIVE STATUS CHEAT`
          * **Deskripsi:** Daftar semua produk dan statusnya. Gunakan emoji untuk status.
            ```
            🟢 **MLBB**: Safety
            🟡 **PUBG**: Maintenance
            🔴 **Valorant**: Risk
            ```
          * **Timestamp:** Perbarui timestamp ke "Last Updated".
    5.  Bot kemudian **mengedit** pesan dashboard utama yang sudah ada menggunakan data embed yang baru.

-----

### 🔑 Kenapa Prompt Ini Efektif:

  * **Jelas dan Terstruktur:** Memisahkan perintah (`/set-dashboard`, `/setup-produk`), logika tombol, dan fungsi pembaruan inti (`update_dashboard`).
  * **Manajemen Status:** Dengan menyimpan ID pesan dashboard, bot tidak perlu mencari pesan lama atau membuat pesan baru setiap saat. Ia cukup **mengedit** satu pesan yang sama berulang kali, yang menciptakan efek "live update".
  * **`custom_id` yang Cerdas:** Penggunaan `custom_id: "status:safety:mlbb"` adalah cara paling efisien untuk memberi tahu bot tombol mana yang ditekan dan untuk produk apa, tanpa harus menyimpan ID pesan panel admin.
  * **Skalabel:** Anda dapat menambahkan 50 produk menggunakan `/setup-produk`, dan dashboard utama akan otomatis memperbarui daftarnya.

Anda sekarang dapat memberikan prompt di atas kepada pengembang atau AI untuk mulai membuatkan kodenya.

Apakah Anda ingin saya menjelaskan lebih detail tentang salah satu bagian dari logika ini, misalnya cara kerja database atau `custom_id`?