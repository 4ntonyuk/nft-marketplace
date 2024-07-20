import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Crypter - the new creative economy",
  description: "Create, explore & collect digital art NFTs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
