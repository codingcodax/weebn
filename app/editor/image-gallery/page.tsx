'use client';

import { useEffect, useState } from 'react';

import {
  LivePreview,
  OptionItem,
  SettingsPane,
  Tooltip,
  WidgetConfig,
} from '~/components/pages/editor';
import useToggle from '~/hooks/useToggle';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_URL
    : 'http://localhost:3000';
const PATH = '/widgets/image-gallery?';
const queries = 'showSource=true';

const ImageGallery = () => {
  const [widgetUrl, setWidgetUrl] = useState(`${BASE_URL}${PATH}${queries}`);
  const [sourceIsEnable, toggleSourceIsEnabled] = useToggle(true);

  useEffect(() => {
    const updateWidget = () => {
      const newQueries = `showSource=${sourceIsEnable}`;
      const newWidgetUrl = `${BASE_URL}${PATH}${newQueries}`;

      setWidgetUrl(newWidgetUrl);
    };

    updateWidget();
  }, [sourceIsEnable]);

  return (
    <div className='grid h-screen grid-cols-3'>
      <WidgetConfig>
        <WidgetConfig.Nav />
        <WidgetConfig.Title>Image Gallery</WidgetConfig.Title>

        <SettingsPane>
          <SettingsPane.Section>
            <SettingsPane.Title>Settings</SettingsPane.Title>
            <OptionItem>
              <OptionItem.Name>Source</OptionItem.Name>
              <OptionItem.Description>
                Show source of the image
              </OptionItem.Description>
              <OptionItem.Switch
                isEnabled={sourceIsEnable}
                toggle={toggleSourceIsEnabled}
              />
            </OptionItem>
          </SettingsPane.Section>
        </SettingsPane>

        <WidgetConfig.Footer widgetUrl={widgetUrl} />
      </WidgetConfig>

      <div className='col-span-2 flex flex-col items-center justify-center space-y-4'>
        <Tooltip />

        <LivePreview page={widgetUrl} />
      </div>
    </div>
  );
};

export default ImageGallery;
