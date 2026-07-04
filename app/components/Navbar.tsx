export default function Navbar() {
    return (
      <nav className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6">
        <h1 className="text-white text-2xl font-bold">
          🎬 AI Video Studio
        </h1>
  
        <div className="flex items-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl">
            Login
          </button>
        </div>
      </nav>
    );
  }