import { NextSeo } from 'next-seo';

import SEO from 'next-seo.config';

export default function Head() {
  return <NextSeo {...SEO} useAppDir={true} />;
}
