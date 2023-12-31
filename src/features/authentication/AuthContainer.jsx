import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, register, getValues, formState } = useForm({
    defaultValues: { phoneNumber: "" },
  });

  const { isPending } = useMutation({
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
    toast.success(
      `کد تائید برای شماره موبایل ${getValues("phoneNumber")} ارسال گردید.`,
    );
    setStep((prevStep) => (prevStep > 1 ? prevStep : prevStep + 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            sendOtpHandler={handleSubmit(sendOtpHandler)}
            isPending={isPending}
            register={register}
            inputError={formState.errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBackStep={() => setStep((prevStep) => prevStep - 1)}
            phoneNumber={getValues("phoneNumber")}
            onResendOtpHandler={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="flex min-h-screen w-full items-center justify-center">
        {renderStep()}
      </div>
    </div>
  );
};

export default AuthContainer;
