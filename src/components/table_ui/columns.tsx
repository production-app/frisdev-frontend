"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit2Icon, EllipsisVertical, RefreshCcw, Trash2 } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
// import { Badge } from "@mantine/core";

export type Row = {
  batchNo: string;
  attachmentCount: string;
  id: number;
  status: string;
  jobTypes: string;
  nameOnDocument: string;
  actionDepartment: string;
  sourceOfDoc: string;
  //   collapsibleContent: string;
};

export const columns: ColumnDef<Row>[] = [
  {
    id: "1",
    accessorKey: "batchNo",
    header: "CN",
  },

  {
    id: "2",
    accessorKey: "nameOnDocument",
    header: "Names on Document",
  },

  {
    id: "3",
    accessorKey: "actionDepartment",
    header: "Action Department",
  },

  {
    id: "4",
    accessorKey: "attachmentCount",
    header: "Document Count(s)",
  },

  {
    id: "5",
    accessorKey: "jobTypes",
    header: "Job Types",
  },

  {
    id: "6",
    accessorKey: "sourceOfDoc",
    header: "Source of Document",
  },

  {
    id: "7",
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      let statusView = row.original;
      return <Badge variant="outline">{statusView.status}</Badge>;
    },
  },

  {
    id: "8",
    accessorKey: "attachmentCount",
    header: "",
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <div className="flex items-center">
            <CollapsibleTrigger>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    {" "}
                    <EllipsisVertical />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dropdown</p>
                </TooltipContent>
              </Tooltip>

              {row.getValue("")}
            </CollapsibleTrigger>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  {" "}
                  <Trash2 />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  {" "}
                  <Edit2Icon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  {" "}
                  <RefreshCcw />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Rollback</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      );
    },
  },
];
