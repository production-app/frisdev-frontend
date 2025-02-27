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
import CommandWrapper from "../../components/CommandWrapper";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col pb-5 bg-muted/40 flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 overflow-y-auto">
      {/** top section */}
      <div className="w-full  flex py-4 gap-2 ">
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
        {/* <DropdownMenu>
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
        </DropdownMenu> */}

        <UserButton />
      </div>

      {/** main section */}
      <div className="w-full py-4">
        <Card className="px-4 w-full py-4">
          <CardHeader>
            <CardTitle>Mailing Documents</CardTitle>
            <CardDescription>Document logs</CardDescription>
          </CardHeader>
          <CardContent>
            <TableViewDocumentLog />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
