import { Button } from "../../components/ui/button";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { ProjectDescriptionSection } from "./sections/ProjectDescriptionSection/ProjectDescriptionSection";
import { ProjectImageSection } from "./sections/ProjectImageSection";

const decorativeVectors = [
  {
    top: "top-[890px]",
    left: "left-[1075px]",
    width: "w-20",
    height: "h-[88px]",
    src: "/vector-24.png",
    alt: "Vector",
  },
  {
    top: "top-[100px]",
    left: "left-[1004px]",
    width: "w-[51px]",
    height: "h-[55px]",
    src: "/vector-25.svg",
    alt: "Vector",
  },
  {
    top: "top-0",
    left: "left-[1213px]",
    width: "w-[70px]",
    height: "h-[51px]",
    src: "/vector-21.svg",
    alt: "Vector",
  },
  {
    top: "top-[283px]",
    left: "left-[444px]",
    width: "w-[58px]",
    height: "h-11",
    src: "/vector-7.svg",
    alt: "Vector",
  },
  {
    top: "top-[33px]",
    left: "left-[505px]",
    width: "w-[53px]",
    height: "h-[54px]",
    src: "/vector-12.svg",
    alt: "Vector",
  },
  {
    top: "top-[72px]",
    left: "left-[695px]",
    width: "w-[52px]",
    height: "h-[55px]",
    src: "/vector-20.svg",
    alt: "Vector",
  },
  {
    top: "top-[460px]",
    left: "left-[934px]",
    width: "w-[66px]",
    height: "h-[66px]",
    src: "/vector-19.svg",
    alt: "Vector",
  },
  {
    top: "top-[371px]",
    left: "left-[352px]",
    width: "w-[57px]",
    height: "h-[53px]",
    src: "/vector-14.svg",
    alt: "Vector",
  },
  {
    top: "top-[361px]",
    left: "left-[1027px]",
    width: "w-[49px]",
    height: "h-[60px]",
    src: "/vector-15.svg",
    alt: "Vector",
  },
  {
    top: "top-[141px]",
    left: "left-[554px]",
    width: "w-16",
    height: "h-[63px]",
    src: "/vector-24-1.svg",
    alt: "Vector",
  },
  {
    top: "top-[170px]",
    left: "left-[760px]",
    width: "w-[51px]",
    height: "h-[55px]",
    src: "/vector-23.svg",
    alt: "Vector",
  },
  {
    top: "top-[226px]",
    left: "left-[907px]",
    width: "w-[55px]",
    height: "h-[68px]",
    src: "/vector-22.svg",
    alt: "Vector",
  },
  {
    top: "top-[1294px]",
    left: "left-[1333px]",
    width: "w-[65px]",
    height: "h-[71px]",
    src: "/vector-26.png",
    alt: "Vector",
  },
  {
    top: "top-[189px]",
    left: "left-[193px]",
    width: "w-[52px]",
    height: "h-[55px]",
    src: "/vector-10.svg",
    alt: "Vector",
  },
  {
    top: "top-[769px]",
    left: "left-[173px]",
    width: "w-[73px]",
    height: "h-[81px]",
    src: "/vector-17.png",
    alt: "Vector",
  },
  {
    top: "top-[391px]",
    left: "left-[1298px]",
    width: "w-[53px]",
    height: "h-[54px]",
    src: "/vector-16.svg",
    alt: "Vector",
  },
];

const socialIcons = [
  {
    top: "top-[3066px]",
    left: "left-32",
    width: "w-[41px]",
    height: "h-[41px]",
    src: "/linkedin-1.png",
    alt: "Linkedin",
  },
  {
    top: "top-[3066px]",
    left: "left-[185px]",
    width: "w-[42px]",
    height: "h-[42px]",
    src: "/instagram-1.png",
    alt: "Instagram",
  },
  {
    top: "top-[3062px]",
    left: "left-60",
    width: "w-[49px]",
    height: "h-[49px]",
    src: "/github-1.png",
    alt: "Github",
  },
];

export const HomeLandingPage = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,rgba(194,166,249,1)_0%,rgba(255,246,254,1)_41%)] w-full min-w-[1512px] relative">
      {decorativeVectors.map((vector, index) => (
        <img
          key={`vector-${index}`}
          className={`absolute ${vector.top} ${vector.left} ${vector.width} ${vector.height}`}
          alt={vector.alt}
          src={vector.src}
        />
      ))}

      <section className="relative w-full">
        <IntroductionSection />

        <h1 className="absolute top-[298px] left-[calc(50.00%_-_142px)] [font-family:'Urbanist',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Hi, I&apos;m Emmalee!
        </h1>

        <h2 className="absolute top-[389px] left-[calc(50.00%_-_409px)] [font-family:'Urbanist',Helvetica] font-normal text-black text-[64px] text-center tracking-[0] leading-[normal]">
          Graphic Designer &amp; Marketer
        </h2>

        <div className="absolute top-[532px] left-[559px] flex gap-[19px]">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2.5 px-[29px] py-2 h-10 rounded-[25px] overflow-hidden border-0 shadow-[0px_0px_4.7px_3px_#c1a6f9] bg-[linear-gradient(90deg,rgba(191,251,255,0.35)_5%,rgba(203,92,255,0.35)_50%,rgba(255,161,220,0.35)_100%)] [font-family:'Urbanist',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap"
          >
            Let&apos;s Connect!
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center gap-2.5 px-[29px] py-2 h-10 rounded-[25px] border border-solid border-black bg-transparent [font-family:'Urbanist',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap"
          >
            View My Projects
          </Button>
        </div>
      </section>

      <section className="relative w-full mt-[250px]">
        <h2 className="absolute top-[791px] left-[calc(50.00%_-_151px)] [font-family:'Urbanist',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Featured Projects
        </h2>
      </section>

      <section className="relative w-full mt-[100px]">
        <ProjectImageSection />
      </section>

      <section className="relative w-full">
        <FeaturedProjectsSection />
      </section>

      <section className="relative w-full">
        <div className="absolute top-[1992px] left-[599px] w-[732px] h-[392px] bg-[#dfc5ff45] rounded-[25px] shadow-[0px_4px_4px_#e374ff40,inset_0px_4px_4px_#e984f840] backdrop-blur-[6.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.65px)_brightness(100%)]" />

        <div className="absolute top-[1992px] left-[673px] w-[579px] h-[392px]">
          <img
            className="absolute top-[-7px] left-[233px] w-[360px] h-[360px]"
            alt="Daydream diner"
            src="/daydream-diner-2.png"
          />

          <img
            className="absolute top-8 -left-px w-[374px] h-[374px]"
            alt="Daydream diner"
            src="/daydream-diner-1.png"
          />
        </div>

        <ProjectDescriptionSection />
      </section>

      <section className="relative w-full">
        <FooterSection />

        {socialIcons.map((icon, index) => (
          <img
            key={`social-${index}`}
            className={`absolute ${icon.top} ${icon.left} ${icon.width} ${icon.height}`}
            alt={icon.alt}
            src={icon.src}
          />
        ))}
      </section>
    </div>
  );
};
