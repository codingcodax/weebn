import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface LinkItemProps {
  href: string;
  children: ReactNode;
}

const LinkItem: FC<LinkItemProps> = ({ href, children }) => {
  return (
    <li className='text-zinc-500 transition-colors duration-200 hover:text-zinc-600'>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default LinkItem;
