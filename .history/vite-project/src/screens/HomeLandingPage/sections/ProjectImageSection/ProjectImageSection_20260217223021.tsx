import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const projectTags = [
  { label: "Case Study", className: "w-[101px]" },
  { label: "Marketing", className: "w-[92px]" },
  { label: "UI/UX", className: "w-[66px]" },
];

export const ProjectImageSection = (): JSX.Element => {
  return (
    <section className="flex items-end gap-[30px] relative w-full">
      <Card className="flex flex-col w-[389px] min-h-[392px] bg-[#f0d9ea45] rounded-[25px] shadow-[inset_0px_4px_4px_#e984f840,0px_4px_4px_#e374ff40] backdrop-blur-[6.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.65px)_brightness(100%)] border-0">
        <CardContent className="flex flex-col items-start gap-[55px] px-[33px] py-9 h-full">
          <div className="flex flex-col w-full max-w-[293px] items-start gap-[33px]">
            <div className="w-full max-w-[279px] relative">
              <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[normal] whitespace-nowrap mb-[23px]">
                SafeSpace
              </h2>

              <div className="flex gap-[9px] flex-wrap">
                {projectTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`${tag.className} h-[29px] inline-flex items-center justify-center gap-[9.83px] px-[15px] py-1.5 rounded-[24.57px] border-[0.98px] border-solid border-black bg-transparent hover:bg-transparent`}
                  >
                    <span className="[font-family:'Urbanist',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                      {tag.label}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 w-full">
              <p className="[font-family:'Urbanist',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]">
                SafeSpace is an app designed to help women and gender-diverse
                people foster safer, and more inclusive worksites.
              </p>
            </div>
          </div>

          <button className="flex items-center gap-[55px] w-full max-w-[287px] group cursor-pointer bg-transparent border-0 p-0">
            <span className="[font-family:'Urbanist',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]">
              View More
            </span>
            <ArrowRightIcon className="w-6 h-6 text-black transition-transform group-hover:translate-x-1" />
          </button>
        </CardContent>
      </Card>

      <Card className="relative w-full max-w-[732px] min-h-[406px] bg-transparent border-0">
        <CardContent className="relative h-[406px] p-0">
          <div className="absolute top-3.5 left-0 w-full h-[392px] bg-[#f0d9ea45] rounded-[25px] shadow-[0px_4px_4px_#e374ff40,inset_0px_4px_4px_#e984f840] backdrop-blur-[6.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.65px)_brightness(100%)]" />

          <img
            className="absolute top-0 left-[49px] w-[608px] h-[406px] object-cover"
            alt="Safespace two iphones showing the app interface"
            src="/safespace-two-iphones-1.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
