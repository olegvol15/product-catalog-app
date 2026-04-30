import type { Metadata } from "next";
import { ReactQueryProvider } from "@/components/react-query-provider";
import "./globals.css";
import "@/styles/catalog.css";
import "@/styles/header.css";
import "@/styles/products.css";

export const metadata: Metadata = {
  title: "Product Catalog",
  description: "Product listing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
