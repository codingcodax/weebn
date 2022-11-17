const title = 'weebn | weeb notion widgets';
export const description =
  'Level up your Notion with light weight weeb widgets, fully customizable and ready to use.';
export const domain = 'https://weebn.vercel.app';

const SEO = {
  title,
  description,
  canonical: domain,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: domain,
    title,
    description,
    siteName: 'title',
    images: [
      {
        url: `${domain}/images/og.jpg`,
        alt: 'nextjs logo, weebn title and description and github repo, preview quotes editor page',
        height: 675,
        width: 1200,
      },
    ],
  },

  twitter: {
    handle: '@codingcodax',
    site: '@codingcodax',
    cardType: 'summary_large_image',
  },
};

export default SEO;
