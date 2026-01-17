# Backend Coffee Shop Project

## Deskripsi
Projek ini adalah backend untuk aplikasi Coffee Shop yang menyediakan API untuk mengelola produk, pesanan, dan pengguna. Backend ini dibangun menggunakan Node.js dan Express.

## Fitur Utama
- **Manajemen Produk**: Tambah, edit, hapus, dan lihat produk.
- **Manajemen Pesanan**: Buat, lihat, dan kelola pesanan.
- **Autentikasi Pengguna**: Pengguna dapat mendaftar dan masuk untuk mengakses fitur tertentu.
- **Integrasi Cloudinary**: Mengelola gambar produk dengan penyimpanan cloud.

## Teknologi yang Digunakan
- **Node.js**: Runtime JavaScript untuk server-side.
- **Express**: Framework web untuk Node.js.
- **MongoDB**: Database NoSQL untuk menyimpan data.
- **Cloudinary**: Layanan untuk mengelola dan menyimpan gambar.
- **dotenv**: Untuk mengelola variabel lingkungan.

## Prasyarat Instalasi
1. **Node.js**: Pastikan Node.js terinstal di sistem Anda. Anda dapat mengunduhnya dari [sini](https://nodejs.org/).
2. **MongoDB**: Anda perlu memiliki MongoDB yang berjalan. Anda dapat menggunakan MongoDB Atlas untuk solusi cloud.
3. **Cloudinary**: Daftar untuk mendapatkan kredensial API.

## Instalasi
1. Clone repositori ini:
   ```bash
   git clone <URL_REPOSITORI>
   cd backend
   ```
2. Install dependensi:
   ```bash
   npm install
   ```
3. Buat file `.env` di root projek dan tambahkan variabel berikut:
   ```plaintext
   MONGODB_URI=<URI_MONGODB>
   CLOUDINARY_URL=<URL_CLOUDINARY>
   JWT_SECRET=<SECRET_JWT>
   ```
4. Jalankan server:
   ```bash
   npm start
   ```

## Susunan Projek
```
backend/
├── .env
├── .gitignore
├── index.js
├── package.json
└── src/
    ├── controllers/
    │   ├── order.controllers.js
    │   └── product.controllers.js
    ├── lib/
    │   ├── cloudinary.js
    │   ├── db.js
    │   └── utils.js
    ├── models/
    │   ├── order.model.js
    │   └── products.model.js
    └── routes/
        ├── orders.route.js
        └── product.route.js
```

## Contoh Penggunaan
### Mendapatkan Daftar Produk
```bash
GET /api/products
```
### Menambahkan Produk
```bash
POST /api/products
Content-Type: application/json

{
  "name": "Coffee",
  "price": 5.00,
  "description": "Delicious coffee",
  "image": "<URL_GAMBAR>"
}
```

### Menghapus Produk
```bash
DELETE /api/products/:id
```

## Lisensi
Projek ini dilisensikan di bawah MIT License.
