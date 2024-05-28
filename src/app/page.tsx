import Footer from "@/components/Footer";
import Main from "@/components/Main";
import { cookies } from "next/headers";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <main className="h-[92vh] ">
      <div className="h-full hidden lg:block">
        <Main
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
        <Footer />
      </div>
      <div className="w-full h-full absolute inset-0 flex md:hidden items-center justify-center">
        <h1>Content is not available on small screens</h1>
      </div>
    </main>
  );
}
