import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOTPForm = ({ onSetPhoneNumber, sendOtpHandler, isPending }) => {
    const submitOtpHandler = (e) => {
        e.preventDefault();
        sendOtpHandler();
    };

    return (
        <form
            className="shadow-md p-5 w-full max-w-[400px] rounded-lg"
            onSubmit={submitOtpHandler}
        >
            <TextField
                label="شماره موبایل"
                value={phoneNumber}
                onChange={onSetPhoneNumber}
                type="text"
                id="otp-code"
                placeholder="شماره موبایل خود را وارد کنید..."
                autoComplete="off"
            />
            {isPending ? (
                <div className="text-center mt-5">
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
