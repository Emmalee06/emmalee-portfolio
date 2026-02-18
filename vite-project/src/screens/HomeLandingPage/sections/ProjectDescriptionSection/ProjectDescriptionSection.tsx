import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const projectData = {
  title: "Menu Design",
  tags: ["Graphic Design", "Marketing"],
  description:
    "Daydream Diner is a popular retro-themed brunch spot for families to spend their time. Enjoy the warm food and refreshing drinks, kids eat free!",
  link: "View More",
};

export const ProjectDescriptionSection = () => {
  return (
    <Card className="w-full max-w-[389px] bg-[#f6e8fe] rounded-[25px] shadow-[inset_0px_4px_4px_#e984f840,0px_4px_4px_#e374ff40] backdrop-blur-[6.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.65px)_brightness(100%)] border-0">
      <CardContent className="flex flex-col items-start gap-[41px] p-9">
        <div className="flex flex-col items-start gap-[33px] w-full">
          <div className="flex flex-col gap-[21px] w-full">
            <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[normal]">
              {projectData.title}
            </h2>

            <div className="flex gap-1.5 flex-wrap">
              {projectData.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-[15px] py-1.5 rounded-[24.57px] border-[0.98px] border-black bg-transparent hover:bg-transparent"
                >
                  <span className="[font-family:'Urbanist',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                    {tag}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <p className="[font-family:'Urbanist',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] w-full">
            {projectData.description}
          </p>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="[font-family:'Urbanist',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]">
            {projectData.link}
          </span>

          <ArrowRightIcon className="w-6 h-6 text-black" />
        </div>
      </CardContent>
    </Card>
  );
};
