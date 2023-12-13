import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

const AuthContainer = () => {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("09397900270");

    const { isPending, error, mutateAsync } = useMutation({
        mutationFn: getOtp,
    });

    const sendOtpHandler = async () => {
        // try {
        //     const data = await mutateAsync({ phoneNumber });
        //     toast.success(data.data.message);
        //     console.log(data);
        //     onNextStep();
        // } catch (error) {
        //     toast.error(error?.response?.data?.message || error.message);
        // }
        toast.success("کد تائید برای شماره موبایل ۰۹۳۹۷۹۰۰۲۷۰ ارسال گردید.");
        setStep((prevStep) => (prevStep > 1 ? prevStep : prevStep + 1));
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <SendOTPForm
                        sendOtpHandler={sendOtpHandler}
                        phoneNumber={phoneNumber}
                        onSetPhoneNumber={(e) => setPhoneNumber(e.target.value)}
                        isPending={isPending}
                    />
                );
            case 2:
                return (
                    <CheckOTPForm
                        onBackStep={() => setStep((prevStep) => prevStep - 1)}
                        phoneNumber={phoneNumber}
                        onResendOtpHandler={sendOtpHandler}
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

export default AuthContainer;
