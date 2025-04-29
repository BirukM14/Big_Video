import { NextResponse } from 'next/server';
import cloudinary from '@/app/lib/cloudinary';

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('resource_type:video')
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    console.log('Fetched videos:', result.resources.map((v: any) => v.public_id));

    const videos = result.resources
      .filter((video: any) => !video.public_id.startsWith('samples/')) // <--- FIXED HERE
      .map((video: any) => ({
        public_id: video.public_id,
        secure_url: video.secure_url,
      }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return NextResponse.json({ error: 'Failed to load videos' }, { status: 500 });
  }
}
