import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";
import Circles from "@/components/Circles";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
  openGraph: {
    images: [
      {
        url: "/logo.jpg", // Path to the image for social media previews
        alt: "Logo for Portfolio", // Description of the image
      },
    ],
  },  
};


export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} page bg-site bg-cover`}>
        <Header />
        <StairTransition />

          <PageTransition className="flex-grow">{children}</PageTransition>
          <Nav /> {/* Nav positioned on the right side */}
        <TopLeftImg/>
        <Circles />

      </body>
    </html>
  );
}
