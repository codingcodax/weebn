import WidgetItem from './WidgetItem';

const widgetsItems = [
  {
    href: '/quotes',
    image: '/quotes.png',
    title: 'Quotes',
    description: 'Anime quotes from AnimeChan',
  },
  {
    href: '/image-gallery',
    image: '/image-gallery.png',
    title: 'Image Gallery',
    description: 'Images from Nekos',
  },
  {
    href: 'daily-anime',
    image: '/daily-anime.png',
    title: 'Random Anime',
    description: 'Show a random anime to see',
  },
];

const WidgetsList = () => {
  return (
    <ul className='grid grid-cols-1 gap-4 min-[500px]:grid-cols-2'>
      {widgetsItems.map(({ href, image, title, description }) => (
        <WidgetItem
          key={title}
          description={description}
          href={href}
          image={image}
          title={title}
        />
      ))}
    </ul>
  );
};

export default WidgetsList;
