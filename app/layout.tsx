import { NextSeo } from 'next-seo';

import '~/styles/globals.css';

import Providers from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link href='/favicons/favicon.ico' rel='icon' />
        <link
          href='/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link href='/favicons/site.webmanifest' rel='manifest' />
        <link
          color='#27272a'
          href='/favicons/safari-pinned-tab.svg'
          rel='mask-icon'
        />
        <meta content='#27272a' name='msapplication-TileColor' />
        {/* <meta content='#ffffff' name='theme-color' /> */}
        <NextSeo
          themeColor='#27272a'
          titleTemplate='%s | weebn'
          useAppDir={true}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
