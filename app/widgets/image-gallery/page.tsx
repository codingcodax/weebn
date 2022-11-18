'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const ImageGallery = () => {
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
      <Image
        alt='A female anime/manga character.'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1601, 2048, '#e0cfd0')
        )}`}
        fill={true}
        objectFit='contain'
        placeholder='blur'
        src='https://cdn.waifu.im/161.jpeg'
      />
    </div>
  );
};

export default ImageGallery;
