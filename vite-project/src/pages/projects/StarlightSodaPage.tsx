import { useEffect } from "react";
import type { ReactNode } from "react";

const InfoPill = ({
    label,
    children,
}: {
    label: string;
    children: ReactNode;
}) => {
    return (
        <div className="rounded-3xl px-6 py-5">
            <div className="text-sm font-semibold tracking-wide text-gray-800/80">
                {label}
            </div>
            <div className="mt-1 text-base font-medium text-gray-900">
                {children}
            </div>
        </div>
    );
};

export const StarlightSodaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative z-10">
            <section className="pt-32 pb-10 px-4">
                <div className="mx-auto w-full max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-light text-gray-900">
                        Starlight Soda
                    </h1>

                    <div className="mt-8 rounded-3xl border border-white/50 bg-white/25 backdrop-blur-md shadow-2xl shadow-purple-200/50 overflow-hidden">
                        <img
                            src="/starlight/header_can_use.png"
                            alt="Starlight Soda can designs"
                            className="w-full h-[240px] sm:h-[320px] md:h-[380px] object-cover bg-white/10"
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 pb-14">
                <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 rounded-3xl p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Overview
                        </h2>
                        <p className="text-gray-800 leading-relaxed">
                            Starlight Soda is a naturally flavoured soda that
                            takes inspiration from the constellations and
                            cosmos. Discover your star sign through a unique
                            taste of bubbles, fruits, and berries.
                        </p>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        <InfoPill label="Software">
                            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-900">
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </InfoPill>
                        <InfoPill label="Timeline">2 weeks</InfoPill>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-14">
                <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-5 rounded-3xl min-h-[220px] overflow-hidden flex items-center justify-center">
                        <img
                            src="/starlight/can_trio_project.png"
                            alt="Starlight Soda trio can mockup"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="lg:col-span-7 rounded-3xl p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Design Rationale
                        </h2>
                        <p className="text-gray-800 leading-relaxed">
                            Many consumers struggle to find sodas that feel
                            holistically inspired and emotionally engaging.
                            Starlight Soda is designed with a celestial-inspired
                            brand rooted in zodiac symbolism, where each flavour
                            is designed to express a clear personality. Inspired
                            by constellations, the design uses a graceful female
                            figure and purposeful colour. The soft blues and
                            purples for Aquarius’ Blue Raspberry to represent
                            independence and loyalty, while the bold tones for
                            Scorpion’s Sour Grape and Leo’s Peach Mango showcase
                            the sharp and intuitive personality traits for both
                            zodiacs.
                        </p>
                        <p className="mt-4 text-gray-800 leading-relaxed"></p>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-14">
                <div className="mx-auto w-full max-w-6xl">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Design Process
                    </h2>

                    <div className="text-sm font-semibold tracking-wide text-black mb-4">
                        Watermark
                    </div>

                    <div className="rounded-3xl border border-white/50 shadow-2xl shadow-purple-200/40 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-200/40 via-purple-300/40 to-pink-200/40 px-6 py-8 sm:py-10 text-center">
                            <img
                                src="/starlight/starlight_wordmark.png"
                                alt="Starlight Soda wordmark"
                                className="mx-auto w-[260px] sm:w-[340px] md:w-[420px] h-auto select-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.18)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-14">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="text-sm font-semibold tracking-wide text-black mb-6">
                        Results
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Blue Raspberry",
                                src: "/starlight/sour_soda_results.png",
                            },
                            {
                                name: "Sour Grape",
                                src: "/starlight/purple_soda_results.png",
                            },
                            {
                                name: "Mango Peach",
                                src: "/starlight/peach_soda_results.png",
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="rounded-3xl overflow-hidden"
                            >
                                <div className="aspect-[4/5] flex items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt={`${item.name} can result`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="px-5 py-4">
                                    <div className="text-lg font-medium text-gray-900">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-28">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="text-sm font-semibold tracking-wide text-black mb-6">
                        Dielines
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                alt: "Blue Raspberry dieline",
                                src: "/starlight/blue_dieline.png",
                            },
                            {
                                alt: "Sour Grape dieline",
                                src: "/starlight/purple_dieline.png",
                            },
                            {
                                alt: "Mango Peach dieline",
                                src: "/starlight/peach_dieline.png",
                            },
                        ].map((m) => (
                            <div key={m.src} className="w-full">
                                <img
                                    src={m.src}
                                    alt={m.alt}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
