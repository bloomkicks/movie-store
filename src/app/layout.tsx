"use client";
import Header from "@/components/layout/Header";
import { QueryClient, QueryClientProvider } from "react-query";

import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Store",
  description: "Here you can find a movie just for you",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
