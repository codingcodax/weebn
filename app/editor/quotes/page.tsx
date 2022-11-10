import { LivePreview, Tooltip } from '~/components/pages/editor';

const Quotes = () => {
  return (
    <div className='grid h-screen grid-cols-3'>
      <div>
        <p>Editor</p>
      </div>
      <div className='col-span-2 flex flex-col items-center justify-center space-y-4'>
        <Tooltip />

        <LivePreview page='/widgets/quotes' />
      </div>
    </div>
  );
};

export default Quotes;
