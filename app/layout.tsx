import { cn } from "@heroui/styles";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets: ['devanagari', 'latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "QuizAdmin - Quizzes",
  description: "Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", poppins.className)}>
      <body className="w-full min-h-full flex flex-col bg-background text-on-surface font-body-md antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
