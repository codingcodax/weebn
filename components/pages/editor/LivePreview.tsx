import { FC } from 'react';

interface LivePreviewProps {
  page: string;
}

const LivePreview: FC<LivePreviewProps> = ({ page }) => {
  return (
    <div className='h-[250px] w-[600px] resize overflow-auto rounded-md border-2 border-dashed border-zinc-500'>
      <iframe height='100%' src={`http://localhost:3000${page}`} width='100%' />
    </div>
  );
};

export default LivePreview;
