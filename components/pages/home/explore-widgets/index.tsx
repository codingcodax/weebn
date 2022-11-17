import WidgetsList from './WidgetsList';

const ExploreWidgets = () => {
  return (
    <section className='min-h-[60vh] px-4' id='widgets'>
      <h3 className='mb-6 text-2xl font-bold' id='widgets'>
        Explore Widgets
      </h3>

      <WidgetsList />
    </section>
  );
};

export default ExploreWidgets;
