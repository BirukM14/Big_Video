'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('File uploaded successfully!');
        setSelectedFile(null);
      } else {
        alert('Upload failed.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('An error occurred during upload.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Upload Video</h1>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {selectedFile && (
        <div className="mb-4">
          <p>Selected file: {selectedFile.name}</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
