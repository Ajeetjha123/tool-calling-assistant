import { AuthHero } from "./components/auth-hero";
import { AuthForm } from "./components/auth-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Sign In - OpenChat",
  description: "Sign in to OpenChat to get AI-powered assistance",
};

export default async function AuthPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/chat");
  }

  return (
    <div className="min-h-screen flex">
      <AuthHero />

      <div className="flex-1 flex items-center justify-center bg-background">
        <AuthForm />
      </div>
    </div>
  );
}
