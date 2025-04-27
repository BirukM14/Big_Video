// app/api/videos/route.ts
import { NextResponse } from 'next/server';
import cloudinary from '@/app/lib/cloudinary';

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('resource_type:video') // Fetch all videos
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    return NextResponse.json(result.resources); // array of video objects
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return NextResponse.json({ error: 'Failed to load videos' }, { status: 500 });
  }
}
