import localFont from "next/font/local";
import "./globals.css";

const interFont = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  weight: "100 900",
});

const robotoMonoFont = localFont({
  src: "./fonts/RobotoMono-VariableFont_wght.ttf", 
  variable: "--font-roboto-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Henriette Uwizeyimana",
  description: "My Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${robotoMonoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
