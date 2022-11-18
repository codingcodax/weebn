import Link from 'next/link';

import Links from './Links';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='mt-16 flex flex-col items-center space-y-16 px-4 pb-8'>
      <Links />
      <p className='text-center'>
        &copy; {year} — Handcrafted with 💜 by{' '}
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
