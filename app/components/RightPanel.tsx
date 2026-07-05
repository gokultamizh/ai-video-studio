"use client";

import { useState } from "react";
import { Camera, Move, Wand2 } from "lucide-react";

type RightPanelProps = {
  image: string | null;
  video: string | null;
  imageFile: File | null;
  videoFile: File | null;
};

export default function RightPanel({
  imageFile,
  videoFile,
}: RightPanelProps) {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [motionStrength, setMotionStrength] = useState(50);
  const [camera, setCamera] = useState("None");
  const [creativity, setCreativity] = useState(70);

  async function generateVideo() {
    if (!imageFile) {
      alert("Please upload a character image.");
      return;
    }

    if (!videoFile) {
      alert("Please upload a reference video.");
      return;
    }

    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("image", imageFile);
      formData.append("video", videoFile);
      formData.append("prompt", prompt);
      formData.append("motionStrength", motionStrength.toString());
      formData.append("camera", camera);
      formData.append("creativity", creativity.toString());

      const response = await fetch(
        "http://127.0.0.1:8000/generate",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      console.log(result);

      alert(result.message);

    } catch (error) {
      console.error(error);
      alert("Failed to connect to Python backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 text-white">

      <h2 className="text-2xl font-bold mb-6">
        AI Controls
      </h2>

      <div className="mb-6">
        <label className="text-sm text-gray-400">
          Prompt
        </label>

        <textarea
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the animation..."
          className="mt-2 w-full rounded-xl bg-zinc-800 border border-zinc-700 p-3 outline-none"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Move size={18} />
          <span>Motion Strength ({motionStrength})</span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={motionStrength}
          onChange={(e) => setMotionStrength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Camera size={18} />
          <span>Camera Movement</span>
        </div>

        <select
          value={camera}
          onChange={(e) => setCamera(e.target.value)}
          className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-3"
        >
          <option>None</option>
          <option>Zoom In</option>
          <option>Zoom Out</option>
          <option>Pan Left</option>
          <option>Pan Right</option>
        </select>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Wand2 size={18} />
          <span>Creativity ({creativity})</span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={creativity}
          onChange={(e) => setCreativity(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        onClick={generateVideo}
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-bold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? "⏳ Uploading..." : "🚀 Generate Video"}
      </button>

    </div>
  );
}