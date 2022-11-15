import Link from 'next/link';

const Hero = () => {
  return (
    <main className='h-[calc(100vh-1rem-3.5rem)] px-4'>
      <div className='flex h-full flex-col justify-center'>
        <h1 className='text-5xl font-bold'>Weebn</h1>
        <h2 className='mb-4 text-xl text-zinc-700'>
          Weeb widgets for Notion, free and easy to use
        </h2>
        <Link className='primary-button inline-block' href='/#widgets'>
          Explore Widgets
        </Link>
      </div>
    </main>
  );
};

export default Hero;
