import { FC } from 'react';

import { cn } from 'utils';

interface InputProps {
  value: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ value, disabled, id, className }) => {
  return (
    <input
      className={cn('w-full rounded-md bg-zinc-200 py-2 px-4', className)}
      disabled={disabled}
      id={id}
      type='text'
      value={value}
    />
  );
};

export default Input;
