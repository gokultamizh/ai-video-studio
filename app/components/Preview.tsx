"use client";

import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

export default function Preview() {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  }

  return (
    <div className="flex-1 bg-zinc-950 p-8">

      <div
        onClick={() => inputRef.current?.click()}
        className="h-full rounded-3xl border-2 border-dashed border-purple-600 hover:border-purple-400 transition cursor-pointer overflow-hidden flex items-center justify-center"
      >

        {image ? (

          <img
            src={image}
            className="w-full h-full object-contain"
            alt="preview"
          />

        ) : (

          <div className="text-center text-gray-300">

            <ImagePlus size={70} className="mx-auto mb-6" />

            <h2 className="text-3xl font-bold">
              Upload Image
            </h2>

            <p className="mt-3 text-gray-500">
              Drag & Drop or Click Here
            </p>

          </div>

        )}

        <input
          hidden
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleChange}
        />

      </div>

    </div>
  );
}