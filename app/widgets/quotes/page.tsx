'use client';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import { ThemeSwitch } from '~/components/pages/editor';
import { Skeleton } from '~/components/ui';

import { fetcher } from 'lib';

const Quotes = () => {
  const { data } = useSWR('/api/quote', fetcher, { revalidateOnFocus: false });
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
      {data ? (
        <div className='max-w-lg space-y-6'>
          <h1 className='text-xl italic'>&quot;{data?.quote}&quot;</h1>

          {(showAnimeCharacter || showAnimeTitle) && (
            <div className='h-px bg-[#dfdedd] dark:bg-[#373737]' />
          )}

          <h2>
            {showAnimeCharacter && `${data?.character} `}
            {showAnimeCharacter && showAnimeTitle && <span>&mdash; </span>}
            {showAnimeTitle && `${data?.anime}`}
          </h2>
        </div>
      ) : (
        <Loading>
          <Loading.Quote /> <Loading.Divider />{' '}
          <Loading.Footer>
            {showAnimeCharacter && <Loading.Character />}{' '}
            {showAnimeCharacter && showAnimeTitle && <span>&mdash; </span>}
            {showAnimeTitle && <Loading.Anime />}
          </Loading.Footer>
        </Loading>
      )}
    </div>
  );
};

interface LoadingProps {
  children: React.ReactNode;
}

const Loading = ({ children }: LoadingProps) => {
  return <div className='w-[512px] space-y-6'>{children}</div>;
};

// eslint-disable-next-line react/display-name
Loading.Quote = () => (
  <div className='space-y-2'>
    <Skeleton className='w-full' />
    <Skeleton className='w-full' />
    <Skeleton />
  </div>
);

// eslint-disable-next-line react/display-name
Loading.Divider = () => <div className='h-px bg-[#dfdedd] dark:bg-[#373737]' />;

interface LoadingFooterProps {
  children: React.ReactNode;
}
// eslint-disable-next-line react/display-name
Loading.Footer = ({ children }: LoadingFooterProps) => (
  <div className='flex justify-start space-x-2'>{children}</div>
);

// eslint-disable-next-line react/display-name
Loading.Character = () => <Skeleton className='w-[120px]' />;

// eslint-disable-next-line react/display-name
Loading.Anime = () => <Skeleton className='w-[50px]' />;

export default Quotes;
