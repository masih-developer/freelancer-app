import { useState } from "react";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

const Auth = () => {
    const [step, setStep] = useState(1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <SendOTPForm
                        onNextStep={() => setStep((prevStep) => prevStep + 1)}
                    />
                );
            case 2:
                return (
                    <CheckOTPForm
                        onBackStep={() => setStep((prevStep) => prevStep - 1)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="w-full min-h-screen flex items-center justify-center">
                {renderStep()}
            </div>
        </div>
    );
};

export default Auth;
