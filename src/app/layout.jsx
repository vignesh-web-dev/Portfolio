import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/page";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const bricolage = Inter({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata = {
  metadataBase: new URL("https://freelance-seven-gray.vercel.app/"),
  title: {
    default:
      "Expert Frontend Developer | Transforming Ideas into Stunning Web Experiences",
    template: "Portfolio • %s",
  },
  description:
    "Elevate your online presence with a seasoned frontend developer. Specializing in HTML, CSS, JavaScript, React JS, Next JS, and Webflow, I craft captivating web experiences tailored to your needs. Let's collaborate to bring your vision to life!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180×180",
      url: "/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title:
      "Expert Frontend Developer | Transforming Ideas into Stunning Web Experiences",
    description:
      "Elevate your online presence with a seasoned frontend developer. Specializing in HTML, CSS, JavaScript, React JS, Next JS, and Webflow, I craft captivating web experiences tailored to your needs. Let's collaborate to bring your vision to life!",
    type: "website",
    locale: "en_US",
    url: "https://freelance-seven-gray.vercel.app/",
    siteName: "Vignesh",
    images: "/cover.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
