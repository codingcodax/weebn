import Image from 'next/image';

import WidgetsImage from '~/public/images/widgets.png';
import CopyGeneratedUrlImage from '~/public/images/copy-generated-url.png';
import NotionEmbedBlock from '~/public/images/notion-embed-block.png';

const howToUseSteps = [
  {
    title: 'Select your widget.',
    image: WidgetsImage,
    alt: 'list of widgets, quote widget, image gallery widget and random anime widget',
  },
  {
    title: 'Customize and copy the generated url.',
    image: CopyGeneratedUrlImage,
    alt: 'widget generated url input with copy button',
  },
  {
    title:
      'Generate a notion embed block and paste the url from the previous step',
    image: NotionEmbedBlock,
    alt: 'creating notion embed block',
  },
];

const HowToUse = () => {
  return (
    <main className='px-4'>
      <h1 className='text-4xl font-bold'>How to use</h1>
      <ol className='mt-4 list-inside list-decimal space-y-2'>
        {howToUseSteps.map(({ title, image, alt }) => (
          <li key={title}>
            {title}
            <Image alt={alt} src={image} />
          </li>
        ))}
      </ol>
    </main>
  );
};

export default HowToUse;
