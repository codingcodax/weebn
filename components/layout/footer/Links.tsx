import LinkItem from './LinkItem';

const Links = () => {
  return (
    <ul className='flex items-center space-x-8 text-center'>
      <LinkItem disabled href='/contribute'>
        Contribute
      </LinkItem>
      <LinkItem disabled href='/relase-logs'>
        Release Logs
      </LinkItem>
    </ul>
  );
};

export default Links;
