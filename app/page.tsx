import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <SignInButton>
        <Button>Login</Button>
      </SignInButton>
    </div>
  );
}
