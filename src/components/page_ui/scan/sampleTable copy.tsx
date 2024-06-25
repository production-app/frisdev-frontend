"use client";
import { File, ListFilter, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Row, columns } from "../../table_ui/columns";
import { DataTable } from "../../table_ui/data-table";
import RadioButtonComponent from "../RadioButtonComponent";

const data: Row[] = [
  {
    id: 1,
    batchNo: "CN2406081",
    attachmentCount: "3",
    status: "New",
    sourceOfDoc: "Online",
    nameOnDocument: "Joe Smith",
    jobTypes: "Mutual Fund",
    actionDepartment: "Correspondence",
    // collapsibleContent: "Hi from collapsible content and row 1",
  },
  {
    id: 2,
    batchNo: "CN2406082",
    attachmentCount: "2",
    status: "Transfered",
    sourceOfDoc: "Walk-in",
    nameOnDocument: "Emeka Eze",
    jobTypes: "eDividends",
    actionDepartment: "Certificate",
    // collapsibleContent: "Hi from collapsible content and row 1",
  },
  {
    id: 3,
    batchNo: "CN2406083",
    attachmentCount: "0",
    status: "New",
    jobTypes: "Certificate",
    sourceOfDoc: "email",
    nameOnDocument: "Musa  Ali",
    actionDepartment: "Mutual Fund",
    // collapsibleContent: "Hi from collapsible content and row 1",
  },
];

export function TableViewDocumentLog() {
  const [isMounted, setIsMounted] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <TooltipProvider>
      <Modal
        opened={opened}
        radius="md"
        size="auto"
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.6,
          blur: 3,
        }}
      >
        <div>
          <RadioButtonComponent />
        </div>
      </Modal>

      <div className="flex w-full flex-col ">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList className="border">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Pending</TabsTrigger>
              <TabsTrigger value="draft">Tranfered</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Archived
              </TabsTrigger>
            </TabsList>
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

              {/* <DatePickerWithRange /> */}
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
              {/* <Link href={"/jobs/new"}> */}
              <Button size="sm" className="h-8 gap-1 bg-sky-900" onClick={open}>
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Job(s)
                </span>
              </Button>
              {/* </Link> */}
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0" className="mt-8">
              <CardHeader>
                <CardTitle>Document Log(s)</CardTitle>
                <CardDescription>
                  Manage your request and views logs
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className="rounded-md border"> */}
                <DataTable data={data} columns={columns} />
                {/* </div> */}
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>32</strong> Records
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  );
}
