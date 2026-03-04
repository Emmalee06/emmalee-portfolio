import "../../styles/AnimatedButton.css";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { ArrowRight } from "lucide-react";

export const SafeSpaceCaseStudyPage = () => {
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
                  Roles:
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

          {/* Table of Content */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#672AAF] mb-4">
              Table of Content:
            </h2>
            <div className="flex flex-wrap gap-2">
              <a href="#background" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Background & Problem</a>
              <a href="#solution" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Solution</a>
              <a href="#research" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Research & Analysis</a>
              <a href="#branding" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Branding</a>
              <a href="#design" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Design Journey</a>
              <a href="#marketing" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Digital Marketing</a>
              <a href="#promo" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Promotional Material</a>
              <a href="#wrapup" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Wrap Up</a>
              <a href="#results" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-base font-semibold text-foreground transition-colors hover:bg-purple-100 hover:border-purple-300 focus:outline-none">Results</a>
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
          <h2 className="text-3xl font-bold text-[#672AAF] mb-3">Meet SafeSpace</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            SafeSpace was created to help women and gender-diverse people foster safer, and more inclusive work environments. With the help of AI, the app can summarize anonymous worker reports and generate practical solutions that aims to change worksite culture.
          </p>

          {/* Feature 01 — text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-base text-[#672AAF] font-semibold mb-1">01.</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Check Site Safety</h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                See which job sites are safe before you arrive—giving you peace of mind and control over where you work.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Discreetly Record</h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Discreetly capture unsafe encounters with the help of our recording feature that immediately uploads your recording to the cloud.
              </p>
            </div>
          </div>

          {/* Feature 03 — text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-base text-[#672AAF] font-semibold mb-1">03.</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">File a Report</h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Create fully anonymous reports to upload to our public posts, bringing more awareness to worksite safety issues.
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
          <h2 className="text-3xl font-bold text-[#672AAF] mb-10">Research &amp; Analysis</h2>

          {/* 01. Competitive Analysis */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">01. Competitive Analysis</h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-10">
              In the early stages of development, the team conducted competitive research to understand the safety and wellness app landscape.{" "}
              <span className="text-[#b06fcf] font-semibold">Communia</span> and{" "}
              <span className="text-[#e07b39] font-semibold">WorkSafety</span> Pro were identified as direct competitors, while{" "}
              <span className="text-[#e07b39] font-semibold">Headspace</span> served as an indirect competitor. Across these platforms, common features such as accessible safety resources, community support, and strong privacy protections were identified, helping inform the foundational direction of SafeSpace's design.
            </p>
            <div className="flex flex-row items-center justify-center gap-16">
              <img src="/case_study/comunia.svg" alt="Communia logo" className="w-28 h-28 object-contain rounded-2xl" />
              <img src="/case_study/worksafe.svg" alt="WorkSafety logo" className="w-28 h-28 object-contain rounded-2xl" />
              <img src="/case_study/headspace.svg" alt="Headspace logo" className="w-28 h-28 object-contain rounded-2xl" />
            </div>
          </div>

          {/* 02. Interviews & Research */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">02. Interviews &amp; Research</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  To better understand the problem, the team conducted multiple interviews with women working in trades, which provided powerful insight into how male-dominated the industry remains.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  In addition, survey data further validated these findings: 66.7% of respondents reported feeling isolated at work due to their gender. With unfair treatment, feelings of exclusion, and male-dominated workplace culture identified as key contributing factors.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <blockquote className="relative px-10 py-4">
                  <span className="absolute top-0 left-0 text-7xl text-[#672AAF] font-serif leading-none">&ldquo;</span>
                  <p className="text-2xl md:text-3xl text-gray-800 leading-snug">
                    <span className="text-[#672AAF] font-bold text-3xl md:text-4xl">66.7%</span> of respondents reported feeling{" "}
                    <span className="text-[#672AAF] font-bold text-3xl md:text-4xl">isolated</span> at work due to their{" "}
                    <span className="text-[#672AAF] font-bold text-3xl md:text-4xl">gender</span>
                  </p>
                  <span className="absolute bottom-0 right-0 text-7xl text-[#672AAF] font-serif leading-none">&rdquo;</span>
                </blockquote>
              </div>
            </div>
          </div>

          {/* 03. User Persona's */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">03. User Persona&apos;s</h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-10">
              Two user personas were developed to reflect SafeSpace's target audience: Aiyana, an Indigenous longshore worker navigating isolation and bias in a male-dominated workplace, and Noah, a non-binary electrician facing identity-based discrimination and fear of being outed. Both personas highlight the need for privacy, community support, and accessible safety resources. These insights guided SafeSpace's focus on secure reporting, anonymity, and inclusive connection for women and gender-diverse tradespeople.
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
              SafeSpace&apos;s branding balances warmth with strength to reflect the realities of the trades industry. The team chose the Satoshi font for its clean, geometric yet rounded design, reinforcing clarity and approachability. A bold purple and orange colour palette was selected to symbolize empowerment, inclusivity, strength, and visibility; avoiding an overly feminine tone while remaining supportive. The logo was intentionally designed to clearly signal that SafeSpace is built to support tradespeople, symbolized by the hardhat and handshake.
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
                  <p style={{ fontFamily: "'Satoshi', sans-serif" }} className="text-4xl text-gray-900 mb-4">
                    Satoshi
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: "regular", weight: "400", tw: "font-normal" },
                      { label: "medium",  weight: "500", tw: "font-medium" },
                      { label: "Bold",    weight: "600", tw: "font-semibold" },
                      { label: "Black",   weight: "700", tw: "font-bold" },
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
                          <span className="text-xs text-gray-400">{weight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Color Palette */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                {[
                  { name: "violet",  hex: "#8449DF", bg: "#8449DF", textColor: "text-white" },
                  { name: "orange",  hex: "#F07832", bg: "#F07832", textColor: "text-white" },
                  { name: "yellow",  hex: "#F5C518", bg: "#F5C518", textColor: "text-white" },
                ].map(({ name, hex, bg, textColor }) => (
                  <div
                    key={name}
                    style={{ backgroundColor: bg }}
                    className="rounded-2xl px-6 py-6 flex flex-col justify-end"
                  >
                    <p className={`text-base font-semibold ${textColor}`}>{name}</p>
                    <p className={`text-sm ${textColor} opacity-80`}>{hex}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
