'use client';

import { useEffect } from 'react';

import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios('http://localhost:3030/test').then((res) => { return console.log(res); });
  });
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
