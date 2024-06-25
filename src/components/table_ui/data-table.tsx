"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import React from "react";
import { Row } from "./columns";
import _ from "lodash";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "../ui/input";
import { DatePickerWithRange } from "../page_ui/DatePickerComponent";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends Row, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  var CollapsibleRowContent = ({ row }: { row: Row }) => {
    // console.log(row.id);
    let arr = [
      { name: "eDividend", value: "this", other: "that", id: 1 },
      { name: "Bank Mandate", value: "this", other: "that", id: 1 },
      { name: "eBonus", value: "this", other: "that", id: 1 },
      { name: "Certificates", value: "this", other: "that", id: 2 },
      { name: "Banker Confirmation", value: "this", other: "that", id: 2 },
    ];

    //  let obj: any = arr.find((o) => o.id == row.id);

    let objs: any = _.filter(arr, function (o: any) {
      // console.log(o);
      return o.id === row.id;
    });

    return (
      <td colSpan={8}>
        {!_.isEmpty(objs) ? (
          <ul
            role="list"
            className="divide-y divide-gray-100 p-5 bg-white rounded-md border h-auto "
          >
            {objs?.map((obj: any) => (
              <li
                key={obj.value}
                className="flex justify-between gap-x-6 py-5 px-5 hover:bg-slate-100"
              >
                <div className="text font-semibold">
                  {" "}
                  {/* <span className=" text-slate-300 font-bold">
                    Document Types:{" "}
                  </span>{" "} */}
                  {obj?.name}
                </div>

                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none bg-gray-50"
                    src={
                      "https://frstore.blob.core.windows.net/frisops/65611065_2285426448177988_1488947088577265664_n.jpg"
                    }
                    alt=""
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Card className="p-10 rounded-md border">No Document uploaded</Card>
        )}
      </td>
    );
  };

  return (
    <>
      <div className="flex items justify-between py-4">
        <Input
          placeholder="Filter jobs..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />{" "}
        <div>
          <DatePickerWithRange />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row, index) => (
              <Collapsible key={index} asChild>
                <>
                  <TableRow>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  <CollapsibleContent className="bg-gray-200" asChild>
                    <tr>
                      <CollapsibleRowContent row={row.original} />
                    </tr>
                  </CollapsibleContent>
                </>
              </Collapsible>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
