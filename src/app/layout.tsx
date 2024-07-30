import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <html lang="en" className={inter.className}>
        <body className="dark">
          <SignedOut>
            <div className="flex h-screen flex-col items-center justify-center bg-black text-gray-400">
              <div className="text-4xl font-semibold tracking-wider">
                OtterWealth
              </div>
              <div className="flex gap-1">
                Pleased{" "}
                <label className="text-white">
                  <SignInButton />
                </label>{" "}
                to see your expenses
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex h-screen flex-col bg-black text-gray-400">
              <TopNav />
              {children}
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
