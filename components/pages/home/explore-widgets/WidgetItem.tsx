import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface WidgetItemProps {
  href: string;
  image: StaticImageData;
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
    <li>
      <Link
        className='inline-block rounded-md border border-zinc-900 transition-transform duration-200 hover:-translate-y-1'
        href={`/editor${href}`}
      >
        <Image
          alt={title}
          className='aspect-video rounded-t-md rounded-b-xl'
          height={250}
          placeholder='blur'
          src={image}
          width={420}
        />

        <div className='inline-block py-4 px-2'>
          <h4 className='text-lg'>{title}</h4>
          <p className='text-zinc-700'>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default WidgetItem;
