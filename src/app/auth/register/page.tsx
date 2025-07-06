"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
   <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Daftar Akun Si KPT
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nama Lengkap Anda"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Buat Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
          >
            Daftar
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Belum punya akun?{" "}
          <Link
            href="/auth/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login di sini
          </Link>
        </p>
      </div>
    </main>
  );
}
