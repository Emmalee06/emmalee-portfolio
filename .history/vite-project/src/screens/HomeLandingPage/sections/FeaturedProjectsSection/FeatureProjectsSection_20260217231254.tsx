import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const projectTags = [{ label: "Graphic Design" }, { label: "Product Design" }];

export const FeaturedProjectsSection = () => {
  return (
    <section className="flex items-center gap-[30px] w-full px-4">
      <Card className="relative flex-1 max-w-[733px] h-[392px] bg-[#c6daff45] rounded-[25px] shadow-[0px_4px_4px_#85aaf940,inset_0px_4px_4px_#84a9f840] backdrop-blur-[6.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.65px)_brightness(100%)] border-0 overflow-hidden">
        <CardContent className="relative w-full h-full p-0 flex items-center justify-center">
          <img
            className="w-[369px] h-[361px] object-contain"
            alt="Element free soda"
            src="/06-free-250ml-soda-can-mockup-1.png"
          />
        </CardContent>
      </Card>

      <Card className="flex flex-col w-full max-w-[389px] h-[392px] bg-[#f0eefe] rounded-[25px] shadow-[inset_0px_4px_4px_#85aaf940,0px_4px_4px_#85aaf940] backdrop-blur-[6.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.65px)_brightness(100%)] border-0">
        <CardContent className="flex flex-col h-full justify-between p-9 gap-[25px]">
          <div className="flex flex-col gap-[33px]">
            <div className="flex flex-col gap-[23px]">
              <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[normal]">
                Can Design
              </h2>

              <div className="flex gap-[9px] flex-wrap">
                {projectTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="h-[29px] px-[15px] py-1.5 rounded-[24.57px] border-[0.98px] border-black bg-transparent hover:bg-transparent"
                  >
                    <span className="[font-family:'Urbanist',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                      {tag.label}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <p className="[font-family:'Urbanist',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]">
              Starlight Soda is a naturally flavoured soda that takes
              inspiration from the constellations. Discover your zodiac sign
              through a unique taste of bubbles.
            </p>
          </div>

          <button className="flex items-center gap-[55px] w-fit group cursor-pointer bg-transparent border-0 p-0">
            <span className="[font-family:'Urbanist',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]">
              View More
            </span>
            <ArrowRightIcon className="w-6 h-6 text-black transition-transform group-hover:translate-x-1" />
          </button>
        </CardContent>
      </Card>
    </section>
  );
};
