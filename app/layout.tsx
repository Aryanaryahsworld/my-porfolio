import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan | Portfolio",
  description: "Aryan is a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
     <body
    className={`${inter.className} bg-gray-100  text-gray-900 relative pt-28 sm:pt-36 dark:bg-[#7b4fb4] dark:text-gray-300 dark:text-opacity-90`}
  >
  
    <div className="absolute top-[-5rem] -z-10 right-[8rem] h-[30rem] w-[30rem] rounded-full blur-[8rem] sm:w-[65rem] bg-gradient-to-r from-[#7b4fb4] to-[#7b4fb4] dark:from-[#7b4fb4] dark:to-[#7b4fb4]"></div>

 
    <div className="absolute top-[-2rem] -z-10 left-[-30rem] h-[32rem] w-[52rem] rounded-full blur-[9rem] sm:w-[70rem] md:left-[-28rem] lg:left-[-25rem] xl:left-[-20rem] 2xl:left-[-10rem] bg-gradient-to-r from-[#7b4fb4] to-[#7b4fb4] dark:from-[#7b4fb4] dark:to-[#7b4fb4]"></div>


        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}