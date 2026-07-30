import "./globals.css";
import { Poppins, Inter } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} bg-[#0B1120] text-white`}
      >
        {children}
      </body>
    </html>
  );
}