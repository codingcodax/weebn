import Image from 'next/image';
import Link from 'next/link';

import EditorMockup from '~/public/images/editor-mockup.jpg';

const Hero = () => {
  return (
    <main className='grid h-[calc(100vh-1rem-2rem-35px)] px-4 md:grid-cols-2'>
      <div className='flex h-full flex-col justify-center'>
        <h1 className='text-5xl font-bold'>Weebn</h1>
        <h2 className='mb-4 text-xl text-zinc-700'>
          Level up your Notion with light weight weeb widgets fully cuztomizable
          and ready to use.
        </h2>
        <Link className='primary-button inline-block' href='/#widgets'>
          Explore Widgets
        </Link>
      </div>

      <div className='md:flex md:items-center md:justify-end'>
        <Image
          alt='mockup of editor page customization quotes widget'
          className='-translate-x-28 md:translate-x-0'
          height={425}
          src={EditorMockup}
          width={464}
        />
      </div>
    </main>
  );
};

export default Hero;
