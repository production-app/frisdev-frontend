"use client";
import CommandWrapper from "@/components/CommandWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Card as Cards, Switch } from "@mantine/core";

import { Toaster, toast } from "sonner";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import ListDescription from "@/components/page_ui/ListDescription";
import { IconEdit } from "@tabler/icons-react";
import { Icon, Pencil } from "lucide-react";
import Thumbnail from "@/components/page_ui/Thumbnail";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

const page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(
    "https://frstore.blob.core.windows.net/frisops/placeholder.pdf"
  );

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  type PdfTypes = {
    id: number;
    url: string;
  };

  const pdfQuery: PdfTypes[] = [
    {
      id: 1,
      url: "https://frstore.blob.core.windows.net/frisops/6850646335489545-35430-35430__ADELEYE FAHYIM OLADIMEJI EDMMS FRL NEW.pdf",
    },

    {
      id: 2,
      url: "https://frstore.blob.core.windows.net/frisops/36134-36134__akwiwu first registrars.pdf",
    },

    {
      id: 3,
      url: "https://frstore.blob.core.windows.net/frisops/6817324530121467-11875-11875__04.pdf",
    },

    {
      id: 4,
      url: "https://frstore.blob.core.windows.net/frisops/7070044089338106-27450-27450__FIRST_Ije.pdf",
    },
  ];

  //https://frstore.blob.core.windows.net/frisops/7070044089338106-27450-27450__FIRST_Ije.pdf

  //https://frstore.blob.core.windows.net/frisops/6817324530121467-11875-11875__04.pdf

  // Working on the Hyration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main className="w-full flex">
      <div className="scrollbar-hide transition-all border-r w-40 bg-white h-full overflow-y-auto scroll">
        {/* Thumbnail */}

        {pdfQuery.map((data) => (
          <Button
            variant="ghost"
            className="mt-20"
            onClick={() => setPdfLoading(data?.url)}
          >
            <div style={{ height: "10% important" }}>
              <Thumbnail fileUrl={data?.url} pageIndex={1} />
            </div>
          </Button>
        ))}
      </div>
      <div className="flex flex-col pb-5 bg-muted/40 flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 overflow-y-auto">
        <div className="w-full  flex py-4 ">
          {/** breadcrumb */}
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Mailing</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Call Over</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/** Command */}
          <CommandWrapper />

          {/** user dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full ml-3"
              >
                <Image
                  src="https://avatar.iran.liara.run/public/boy"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="!flex !justify-self-end flex-row ">
          <Button size="sm" className=" ">
            Complete Call-over
          </Button>
        </div>

        <div className="w-full py-4 flex justify-between gap-7">
          <Card className="w-[100%]">
            <CardHeader>
              <CardTitle>
                {" "}
                <div className="flex flex-row items-center justify-center">
                  <ZoomOutButton />
                  <ZoomPopover />
                  <ZoomInButton />
                </div>
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className=" w-[475px] overflow-auto min-h-70 ">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfLoading} plugins={[zoomPluginInstance]} />
              </Worker>
            </CardContent>
          </Card>

          <Card className="px-4 py-4">
            <CardHeader>
              <CardTitle>Meta Data</CardTitle>
              <CardDescription>
                <div className="flex  flex-row justify-between">
                  <div>Edit the meta-data</div>
                  <Switch
                    size="md"
                    color="green"
                    onLabel={<Pencil size={13} className="text-sm" />}
                    offLabel="OFF"
                    checked={checked}
                    onChange={(event) => {
                      setChecked(event.currentTarget.checked);
                      // toast("Editing Mode", {
                      //   description: "You have enable editing mode",
                      //   action: {
                      //     label: "Undo",
                      //     onClick: () => setChecked(!!checked),
                      //   },
                      // });
                      if (checked === false) {
                        toast.success("Editing mode enable!");
                      }
                    }}
                  />
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ListDescription
                data={{
                  data: checked,
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
