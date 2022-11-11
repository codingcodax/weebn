import { FC } from 'react';

interface InputProps {
  value: string;
  disabled: boolean;
  id: string;
}

const Input: FC<InputProps> = ({ value, disabled, id }) => {
  return <input disabled={disabled} id={id} type='text' value={value} />;
};

export default Input;
