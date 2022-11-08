import Link from 'next/link';
import { FC } from 'react';

interface WidgetItemProps {
  href: string;
  title: string;
  description: string;
}

const WidgetItem: FC<WidgetItemProps> = ({ href, title, description }) => {
  return (
    <li className='rounded-md border border-zinc-900'>
      <div className='aspect-video rounded-md rounded-b-xl bg-green-200'></div>

      <Link className='inline-block py-4 px-2' href={`/editor/${href}`}>
        <h4 className='text-lg'>{title}</h4>
        <p className='text-zinc-700'>{description}</p>
      </Link>
    </li>
  );
};

export default WidgetItem;
