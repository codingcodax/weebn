import LinkItem from './LinkItem';

const Links = () => {
  return (
    <ul className='flex items-center space-x-8 text-center'>
      <LinkItem href='https://github.com/codingcodax/weebn/blob/main/CONTRIBUTING.md'>
        Contribute
      </LinkItem>
      <LinkItem disabled href='/relase-logs'>
        Release Logs
      </LinkItem>
    </ul>
  );
};

export default Links;
