'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import { GoToSource } from '~/components/pages/editor';
import fetcher from '~/lib/fetcher';

const ImageGallery = () => {
  const { data } = useSWR('/api/image-gallery', fetcher, {
    revalidateOnFocus: false,
  });
  const searchParams = useSearchParams();

  const getSearchParams = (param: string) => {
    const searchParam = searchParams.get(param);

    return searchParam === 'true' ? true : false;
  };

  const showSource = getSearchParams('showSource');

  const shimmer = (w: number, h: number, hex: string) => `
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="${hex}"/>
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center'>
      {data && (
        <>
          <Image
            alt={data.alt}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(data.width, data.height, data.color)
            )}`}
            fill={true}
            objectFit='contain'
            placeholder='blur'
            src={data.imageUrl}
          />
          {showSource && <GoToSource url={data?.source} />}
        </>
      )}
    </div>
  );
};

export default ImageGallery;
