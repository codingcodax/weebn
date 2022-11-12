interface SettingsPaneProps {
  children: React.ReactNode;
}

const SettingsPane = ({ children }: SettingsPaneProps) => {
  return <div className='space-y-8'>{children}</div>;
};

interface SettingsPaneSectionProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
SettingsPane.Section = ({ children }: SettingsPaneSectionProps) => {
  return <div className='space-y-6'>{children}</div>;
};

// eslint-disable-next-line react/display-name
SettingsPane.Divider = () => {
  return <div className='h-px bg-zinc-500' />;
};

interface SettingsPaneTitleProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
SettingsPane.Title = ({ children }: SettingsPaneTitleProps) => {
  return <p className='text-sm uppercase text-zinc-500'>{children}</p>;
};

export default SettingsPane;
