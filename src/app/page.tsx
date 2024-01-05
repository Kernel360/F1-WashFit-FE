import Link from 'next/link';

import BottomNav from '@/components/shared/bottom-nav/BottomNav';

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: '20px' }}>Home</h1>
      <Link href="/about">About</Link>
      <BottomNav />
    </div>
  );
}
