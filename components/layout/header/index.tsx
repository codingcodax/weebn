import { Logo } from '~/components/ui';

import Links from './Links';

const Header = () => {
  return (
    <header className='mx-auto flex w-full max-w-6xl items-center justify-between px-4 pt-8'>
      <Logo />
      <Links />
    </header>
  );
};

export default Header;
