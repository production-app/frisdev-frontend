import CustomCard from "@/components/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  File,
  Inbox,
  Library,
  Link2,
  LucideIcon,
  Paperclip,
  Pause,
  StopCircle,
  Timer,
} from "lucide-react";
import Link from "next/link";

const SimpleCard = ({
  title,
  value,
  increase,
  Icon,
}: {
  title: string;
  value: string;
  increase: string;
  Icon: LucideIcon;
}) => {
  return (
    <Card className="hover:scale-100 lg:hover:scale-105 lg:hover:border lg:hover:border-sky-900  shadow-none transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium capitalize">
          {title}
        </CardTitle>
        <span className="rounded-full bg-sky-900 p-2 flex items-center justify-center">
          <Icon className="text-white  h-4 w-4  text-muted-foreground" />
        </span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-sky-900">{value}</div>
        <p className="text-xs text-muted-foreground">
          <span className="mr-1 text-green-800 font-bold">{increase}</span>
          from last month
        </p>
      </CardContent>
    </Card>
  );
};

const page = () => {
  return (
    <div className="flex flex-col pb-5 bg-muted/40 flex-1 items-start sm:py-0 overflow-y-auto">
      {/** top section */}
      {/**<header className="w-full  flex py-4 px-6">
        {/** breadcrumb }
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
                <Link href="/user/dashboard">User</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/** Command }
        <CommandWrapper />

        {/** user dropdown }
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
      </header> */}

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 px-4 lg:px-6 my-6">
        <div className="w-full h-full flex items-center">
          <h1 className="text-xl text-muted-foreground">
            Welcome <strong className="text-black">Tunde</strong>, <br /> Have a
            great Tuesday
          </h1>
        </div>
        <CustomCard className="ml-auto shadow-none w-full lg:w-fit min-w-[300px] p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-muted-foreground" />
              <span className="text-base text-muted-foreground">Working</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="font-bold text-xl">3h:44m</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className="border-[#eee] text-muted-foreground"
                  size={"sm"}
                  variant={"outline"}
                >
                  <Pause className="h-4 w-4 mr-1" />
                  Break
                </Button>
                <Button
                  className="border-red-300 text-red-500"
                  size={"sm"}
                  variant={"outline"}
                >
                  <StopCircle className="h-4 w-4 mr-1" />
                  Clock out
                </Button>
              </div>
            </div>
          </div>
        </CustomCard>
      </div>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 w-full">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full">
          <CustomCard className="p-6 relative col-span-1 lg:col-span-2 shadow-none min-w-[300px] overflow-visible">
            <div className="flex">
              <div className="flex items-center gap-2">
                Inbox{" "}
                <div className="bg-sky-900 rounded-full text-white text-sm w-5 h-5 flex items-center justify-center">
                  3
                </div>
              </div>
              <div className="ml-auto">
                <Inbox />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex items-center gap-2"></div>
            </div>
            <div className="mt-5 overflow-hidden">
              <div className="group flex items-center gap-2 transition-all rounded-md py-1">
                <Avatar className="border border-[#eee]">
                  <AvatarImage src="https://avatar.iran.liara.run/public" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex text-sm font-bold text-muted-foreground w-full truncate">
                  <span>Bryan Lebsck document approval is pending</span>
                </div>

                <Link className="ml-auto hidden group-hover:flex" href={"/"}>
                  <Link2 />
                </Link>
              </div>
              <div className="group flex items-center gap-2 transition-all rounded-md py-1">
                <Avatar className="border border-[#eee]">
                  <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex text-sm font-bold text-muted-foreground truncate">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>

                <Link className="ml-auto hidden group-hover:flex" href={"/"}>
                  <Link2 />
                </Link>
              </div>
              <div className="group flex items-center gap-2 transition-all rounded-md py-1">
                <Avatar className="border border-[#eee]">
                  <AvatarImage src="https://avatar.iran.liara.run/public/girl" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex text-sm font-bold text-muted-foreground truncate">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>

                <Link className="ml-auto hidden group-hover:flex" href={"/"}>
                  <Link2 />
                </Link>
              </div>
            </div>
          </CustomCard>
          <CustomCard className="p-6 col-span-1 lg:col-span-2 shadow-none min-w-[300px]">
            <div className="flex flex-col h-full relative">
              <div className="flex">
                <div className="flex items-center gap-2">Updates </div>
                <div className="ml-auto">
                  <Library />
                </div>
              </div>
              <div className="mt-5 flex flex-col h-fit">
                <div>
                  <span>
                    which date do you prefer for the annual company dinner ?
                  </span>
                </div>
                <RadioGroup className="mt-4" defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="data-[state=checked]:text-sky-900 data-[state=checked]:ring-0"
                      value="default"
                      id="r1"
                    />
                    <Label htmlFor="r1">October 6, Friday</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="data-[state=checked]:text-sky-900 data-[state=checked]:ring-0"
                      value="comfortable"
                      id="r2"
                    />
                    <Label htmlFor="r2">October 7, Saturday</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button className="bg-sky-900 w-fit absolute bottom-0 ">
                Submit
              </Button>
            </div>
          </CustomCard>
        </div>
        <div className="grid gap-4 md:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <SimpleCard
            title="Documents processed"
            value="1500"
            increase="+20.1%"
            Icon={File}
          />
          <SimpleCard
            title="attachment"
            value="2350"
            increase="+180.1%"
            Icon={Paperclip}
          />
          <SimpleCard
            title="attachment"
            value="2350"
            increase="+180.1%"
            Icon={Paperclip}
          />
        </div>
      </main>
    </div>
  );
};

export default page;

/**<SimpleCard
            title="Documents processed"
            value="1500"
            increase="+20.1%"
            Icon={File}
          />
          <SimpleCard
            title="attachment"
            value="2350"
            increase="+180.1%"
            Icon={Paperclip}
          /> */
