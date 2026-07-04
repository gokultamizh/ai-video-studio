"use client";

import { useState } from "react";
import { Camera, Move, Wand2 } from "lucide-react";

export default function RightPanel() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  async function generateVideo() {
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          motionStrength: 50,
          camera: "None",
          creativity: 70,
        }),
      });

      const result = await response.json();

      console.log(result);

      window.dispatchEvent(new Event("generate-video"));

      alert(result.message);

    } catch (error) {
      console.error(error);

      alert("API Error");
    }

    setLoading(false);
  }

  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 text-white">

      <h2 className="text-2xl font-bold mb-6">
        AI Controls
      </h2>

      <label className="text-gray-400">
        Prompt
      </label>

      <textarea
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Replace the actor with my uploaded character..."
        className="mt-2 mb-6 w-full rounded-xl bg-zinc-800 border border-zinc-700 p-3 outline-none"
      />

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Move size={18} />
          Motion Strength
        </div>

        <input
          type="range"
          defaultValue={50}
          className="w-full"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Camera size={18} />
          Camera Movement
        </div>

        <select className="w-full rounded-xl bg-zinc-800 p-3">
          <option>None</option>
          <option>Zoom In</option>
          <option>Zoom Out</option>
          <option>Pan Left</option>
          <option>Pan Right</option>
        </select>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Wand2 size={18} />
          Creativity
        </div>

        <input
          type="range"
          defaultValue={70}
          className="w-full"
        />
      </div>

      <button
        onClick={generateVideo}
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-bold hover:scale-105 transition"
      >
        {loading ? "⏳ Generating..." : "🚀 Generate Video"}
      </button>

    </div>
  );
}