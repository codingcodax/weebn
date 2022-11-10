import { FC } from 'react';
import * as Separator from '@radix-ui/react-separator';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

const Divider: FC<DividerProps> = ({ orientation }) => {
  return <Separator.Root orientation={orientation} />;
};

export default Divider;
