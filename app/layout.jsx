import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "3osal-dev",
  description: "portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${inter.className} bg-[#f8fafd] dark:bg-black`}>
        <ThemeProvider attribute="class">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
