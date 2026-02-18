export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20">
      <div className="text-center space-y-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800">
          Hi, I'm Emmalee!
        </h1>

        <h2 className="text-5xl md:text-7xl font-light text-gray-900">
          Graphic Designer & Marketer
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button className="group relative px-8 py-3 rounded-full border border-gray-800 text-gray-800 font-medium text-lg overflow-hidden transition-all duration-300 hover:text-white">
            <span className="relative z-10">Let's Connect!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/70 via-purple-400/70 to-pink-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative px-8 py-3 rounded-full border border-gray-800 text-gray-800 font-medium text-lg overflow-hidden transition-all duration-300 hover:text-white">
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/70 via-purple-400/70 to-pink-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
