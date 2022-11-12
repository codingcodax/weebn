'use client';

import { Switch } from '@headlessui/react';
import { Dispatch, FC } from 'react';

interface MySwitchProps {
  isEnabled: boolean;
  toggle: Dispatch<boolean>;
}

const MySwitch: FC<MySwitchProps> = ({ isEnabled, toggle }) => {
  return (
    <Switch
      checked={isEnabled}
      className={`${
        isEnabled ? 'bg-zinc-900' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2`}
      onChange={toggle}
    >
      <span
        className={`${
          isEnabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  );
};

export default MySwitch;
