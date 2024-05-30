"use client";

import { Nav } from "@/components/Navbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import Searchbar from "./Searchbar";

import TabControls from "./TabControls";

interface MailProps {
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export default function Main({
  defaultLayout = [270, 440, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const [active, setActive] = React.useState(1);

  const [openTab, setOpenTab] = React.useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = "react-resizable-panels:collapsed=true";
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = "react-resizable-panels:collapsed=false";
          }}
          className={cn(
            isCollapsed && "transition-all duration-300 ease-in-out",
            "md"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-start overflow-hidden",
              isCollapsed ? "h-[52px] justify-center" : "px-2"
            )}
          >
            <Image
              className="transition-all"
              src={isCollapsed ? "/logo_res.png" : "/logo.png"}
              alt="firstregister_logo"
              width={120}
              height={120}
            />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
              },
              {
                title: "Forums",
                label: "128",
                icon: MessagesSquare,
                variant: "ghost",
              },
              {
                title: "Shopping",
                label: "8",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Promotions",
                label: "21",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}
          maxSize={35}
        >
          <div className=" flex items-center justify-start px-3 h-[52px]">
            <h1 className="font-bold text-gray-400">Workspace</h1>
            <div className="flex flex-col items-center justify-start bg-white ml-auto">
              <div className="flex items-center justify-center">
                <div className="bg-green-500 h-2 w-2 rounded-full mr-1" />

                <h1 className="font-bold text-base">3h:44m</h1>
              </div>
              <span className="text-muted-foreground text-sm font-bold">
                Elapsed Time
              </span>
            </div>
          </div>
          <Separator />
          <div className="flex  items-center justify-center h-full w-full">
            <Image src={"pdfsvg.svg"} alt="pdf" height={200} width={200} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={25} defaultSize={defaultLayout[2]}>
          <div className=" flex items-center justify-start px-3 h-[52px]">
            <Searchbar />
          </div>
          <div className="flex  items-center justify-center h-full w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="100"
              height="100"
              className="fill-sky-900"
            >
              <path d="M24,11V5c0-1.654-1.346-3-3-3h-2.586l-2-2h-3.414c-1.654,0-3,1.346-3,3v2H2V0H0V17c0,1.654,1.346,3,3,3h7v4h14v-6c0-1.654-1.346-3-3-3h-2.586l-2-2h-3.414c-1.654,0-3,1.346-3,3v2H3c-.551,0-1-.448-1-1V7H10v4h14Z" />
            </svg>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20} defaultSize={defaultLayout[3]}>
          <div className=" flex items-center justify-start px-3 h-[52px]">
            <h1 className="font-bold text-gray-400">EDAS</h1>
          </div>
          <Separator />
          <div className="flex items-center justify-center h-full w-full">
            <svg
              fill="#0c4a6e"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100"
              height="100"
              viewBox="0 0 91.201 91.201"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M45.182,37.845c-1.118,0-1.842,0.099-2.269,0.197v14.502c0.427,0.099,1.118,0.099,1.743,0.099
			c4.538,0.032,7.497-2.467,7.497-7.76C52.186,40.279,49.488,37.845,45.182,37.845z"
                  />
                  <path
                    d="M25.817,37.78c-1.021,0-1.71,0.099-2.072,0.197v6.543c0.428,0.099,0.953,0.132,1.677,0.132
			c2.664,0,4.308-1.348,4.308-3.617C29.73,38.996,28.317,37.78,25.817,37.78z"
                  />
                  <path
                    d="M58.984,0H12.336v91.201h66.529V27.05L55.23,10.73L58.984,0z M32.656,46.165c-1.71,1.61-4.241,2.335-7.2,2.335
			c-0.659,0-1.25-0.033-1.711-0.1v7.924H18.78V34.459c1.545-0.264,3.715-0.461,6.773-0.461c3.091,0,5.294,0.592,6.775,1.776
			c1.414,1.118,2.367,2.959,2.367,5.129C34.695,43.074,33.971,44.915,32.656,46.165z M60.764,34.163h13.549v4.11h-8.517v5.063h7.958
			v4.076h-7.958v8.912h-5.032V34.163z M57.479,44.717c0,4.242-1.543,7.168-3.682,8.977c-2.335,1.94-5.887,2.862-10.226,2.862
			c-2.598,0-4.44-0.166-5.689-0.329V34.459c1.842-0.296,4.242-0.461,6.775-0.461c4.208,0,6.938,0.756,9.076,2.369
			C56.033,38.076,57.479,40.805,57.479,44.717z"
                  />
                  <polygon points="63.652,0 60.613,8.694 78.865,21.297 		" />
                </g>
              </g>
            </svg>
          </div>
        </ResizablePanel>
        <ResizableHandle />
      </ResizablePanelGroup>
      <TabControls openTab={openTab} toggleTab={() => setOpenTab(!openTab)} />
    </TooltipProvider>
  );
}
