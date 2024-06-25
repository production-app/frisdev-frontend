import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "h-screen bg-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider>
          {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
