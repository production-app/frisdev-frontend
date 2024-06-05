import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-muted/40 flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0">
      <div className="w-full h-fit py-4">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Orders</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recent Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full h-screen py-4">
        <Card>
          <CardHeader>
            <CardTitle>Mailing List</CardTitle>
            <CardDescription>Submit materials for processing</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Form here</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
