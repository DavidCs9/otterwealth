import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="fixed flex w-screen justify-between p-4 text-white shadow-2xl">
      <a href="/" className="text-xl font-bold">
        OtterWealth
      </a>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
