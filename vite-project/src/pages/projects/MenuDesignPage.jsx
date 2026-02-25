import { useEffect } from "react";

const InfoPill = ({ label, children }) => {
  return (
    <div className="rounded-3xl px-6 py-5">
      <div className="text-sm font-semibold tracking-wide text-gray-800/80">
        {label}
      </div>
      <div className="mt-1 text-base font-medium text-gray-900">{children}</div>
    </div>
  );
};

export const MenuDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10">
      <section className="pt-32 pb-10 px-4">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900">
            Menu Design
          </h1>

          <div className="mt-8 rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-pink-200/50 overflow-hidden">
            <img
              src="/menu/menu_header.png"
              alt="Menu design header"
              className="w-full h-[240px] sm:h-[320px] md:h-[380px] object-cover bg-white/10"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Daydream Diner is a popular retro-themed brunch spot for families
              to spend their time. Enjoy the warm food and refreshing drinks,
              kids eat free!
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            <InfoPill label="Software">
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-900">
                <li>Adobe InDesign</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
              </ul>
            </InfoPill>
            <InfoPill label="Timeline">2 Weeks</InfoPill>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-3xl min-h-[220px] overflow-hidden flex items-center justify-center">
            <img
              src="/menu/menu_mockup_first.png"
              alt="Menu mockup"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="lg:col-span-7 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Design Rationale
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Consumers struggle to find experiences that feel nostalgic and
              comforting. The Daydream Diner menu is designed to capture the
              charm of a retro- era diner while inviting guests into a warm,
              imaginative space. This design blends vintage typography, classic
              iconography, and a cohesive colour palette to evoke familiarity
              and comfort.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Design Process
          </h2>

          <div className="text-base font-semibold tracking-wide text-black mb-4">
            Wordmark
          </div>

          <div className="rounded-3xl border border-white/50 shadow-2xl shadow-pink-200/40 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-200/40 via-purple-300/40 to-pink-200/40 px-6 py-8 sm:py-10 text-center">
              <img
                src="/menu/menu_wordmark.png"
                alt="Daydream Diner wordmark"
                className="mx-auto w-[260px] sm:w-[340px] md:w-[420px] h-auto select-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-base font-semibold tracking-wide text-black mb-0">
            Results
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-0 mt-0">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/menu/menu_results.png"
                alt="menu result"
                className="w-full h-auto block"
                style={{ margin: 0, padding: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-2 pb-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-base font-semibold tracking-wide text-black mb-4">
            Graphics
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-white/60 p-4 shadow-md">
                <img
                  src="/menu/graphic_small_dots.png"
                  alt="graphic small dots"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl bg-white/60 p-4 shadow-md">
                <img
                  src="/menu/graphic_half_circle.png"
                  alt="graphic half circle"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl bg-white/60 p-4 shadow-md">
                <img
                  src="/menu/graphic_sticker.png"
                  alt="graphic sticker"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="lg:col-span-7 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="w-full">
                <img
                  src="/menu/graphic_big.png"
                  alt="graphic large"
                  className="w-full h-auto mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
