import { useState } from "react";

const SendOTPForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <form className="shadow-md p-5 w-full max-w-[400px] rounded-lg">
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
            <button type="submit" className="app-btn">
                ارسال کد تایید
            </button>
        </form>
    );
};

export default SendOTPForm;
