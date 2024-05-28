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

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full items-stretch "
        //style={{ height: "" }}
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
            <h1>Workspace</h1>
          </div>
          <Separator />
          <div className="flex  items-center justify-center h-full w-full">
            <Image src={"pdfsvg.svg"} alt="pdf" height={200} width={200} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <div className=" flex items-center justify-start px-3 h-[52px]">
            <Searchbar />
          </div>
          <Separator />
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
        <ResizablePanel
          minSize={20}
          maxSize={20}
          defaultSize={defaultLayout[2]}
        >
          <div className=" flex items-center justify-start px-3 h-[52px]">
            Third Section
          </div>
          <Separator />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
