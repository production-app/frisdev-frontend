import NavbarComp from "@/components/NavbarComp";

type HomeLayoutProps = {
  children: React.ReactNode;
};
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="h-full w-full flex overflow-y-hidden">
      <NavbarComp />
      {children}
    </div>
  );
}
