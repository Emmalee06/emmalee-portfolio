import { useState, useRef } from "react";
import "../../styles/AnimatedButton.css";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SITEMAP_SRC = "/case_study/to%20put%20in%20portfolio/sitemap.png";

const PROMO_SLIDES = [
  {
    src: "/case_study/to%20put%20in%20portfolio/brochure_mockup.png",
    alt: "SafeSpace Brochure Mockup",
  },
  {
    src: "/case_study/to%20put%20in%20portfolio/cards_mockup.png",
    alt: "SafeSpace Business Cards Mockup",
  },
  {
    src: "/case_study/to%20put%20in%20portfolio/stickers_mockup.png",
    alt: "SafeSpace Stickers Mockup",
  },
];

function PromoSection() {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((c) => (c - 1 + PROMO_SLIDES.length) % PROMO_SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % PROMO_SLIDES.length);

  return (
    <section id="promo" className="px-4 pb-14 mt-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-[#672AAF] mb-6">
          Promotional Material
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-10">
          The SafeSpace promotional materials were designed to create a cohesive
          and recognizable brand presence across both physical and print
          touchpoints. This included a series of stickers, a brochure, and
          business cards, each reinforcing the brand&apos;s visual identity
          through consistent typography, colour, and messaging. The stickers
          were designed to be simple and memorable, helping increase visibility,
          while the brochure provided a clear overview of the platform and its
          key features. Business cards and tags offered a more direct and
          professional point of contact. Together, these materials support brand
          awareness and make SafeSpace more accessible in everyday environments.
        </p>

        {/* 01 Materials */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">01. Materials</h3>

        {/* Carousel */}
        <div className="relative rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-purple-200/50 overflow-hidden">
          {/* Slide */}
          <div className="w-full h-[420px] sm:h-[520px]">
            <img
              key={current}
              src={PROMO_SLIDES[current].src}
              alt={PROMO_SLIDES[current].alt}
              className="w-full h-full object-cover block transition-opacity duration-300"
            />
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-[#672AAF] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-[#672AAF] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {PROMO_SLIDES.map((_, i) => (
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

        {/* 02 SafeSpace Advertisement */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            02. SafeSpace Advertisement
          </h3>
          <div className="rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-purple-200/50 overflow-hidden">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MMd5eeb8AVs"
                title="SafeSpace Advertisement"
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WIREFRAME_PAGES = [
  { label: "Lo-Fi", nodeId: "1-10" },
  { label: "Hi-Fi", nodeId: "1510-2777" },
  { label: "Web Supplement", nodeId: "626-2283" },
];

const FIGMA_BASE =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FMXFOSweojBY1qFrCWJ70dG%2FUX-UI-MOCKUPS--Copy-%3Fnode-id%3D";

export const SafeSpaceCaseStudyPage = () => {
  const [activeWireframe, setActiveWireframe] = useState(0);
  const [sitemapExpanded, setSitemapExpanded] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panPos, setPanPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(null);
  const containerRef = useRef(null);

  const openLightbox = () => {
    setSitemapExpanded(true);
    setZoomScale(1);
    setPanPos({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setSitemapExpanded(false);
    setZoomScale(1);
    setPanPos({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    const newScale = Math.min(Math.max(zoomScale * zoomFactor, 0.5), 8);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mx = e.clientX - rect.left - rect.width / 2;
      const my = e.clientY - rect.top - rect.height / 2;
      const ratio = newScale / zoomScale;
      setPanPos({
        x: mx + (panPos.x - mx) * ratio,
        y: my + (panPos.y - my) * ratio,
      });
    }
    setZoomScale(newScale);
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - panPos.x, y: e.clientY - panPos.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !dragStartRef.current) return;
    setPanPos({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative z-10">
      <section className="pt-32 pb-10 px-4">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900">
            SafeSpace
          </h1>
          <div className="flex gap-2 mt-4 mb-4">
            <Badge variant="outline">Case Study</Badge>
            <Badge variant="outline">Marketing</Badge>
            <Badge variant="outline">UI/UX Design</Badge>
          </div>
          <div className="mt-8 rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-purple-200/50 overflow-hidden">
            <img
              src="/case_study/to%20put%20in%20portfolio/multiphones_safespace.png"
              alt="SafeSpace Case Study Header"
              className="w-full h-[240px] sm:h-[320px] md:h-[380px] object-cover bg-white/10"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl">
          {/* Overview + Roles/Skills/Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
            <div className="lg:col-span-5 rounded-3xl pt-8 pr-8 pb-8 flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-[#672AAF] mb-3">
                  Overview:
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                  SafeSpace is an app designed to help women and gender-diverse
                  people foster safer, and more inclusive worksites.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
                >
                  View Prototype <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
                >
                  Blog <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
                >
                  Instagram <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
              <div>
                <h3 className="font-bold text-[#672AAF] text-xl mb-2">
                  My Roles:
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-800 text-lg">
                  <li>Lead Marketer</li>
                  <li>Creative Designer</li>
                  <li>UX Researcher</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#672AAF] text-xl mb-2">
                  Skills:
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-800 text-lg">
                  <li>Digital Marketing</li>
                  <li>Brand Awareness</li>
                  <li>UI/UX Design</li>
                  <li>User Research</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#672AAF] text-xl mb-2">
                  Timeline:
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-800 text-lg">
                  <li>3 Months</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#672AAF] mb-4">
              Table of Contents:
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="#background"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Background & Problem
              </a>
              <a
                href="#solution"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Solution
              </a>
              <a
                href="#research"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Research & Analysis
              </a>
              <a
                href="#branding"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Branding
              </a>
              <a
                href="#design"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Design Journey
              </a>
              <a
                href="#marketing"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Digital Marketing
              </a>
              <a
                href="#promo"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Promotional Material
              </a>
              <a
                href="#wrapup"
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
              >
                Wrap Up
              </a>
            </div>
          </div>

          {/* Background & Problem */}
          <div id="background" className="mt-32 mb-6">
            <p className="text-3xl md:text-4xl font-normal text-center text-gray-800 py-10">
              Women make up{" "}
              <strong className="font-bold text-[#672AAF]">&lt;5%</strong> of
              skilled trades workers.
              <br />
              Yet, the{" "}
              <strong className="font-bold text-[#672AAF]">
                majority
              </strong>{" "}
              report experiencing{" "}
              <strong className="font-bold text-[#672AAF]">harassment</strong>{" "}
              on the job.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Minority groups such as women and gender-diverse tradespeople can
              feel uncomfortable or unsafe on the work site, often not because
              they lack skills or confidence, but because of gender bias,
              harassment, and hidden discrimination that goes unchallenged.
              However, many find it difficult to report these experiences as
              they often feel intimated by the process or they believe it is
              pointless.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-10">
              So, team SafeSpace got together and asked the question that was on
              everyone&apos;s mind:
            </p>
          </div>
        </div>

        {/* Quote banner */}
        <div className="mx-auto w-full max-w-6xl mb-10">
          <div className="rounded-3xl border border-white/50 shadow-2xl shadow-purple-200/40 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-200/40 via-pink-200/40 to-purple-300/40 px-6 py-14 text-center">
              <span className="text-3xl md:text-4xl font-bold text-[#672AAF] text-center">
                &quot;How can we make a meaningful impact in the industry?&quot;
              </span>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div id="solution" className="mx-auto w-full max-w-6xl mt-32 mb-10">
          <h2 className="text-3xl font-bold text-[#672AAF] mb-3">
            Meet SafeSpace
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            SafeSpace was created to help women and gender-diverse people foster
            safer, and more inclusive work environments. With the help of AI,
            the app can summarize anonymous worker reports and generate
            practical solutions that aims to change worksite culture.
          </p>

          {/* Feature 01 — text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-base text-[#672AAF] font-semibold mb-1">01.</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Check Site Safety
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                See which job sites are safe before you arrive—giving you peace
                of mind and control over where you work.
              </p>
            </div>
            <div className="rounded-3xl border border-white/50 shadow-xl shadow-purple-200/40 overflow-hidden">
              <div className="bg-gradient-to-br from-purple-200/50 to-purple-400/40 flex items-center justify-center px-8 py-10">
                <img
                  src="/case_study/to%20put%20in%20portfolio/home_page_single.png"
                  alt="Check Site Safety screen"
                  className="w-auto max-h-[520px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Feature 02 — image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="rounded-3xl border border-white/50 shadow-xl shadow-purple-200/40 overflow-hidden order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-200/50 to-purple-400/40 flex items-center justify-center px-8 py-10">
                <img
                  src="/case_study/to%20put%20in%20portfolio/recording_page_single.png"
                  alt="Discreetly Record screen"
                  className="w-auto max-h-[520px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-base text-[#672AAF] font-semibold mb-1">02.</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Discreetly Record
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Discreetly capture unsafe encounters with the help of our
                recording feature that immediately uploads your recording to the
                cloud.
              </p>
            </div>
          </div>

          {/* Feature 03 — text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-base text-[#672AAF] font-semibold mb-1">03.</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                File a Report
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Create fully anonymous reports to upload to our public posts,
                bringing more awareness to worksite safety issues.
              </p>
            </div>
            <div className="rounded-3xl border border-white/50 shadow-xl shadow-purple-200/40 overflow-hidden">
              <div className="bg-gradient-to-br from-purple-200/50 to-purple-400/40 flex items-center justify-center px-8 py-10">
                <img
                  src="/case_study/to%20put%20in%20portfolio/report_page_single.png"
                  alt="File a Report screen"
                  className="w-auto max-h-[520px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Analysis Section */}
      <section id="research" className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-[#672AAF] mb-10">
            Research &amp; Analysis
          </h2>

          {/* 01. Competitive Analysis */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              01. Competitive Analysis
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-10">
              In the early stages of development, the team conducted competitive
              research to understand the safety and wellness app landscape.{" "}
              <span className="text-[#b06fcf] font-semibold">Communia</span> and{" "}
              <span className="text-[#e07b39] font-semibold">WorkSafety</span>{" "}
              Pro were identified as direct competitors, while{" "}
              <span className="text-[#e07b39] font-semibold">Headspace</span>{" "}
              served as an indirect competitor. Across these platforms, common
              features such as accessible safety resources, community support,
              and strong privacy protections were identified, helping inform the
              foundational direction of SafeSpace's design.
            </p>
            <div className="flex flex-row items-center justify-center gap-16">
              <img
                src="/case_study/comunia.svg"
                alt="Communia logo"
                className="w-28 h-28 object-contain rounded-2xl"
              />
              <img
                src="/case_study/worksafe.svg"
                alt="WorkSafety logo"
                className="w-28 h-28 object-contain rounded-2xl"
              />
              <img
                src="/case_study/headspace.svg"
                alt="Headspace logo"
                className="w-28 h-28 object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* 02. Interviews & Research */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              02. Interviews &amp; Research
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  To better understand the problem, the team conducted multiple
                  interviews with women working in trades, which provided
                  powerful insight into how male-dominated the industry remains.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  In addition, survey data further validated these findings:
                  66.7% of respondents reported feeling isolated at work due to
                  their gender. With unfair treatment, feelings of exclusion,
                  and male-dominated workplace culture identified as key
                  contributing factors.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <blockquote className="relative px-10 py-4">
                  <span className="absolute top-0 left-0 text-7xl text-[#672AAF] font-serif leading-none">
                    &ldquo;
                  </span>
                  <p className="text-2xl md:text-3xl text-gray-800 leading-snug">
                    <span className="text-[#672AAF] font-bold text-3xl md:text-4xl">
                      66.7%
                    </span>{" "}
                    of respondents reported feeling{" "}
                    <span className="text-[#672AAF] font-bold text-3xl md:text-4xl">
                      isolated
                    </span>{" "}
                    at work due to their{" "}
                    <span className="text-[#672AAF] font-bold text-3xl md:text-4xl">
                      gender
                    </span>
                  </p>
                  <span className="absolute bottom-0 right-0 text-7xl text-[#672AAF] font-serif leading-none">
                    &rdquo;
                  </span>
                </blockquote>
              </div>
            </div>
          </div>

          {/* 03. User Persona's */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              03. User Persona&apos;s
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-10">
              Two user personas were developed to reflect SafeSpace's target
              audience: Aiyana, an Indigenous longshore worker navigating
              isolation and bias in a male-dominated workplace, and Noah, a
              non-binary electrician facing identity-based discrimination and
              fear of being outed. Both personas highlight the need for privacy,
              community support, and accessible safety resources. These insights
              guided SafeSpace's focus on secure reporting, anonymity, and
              inclusive connection for women and gender-diverse tradespeople.
            </p>

            {/* Persona Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <img
                src="/case_study/to%20put%20in%20portfolio/persona_primary.png"
                alt="Primary Persona"
                className="w-full rounded-3xl object-contain"
              />
              <img
                src="/case_study/to%20put%20in%20portfolio/persona_secondary.png"
                alt="Secondary Persona"
                className="w-full rounded-3xl object-contain"
              />
            </div>

            {/* View Full Persona's pill button */}
            <a
              href="/case_study/to%20put%20in%20portfolio/personas_full.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
            >
              View Full Persona&apos;s <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Branding Section */}
          <div id="branding" className="mt-32 mb-14">
            <h2 className="text-3xl font-bold text-[#672AAF] mb-6">Branding</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-12">
              SafeSpace&apos;s branding balances warmth with strength to reflect
              the realities of the trades industry. The team chose the Satoshi
              font for its clean, geometric yet rounded design, reinforcing
              clarity and approachability. A bold purple and orange colour
              palette was selected to symbolize empowerment, inclusivity,
              strength, and visibility; avoiding an overly feminine tone while
              remaining supportive. The logo was intentionally designed to
              clearly signal that SafeSpace is built to support tradespeople,
              symbolized by the hardhat and handshake.
            </p>

            {/* Branding visual grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Left: Logo + Typography */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                {/* Logo */}
                <div>
                  <img
                    src="/case_study/to%20put%20in%20portfolio/safespace_logo.svg"
                    alt="SafeSpace logo"
                    className="h-36 object-contain"
                  />
                </div>

                {/* Satoshi Typography */}
                <div>
                  <p
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                    className="text-4xl text-gray-900 mb-4"
                  >
                    Satoshi
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: "regular", weight: "400", tw: "font-normal" },
                      { label: "medium", weight: "500", tw: "font-medium" },
                      { label: "Bold", weight: "600", tw: "font-semibold" },
                      { label: "Black", weight: "700", tw: "font-bold" },
                    ].map(({ label, weight, tw }) => (
                      <div
                        key={weight}
                        className="border border-gray-300 rounded-xl px-5 py-4 flex flex-col items-start gap-1 min-w-[90px]"
                      >
                        <span
                          style={{ fontFamily: "'Satoshi', sans-serif" }}
                          className={`text-3xl text-gray-900 ${tw}`}
                        >
                          Aa
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{label}</span>
                          <span className="text-xs text-gray-400">
                            {weight}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Color Palette */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                {[
                  {
                    name: "violet",
                    hex: "#8449DF",
                    bg: "#8449DF",
                    textColor: "text-white",
                  },
                  {
                    name: "orange",
                    hex: "#F07832",
                    bg: "#F07832",
                    textColor: "text-white",
                  },
                  {
                    name: "yellow",
                    hex: "#F5C518",
                    bg: "#F5C518",
                    textColor: "text-white",
                  },
                ].map(({ name, hex, bg, textColor }) => (
                  <div
                    key={name}
                    style={{ backgroundColor: bg }}
                    className="rounded-2xl px-6 py-6 flex flex-col justify-end"
                  >
                    <p className={`text-base font-semibold ${textColor}`}>
                      {name}
                    </p>
                    <p className={`text-sm ${textColor} opacity-80`}>{hex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Journey Section */}
      <section id="design" className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-[#672AAF] mb-6">
            Design Journey
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            The SafeSpace design journey began with low-fidelity wireframes to
            map out core user flows and prioritize clarity and accessibility.
            Early sketches focused on reducing friction, ensuring users could
            quickly report incidents or access support without confusion. From
            there, a structured sitemap was developed to organize content
            logically and highlight the most critical features, reinforcing a
            sense of safety and ease of navigation. These foundations informed
            the final high-fidelity prototype, where thoughtful typography,
            calming colour choices, and intuitive interactions were implemented
            to create a supportive and user-centered experience.
          </p>

          {/* 01. Sitemap */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              01. Sitemap
            </h3>
            <div
              className="rounded-3xl border border-white/50 shadow-xl shadow-purple-200/40 overflow-hidden cursor-zoom-in"
              onClick={openLightbox}
              title="Click to expand"
            >
              <img
                src={SITEMAP_SRC}
                alt="SafeSpace Sitemap"
                className="w-full block object-cover"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Click image to expand
            </p>
          </div>

          {/* Sitemap lightbox */}
          {sitemapExpanded && (
            <div
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              {/* Controls */}
              <div
                className="absolute top-4 right-4 z-10 flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    const s = Math.min(zoomScale + 0.5, 8);
                    const r = s / zoomScale;
                    setPanPos((p) => ({ x: p.x * r, y: p.y * r }));
                    setZoomScale(s);
                  }}
                  className="bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg text-gray-800 text-xl font-bold transition-colors"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    setZoomScale(1);
                    setPanPos({ x: 0, y: 0 });
                  }}
                  className="bg-white/90 hover:bg-white rounded-full px-3 h-9 flex items-center justify-center shadow-lg text-gray-800 text-sm font-semibold transition-colors"
                  aria-label="Reset zoom"
                >
                  Reset
                </button>
                <button
                  onClick={() => {
                    const s = Math.max(zoomScale - 0.5, 0.5);
                    const r = s / zoomScale;
                    setPanPos((p) => ({ x: p.x * r, y: p.y * r }));
                    setZoomScale(s);
                  }}
                  className="bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg text-gray-800 text-xl font-bold transition-colors"
                  aria-label="Zoom out"
                >
                  &minus;
                </button>
                <button
                  onClick={closeLightbox}
                  className="bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg text-gray-800 text-xl font-bold transition-colors ml-2"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>

              {/* Hint */}
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs select-none">
                Scroll to zoom &nbsp;·&nbsp; Drag to pan
              </p>

              {/* Zoom/pan container */}
              <div
                ref={containerRef}
                className="w-full h-full flex items-center justify-center overflow-hidden"
                style={{
                  cursor: isDragging
                    ? "grabbing"
                    : zoomScale > 1
                      ? "grab"
                      : "zoom-out",
                }}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={(e) => {
                  if (!isDragging) closeLightbox();
                  e.stopPropagation();
                }}
              >
                <img
                  src={SITEMAP_SRC}
                  alt="SafeSpace Sitemap (expanded)"
                  draggable={false}
                  style={{
                    transform: `translate(${panPos.x}px, ${panPos.y}px) scale(${zoomScale})`,
                    transformOrigin: "center",
                    transition: isDragging ? "none" : "transform 0.08s ease",
                    maxWidth: "90vw",
                    maxHeight: "88vh",
                    objectFit: "contain",
                    userSelect: "none",
                    borderRadius: "1.5rem",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          {/* 02. Wireframes */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              02. Wireframes
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Explore the full wireframe set below — switch between Lo-Fi,
              Hi-Fi, and Web Supplement using the tabs.
            </p>

            {/* Page tabs */}
            <div className="flex gap-2 mb-4">
              {WIREFRAME_PAGES.map((page, i) => (
                <button
                  key={page.nodeId}
                  onClick={() => setActiveWireframe(i)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold border transition-colors focus:outline-none ${
                    activeWireframe === i
                      ? "bg-[#672AAF] text-white border-[#672AAF]"
                      : "border-gray-300 text-gray-800 hover:bg-purple-100 hover:border-purple-300"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-xl shadow-purple-200/40 overflow-hidden">
              <iframe
                key={WIREFRAME_PAGES[activeWireframe].nodeId}
                title={`SafeSpace Wireframes — ${WIREFRAME_PAGES[activeWireframe].label}`}
                style={{ border: "none" }}
                width="100%"
                height="700"
                src={`${FIGMA_BASE}${WIREFRAME_PAGES[activeWireframe].nodeId}%26t%3DWHtdCGsxj3QeKkue-1`}
                allowFullScreen
              />
            </div>
          </div>

          {/* 03. Prototype */}
          <div className="mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  03. Prototype
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  The final SafeSpace prototype brings the platform to life
                  through a calm, intuitive, and user-centered interface.
                  Designed with safety and support in mind, the interface uses
                  soft, reassuring colours, clear typography, and simple
                  navigation to reduce cognitive load during high-stress
                  moments. Key features such as incident reporting, resource
                  access, and support connections are intentionally prioritized
                  and easy to reach. The result is a thoughtful, supportive
                  digital environment that empowers users to take action
                  confidently and safely.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none"
                >
                  View Full Prototype <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="rounded-3xl border border-white/50 shadow-xl shadow-purple-200/40 overflow-hidden">
                <img
                  src="/case_study/to%20put%20in%20portfolio/case_header.png"
                  alt="SafeSpace Prototype"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="marketing" className="px-4 pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-[#672AAF] mb-8">
            Digital Marketing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 01. SafeSpace Instagram */}
            <div>
              <div className="rounded-3xl overflow-hidden border border-gray-200 mb-5 w-full h-[480px]">
                <img
                  src="/case_study/to%20put%20in%20portfolio/insta_mockup.png"
                  alt="SafeSpace Instagram mockup"
                  className="w-full h-full object-cover block"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                01. SafeSpace Instagram
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                The SafeSpace Instagram account was designed to extend the brand
                beyond the app and build an approachable, supportive online
                presence. By combining informative content with relatable
                messaging, the account encourages engagement and fosters a sense
                of community. This platform helps increase awareness of
                SafeSpace while creating a trusted space where users can
                connect, learn, and feel supported.
              </p>
            </div>

            {/* 02. SafeSpace Blog */}
            <div>
              <div className="rounded-3xl overflow-hidden border border-gray-200 mb-5 w-full h-[480px]">
                <img
                  src="/case_study/to%20put%20in%20portfolio/desktop_blog.png"
                  alt="SafeSpace Blog mockup"
                  className="w-full h-full object-cover object-top block"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                02. SafeSpace Blog
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                The SafeSpace blog was created to deliver in-depth, informative
                content that supports users beyond the core platform. It focuses
                on informing people about SafeSpace&apos;s core features, its
                impact and overall journey as an app; presented in a clear and
                easy-to-read format. Consistent branding and tone help maintain
                a sense of reliability and professionalism, positioning the blog
                as a trusted resource that adds value to the overall SafeSpace
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Material Section */}
      <PromoSection />

      {/* Wrap Up Section */}
      <section id="wrapup" className="px-4 pb-24 mt-20">
        <div className="mx-auto w-full max-w-6xl">
          {/* Wrap Up heading + text */}
          <h2 className="text-3xl font-bold text-[#672AAF] mb-6">Wrap Up</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            SafeSpace evolved from a single question into a fully realized
            platform built for women and gender-diverse tradespeople. Over three
            months the team researched, branded, designed, and marketed a
            product rooted in empathy — resulting in a{" "}
            <strong>1st place win</strong> at the BCIT D3 / FSWD &times;
            ConnectHer Student Design &amp; Technology Innovation Showcase.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            From early research and user personas through to a polished hi-fi
            prototype, a cohesive brand, and a full marketing campaign, every
            stage of SafeSpace was built with intention. The recognition
            received at the showcase affirmed that thoughtful, human-centered
            design has the power to spark real conversation and inspire
            meaningful change in industries that need it most.
          </p>

          {/* Win banner */}
          <div className="rounded-3xl overflow-hidden border border-white/50 shadow-2xl shadow-purple-200/50 relative">
            <img
              src="/case_study/to%20put%20in%20portfolio/team_win.jpg"
              alt="Team SafeSpace winning 1st place"
              className="w-full h-[420px] sm:h-[520px] object-cover block"
            />
            {/* Overlay badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <div className="p-8 sm:p-12">
                <span className="inline-block rounded-full bg-[#672AAF] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-4">
                  🏆 1st Place
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white leading-snug max-w-2xl">
                  BCIT D3 / FSWD &times; ConnectHer Student Design &amp;
                  Technology Innovation Showcase
                </h2>
              </div>
            </div>
          </div>

          {/* Subtle closing rule */}
          <div className="mt-16 border-t border-purple-200/60" />
          <p className="mt-6 text-center text-sm text-gray-400 tracking-wide">
            Special thanks to my amazing team members and to our incredible
            advisor, Chris Ernst!
          </p>
        </div>
      </section>
    </div>
  );
};
