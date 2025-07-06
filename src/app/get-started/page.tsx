"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GetStarted() {
  const router = useRouter();
  return (
   <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500">
      <Image
        src="/images/logo.png"
        alt="Logo Si KPT"
        width={120}
        height={120}
        priority
        className="mb-6 drop-shadow-lg"
      />
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Selamat Datang di Si KPT
      </h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => router.push("/auth/register")}
          className="w-full py-3 rounded bg-white text-blue-600 font-bold shadow hover:bg-gray-100 transition"
        >
          Register
        </button>
        <button
          onClick={() => router.push("/auth/login")}
          className="w-full py-3 rounded bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </main>
  );
}
