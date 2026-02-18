import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", isActive: true },
  { label: "Projects", isActive: false },
  { label: "Gallery", isActive: false },
  { label: "About", isActive: false },
];

export const IntroductionSection = () => {
  return (
    <nav className="relative w-full max-w-[1148px] mx-auto">
      <div className="relative bg-[#ffffff6b] rounded-[25px] shadow-[0px_2px_4px_#ffffff40,inset_0px_4px_4px_#4c206040] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] px-[37px] py-[13px]">
        <div className="flex items-center justify-between">
          <img className="w-[67px] h-9" alt="Vector" src="/vector.png" />

          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-[73px]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`${
                      item.isActive
                        ? "bg-[linear-gradient(90deg,rgba(108,66,168,1)_24%,rgba(181,76,181,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold"
                        : "font-normal text-black"
                    } [font-family:'Urbanist',Helvetica] text-xl tracking-[0] leading-[normal] cursor-pointer hover:opacity-80 transition-opacity`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};
