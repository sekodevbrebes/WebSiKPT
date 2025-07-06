// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-orange-400 via-white to-blue-500">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Selamat Datang di Si KPT</h1>
      <p className="text-lg text-center max-w-xl text-gray-700">
        Aplikasi Booking Tempat Setda Bagian Umum. Silakan login untuk mulai melakukan pemesanan ruangan,
        melihat agenda, dan mengelola data booking Anda.
      </p>
    </main>
  );
}
