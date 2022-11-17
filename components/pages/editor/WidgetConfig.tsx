import Link from 'next/link';

import { useCopyToClipboard } from '~/hooks/index';
import { Icons, Logo } from '~/components/ui';

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
      <Logo />
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
  widgetUrl: string;
}

// eslint-disable-next-line react/display-name
WidgetConfig.Footer = ({ widgetUrl }: WidgetConfigFooterProps) => {
  return (
    <div>
      <div className='h-px bg-zinc-500' />

      <p className='mt-8 mb-4 text-zinc-800'>
        Copy Link (then paste into Notion, and click &quot;Embed&quot;)
      </p>

      <WidgetLinkInput inputValue={widgetUrl} />
    </div>
  );
};

const WidgetLinkInput = ({ inputValue }: { inputValue: string }) => {
  const { isCopied, copy, textRef } = useCopyToClipboard();

  return (
    <div className='relative'>
      <input
        ref={textRef}
        disabled
        className='w-full rounded-md bg-zinc-200 py-2 px-4 pr-10'
        value={inputValue}
      />
      <button
        className='absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-r-md bg-zinc-900 hover:bg-zinc-800'
        disabled={isCopied ? true : false}
        onClick={() => copy()}
      >
        {isCopied ? (
          <Icons.check className='stroke-white' height='16' width='16' />
        ) : (
          <Icons.copy className='stroke-white' height='16' width='16' />
        )}
      </button>
    </div>
  );
};

export default WidgetConfig;
