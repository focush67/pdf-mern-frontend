import { SignIn } from "@clerk/nextjs";
export default function LoginPage() {
  return (
    <div className="flex flex-col items-center h-screen pt-[10%] bg-foreground">
      <SignIn />
    </div>
  );
}
