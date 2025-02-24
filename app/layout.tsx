import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>LangChain - RenanGeorgio</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Starter template, by: RenanGeorgio showing how to use LangChain in Next.js projects!"
        />
        <meta property="og:title" content="LangChain - RenanGeorgio" />
        <meta
          property="og:description"
          content="Starter template showing how to use LangChain in Next.js projects!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain - RenanGeorgio" />
        <meta
          name="twitter:description"
          content="Starter template showing how to use LangChain in Next.js projects!"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
