'use client';

import { Switch } from '@headlessui/react';
import { FC } from 'react';

interface MySwitchProps {
  enabled: boolean;
  setEnabled: () => void;
}

const MySwitch: FC<MySwitchProps> = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      className={`${
        enabled ? 'bg-zinc-900' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      onChange={setEnabled}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  );
};

export default MySwitch;
