import { useState } from "react";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeUserProfileApi } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

const CompleteProfileForm = () => {
    const navigate = useNavigate();
    const [formInputs, setFormInputs] = useState({
        name: "",
        email: "",
        role: "",
    });

    const { isPending, mutateAsync } = useMutation({
        mutationFn: completeUserProfileApi,
    });

    const changeInputsHandler = (e) => {
        const { name, value } = e.target;
        setFormInputs((prev) => ({ ...prev, [name]: value }));
    };

    const submitFormHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await mutateAsync(formInputs);
            const { user, message } = res.data.data;
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

            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    return (
        <form
            className="max-w-[400px] mx-auto min-h-screen flex items-center justify-center"
            onSubmit={submitFormHandler}
        >
            <div className="flex flex-col w-full gap-y-3 shadow-md p-3 sm:p-5 rounded-lg">
                <TextField
                    label="نام و نام خانوادگی"
                    name="name"
                    value={formInputs.name}
                    onChange={changeInputsHandler}
                />
                <TextField
                    label="ایمیل"
                    name="email"
                    value={formInputs.email}
                    onChange={changeInputsHandler}
                />
                <div className="flex items-center justify-center gap-x-8">
                    <RadioInput
                        label="کارفرما"
                        name="role"
                        id="OWNER"
                        className="cursor-pointer w-4 h-4 text-primary-900 focus:ring-primary-900 form-radio"
                        value="OWNER"
                        checked={formInputs.role === "OWNER"}
                        onChange={changeInputsHandler}
                    />
                    <RadioInput
                        label="فریلنسر"
                        name="role"
                        id="FREELANCER"
                        className="cursor-pointer w-4 h-4 text-primary-900 focus:ring-primary-900 form-radio"
                        value="FREELANCER"
                        checked={formInputs.role === "FREELANCER"}
                        onChange={changeInputsHandler}
                    />
                </div>
                {isPending ? (
                    <div className="text-center mt-2">
                        <Loading />
                    </div>
                ) : (
                    <button type="submit" className="app-btn">
                        ورود
                    </button>
                )}
            </div>
        </form>
    );
};

export default CompleteProfileForm;
