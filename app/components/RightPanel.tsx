"use client";

import { SlidersHorizontal, Move, Camera, Wand2 } from "lucide-react";

export default function RightPanel() {
  return (
    <aside className="w-80 bg-zinc-900 border-l border-zinc-800 p-6 overflow-y-auto text-white">

      <h2 className="text-2xl font-bold mb-6">
        AI Controls
      </h2>

      {/* Prompt */}

      <div className="mb-6">
        <label className="text-sm text-gray-400">
          Prompt
        </label>

        <textarea
          rows={5}
          placeholder="Example: A girl walks forward while the camera slowly zooms in..."
          className="mt-2 w-full rounded-xl bg-zinc-800 border border-zinc-700 p-3 outline-none focus:border-purple-500"
        />
      </div>

      {/* Motion Strength */}

      <div className="mb-6">

        <div className="flex items-center gap-2 mb-2">
          <Move size={18}/>
          <span>Motion Strength</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="w-full"
        />

      </div>

      {/* Camera */}

      <div className="mb-6">

        <div className="flex items-center gap-2 mb-2">
          <Camera size={18}/>
          <span>Camera Movement</span>
        </div>

        <select className="w-full bg-zinc-800 rounded-xl p-3">

          <option>None</option>
          <option>Zoom In</option>
          <option>Zoom Out</option>
          <option>Pan Left</option>
          <option>Pan Right</option>
          <option>Tilt Up</option>
          <option>Tilt Down</option>

        </select>

      </div>

      {/* Creativity */}

      <div className="mb-6">

        <div className="flex items-center gap-2 mb-2">
          <Wand2 size={18}/>
          <span>Creativity</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="70"
          className="w-full"
        />

      </div>

      {/* Generate */}

      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl py-4 font-bold hover:scale-105 transition">
        🚀 Generate Video
      </button>

    </aside>
  );
}