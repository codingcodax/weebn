import { useTheme } from 'next-themes';

import { useHasMounted } from '~/hooks/index';
import { Skeleton, Switch } from '~/components/ui';

const ThemeSwitch = () => {
  const hasMounted = useHasMounted();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isDarkMode =
    theme === 'dark' || resolvedTheme === 'dark' ? true : false;

  const toggleTheme = () => {
    isDarkMode ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className='absolute bottom-0 right-0 rounded-tl-md bg-zinc-100 p-4 text-zinc-800 opacity-0 hover:opacity-100'>
      <label className='flex flex-col items-center'>
        Dark Mode{' '}
        {hasMounted ? (
          <Switch isEnabled={isDarkMode} toggle={toggleTheme} />
        ) : (
          <Skeleton className='inline-block h-6 w-11 rounded-full' />
        )}
      </label>
    </div>
  );
};

export default ThemeSwitch;
