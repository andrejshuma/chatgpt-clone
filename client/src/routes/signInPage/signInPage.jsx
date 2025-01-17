import { SignIn } from "@clerk/clerk-react";
import "./singInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};
export default SignInPage;
