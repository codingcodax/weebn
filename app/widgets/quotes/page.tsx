'use client';

import { useSearchParams } from 'next/navigation';

import { ThemeSwitch } from '~/components/pages/editor';

const Quotes = () => {
  const searchParams = useSearchParams();

  const getSearchParams = (param: string) => {
    const searchParam = searchParams.get(param);

    return searchParam === 'true' ? true : false;
  };

  const showThemeButton = getSearchParams('showThemeButton');
  const showAnimeCharacter = getSearchParams('showAnimeCharacter');
  const showAnimeTitle = getSearchParams('showAnimeTitle');

  return (
    <div className='flex h-screen flex-col items-center justify-center p-4'>
      {showThemeButton && <ThemeSwitch />}
      <div className='max-w-lg space-y-6'>
        <h1 className='text-xl italic'>
          &quot;Listen to yourself whining and complaining like some sorry
          little victim! You can whimper all day for all I care, you&apos;re
          nothing but a coward!&quot;
        </h1>

        {(showAnimeCharacter || showAnimeTitle) && (
          <div className='h-px bg-[#dfdedd] dark:bg-[#373737]' />
        )}

        <h2>
          {showAnimeCharacter && 'Naruto Uzumaki '}
          {showAnimeCharacter && showAnimeTitle && <span>&mdash; </span>}
          {showAnimeTitle && 'Naruto'}
        </h2>
      </div>
    </div>
  );
};

export default Quotes;
