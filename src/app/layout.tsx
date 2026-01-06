import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amitesh Tutorials | Lucknow",
  description: "Coaching | Tutorials provided ",
  icons : 
  {
    icon : "/logo.jpg"
  },
  keywords : "amitesh tutorials, Amitesh tutorials, Lucknow, lucknow, tutorials, Tutorials ",
  openGraph: {
    type: "website",
    url: "https://amiteshtutorials.netlify.app",
    title: "Amitesh Tutorials | Lucknow",
    description: "Coaching | tutorials provided",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EY5VNFQ0X2"></script>
        <script>
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-EY5VNFQ0X2');
           </script>
        {children}
      </body>
    </html>
  );
}
