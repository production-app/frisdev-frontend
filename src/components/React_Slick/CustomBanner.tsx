"use client";
import { Banner } from "@prisma/client";
import { TabsTriggerProps } from "@radix-ui/react-tabs";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import CustomCard from "../custom-card";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SliderComponent from "./Slider";




 



  /**
   * 
   * role = {
   * name: admin;
   * views: {
   * assignRole: true,
   * djnfdjn: true
   * }
   * 
   * user/ :
   * }
   * 
   * assignRole && <AssignROle/>
   * viesws = {
   * 
   * }
   */

















const CustomBanner = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/banners");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const banners: Banner[] = data ? data : [];

  const globalBanners = banners.filter(
    (banner) => banner.bannerType === "global"
  );
  const departmentBanners = banners.filter(
    (banner) => banner.bannerType === "department"
  );
  // const userBanners = banners.filter((banner) => banner.bannerType === "user");

  return (
    <div className="px-6 w-full my-5 transition-transform">
      <Tabs defaultValue="global" className="w-full">
        <TabsList className="w-full flex justify-start">
          <CustomTabTrigger
            datalength={globalBanners.length}
            triggerTitle="Global"
            defaultValue={"global"}
            value="global"
          ></CustomTabTrigger>
          <CustomTabTrigger
            datalength={departmentBanners.length}
            triggerTitle="Department"
            value="department"
          ></CustomTabTrigger>
        </TabsList>
        <motion.div className="mt-5" layout>
          <TabsContent asChild className="mt-5" value="global">
            {isLoading ? (
              <Skeleton className="w-full h-[300px] rounded-lg" />
            ) : (
              <SliderComponent banners={globalBanners} />
            )}
          </TabsContent>
        </motion.div>
        <motion.div className="mt-5" layout>
          <TabsContent asChild value="department">
            {isLoading ? (
              <Skeleton className="w-full h-[300px] rounded-lg" />
            ) : (
              <SliderComponent banners={departmentBanners} />
            )}
          </TabsContent>
        </motion.div>
        <motion.div layout>
          <TabsContent asChild className="mt-5" value="user">
            <CustomCard className="w-full flex items-center justify-start px-6 h-[20px] border py-8 rounded-md">
              <span className="text-sm font-semibold text-sky-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                dicta laudantium ut architecto. Minima numquam temporibus iure
                exercitationem a, assumenda aperiam accusamus, maxime voluptatum
                ipsam natus fugit sit veniam magni.
              </span>
            </CustomCard>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
};

export default CustomBanner;

interface CustomTabsProps extends TabsTriggerProps {
  triggerTitle: string;
  datalength: string | number;
}
const CustomTabTrigger = ({
  children,
  triggerTitle,
  datalength,
  value,
  ...rest
}: CustomTabsProps) => {
  return (
    <TabsTrigger
      {...rest}
      className="group rounded-none mb-0 shadow-none data-[state=active]:text-sky-900 data-[state=active]:font-bold data-[state=active]:bg-none border-b-2 border-b-transparent data-[state=active]:border-b-sky-900"
      value={value}
    >
      {triggerTitle}
      {datalength !== 0 && (
        <Badge className="ml-2 flex items-center justify-center h-4 w-4 bg-[#eee] group-data-[state=active]:bg-sky-900 text-white rounded-sm">
          {datalength}
        </Badge>
      )}
      {children}
    </TabsTrigger>
  );
};
