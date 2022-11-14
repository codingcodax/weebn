import { useTheme } from 'next-themes';

const useDarkMode = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isDarkMode =
    theme === 'dark' || resolvedTheme === 'dark' ? true : false;

  const toggleTheme = () => {
    isDarkMode ? setTheme('light') : setTheme('dark');
  };

  return { isDarkMode, toggleTheme };
};

export default useDarkMode;
