import Link from 'next/link';

import { Icons } from '~/components/ui';

interface GoToSourceProps {
  url: string;
}

const GoToSource = ({ url }: GoToSourceProps) => {
  return (
    <div className='absolute bottom-0 right-0 rounded-tl-md bg-zinc-100 p-4 text-zinc-800 opacity-0 hover:opacity-100'>
      <Link
        className='flex flex-col items-center'
        href={url}
        rel='noopener noreferrer'
        target='_blank'
      >
        Source <Icons.arrowRight />
      </Link>
    </div>
  );
};

export default GoToSource;
