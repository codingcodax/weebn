import Links from './Links';

const Header = () => {
  return (
    <header className='mx-auto flex w-full max-w-6xl justify-between px-4 pt-8'>
      <p>Logo</p>
      <Links />
    </header>
  );
};

export default Header;
