"use client";

import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, X } from "lucide-react";

type MotionPoint = {
  id: number;
  x: number;
  y: number;
};

export default function Preview() {
  const [image, setImage] = useState<string | null>(null);
  const [points, setPoints] = useState<MotionPoint[]>([]);

  const imageRef = useRef<HTMLImageElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file));
      setPoints([]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
    noClick: true,
  });

  function addPoint(e: React.MouseEvent<HTMLImageElement>) {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints((prev) => [
      ...prev,
      {
        id: Date.now(),
        x,
        y,
      },
    ]);
  }

  return (
    <div className="flex-1 bg-zinc-950 p-8">
      <div
        {...getRootProps()}
        className={`relative h-full rounded-3xl border-2 border-dashed transition-all duration-300 overflow-hidden flex items-center justify-center ${
          isDragActive
            ? "border-purple-500 bg-purple-500/10"
            : "border-zinc-700 hover:border-purple-500"
        }`}
      >
        <input {...getInputProps()} />

        {!image ? (
          <div
            onClick={open}
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer text-gray-400"
          >
            <ImagePlus size={70} className="mb-5" />

            <h2 className="text-3xl font-bold">
              Drag & Drop Image
            </h2>

            <p className="mt-3">
              or click to upload
            </p>
          </div>
        ) : (
          <>
            <img
              ref={imageRef}
              src={image}
              alt="Preview"
              onClick={addPoint}
              className="w-full h-full object-contain cursor-crosshair"
            />

            {points.map((point) => (
              <div
                key={point.id}
                className="absolute w-5 h-5 rounded-full bg-red-500 border-2 border-white"
                style={{
                  left: point.x - 10,
                  top: point.y - 10,
                }}
              />
            ))}

            <button
              onClick={() => {
                setImage(null);
                setPoints([]);
              }}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 p-2 rounded-full z-20"
            >
              <X size={18} className="text-white" />
            </button>

            <button
              onClick={() => {
                window.dispatchEvent(new Event("generate-video"));
              }}
              className="absolute bottom-5 right-5 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition z-20"
            >
              🚀 Generate Video
            </button>
          </>
        )}
      </div>
    </div>
  );
}