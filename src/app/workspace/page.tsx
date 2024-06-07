import Footer from "@/components/workspace/Footer";
import Main from "@/components/workspace/Main";
import { cookies } from "next/headers";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <main className="h-screen w-full ">
      <div className="hidden lg:block h-full w-full relative">
        <Main
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
        <Footer />
      </div>
      <div className="w-full h-full absolute inset-0 flex lg:hidden items-center justify-center">
        <h1>Content is not available on small screens</h1>
      </div>
    </main>
  );
}
