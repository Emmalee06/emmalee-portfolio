import "../styles/AnimatedButton.css";

const SkillTag = ({ children }) => (
  <span className="px-4 py-1.5 text-sm font-medium text-gray-800 border border-gray-300 rounded-full bg-white/40">
    {children}
  </span>
);

export const AboutPage = () => {
  return (
    <div className="relative z-10">
      {/* Hero / Intro section */}
      <section className="pt-32 pb-16 px-4">
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + buttons */}
          <div>
            <p className="text-lg text-gray-600 mb-2">Nice to meet you!</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
              I'm Emmalee Dhaliwal
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
              Let&apos;s{" "}
              <span
                className="font-extrabold"
                style={{
                  background: "linear-gradient(to right, #7A01CA, #FFB5D5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Connect!
              </span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:emmaleedhaliwal@gmail.com"
                className="group relative px-7 py-2.5 rounded-full border border-gray-800 text-gray-800 font-medium text-base overflow-hidden transition-all duration-300 gradient-animated-btn"
              >
                <span className="relative z-10">Email</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 via-purple-300/80 to-violet-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmalee-dhaliwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-7 py-2.5 rounded-full border border-gray-800 text-gray-800 font-medium text-base overflow-hidden transition-all duration-300 gradient-animated-btn"
              >
                <span className="relative z-10">LinkedIn</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 via-purple-300/80 to-violet-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden w-72 h-80 md:w-80 md:h-96 shadow-lg border border-white/50">
              <img
                src="/about_me/profile_picture.png"
                alt="Emmalee Dhaliwal"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me + Skills section */}
      <section className="px-4 pb-28">
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me */}
          <div>
            <h2 className="text-2xl font-bold text-[#672AAF] mb-5">
              About Me!
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              I&apos;m a digital designer with a strong passion for art,
              creativity, and thoughtful problem-solving. I enjoy exploring how
              visual design and user experience come together to create work
              that feels both engaging and purposeful. I&apos;ve developed the
              ability to quickly learn and adapt to new tools, especially within
              Adobe Creative Suite, and I&apos;m always looking for new ways to
              grow and refine my skills.
            </p>
            <p className="text-gray-800 leading-relaxed">
              I&apos;m particularly drawn to projects that allow me to express
              personality through design while still maintaining clarity and
              intention. Whether I&apos;m working on branding, digital
              experiences, or visual storytelling, I focus on creating designs
              that are not only visually compelling but also meaningful and
              user-focused.
            </p>
          </div>

          {/* My Skills */}
          <div>
            <h2 className="text-2xl font-bold text-[#672AAF] mb-5">
              My Skills:
            </h2>

            <p className="text-base font-semibold text-gray-900 mb-3">
              Hard Skills
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <SkillTag>Digital Marketing</SkillTag>
              <SkillTag>Graphic Design</SkillTag>
              <SkillTag>SEO</SkillTag>
              <SkillTag>Google Analytics</SkillTag>
              <SkillTag>UI/ UX Design</SkillTag>
              <SkillTag>Illustrator</SkillTag>
              <SkillTag>Photoshop</SkillTag>
              <SkillTag>InDesign</SkillTag>
              <SkillTag>Figma</SkillTag>
              <SkillTag>After Effects</SkillTag>
            </div>

            <p className="text-base font-semibold text-gray-900 mb-3">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillTag>HTML</SkillTag>
              <SkillTag>CSS</SkillTag>
              <SkillTag>JavaScript</SkillTag>
              <SkillTag>Wordpress</SkillTag>
              <SkillTag>React Native</SkillTag>
              <SkillTag>NextJS</SkillTag>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
