import Link from 'next/link';

import { Icons, Input } from '~/components/ui';

interface WidgetConfigProps {
  children: React.ReactNode;
}

const WidgetConfig = ({ children }: WidgetConfigProps) => {
  return (
    <div className='grid h-screen grid-rows-[auto_auto_1fr_auto] gap-y-8 bg-zinc-100 px-4 py-8'>
      {children}
    </div>
  );
};

// eslint-disable-next-line react/display-name
WidgetConfig.Nav = () => {
  return (
    <header>
      <Link href='/'>Logo</Link>
    </header>
  );
};

interface WidgetConfigTitleProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
WidgetConfig.Title = ({ children }: WidgetConfigTitleProps) => {
  return (
    <nav>
      <Link className='flex items-center space-x-4 text-lg' href='/'>
        <Icons.chevronLeft />
        <h2>{children}</h2>
      </Link>
    </nav>
  );
};

interface WidgetConfigFooterProps {
  widgetLink: string;
}

// eslint-disable-next-line react/display-name
WidgetConfig.Footer = ({ widgetLink }: WidgetConfigFooterProps) => {
  return (
    <div>
      <div className='h-px bg-zinc-500' />

      <p className='mt-8 mb-4 text-zinc-800'>
        Copy Link (then paste into Notion, and click &quot;Embed&quot;)
      </p>

      <div className='relative'>
        <Input disabled id='widgetLink' value={widgetLink} />
        <Icons.copy className='absolute top-3 right-4' height='16' width='16' />
      </div>
    </div>
  );
};

export default WidgetConfig;
