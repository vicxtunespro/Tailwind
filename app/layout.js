import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/nav";
import DesktopMenu from "@/components/desktopMenu";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VicITug",
  description: "A Computer Scientist from Uganda providing cutting-edge solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <MobileMenu/>
        <DesktopMenu/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
