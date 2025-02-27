"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Archive,
  ArchiveX,
  ExpandIcon,
  File,
  Inbox,
  LucideIcon,
  Send,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "./ui/separator";

interface NavProps {
  title: string;
  label?: string;
  icon: LucideIcon;
  url: string;
  variant: "default" | "ghost";
}
[];

const NavbarComp = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const links: NavProps[] = [
    {
      title: "Dashboard",
      url: "badmin",
      label: "128",
      icon: Inbox,
      variant: "default",
    },
    {
      title: "Drafts",
      url: "/",
      label: "9",
      icon: File,
      variant: "ghost",
    },
    {
      title: "Sent",
      url: "/",
      label: "",
      icon: Send,
      variant: "ghost",
    },
    {
      title: "Junk",
      url: "/",
      label: "23",
      icon: ArchiveX,
      variant: "ghost",
    },
    {
      title: "Trash",
      url: "/",
      label: "",
      icon: Trash2,
      variant: "ghost",
    },
    {
      title: "Archive",
      url: "/",
      label: "",
      icon: Archive,
      variant: "ghost",
    },
  ];

  return (
    <TooltipProvider>
      <aside
        data-collapsed={isCollapsed}
        className="group relative transition-all flex flex-col gap-4  border-r py-2 data-[collapsed=true]:py-2"
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-sky-900 p-2 z-30 rounded-full text-white"
        >
          <ExpandIcon className="h-2 w-2 " />
        </button>
        <Link className="px-2" href={"/"}>
          <Image
            className="transition-transform"
            src={isCollapsed ? "/logo_res.png" : "/logo.png"}
            alt="firstregister_logo"
            width={isCollapsed ? 40 : 120}
            height={isCollapsed ? 40 : 150}
          />
        </Link>
        <Separator />
        <nav className="relative transition-all grid gap-1 px-2  group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.url}
                    className={cn(
                      buttonVariants({
                        variant: link.variant,
                        size: "icon",
                      }),
                      "h-9 w-9 transition-all",
                      link.variant === "default"
                        ? "bg-g-sky-900 rk:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                        : "text-black"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-black">{link.label}</span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  link.variant === "default"
                    ? "bg-sky-900  text-white dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
                    : "text-muted-foreground",

                  " justify-start group-[[data-collapsed=false]]:w-52 transition-all"
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                <span className="mr-3">{link.title}</span>
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto bg-[#c2a14b] flex px-2 items-center justify-center w-6 h-6 rounded-full text-white text-[10px] "
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            )
          )}
        </nav>
        <Separator />

        {/** <div className="mt-auto p-2">
          <div className="relative h-32 w-full rounded-md bg-sky-900 ">
            <div className="bg-[#c2a14b] text-white flex items-center justify-center h-8 w-8 rounded-full absolute -top-5 inset-0 mx-auto">
              <BanIcon />
            </div>
          </div>
        </div> */}
      </aside>
    </TooltipProvider>
  );
};

export default NavbarComp;
