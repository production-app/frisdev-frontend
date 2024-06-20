import CommandWrapper from "@/components/CommandWrapper";
import Thumbnail from "@/components/Thumbnail/Thumbnail";
import ScanTable from "@/components/page_ui/Scanpage";
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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Asterisk, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: { cntrl_id: string } }) => {
  return (
    <main className="w-full flex">
      <div className="scrollbar-hide transition-all border-r w-40 bg-white h-full overflow-y-auto scroll">
        <Thumbnail />
      </div>
      <div className="flex flex-col pb-5 bg-muted/40 flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 overflow-y-auto">
        {/** top section */}
        <div className="w-full  flex py-4 ">
          {/** breadcrumb */}
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/jobs">Jobs</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Scan</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{params.cntrl_id}</BreadcrumbPage>
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

        <div className="w-full bg-white rounded-lg shadow-sm p-5 border-dashed border  flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <span className="flex items-center gap-3 text-sm text-muted-foreground">
            <strong>Control No:</strong> {params.cntrl_id}
            <Copy className="h-4 w-4" />
          </span>

          <span className="flex items-center gap-3 text-sm text-muted-foreground">
            <strong>Name On Docuent:</strong> Biodun Ayobami
          </span>

          <span className="flex items-center gap-3 text-sm text-muted-foreground">
            <strong>JOB TYPE:</strong> eMANDATE
          </span>

          <span className="flex items-center gap-3 text-sm text-muted-foreground">
            <strong>Source:</strong> Walk-In
          </span>
        </div>

        {/** main section */}
        <Card className="px-4 w-full py-4 flex-1 border-dashed border">
          <CardHeader className="flex justify-center w-full">
            <CardTitle>DOCUMENT / SCANNING </CardTitle>
            <CardDescription>Submit materials for processing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center w-full">
              <div className="flex w-full gap-3 my-5">
                <span className="w-10 h-10 bg-sky-900 text-white rounded-md flex items-center justify-center">
                  <Asterisk />
                </span>
                <div className="flex flex-col w-full">
                  <span className="text-base font-semibold">
                    Required Documents
                  </span>
                  <ul className="flex gap-2">
                    <li className="text-xs flex gap-1 items-center justify-center">
                      {" "}
                      <span className="text-red-500">
                        <Asterisk className="h-2 w-2" />
                      </span>
                      Divers license
                    </li>
                    <li className="text-xs flex gap-1 items-center justify-center">
                      <span className="text-red-500">
                        <Asterisk className="h-2 w-2" />
                      </span>
                      Bank statement
                    </li>
                    <li className="text-xs flex gap-1 items-center justify-center">
                      <span className="text-red-500">
                        <Asterisk className="h-2 w-2" />
                      </span>
                      Letter from church
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ScanTable />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default page;
