import { TableCell, TableRow } from "@/components/ui/table";

export default function LinksVisitors({ linkId }: { linkId: number }) {
  const visitors = [
    { id: 1, name: "edividend", totalDuration: 20 },
    { id: 2, name: "ebonus", totalDuration: 20 },
    { id: 3, name: "mutual funds", totalDuration: 20 },
    { id: 4, name: "certificate", totalDuration: 20 },
  ]; // these are the visitor objects based on the linkId

  return (
    <>
      {visitors
        ? visitors.map((visitor) => {
            return (
              <TableRow key={visitor.id}>
                <TableCell className="py-5">
                  Document Type: {visitor.name}
                </TableCell>
                <TableCell className="py-5">
                  {" "}
                  Duration: {visitor.totalDuration}
                </TableCell>
                <TableCell className="py-5"></TableCell>
              </TableRow>
            );
          })
        : null}
    </>
  );
}
