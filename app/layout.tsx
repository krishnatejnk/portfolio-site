import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Tej | Software Engineer & Cloud Architect",
  description: "Software Engineer specializing in cloud-native applications, microservices, and distributed systems. Building scalable solutions with Java, Python, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

