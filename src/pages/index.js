import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Homes from '@/components/Home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Homes />
    </main>
  );
}
