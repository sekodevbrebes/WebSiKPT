"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/get-started'); // redirect ke halaman get-started
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-600 via-blue-300 to-blue-500">
      <Image
        src="/images/logo.png"
        alt="Logo Si KPT"
        width={150}
        height={150}
        priority
        className="drop-shadow-lg"
      />
    </main>
  );
}
