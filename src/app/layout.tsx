// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <title>Si KPT</title>
        <meta name="description" content="Aplikasi Booking Tempat Setda Bagian Umum" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
