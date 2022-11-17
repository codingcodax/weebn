import { NextSeo } from 'next-seo';

import SEO from 'next-seo.config';

const Head = () => {
  const updateMeta = {
    ...SEO,
    title: 'quotes widget',
    description: 'Quote widget for get anime quotes with dark mode option',
    titleTemplate: '%s',
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
