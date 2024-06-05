import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge, Stepper } from "@mantine/core";
import clsx from "clsx";
import { Bell, ChevronDown, ChevronUp, Send } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TabControls = ({
  openTab,
  toggleTab,
}: {
  openTab: boolean;
  toggleTab: () => void;
}) => {
  const [active, setActive] = React.useState(1);
  return (
    <div className="absolute bottom-0 right-5 z-50 bg-white overflow-hidden shadow-lg rounded-none rounded-tr-lg rounded-tl-lg">
      <Tabs defaultValue="account" className="w-[300px] border border-[#eee]">
        <div className="bg-[#eee] p-2 w-full rounded-none flex items-center justify-start">
          <TabsList className="bg-transparent gap-3">
            <TabsTrigger className="relative" value="account">
              <Badge
                color="red"
                className="absolute -top-1 -right-2"
                size="xs"
                circle
              >
                4
              </Badge>
              <Bell />
            </TabsTrigger>
            <TabsTrigger value="password">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-message-square-more"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01" />
                <path d="M12 10h.01" />
                <path d="M16 10h.01" />
              </svg>
            </TabsTrigger>
          </TabsList>
          <Button
            className="m-0 ml-auto flex items-center justify-center rounded-full"
            variant="ghost"
            size="icon"
            onClick={toggleTab}
          >
            {openTab ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div
          className={clsx(
            "transition-all pb-0 h-0 overflow-y-hidden",
            openTab ? "h-[250px] mt-5" : "h-0"
          )}
        >
          <TabsContent className="px-4" value="account">
            <Stepper
              active={active}
              onStepClick={setActive}
              orientation="vertical"
              // color="#C79C30"
              color="#0c4a6e"
              radius="xl"
              size="xs"
              iconSize={40}
            >
              <Stepper.Step label="Pending" description="pending request" />
              <Stepper.Step label="Ready" description="Item Ready" />
              <Stepper.Step
                label="On the way"
                description="working on the post"
              />
            </Stepper>
          </TabsContent>
          <TabsContent className="h-full relative" value="password">
            <div className="w-full h-full">
              <div className="w-full bg-white h-full flex items-center justify-center">
                <span>main chat</span>
              </div>
              <div className="flex p-2 w-full mb-[10px] absolute bottom-0 border-t border-t-[#eee] bg-white">
                <Input
                  className="border-none focus-visible:outline-none focus-visible:ring-transparent"
                  placeholder="Say something..."
                />
                <Button className="bg-sky-900 p-2" size={"icon"}>
                  <Send />
                </Button>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TabControls;
