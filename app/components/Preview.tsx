"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, X } from "lucide-react";

export default function Preview() {
  const [image, setImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return (
    <div className="flex-1 bg-zinc-950 p-8">
      <div
        {...getRootProps()}
        className={`relative h-full rounded-3xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center ${
          isDragActive
            ? "border-purple-500 bg-purple-500/10"
            : "border-zinc-700 hover:border-purple-500"
        }`}
      >
        <input {...getInputProps()} />

        {image ? (
          <>
            <img
              src={image}
              alt="Preview"
              className="w-full h-full object-contain"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setImage(null);
              }}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 p-2 rounded-full transition"
            >
              <X size={20} className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("Generate Video feature coming soon 🚀");
              }}
              className="absolute bottom-5 right-5 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition"
            >
              Generate Video
            </button>
          </>
        ) : (
          <div className="text-center text-gray-400">
            <ImagePlus size={70} className="mx-auto mb-5" />

            <h2 className="text-3xl font-bold">
              Drag & Drop Image
            </h2>

            <p className="mt-3">
              or click to upload
            </p>
          </div>
        )}
      </div>
    </div>
  );
}