import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  userId: string; // or use ObjectId if referencing a User model
  createdAt: Date;
}

const VideoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
  userId: { type: String, required: true }, // or: type: mongoose.Schema.Types.ObjectId, ref: 'User'
  createdAt: { type: Date, default: Date.now }
});

// Prevent model overwrite issues in dev
const Video = models.Video || model<IVideo>('Video', VideoSchema);
export default Video;
