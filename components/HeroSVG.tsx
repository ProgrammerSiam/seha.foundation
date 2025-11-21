export function HeroSVG() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:p-12">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to SEHA Foundation
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Building tomorrow's healthcare solutions today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="20" cy="20" r="8" fill="white" />
          <circle cx="80" cy="30" r="5" fill="white" />
          <circle cx="30" cy="70" r="6" fill="white" />
          <circle cx="70" cy="80" r="7" fill="white" />
          <circle cx="50" cy="50" r="4" fill="white" />
        </svg>
      </div>
    </div>
  );
}