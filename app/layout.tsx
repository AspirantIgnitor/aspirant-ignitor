import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/shared/ToastProvider";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export const metadata: Metadata = {
  title: "Aspirant Ignitor | Premium exam preparation platform",
  description: "Aspirant Ignitor is a modern educational platform for SSC, Railway, Bank, and PSC aspirants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ErrorBoundary>{children}</ErrorBoundary>
        <ToastProvider />
      </body>
    </html>
  );
}
