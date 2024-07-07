import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { LucideIcon } from "lucide-react";

const DataCard = ({
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

export default DataCard;
