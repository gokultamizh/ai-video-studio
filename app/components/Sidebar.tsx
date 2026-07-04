export default function Sidebar() {
    return (
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Workspace</h2>
  
        <ul className="space-y-4">
          <li className="hover:text-purple-400 cursor-pointer">🖼 Image to Video</li>
          <li className="hover:text-purple-400 cursor-pointer">🎥 Video to Video</li>
          <li className="hover:text-purple-400 cursor-pointer">🎯 Motion Control</li>
          <li className="hover:text-purple-400 cursor-pointer">🎤 Lip Sync</li>
          <li className="hover:text-purple-400 cursor-pointer">🎵 Audio</li>
          <li className="hover:text-purple-400 cursor-pointer">📁 Projects</li>
          <li className="hover:text-purple-400 cursor-pointer">⚙ Settings</li>
        </ul>
      </aside>
    );
  }