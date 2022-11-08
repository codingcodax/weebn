import { Footer, Header } from '~/components/layout';

import '~/styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='grid h-screen grid-rows-[auto_1fr_auto] gap-y-4'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
