"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Video, X } from "lucide-react";

type VideoUploadProps = {
  video: string | null;
  setVideo: React.Dispatch<React.SetStateAction<string | null>>;
  videoFile: File | null;
  setVideoFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export default function VideoUpload({
  video,
  setVideo,
  videoFile,
  setVideoFile,
}: VideoUploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        setVideo(URL.createObjectURL(file));
        setVideoFile(file);
      }
    },
    [setVideo, setVideoFile]
  );

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

          <p className="mt-2">
            MP4 / MOV / WEBM
          </p>
        </div>
      ) : (
        <>
          <video
            src={video}
            controls
            className="w-full h-full object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();

              setVideo(null);
              setVideoFile(null);
            }}
            className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 rounded-full p-2"
          >
            <X size={18} className="text-white" />
          </button>

          <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 rounded-lg text-sm text-white">
            {videoFile?.name}
          </div>
        </>
      )}
    </div>
  );
}