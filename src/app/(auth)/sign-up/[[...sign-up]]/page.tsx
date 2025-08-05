import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "#0b0f1a",
          colorInputBackground: "#121726",

          colorText: "#ffffff",
          colorInputText: "#ffffff",

          colorPrimary: "#3b82f6",
          // @ts-ignore
          colorPrimaryText: "#ffffff",

          colorAlphaShade: "#1e40af",
          colorDanger: "#ef4444",

          borderRadius: "0.75rem",
        },
      }}
    />
  );
}
