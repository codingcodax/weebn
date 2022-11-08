import WidgetItem from './WidgetItem';

const widgetsItems = [
  {
    href: '/quotes',
    title: 'Quotes',
    description: 'Anime quotes from AnimeChan',
  },
  {
    href: '/image-galley',
    title: 'Image Gallery',
    description: 'Images from Nekos',
  },
  {
    href: 'daily-anime',
    title: 'Random Anime',
    description: 'Show a random anime to see',
  },
];

const WidgetsList = () => {
  return (
    <ul className='grid grid-cols-1 gap-4 min-[500px]:grid-cols-2'>
      {widgetsItems.map(({ href, title, description }) => (
        <WidgetItem
          key={title}
          description={description}
          href={href}
          title={title}
        />
      ))}
    </ul>
  );
};

export default WidgetsList;
