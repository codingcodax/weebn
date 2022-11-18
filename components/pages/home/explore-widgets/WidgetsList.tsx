import QuotesImage from '~/public/images/quotes.jpg';
import ImageGalleryImage from '~/public/images/image-gallery.jpg';
import DailyAnimeImage from '~/public/images/daily-anime.jpg';

import WidgetItem from './WidgetItem';

const widgetsItems = [
  {
    href: '/quotes',
    image: QuotesImage,
    title: 'Quotes',
    description: 'Anime quotes from AnimeChan',
  },
  {
    href: '/image-gallery',
    image: ImageGalleryImage,
    title: 'Image Gallery',
    description: 'Images from Nekos',
  },
  {
    href: '/daily-anime',
    image: DailyAnimeImage,
    title: 'Random Anime',
    description: 'Show a random anime to see',
    disabled: true,
  },
];

const WidgetsList = () => {
  return (
    <ul className='grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 lg:grid-cols-3'>
      {widgetsItems.map(({ href, image, title, description, disabled }) => (
        <WidgetItem
          key={title}
          description={description}
          disabled={disabled}
          href={href}
          image={image}
          title={title}
        />
      ))}
    </ul>
  );
};

export default WidgetsList;
