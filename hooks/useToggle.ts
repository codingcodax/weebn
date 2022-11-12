import { useReducer } from 'react';

const toggler = (currentValue: boolean, newValue: boolean) => {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
};

const useToggle = (initialValue = false) => {
  return useReducer(toggler, initialValue);
};

export default useToggle;
