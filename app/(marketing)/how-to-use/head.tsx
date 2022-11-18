import { NextSeo } from 'next-seo';

import SEO from 'next-seo.config';

const Head = () => {
  const updateMeta = {
    ...SEO,
    title: 'how to use',
    description: 'learn how to use our awesome widgets!',
    titleTemplate: '%s',
  };

  return <NextSeo {...updateMeta} useAppDir={true} />;
};

export default Head;
