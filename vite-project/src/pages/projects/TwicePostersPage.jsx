import { useEffect, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RESULT_SLIDES = [
  { src: "/twice/twice_mockupThree.png", alt: "TWICE Posters mockup" },
  { src: "/twice/result_nayeon.png", alt: "Nayeon poster" },
  { src: "/twice/result_sana.png", alt: "Sana poster" },
  { src: "/twice/result_jihyo.png", alt: "Jihyo poster" },
];

const InfoBlock = ({ label, children }) => (
  <div>
    <p className="text-base font-semibold text-gray-900 mb-1">{label}</p>
    <div className="text-gray-800 text-base leading-relaxed">{children}</div>
  </div>
);

export const TwicePostersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10">
      {/* Header */}
      <section className="pt-32 pb-10 px-4">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900">
            Twice Posters
          </h1>

          <div className="flex gap-2 mt-4 mb-8">
            <Badge variant="outline">Creative Design</Badge>
            <Badge variant="outline">Graphic Design</Badge>
          </div>

          <div className="rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-purple-200/50 overflow-hidden">
            <img
              src="/twice/twice_mockupOne.png"
              alt="TWICE Posters header"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview + Software/Timeline */}
      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview:
            </h2>
            <p className="text-gray-800 leading-relaxed">
              This trio poster series for TWICE features Nayeon, Sana, and
              Jihyo. Each poster highlighting a distinct mood through bold
              typography, colour, and composition, reflecting the energy and
              personality that define TWICE.
            </p>
          </div>

          <div className="lg:col-span-3 rounded-3xl p-8">
            <InfoBlock label="Software:">
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Illustrator</li>
                <li>Photoshop</li>
              </ul>
            </InfoBlock>
          </div>

          <div className="lg:col-span-3 rounded-3xl p-8">
            <InfoBlock label="Timeline">3 Weeks</InfoBlock>
          </div>
        </div>
      </section>

      {/* Design Rationale */}
      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden">
            <img
              src="/twice/twice_mockupTwo.png"
              alt="TWICE Posters mockup"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="lg:col-span-7 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Design Rationale:
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Fans connect strongly with individual members of TWICE, but
              highlighting each member without losing the group&apos;s identity
              can be challenging. This trio poster series gives Nayeon, Sana,
              and Jihyo unique visual touches while maintaining consistency
              through colour, typography, and composition. Bold colours
              reference the minimalistic feel of the group&apos;s album{" "}
              <em>This is For</em>, while Y2K-inspired typography nods to their
              earlier eras. The result is a cohesive set that lets each member
              shine while reinforcing TWICE&apos;s overall energy and identity.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <ResultsCarousel />
    </div>
  );
};

function ResultsCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + RESULT_SLIDES.length) % RESULT_SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % RESULT_SLIDES.length);

  return (
    <section className="px-4 pb-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Results
        </h2>

        {/* Three poster images side by side */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { name: "Nayeon", src: "/twice/nayeon_poster.png" },
            { name: "Sana", src: "/twice/sana_poster.png" },
            { name: "Jihyo", src: "/twice/jihyo_poster.png" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden">
                <img
                  src={item.src}
                  alt={`${item.name} poster`}
                  className="w-full h-full object-cover block"
                />
              </div>
              <p className="mt-3 text-base font-medium text-gray-900">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-purple-200/50 overflow-hidden">
          <div className="w-full h-[420px] sm:h-[580px]">
            <img
              key={current}
              src={RESULT_SLIDES[current].src}
              alt={RESULT_SLIDES[current].alt}
              className="w-full h-full object-cover block transition-opacity duration-300"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-[#672AAF] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-[#672AAF] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {RESULT_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-6 h-2.5 bg-[#672AAF]"
                    : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
