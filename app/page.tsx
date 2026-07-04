import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import RightPanel from "./components/RightPanel";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <div className="flex h-[calc(100vh-64px-128px)]">
        <Sidebar />
        <Preview />
        <RightPanel />
      </div>

      <Timeline />
    </main>
  );
}