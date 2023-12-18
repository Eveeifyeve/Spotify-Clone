import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "./providers/SupabaseProvider";
import UserProvider from "./providers/UserProvider";
import ModelProvider from "./providers/ModelProvider";
import ToasterProvider from "./providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import SEOImage from "./assets/SEO.jpeg";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Music Steaming clone by eveeify",
  icons: {
    icon: SEOImage.src,
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModelProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
