"use client";

import { useEffect, useState } from "react";

export default function Timeline() {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const handleGenerate = () => {
      setFinished(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setFinished(true);
      }, 3000);
    };

    window.addEventListener("generate-video", handleGenerate);

    return () => {
      window.removeEventListener("generate-video", handleGenerate);
    };
  }, []);

  return (
    <div className="h-52 bg-zinc-900 border-t border-zinc-800 p-4 text-white">
      <h2 className="text-xl font-bold mb-4">
        Output Video
      </h2>

      <div className="h-36 rounded-xl border border-zinc-700 flex items-center justify-center overflow-hidden">

        {loading && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

            <span className="text-gray-300">
              Generating AI Video...
            </span>
          </div>
        )}

        {!loading && !finished && (
          <span className="text-gray-500">
            🎬 Generated video will appear here
          </span>
        )}

        {finished && (
          <video
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        )}

      </div>
    </div>
  );
}