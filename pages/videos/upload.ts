import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/app/db/config' // Your MongoDB connect function
import Video from '@/app/models/Video'; // Your Video model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { title, description, videoUrl, thumbnailUrl, userId } = req.body;

      const newVideo = new Video({
        title,
        description,
        videoUrl,
        thumbnailUrl,
        userId
      });

      await newVideo.save();
      res.status(201).json(newVideo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
