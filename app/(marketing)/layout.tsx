import { Footer, Header } from '~/components/layout';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto grid h-screen max-w-6xl grid-rows-[auto_1fr_auto] gap-y-4'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
