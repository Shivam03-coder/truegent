import { SignIn } from "@clerk/nextjs";
import "./index.css";
export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0b0f1a]">
      <SignIn
        appearance={{
          variables: {
            colorBackground: "#0b0f1a",
            colorText: "#fff",
            colorInputBackground: "#121726",
            borderRadius: "0.75rem",
            colorPrimary: "#a855f7",
          },
        }}
      />
    </div>
  );
}
