import LinkItem from './LinkItem';

const Links = () => {
  return (
    <ul className='flex space-x-8'>
      <LinkItem href='/usage'>Usage Tutorial</LinkItem>
      <LinkItem href='/contribute'>Contribute</LinkItem>
      <LinkItem href='/relase-logs'>Release Logs</LinkItem>
    </ul>
  );
};

export default Links;
