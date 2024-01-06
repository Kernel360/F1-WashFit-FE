import Link from 'next/link';

import Logo from '@/components/icons/Logo';

interface CenterIconProps {
  className: string;
}

function CenterIcon({ className }:CenterIconProps) {
  return (
    <li className={className}>
      <Link href="/">
        <Logo />
      </Link>
    </li>
  );
}

export default CenterIcon;
