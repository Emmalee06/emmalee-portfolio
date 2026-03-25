import { useEffect, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const RESULT_SLIDES = [
  { src: "/travel_magazine/resultOne.png", alt: "Travel Magazine spread 1" },
  { src: "/travel_magazine/resultTwo.png", alt: "Travel Magazine spread 2" },
  { src: "/travel_magazine/resultThree.png", alt: "Travel Magazine spread 3" },
  { src: "/travel_magazine/resultFour.png", alt: "Travel Magazine spread 4" },
];

const InfoBlock = ({ label, children }) => (
  <div>
    <p className="text-base font-semibold text-gray-900 mb-1">{label}</p>
    <div className="text-gray-800 text-base leading-relaxed">{children}</div>
  </div>
);

export const TravelMagazinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10">
      {/* Header */}
      <section className="pt-32 pb-10 px-4">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900">
            Travel Magazine
          </h1>

          <div className="flex gap-2 mt-4 mb-8">
            <Badge variant="outline">Graphic Design</Badge>
          </div>

          <div className="rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-purple-200/50 overflow-hidden">
            <img
              src="/travel_magazine/header.png"
              alt="Travel Magazine header"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview + Software / Timeline */}
      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Overview */}
          <div className="lg:col-span-6 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview:
            </h2>
            <p className="text-gray-800 leading-relaxed mb-6">
              This Scotland travel brochure highlights the country&apos;s
              landscapes, culture, and must-see spots in a visually engaging
              way.
            </p>
            <a
              href="/travel_magazine/travel_magazine_full.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
            >
              View Full PDF <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Software */}
          <div className="lg:col-span-3 rounded-3xl p-8">
            <InfoBlock label="Software:">
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>InDesign</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
              </ul>
            </InfoBlock>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-3 rounded-3xl p-8">
            <InfoBlock label="Timeline:">3 Weeks</InfoBlock>
          </div>
        </div>
      </section>

      {/* Design Rationale */}
      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden">
            <img
              src="/travel_magazine/mockupOne.png"
              alt="Travel Magazine mockup"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="lg:col-span-7 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Design Rationale:
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Travel brochures often need to balance large amounts of
              information while still feeling engaging and easy to follow. This
              Scotland brochure addresses that by combining immersive imagery
              with clear, structured content to guide the reader through the
              journey. Consistent layout, typography, and spacing create a
              smooth reading experience, while scenic visuals bring
              Scotland&apos;s landscapes and atmosphere to life. This balance
              allows the brochure to feel both informative and inviting,
              encouraging readers to explore the destination while easily
              navigating the content.
            </p>
          </div>
        </div>
      </section>

      {/* Results Carousel */}
      <ResultsCarousel />
    </div>
  );
};

function ResultsCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((c) => (c - 1 + RESULT_SLIDES.length) % RESULT_SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % RESULT_SLIDES.length);

  return (
    <section className="px-4 pb-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Results</h2>

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
