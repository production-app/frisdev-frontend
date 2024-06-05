import NavbarComp from "@/components/NavbarComp";

type HomeLayoutProps = {
  children: React.ReactNode;
};
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="w-full flex">
      <NavbarComp />
      {children}
    </div>
  );
}
