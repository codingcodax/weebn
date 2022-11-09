import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface WidgetItemProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

const WidgetItem: FC<WidgetItemProps> = ({
  href,
  image,
  title,
  description,
}) => {
  return (
    <li className='rounded-md border border-zinc-900'>
      <Image
        alt={title}
        className='aspect-video rounded-t-md rounded-b-xl'
        height={250}
        src={`/images${image}`}
        width={420}
      />

      <Link className='inline-block py-4 px-2' href={`/editor/${href}`}>
        <h4 className='text-lg'>{title}</h4>
        <p className='text-zinc-700'>{description}</p>
      </Link>
    </li>
  );
};

export default WidgetItem;
