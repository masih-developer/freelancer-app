import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { HiArrowRight } from "react-icons/hi";

const OTP_LENGTH = 6;

const CheckOTPForm = ({ onBackStep }) => {
    const [otp, setOtp] = useState("");
    const [isSubmittable, setIsSubmittable] = useState(false);

    useEffect(() => {
        if (otp.length === OTP_LENGTH) {
            console.log("log In!");
            setIsSubmittable(true);
        } else {
            setIsSubmittable(false);
        }
    }, [otp]);

    return (
        <form
            className="flex flex-col p-5 rounded-lg bg-gray-50 shadow-md"
            onSubmit={(e) => e.preventDefault()}
        >
            <button
                className="text-secondary-800 text-xl mb-5"
                onClick={onBackStep}
            >
                <HiArrowRight />
            </button>
            <h3 className="font-medium text-secondary-900 text-lg">
                کد تایید را وارد کنید:
            </h3>
            <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={OTP_LENGTH}
                renderSeparator={<span>-</span>}
                containerStyle="flex-row-reverse justify-center items-center gap-2 mt-3"
                inputStyle="border border-primary-800 !w-12 !h-12 rounded-lg focus:border-primary-900 outline-none focus:shadow-md focus:shadow-primary-200 duration-300 disabled:bg-white disabled:opacity-30"
                inputType="number"
                shouldAutoFocus
                renderInput={(props) => (
                    <input onFocus={(e) => console.log(e.target)} {...props} />
                )}
            />
            <button
                type="submit"
                className="app-btn disabled:opacity-70"
                disabled={!isSubmittable}
            >
                ورود
            </button>
        </form>
    );
};

export default CheckOTPForm;
