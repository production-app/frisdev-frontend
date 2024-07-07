"use client";
import { Banner } from "@prisma/client";
import { TabsTriggerProps } from "@radix-ui/react-tabs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { Bell, CheckCheck, Eye, Loader2, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";

const Header = () => {
  const fetchBanners = async () => {
    const response = await fetch("http://localhost:3000/api/banners");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  // const { data, isLoading } = useQuery({
  //   queryKey: ["banner"],
  //   queryFn: fetchBanners,
  // });

  // const banners: Banner[] = data ? data : [];

  // const globalBanners = banners.filter(
  //   (banner) => banner?.bannerType === "global"
  // );

  // const departmentBanners = banners.filter(
  //   (banner) => banner?.bannerType === "department"
  // );
  // const userBanners = banners.filter((banner) => banner.bannerType === "user");

  return (
    <>
      {/* <header className="w-full   flex py-4 px-6">
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

        <div className="ml-auto flex gap-2 items-center justify-end">
          <NotForm />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"ghost"} size={"icon"} className="text-sky-900 ">
                <Bell />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="px-0 mt-0 p-0  min-w-[200px] max-w-none"
              align="end"
            >
              <div className="flex flex-col">
                <div className="flex px-2 py-2">
                  <span className="font-bold">Notifications</span>
                </div>
                <Tabs defaultValue="global" className="w-full">
                  <TabsList className="w-full flex justify-start pb-0 border-b">
                    <CustomTabTrigger
                      datalength={globalBanners.length}
                      triggerTitle="Global"
                      defaultValue={"global"}
                      value="global"
                    ></CustomTabTrigger>
                    <CustomTabTrigger
                      datalength={departmentBanners.length}
                      triggerTitle="Department"
                      value="department"
                    ></CustomTabTrigger>
                    <CustomTabTrigger
                      datalength={userBanners.length}
                      triggerTitle="All"
                      value="user"
                    ></CustomTabTrigger>
                  </TabsList>
                  <TabsContent asChild className="mt-0" value="global">
                    <div className="grid grid-cols-1">
                      {globalBanners.map((banner) => {
                        return <NotifItem key={banner.title} banner={banner} />;
                      })}
                    </div>
                  </TabsContent>
                  <TabsContent asChild className="mt-0" value="department">
                    <div className="grid grid-cols-1">
                      {departmentBanners.map((banner) => {
                        return <NotifItem key={banner.title} banner={banner} />;
                      })}
                    </div>
                  </TabsContent>
                  <TabsContent
                    asChild
                    className="mt-5"
                    value="user"
                  ></TabsContent>
                </Tabs>
                <div className="flex items-center justify-between p-2">
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="text-sky-900"
                  >
                    <CheckCheck className="mr-2" /> Mark all
                  </Button>
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="text-sky-900"
                  >
                    <Eye className="mr-2" />
                    View All
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

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
      </header> */}
    </>
  );
};

export default Header;

interface CustomTabsProps extends TabsTriggerProps {
  triggerTitle: string;
  datalength: string | number;
}
const CustomTabTrigger = ({
  children,
  triggerTitle,
  datalength,
  value,
  ...rest
}: CustomTabsProps) => {
  return (
    <TabsTrigger
      {...rest}
      className="group rounded-none mb-0 shadow-none data-[state=active]:text-sky-900 data-[state=active]:font-bold data-[state=active]:bg-none border-b-2 border-b-transparent data-[state=active]:border-b-sky-900"
      value={value}
    >
      {triggerTitle}
      {datalength !== 0 && (
        <Badge className="ml-2 flex items-center justify-center h-4 w-4 bg-[#eee] group-data-[state=active]:bg-sky-900 text-white rounded-sm">
          {datalength}
        </Badge>
      )}
      {children}
    </TabsTrigger>
  );
};

const NotifItem = ({ banner }: { banner: Banner }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role="menuitem"
          tabIndex={0}
          className="w-full flex px-3 py-3 border-b hover:bg-[#eee]"
          key={banner.title}
        >
          <div className="flex items-start justify-start gap-3">
            <Avatar className="bg-sky-900 rounded-lg relative overflow-visible">
              <div className="w-full h-full flex items-center justify-center">
                <span className="uppercase text-white font-bold">
                  {/* {banner.bannerType === "global" ? "G" : "D"} */}
                </span>
              </div>
              <span className="h-3 w-3 -bottom-1 -left capitalize-1 rounded-full bg-green-600 absolute"></span>
            </Avatar>
            <div className="flex flex-col w-full">
              <h1 className="text-sm font-bold">{banner.title}</h1>
              <p className="text-xs w-52 text-muted-foreground truncate ...">
                <span className="text-xs w-52 text-muted-foreground mr-1">
                  2h ago •
                </span>
                <span>{banner.content}</span>
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="p-0">
        {banner.image ? (
          <div
            key={banner.title}
            className="bg-sky-900 relative rounded-lg text-white overflow-hidden h-[250px]"
          >
            <Image
              src={banner.image as string}
              className="rounded-lg"
              alt="banner_image"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <div
              className={clsx(
                "absolute inset-0 z-10",
                banner.image ? "bg-black/80" : "bg-transparent"
              )}
            >
              <div className="h-full w-full flex flex-col items-center justify-center text-white">
                <h1 className="text-2xl font-bold">{banner.title}</h1>
                <p className="text-sm w-[24rem] lg:w-[30rem] text-center mt-4">
                  {banner.content}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <DialogHeader className="p-4 border-b text-base font-semibold text-black">
              {banner.title}
            </DialogHeader>
            <div className="p-4 text-sm text-muted-foreground">
              {banner.content}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

type SafeBanner = Omit<Banner, "id" | "createdAt" | "updatedAt">;
const NotForm = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: (newBanner) => {
      return axios.post("http://localhost:3000/api/banners", newBanner);
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const values = {
      bannerType: e.currentTarget.type.value,
      title: e.currentTarget.banner_title.value,
      content: e.currentTarget.banner_content.value,
      image: "",
    };
    await handleImageSubmit(e)
      .then((response) => {
        response?.json().then((res) => {
          console.log(typeof res.results.url);

          (values.image = res.results.url),
            mutation.mutate(values as any, {
              onSuccess(data) {
                setIsSubmitting(false);
                setOpen(false);
                toast(`Banner ${data.data.title} Created`);
                queryClient.invalidateQueries({ queryKey: ["banner"] });
              },
              onError(error) {
                setIsSubmitting(false);
                alert(error.message);
              },
            });
        });
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  const handleImageSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (typeof file === "undefined") return;

    const formData = new FormData();

    formData.append("image", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    return response;
  };

  function handleImageFileChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    setFile(target.files[0]);
  }

  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant={"ghost"}
          size={"icon"}
          className="text-sky-900 ml-auto"
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <DialogHeader className="bg-sky-900 text-white p-4">
          <DialogTitle>Add Notification</DialogTitle>
        </DialogHeader>
        <form action={"post"} onSubmit={onSubmit}>
          <div className="grid gap-4 py-4 px-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="type" className="text-left capitalize">
                Target
              </Label>
              <Select name="type" required disabled={isSubmitting}>
                <SelectTrigger className="w-full focus:ring-sky-900">
                  <SelectValue id="type" placeholder="Target" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="department">Department</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="image" className="text-left capitalize">
                Image
              </Label>
              <input
                id="image"
                type="file"
                name="image"
                required
                onChange={handleImageFileChange}
                disabled={isSubmitting}
                className={clsx(
                  isSubmitting
                    ? "file:cursor-not-allowed"
                    : "file:cursor-pointer",
                  "w-full text-gray-400 font-semibold text-sm bg-white border  file:disabled: cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
                )}
              />
              <p className="text-xs text-gray-400 mt-2">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title_b" className="text-left capitalize">
                title
              </Label>
              <Input
                id="title_b"
                name="banner_title"
                placeholder="banner title"
                className="col-span-3"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="content" className="text-left capitalize">
                Content
              </Label>
              <Textarea
                id="content"
                name="banner_content"
                placeholder="banner content"
                className="col-span-3 focus-visible:ring-sky-900"
                maxLength={150}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <DialogFooter className="p-4">
            <Button
              className="bg-sky-900"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isSubmitting ? "Loading" : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
