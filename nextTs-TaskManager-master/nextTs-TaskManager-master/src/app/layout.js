import { Inter } from "next/font/google";
import "./globals.css";
import CustomNAvbar from "@/components/CustomNAvbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNAvbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
