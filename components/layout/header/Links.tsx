import LinkItem from './LinkItem';

const Links = () => {
  return (
    <ul className='flex space-x-4'>
      <LinkItem href='#widgets'>Widgets</LinkItem>
      <LinkItem href='/how-to-use'>How To Use</LinkItem>
    </ul>
  );
};

export default Links;
