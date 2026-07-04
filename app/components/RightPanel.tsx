"use client";

export default function RightPanel() {
  return (
    <aside className="w-80 bg-zinc-900 border-l border-zinc-800 p-5 overflow-y-auto">

      <h2 className="text-2xl text-white font-bold mb-6">
        AI Controls
      </h2>

      <div className="space-y-5">

        <div>
          <label className="text-gray-300 text-sm">
            Prompt
          </label>

          <textarea
            rows={5}
            placeholder="Describe your video..."
            className="mt-2 w-full rounded-xl bg-zinc-800 text-white p-3 outline-none border border-zinc-700 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Negative Prompt
          </label>

          <textarea
            rows={3}
            placeholder="Things to avoid..."
            className="mt-2 w-full rounded-xl bg-zinc-800 text-white p-3 outline-none border border-zinc-700 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Duration
          </label>

          <select className="mt-2 w-full rounded-xl bg-zinc-800 text-white p-3">

            <option>5 Seconds</option>

            <option>10 Seconds</option>

          </select>
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Aspect Ratio
          </label>

          <select className="mt-2 w-full rounded-xl bg-zinc-800 text-white p-3">

            <option>9:16</option>

            <option>16:9</option>

            <option>1:1</option>

          </select>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl text-white text-lg font-bold hover:scale-105 transition">

          Generate Video

        </button>

      </div>

    </aside>
  );
}