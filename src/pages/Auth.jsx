import SendOTPForm from "../features/authentication/SendOTPForm";

const Auth = () => {
    return (
        <div className="container">
            <div className="w-full min-h-screen flex items-center justify-center">
                <SendOTPForm />
            </div>
        </div>
    );
};

export default Auth;
