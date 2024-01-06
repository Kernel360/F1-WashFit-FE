import Link from 'next/link';

import Logo from '@components/icons/Logo';

function CenterIcon({ className }: { className?: string }) {
  return (
    <li className={className}>
      <Link href="/">
        <Logo />
      </Link>
    </li>
  );
}

export default CenterIcon;
