import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return <MantineProvider>{children}</MantineProvider>;
}
