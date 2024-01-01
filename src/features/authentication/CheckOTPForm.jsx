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
      className="flex flex-col rounded-lg bg-secondary-0 p-3 shadow-md sm:p-5"
      onSubmit={checkOtpHandler}
    >
      <button
        type="button"
        className="ml-auto text-xl text-secondary-900"
        onClick={onBackStep}
      >
        <HiArrowRight />
      </button>
      <div className="my-2.5 flex items-center gap-1">
        <p className="text-sm text-secondary-700">
          کد تائید برای شماره موبایل{" "}
          <span className="font-medium text-secondary-900 underline">
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
      <h3 className="text-lg font-medium text-secondary-900">
        کد تایید را وارد کنید:
      </h3>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={OTP_LENGTH}
        renderSeparator={<span>-</span>}
        containerStyle="flex-row-reverse justify-center items-center gap-1 sm:gap-2 mt-3"
        inputStyle="border border-primary-800 !w-9 !h-9 sm:!w-12 sm:!h-12 rounded-lg focus:border-primary-900 outline-none focus:shadow-md focus:shadow-primary-200 duration-300 disabled:bg-white disabled:opacity-30 !font-medium text-secondary-900 bg-secondary-100"
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
        <div className="mt-5 text-center">
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
