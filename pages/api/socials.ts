import { socials } from './data/socials';

export default function handler(req:any, res:any) {
  if (req.method === 'GET') {
    res.status(200).json(socials);
  };
}

