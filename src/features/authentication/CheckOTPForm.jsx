import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { checkOtp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

const OTP_LENGTH = 6;
const RESEND_TIME = 90;

const CheckOTPForm = ({ onBackStep, phoneNumber, onResendOtpHandler }) => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const [timer, setTimer] = useState(RESEND_TIME);

    const { isPending, mutateAsync } = useMutation({
        mutationFn: checkOtp,
    });

    const checkOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await mutateAsync({ phoneNumber, otp });
            const { user, message } = res.data.data;
            toast.success(message);

            if (!user.isActive) {
                navigate("/complete-profile");
                return;
            }
            if (user.status !== 2) {
                navigate("/");
                toast("پروفایل شما در انتظار تایید می باشد.", {
                    icon: "⚠️",
                });
                return;
            }

            const userRole = user.role;
            switch (userRole) {
                case "OWNER":
                    navigate("/owner");
                    break;
                case "FREELANCER":
                    navigate("/freelancer");
                    break;
                default:
                    navigate("/");
                    break;
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        const timerInterval =
            timer > 0 &&
            setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

        return () => {
            if (timer) {
                clearInterval(timerInterval);
            }
        };
    }, [timer]);

    const resendOtp = async () => {
        try {
            await onResendOtpHandler();
            setTimer(RESEND_TIME);
        } catch (error) {
            onBackStep();
        }
    };

    return (
        <form
            className="flex flex-col p-3 sm:p-5 rounded-lg bg-gray-50 shadow-md"
            onSubmit={checkOtpHandler}
        >
            <button
                type="button"
                className="text-secondary-800 text-xl"
                onClick={onBackStep}
            >
                <HiArrowRight />
            </button>
            <div className="flex my-2.5 items-center gap-1">
                <p className="text-sm text-secondary-500">
                    کد تائید برای شماره موبایل{" "}
                    <span className="underline text-secondary-900">
                        ۰۹۳۹۷۹۰۰۲۷۰
                    </span>{" "}
                    ارسال گردید.
                </p>
                <button
                    type="button"
                    className="block text-xl text-primary-800"
                    onClick={onBackStep}
                >
                    <CiEdit />
                </button>
            </div>
            <h3 className="font-medium text-secondary-900 text-lg">
                کد تایید را وارد کنید:
            </h3>
            <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={OTP_LENGTH}
                renderSeparator={<span>-</span>}
                containerStyle="flex-row-reverse justify-center items-center gap-1 sm:gap-2 mt-3"
                inputStyle="border border-primary-800 !w-9 !h-9 sm:!w-12 sm:!h-12 rounded-lg focus:border-primary-900 outline-none focus:shadow-md focus:shadow-primary-200 duration-300 disabled:bg-white disabled:opacity-30 !font-medium"
                inputType="number"
                shouldAutoFocus
                renderInput={(props) => <input {...props} />}
            />
            <div className="mt-5 text-center text-sm text-secondary-900">
                {timer > 0 ? (
                    <p>
                        <strong>{timer}</strong> ثانیه تا ارسال کد
                    </p>
                ) : (
                    <button
                        className="text-primary-900"
                        type="button"
                        onClick={resendOtp}
                    >
                        ارسال مجدد کد
                    </button>
                )}
            </div>
            {isPending ? (
                <div className="text-center mt-5">
                    <Loading />
                </div>
            ) : (
                <button type="submit" className="app-btn mt-5">
                    ورود
                </button>
            )}
        </form>
    );
};

export default CheckOTPForm;
