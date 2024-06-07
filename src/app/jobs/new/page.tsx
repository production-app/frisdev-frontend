import CommandWrapper from "@/components/CommandWrapper";
import NewDocument from "@/components/page_ui/NewDocument";
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
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col pb-5 bg-muted/40 flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 overflow-y-auto">
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
              <BreadcrumbPage>New</BreadcrumbPage>
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

      {/** main section */}
      <div className="w-full py-4">
        <Card className="px-4 w-full py-4">
          <CardHeader>
            <CardTitle>Add Document</CardTitle>
            <CardDescription>Submit materials for processing</CardDescription>
          </CardHeader>
          <CardContent>
            <NewDocument />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default page;
