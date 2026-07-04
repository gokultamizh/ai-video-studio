"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Video, X } from "lucide-react";

export default function VideoUpload() {
  const [video, setVideo] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setVideo(URL.createObjectURL(acceptedFiles[0]));
    }
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: {
      "video/*": [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="relative h-80 rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-900 flex items-center justify-center overflow-hidden"
    >
      <input {...getInputProps()} />

      {!video ? (
        <div
          onClick={open}
          className="cursor-pointer text-center text-gray-400"
        >
          <Video size={60} className="mx-auto mb-4" />

          <h2 className="text-2xl font-bold">
            Upload Reference Video
          </h2>

          <p className="mt-2 text-sm">
            MP4 / MOV / WEBM
          </p>
        </div>
      ) : (
        <>
          <video
            controls
            className="w-full h-full object-contain"
          >
            <source src={video} />
          </video>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setVideo(null);
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