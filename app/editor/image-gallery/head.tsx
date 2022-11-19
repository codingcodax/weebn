import { NextSeo } from 'next-seo';

import SEO from 'next-seo.config';

const Head = () => {
  const updateMeta = {
    ...SEO,
    title: 'configure image gallery widget',
    description:
      'configure a image gallery widget for get random sfw from waifu.im with dark mode option',
    titleTemplate: '%s | weebn',
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
