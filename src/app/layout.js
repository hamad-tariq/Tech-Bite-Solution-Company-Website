import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Import and configure the Montserrat font
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Tech-bite",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="bgImage">
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
