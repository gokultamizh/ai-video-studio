"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import CharacterUpload from "./components/upload/CharacterUpload";
import VideoUpload from "./components/upload/VideoUpload";
import RightPanel from "./components/RightPanel";
import Timeline from "./components/Timeline";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Character Image
            </h2>

            <CharacterUpload
              image={image}
              setImage={setImage}
              imageFile={imageFile}
              setImageFile={setImageFile}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Reference Video
            </h2>

            <VideoUpload
              video={video}
              setVideo={setVideo}
              videoFile={videoFile}
              setVideoFile={setVideoFile}
            />
          </div>

        </div>

        <div className="mb-8">
          <RightPanel
            image={image}
            video={video}
            imageFile={imageFile}
            videoFile={videoFile}
          />
        </div>

        <Timeline />

      </div>
    </main>
  );
}