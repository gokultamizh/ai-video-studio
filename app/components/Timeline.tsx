"use client";

export default function Timeline() {
  return (
    <div className="h-44 bg-zinc-900 border-t border-zinc-800 p-4 text-white">
      <h2 className="text-lg font-semibold mb-3">Output</h2>

      <div className="h-28 rounded-xl border border-dashed border-zinc-700 flex items-center justify-center text-gray-400">
        🎬 Generated video will appear here
      </div>
    </div>
  );
}     