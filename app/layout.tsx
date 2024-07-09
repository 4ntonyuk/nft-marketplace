import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "crypter - the new creative economy",
  description: "Create, Explore & Collect Digital Art NFTS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
