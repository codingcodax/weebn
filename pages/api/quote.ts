import { NextApiRequest, NextApiResponse } from 'next';

const quote = async (_: NextApiRequest, res: NextApiResponse) => {
  const result = await fetch('https://animechan.vercel.app/api/random');
  const data = await result.json();

  if (!result.ok) return res.status(400).json({ error: 'Unable to get quote' });

  return res.status(200).json(data);
};

export default quote;
