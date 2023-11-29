import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

const SendOTPForm = ({ onNextStep }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const { isPending, error, mutateAsync } = useMutation({
        mutationFn: getOtp,
    });

    const setOtpHandler = async (e) => {
        e.preventDefault();
        // try {
        //     const data = await mutateAsync({ phoneNumber });
        //     console.log(data);
        // } catch (error) {
        //     console.log(error.message);
        //     toast.error(
        //         error?.response?.data?.message ||
        //             "خطا در ارتباط با سرور، لطفااتصال خود را بررسی نمایید."
        //     );
        // }
        onNextStep();
    };

    return (
        <form
            className="shadow-md p-5 w-full max-w-[400px] rounded-lg"
            onSubmit={setOtpHandler}
        >
            <div className="flex flex-col">
                <label
                    htmlFor="otp-code"
                    className="text-lg text-secondary-700"
                >
                    شماره موبایل
                </label>
                <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text"
                    id="otp-code"
                    className="app-input mt-2"
                    placeholder="شماره موبایل خود را وارد کنید..."
                    autoComplete="off"
                />
            </div>
            <button
                type="submit"
                className="app-btn disabled:opacity-70"
                disabled={isPending}
            >
                ارسال کد تایید
            </button>
        </form>
    );
};

export default SendOTPForm;
