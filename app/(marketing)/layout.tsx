import { Footer, Header } from '~/components/layout';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto] gap-y-4'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
