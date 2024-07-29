import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "OtterWealth",
  description: "Your simple personal finances",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
