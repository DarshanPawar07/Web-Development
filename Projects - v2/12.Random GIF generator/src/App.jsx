import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700 flex flex-col items-center py-12 px-6">
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-10 px-6 py-3 rounded-3xl shadow-lg bg-white bg-opacity-20 backdrop-blur-sm border border-white/30 max-w-md text-center">
        RANDOM GIFS
      </h1>

      <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 w-full max-w-4xl">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
