import NavbarComp from "@/components/NavbarComp";
import { Toaster } from "@/components/ui/sonner";

type HomeLayoutProps = {
  children: React.ReactNode;
};
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="h-full w-full flex overflow-y-hidden">
      <NavbarComp />
      {children}
      <Toaster position="top-right" richColors expand={false} />
    </div>
  );
}
