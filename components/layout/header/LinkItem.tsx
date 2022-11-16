import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface LinkItemProps {
  href: string;
  children: ReactNode;
  disabled?: boolean;
}

const LinkItem: FC<LinkItemProps> = ({ href, children, disabled }) => {
  return (
    <li className='text-zinc-500 transition-colors duration-200 hover:text-zinc-600'>
      <Link
        className={clsx(disabled && 'cursor-not-allowed')}
        href={disabled ? '#' : href}
      >
        {children}
      </Link>
    </li>
  );
};

export default LinkItem;
