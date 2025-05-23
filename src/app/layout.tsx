import type { Metadata } from "next";
import "./ui/globals.css";
import { inter , geistSans, geistMono } from "./ui/font";
import NavLinks from "./ui/nav-links";


// metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// layout qui va envelpper toute l'appli
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className}  antialiased`}
      >
        <header>
          <h1>Mon site </h1>
          <div className="nav-links">
            <NavLinks />
          </div>
          
        </header>
      
        {children}
        
       
        <footer>
          <p>&copy; monsite.com</p>
        </footer>
      </body>
    </html>
  );
}
