"use client";
import { TableViewDocumentLog } from "@/components/page_ui/sampleTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DataCard from "@/components/card/data-card";
import { File, Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommandWrapper from "../../../components/CommandWrapper";

export default function Home() {
  const [open, close] = useState(false);
  return (
    <div className="flex flex-col pb-5 bg-muted/40 flex-1 items-start sm:py-0 ">
      {/** top section */}
      <header className="w-full  flex py-4 px-6">
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
              <BreadcrumbPage>Jobs</BreadcrumbPage>
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
      </header>
      {/**
       * <div className="w-full  flex py-4 bg-white border-b border-b-zinc-[#eee] px-6">
        <div className="flex items-center justify-start gap-2">
          <span className="font-bold">Job Requests</span>
          <Badge className="bg-sky-900">3</Badge>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <DatePickerWithRange /> }
          <Button
            size="sm"
            variant="outline"
            className="h-8 gap-1"
            //  onClick={open}
          >
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          {/* <Link href={"/jobs/new"}> }
          <Button size="sm" className="h-8 gap-1 bg-sky-900">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Job(s)
            </span>
          </Button>
          {/* </Link> }
        </div>
      </div>
       */}

      <div className="flex w-full py-4 px-6">
        <div className="grid gap-4 md:gap-8 grid-cols-1 lg:grid-cols-3 w-full">
          <DataCard
            title="Documents processed"
            value="1500"
            increase="+20.1%"
            Icon={File}
          />
          <DataCard
            title="attachment"
            value="2350"
            increase="+180.1%"
            Icon={Paperclip}
          />
          <DataCard
            title="attachment"
            value="2350"
            increase="+180.1%"
            Icon={Paperclip}
          />
        </div>
      </div>

      {/** main section */}
      <main className="w-full py-4 px-6">
        <Card className="w-full pt-0 overflow-hidden shadow-none">
          <CardHeader className="bg-[#eee] border-b border-b-[#eee] flex py-3">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 bg-sky-900 rounded-full"></span>
              <CardTitle className="text-base">Mailing Documents</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <TableViewDocumentLog />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
