'use client';

import { env } from 'process';

import { useEffect, useState } from 'react';

import {
  LivePreview,
  OptionItem,
  SettingsPane,
  Tooltip,
  WidgetConfig,
} from '~/components/pages/editor';
import { useDarkMode, useHasMounted, useToggle } from '~/hooks/index';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL
    : 'http://localhost:3000';
const PATH = '/widgets/quotes?';
const queries =
  'showThemeButton=true&showAnimeCharacter=true&showAnimeTitle=true';

const Quotes = () => {
  const hasMounted = useHasMounted();
  const { isDarkMode, toggleTheme } = useDarkMode();
  const [widgetUrl, setWidgetUrl] = useState(`${BASE_URL}${PATH}${queries}`);

  const [themeButtonIsEnabled, toggleThemeButtonIsEnabled] = useToggle(true);
  const [characterIsEnabled, toggleCharacterIsEnabled] = useToggle(true);
  const [titleIsEnabled, toggleTitleIsEnabled] = useToggle(true);

  useEffect(() => {
    const updateWidget = () => {
      const newQueries = `showThemeButton=${themeButtonIsEnabled}&showAnimeCharacter=${characterIsEnabled}&showAnimeTitle=${titleIsEnabled}`;
      const newWidgetUrl = `${BASE_URL}${PATH}${newQueries}`;

      setWidgetUrl(newWidgetUrl);
    };

    updateWidget();
  }, [themeButtonIsEnabled, characterIsEnabled, titleIsEnabled]);

  return (
    <div className='grid h-screen grid-cols-3'>
      <WidgetConfig>
        <WidgetConfig.Nav />
        <WidgetConfig.Title>Quotes</WidgetConfig.Title>
        <SettingsPane>
          <SettingsPane.Section>
            <SettingsPane.Title>Settings</SettingsPane.Title>

            <OptionItem>
              <OptionItem.Name>Theme Button</OptionItem.Name>
              <OptionItem.Description>
                Show toggle theme button when hover
              </OptionItem.Description>
              <OptionItem.Switch
                isEnabled={themeButtonIsEnabled}
                toggle={toggleThemeButtonIsEnabled}
              />
            </OptionItem>

            <OptionItem>
              <OptionItem.Name>Anime Character</OptionItem.Name>
              <OptionItem.Description>
                Show anime character name
              </OptionItem.Description>
              <OptionItem.Switch
                isEnabled={characterIsEnabled}
                toggle={toggleCharacterIsEnabled}
              />
            </OptionItem>

            <OptionItem>
              <OptionItem.Name>Anime Title</OptionItem.Name>
              <OptionItem.Description>
                Show anime title name
              </OptionItem.Description>
              <OptionItem.Switch
                isEnabled={titleIsEnabled}
                toggle={toggleTitleIsEnabled}
              />
            </OptionItem>
          </SettingsPane.Section>

          <SettingsPane.Divider />

          <SettingsPane.Section>
            <SettingsPane.Title>Styles</SettingsPane.Title>

            <OptionItem>
              <OptionItem.Name>Darke Theme</OptionItem.Name>
              <OptionItem.Description>
                Toggle between ligth and dark theme
              </OptionItem.Description>
              {hasMounted ? (
                <OptionItem.Switch
                  isEnabled={isDarkMode}
                  toggle={toggleTheme}
                />
              ) : (
                <OptionItem.SwitchSkeleton />
              )}
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

export default Quotes;
