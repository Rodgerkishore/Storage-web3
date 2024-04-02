import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web3Storage - The Decentralized Storage Network for Web3",
  description: "Web3Storage is a decentralized storage network for Web3. by utilizing IPFS and Filecoin, Web3Storage provides a simple and reliable way to store and retrieve data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
