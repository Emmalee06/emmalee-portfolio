import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const decorativeVectors = [
  {
    left: "left-[649px]",
    bottom: "bottom-[483px]",
    width: "w-[58px]",
    height: "h-11",
    src: "/vector-33.svg",
  },
  {
    left: "left-[869px]",
    bottom: "bottom-[495px]",
    width: "w-[66px]",
    height: "h-[66px]",
    src: "/vector-32.svg",
  },
  {
    left: "left-[1083px]",
    bottom: "bottom-[472px]",
    width: "w-[57px]",
    height: "h-[53px]",
    src: "/vector-38.png",
  },
  {
    left: "left-[359px]",
    bottom: "bottom-[430px]",
    width: "w-[58px]",
    height: "h-[52px]",
    src: "/vector-46.svg",
  },
  {
    left: "left-[230px]",
    bottom: "bottom-[425px]",
    width: "w-[57px]",
    height: "h-[53px]",
    src: "/vector-43.svg",
  },
  {
    left: "left-[800px]",
    bottom: "bottom-[527px]",
    width: "w-[57px]",
    height: "h-[53px]",
    src: "/vector-40.svg",
  },
  {
    left: "left-[971px]",
    bottom: "bottom-[506px]",
    width: "w-[55px]",
    height: "h-[68px]",
    src: "/vector-36.svg",
  },
  {
    left: "left-[833px]",
    bottom: "bottom-[528px]",
    width: "w-[55px]",
    height: "h-[68px]",
    src: "/vector-30.svg",
  },
  {
    left: "left-[748px]",
    bottom: "bottom-[538px]",
    width: "w-[62px]",
    height: "h-[60px]",
    src: "/vector-39.svg",
  },
  {
    left: "left-[1153px]",
    bottom: "bottom-[511px]",
    width: "w-[58px]",
    height: "h-[50px]",
    src: "/vector-35.svg",
  },
  {
    left: "left-[792px]",
    bottom: "bottom-[446px]",
    width: "w-[58px]",
    height: "h-[50px]",
    src: "/vector-42.svg",
  },
  {
    left: "left-[1002px]",
    bottom: "bottom-[529px]",
    width: "w-[58px]",
    height: "h-[50px]",
    src: "/vector-41.svg",
  },
  {
    left: "left-[892px]",
    bottom: "bottom-[537px]",
    width: "w-[73px]",
    height: "h-[63px]",
    src: "/vector-28.png",
  },
  {
    left: "left-[1509px]",
    bottom: "bottom-[442px]",
    width: "w-16",
    height: "h-14",
    src: "/vector-45.svg",
  },
  {
    left: "left-[576px]",
    bottom: "bottom-[509px]",
    width: "w-[52px]",
    height: "h-[55px]",
    src: "/vector-34.svg",
  },
  {
    left: "left-[650px]",
    bottom: "bottom-[494px]",
    width: "w-[72px]",
    height: "h-[73px]",
    src: "/vector-29.svg",
  },
  {
    left: "left-[939px]",
    bottom: "bottom-[519px]",
    width: "w-[53px]",
    height: "h-[54px]",
    src: "/vector-37.svg",
  },
  {
    left: "left-[773px]",
    bottom: "bottom-[517px]",
    width: "w-[53px]",
    height: "h-[54px]",
    src: "/vector-31.svg",
  },
  {
    left: "left-[306px]",
    bottom: "bottom-[462px]",
    width: "w-[53px]",
    height: "h-[54px]",
    src: "/vector-47.svg",
  },
  {
    left: "left-[1566px]",
    bottom: "bottom-[369px]",
    width: "w-[53px]",
    height: "h-[54px]",
    src: "/vector-44.svg",
  },
  {
    left: "left-[1024px]",
    bottom: "bottom-[527px]",
    width: "w-[91px]",
    height: "h-[76px]",
    src: "/vector-27.svg",
  },
];

const navigationLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Connect", href: "#connect" },
];

const socialLinks = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
];

export const FooterSection = () => {
  return (
    <footer className="relative w-full py-16 overflow-hidden">
      {decorativeVectors.map((vector, index) => (
        <img
          key={`vector-${index}`}
          className={`absolute ${vector.left} ${vector.bottom} ${vector.width} ${vector.height}`}
          alt="Vector"
          src={vector.src}
        />
      ))}

      <div className="absolute top-[34px] left-0 w-full h-[549px] flex items-end bg-[#e9daff] rounded-[907px/274.5px] blur-[8.45px]">
        <div className="w-full max-w-[1512px] h-[250px] mx-auto bg-[#e9daff]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <img className="w-32 h-[70px]" alt="Asset" src="/asset-1-2.svg" />
            <p className="[font-family:'Urbanist',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[normal] max-w-[371px]">
              You can also connect with me through these links:
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={`social-${index}`}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-purple-200/50"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-6 h-6 text-black" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <nav className="flex gap-8">
            {navigationLinks.map((link, index) => (
              <Button
                key={`nav-${index}`}
                variant="link"
                asChild
                className="[font-family:'Urbanist',Helvetica] font-medium text-black text-[28px] tracking-[0] leading-[normal] p-0 h-auto hover:no-underline hover:opacity-70"
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="[font-family:'Urbanist',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Coded &amp; Designed by © Emmalee Dhaliwal, 2026
          </p>
          <p className="[font-family:'Urbanist',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            May your trials end in full bloom &lt;3
          </p>
        </div>
      </div>
    </footer>
  );
};
