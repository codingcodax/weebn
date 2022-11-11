import { FC } from 'react';

interface InputProps {
  value: string;
  disabled?: boolean;
  id: string;
}

const Input: FC<InputProps> = ({ value, disabled, id }) => {
  return (
    <input
      className='w-full rounded-md bg-zinc-200 py-2 px-4'
      disabled={disabled}
      id={id}
      type='text'
      value={value}
    />
  );
};

export default Input;
