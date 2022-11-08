import LinkItem from './LinkItem';

const Links = () => {
  return (
    <ul className='flex space-x-4'>
      <LinkItem href='/about'>About</LinkItem>
      <LinkItem href='#widgets'>Widgets</LinkItem>
    </ul>
  );
};

export default Links;
