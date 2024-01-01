import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ sendOtpHandler, isPending, register, inputError }) => {
  const submitOtpHandler = (e) => {
    e.preventDefault();
    sendOtpHandler();
  };

  return (
    <form
      className="w-full max-w-[400px] rounded-lg bg-secondary-0 p-5 shadow-md"
      onSubmit={submitOtpHandler}
    >
      <TextField
        name="phoneNumber"
        label="شماره موبایل"
        id="otp-code"
        register={register}
        placeholder="شماره موبایل خود را وارد کنید..."
        validationSchema={{
          required: "لطفا شماره تلفن خود را وارد کنید.",
          pattern: {
            value: /^[0][9]\d{9}?$/i,
            message: "شماره تلفن وارد شده صحیح نمی باشد.",
          },
        }}
        errors={inputError}
        required
      />
      {isPending ? (
        <div className="mt-5 text-center">
          <Loading />
        </div>
      ) : (
        <button type="submit" className="app-btn mt-5">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
};

export default SendOTPForm;
