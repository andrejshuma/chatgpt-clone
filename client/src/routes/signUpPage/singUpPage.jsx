import { SignUp } from "@clerk/clerk-react";
import "./signUpPage.css";

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};
export default SignUpPage;
