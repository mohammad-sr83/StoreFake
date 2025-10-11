import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "store",
  description: "The Store",
  icons: "/image/logo.png",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
    dir="rtl"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="font-iranyekan" >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
