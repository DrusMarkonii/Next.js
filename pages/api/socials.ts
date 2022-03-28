// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { socials } from './data/socials'

// type Data = {
//   id: string,
//   icon: string,
//   path: string,
  
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method)
  res.status(200).json(socials)
  
}
