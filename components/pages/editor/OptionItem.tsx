import { Switch } from '~/components/ui';

interface OptionItemProps {
  children: React.ReactNode;
}

const OptionItem = ({ children }: OptionItemProps) => {
  return <label className='grid grid-cols-[1fr_auto]'>{children}</label>;
};

interface OptionItemNameProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
OptionItem.Name = ({ children }: OptionItemNameProps) => {
  return <div>{children}</div>;
};

interface OptionItemDescriptionProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
OptionItem.Description = ({ children }: OptionItemDescriptionProps) => {
  return <p className='row-start-2 text-sm text-zinc-600'>{children}</p>;
};

interface OptionItemSwitchProps {
  enabled?: boolean;
  setEnabled: () => void;
}

// eslint-disable-next-line react/display-name
OptionItem.Switch = ({
  enabled = false,
  setEnabled,
}: OptionItemSwitchProps) => {
  return (
    <div className='col-start-2 row-span-2 grid items-center'>
      <Switch enabled={enabled} setEnabled={setEnabled} />
    </div>
  );
};

export default OptionItem;
