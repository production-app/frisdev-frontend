"use client";
import useDocumentStore from "@/zustand/store/store";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { BookCopy, Trash } from "lucide-react";
import { useMemo, useState } from "react";
import Lightbox from "../Thumbnail/Lightbox";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type User = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
};

type DOCTYPE =
  | "National id"
  | "Bank statement"
  | "Waec certificate"
  | "Drivers license"
  | "Combined";

const docTypes: DOCTYPE[] = [
  "Drivers license",
  "National id",
  "Bank statement",
  "Waec certificate",
  "Combined",
];

type UPLOAD = { id: string; file: string; documenttype: DOCTYPE; ocr: boolean };

const ScanDoc = ({ ready }: { ready: boolean }) => {
  const documents = useDocumentStore((state) => state.documents);
  const deleteDocument = useDocumentStore((state) => state.deleteDocument);

  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const primaryData: UPLOAD[] = useMemo(
    () =>
      documents.map((doc) => {
        return {
          id: doc.id,
          file: doc.name,
          documenttype: "National id" as DOCTYPE,
          ocr: false,
        };
      }),
    [documents]
  );

  const columns: ColumnDef<any>[] = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <div className="w-fit h-fit flex items-center justify-center">
            <Checkbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="w-fit h-fit flex items-center justify-center">
            <Checkbox
              className="border"
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        id: "doc_id",
        accessorKey: "id",
        header: "Document Id",
      },
      {
        id: "file",
        accessorKey: "file",
        header: "File Uploader",
        cell: function render({ row }) {
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <p className="w-52 truncate text-start">
                    {row.getValue("file")}
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{row.getValue("file")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        },
      },
      {
        id: "documenttype",
        accessorKey: "documenttype",
        header: "Document Type",
        cell: function render({ row }) {
          return (
            <Select>
              <SelectTrigger className="flex justify-start rounded-sm text-muted-foreground h-8 max-w-44">
                <SelectValue placeholder={row.getValue("documenttype")} />
              </SelectTrigger>
              <SelectContent className="w-40">
                {docTypes.map((type) => {
                  return (
                    <SelectItem key={type} value={type} className="capitalize">
                      {type}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          );
        },
      },
      {
        id: "ocr",
        accessorKey: "ocr",
        header: "Processing",
        cell: function render({ row }) {
          return (
            <Badge
              className={clsx(
                "text-muted-foreground hover:bg-transparent text-white",
                ready ? "bg-green-700" : "bg-red-600/20"
              )}
            >
              {ready ? "Ready" : "Not Ready"}
            </Badge>
          );
        },
      },
      {
        id: "actions",
        accessorKey: "actions",
        header: "",
        cell: function render({ getValue, row }) {
          return (
            <div className="flex items-center gap-3 w-fit">
              <button className="border h-8 w-8 flex items-center justify-center rounded-sm p-2 text-muted-foreground">
                <BookCopy />
              </button>
              <Lightbox
                image={{
                  src: "/pt.png",
                  thumbnail: "/pt.png",
                  width: 310,
                  height: 428,
                }}
              />
              <Dialog>
                <DialogTrigger className="border h-8 w-8 flex items-center justify-center rounded-sm p-2 text-red-600">
                  <Trash />
                </DialogTrigger>
                <DialogContent className="border-2 bg-white max-w-[400px]">
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription className="text-sm gap-3 text-muted-foreground">
                      This action cannot be undone. This will permanently delete
                      the document instance.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="comment" className="sr-only">
                        Comment
                      </Label>
                      <Input id="comment" placeholder="Add a comment..." />
                    </div>
                  </div>
                  <DialogFooter className="mt-2 flex justify-start">
                    <div className="flex gap-3 mr-auto">
                      <Button
                        className=" bg-sky-900 text-white"
                        onClick={() => deleteDocument(row.getValue("doc_id"))}
                      >
                        Delete
                      </Button>
                      <DialogClose>
                        <Button className=" bg-red-600 ">Cancel</Button>
                      </DialogClose>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          );
        },
      },
    ],
    [deleteDocument]
  );

  const table = useReactTable({
    columns,
    data: primaryData,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    debugTable: true,
    enableMultiRowSelection: true,
  });

  return (
    <div className="relatives max-h-[60vh] overflow-y-auto">
      <table className="w-full text-left">
        <thead className="border-b sticky top-0 bg-white z-30">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id} className="group">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="p-3 py-6 first-of-type:font-bold first-of-type:text-sm text-sm text-muted-foreground font-normal"
                      id={header.id}
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="border-b text-muted-foreground font-normal text-sm hover:bg-[#eee]/50"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td className="animate-in p-3 py-6" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScanDoc;

/**columnHelper.accessor(
    (row) => `${(row as User).firstName} ${(row as User).lastName}`,
    {
      id: "fileuploader",
      header: "File Uploader",
    }
  ),
  columnHelper.accessor("Document Type", {
    header: "Age",
  }),
  columnHelper.accessor("Applicant", {
    header: "Gender",
  }), */
