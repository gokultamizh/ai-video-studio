"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, X } from "lucide-react";

export default function CharacterUpload() {
  const [image, setImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    }
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="relative h-80 rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-900 flex items-center justify-center overflow-hidden"
    >
      <input {...getInputProps()} />

      {!image ? (
        <div
          onClick={open}
          className="cursor-pointer text-center text-gray-400"
        >
          <ImagePlus size={60} className="mx-auto mb-4" />

          <h2 className="text-2xl font-bold">
            Upload Character
          </h2>

          <p className="mt-2 text-sm">
            PNG / JPG / WEBP
          </p>
        </div>
      ) : (
        <>
          <img
            src={image}
            alt="Character"
            className="w-full h-full object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setImage(null);
            }}
            className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 rounded-full p-2"
          >
            <X size={18} className="text-white" />
          </button>
        </>
      )}
    </div>
  );
}