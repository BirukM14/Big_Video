// components/VideoGallery.tsx
'use client';

import { useEffect, useState } from 'react';

type Video = {
  public_id: string;
  secure_url: string;
};

export default function VideoGallery() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch('/api/videos');
      const data = await res.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-xl font-semibold">All Uploaded Videos</h2>
      {videos.length === 0 ? (
        <p>No videos uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.public_id}>
              <video controls width="300">
                <source src={video.secure_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-sm text-gray-500 mt-2 break-all">{video.public_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
