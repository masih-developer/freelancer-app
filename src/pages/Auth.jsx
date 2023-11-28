import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

const Auth = () => {
    return (
        <div className="container">
            <div className="w-full min-h-screen flex items-center justify-center">
                {/* <SendOTPForm /> */}
                <CheckOTPForm />
            </div>
        </div>
    );
};

export default Auth;
