import { NextApiRequest, NextApiResponse } from 'next';

const imageGallery = async (_: NextApiRequest, res: NextApiResponse) => {
  const result = await fetch('https://api.waifu.im/random/?gif=false');
  const data = await result.json();

  if (!result.ok) return res.status(400).json({ error: 'Unable to get image' });

  return res.status(200).json({
    color: data.images[0].dominant_color,
    source: data.images[0].source,
    width: data.images[0].width,
    height: data.images[0].height,
    imageUrl: data.images[0].url,
    alt: data.images[0].tags[0].description,
  });
};

export default imageGallery;
