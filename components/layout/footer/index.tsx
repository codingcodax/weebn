import Link from 'next/link';

import Links from './Links';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center space-y-16 px-4 pb-8'>
      <Links />
      <p className='text-center'>
        &copy; 2022 — Handcrafted with 💜 by{' '}
        <Link
          href='https://github.com/codingcodax/'
          rel='noopener noreferrer'
          target='_blank'
        >
          codingcodax
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
