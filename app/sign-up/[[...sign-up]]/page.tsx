import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center h-screen pt-3 bg-foreground">
      <SignUp />
    </div>
  );
}
