import LinkItem from './LinkItem';

const Links = () => {
  return (
    <ul className='flex space-x-4'>
      <LinkItem disabled href='#widgets'>
        Widgets
      </LinkItem>
      <LinkItem disabled href='/how-to-use'>
        How To Use
      </LinkItem>
    </ul>
  );
};

export default Links;
