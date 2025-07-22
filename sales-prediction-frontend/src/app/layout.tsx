import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext"; // 👈 Import AuthProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales Prediction Wizard",
  description: "Predict product sales using AI models",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-indigo-200 to-purple-300`}>
        <AuthProvider> {/* 👈 Wrap everything in AuthProvider */}
          <Navbar />
          <main className="px-4 py-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
