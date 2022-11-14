import { cn } from 'utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'h-5 w-2/5 animate-pulse rounded-md bg-zinc-300',
        className
      )}
      {...props}
    />
  );
};

export default Skeleton;
