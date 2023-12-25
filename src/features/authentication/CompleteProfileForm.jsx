import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeUserProfileApi } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CompleteProfileForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, watch, formState } = useForm({});

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeUserProfileApi,
  });

  const submitFormHandler = async (data) => {
    try {
      const res = await mutateAsync(data);
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
      className="mx-auto flex min-h-screen max-w-[400px] items-center justify-center"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <div className="flex w-full flex-col gap-y-3 rounded-lg p-3 shadow-md sm:p-5">
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{
            required: "وارد کردن نام و نام خانوادگی الزامیست.",
            minLength: {
              value: 5,
              message: "نام و نام خانوادگی می بایست حداقل 5 کاراکتر باشد.",
            },
          }}
          errors={formState.errors}
        />
        <TextField
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "وارد کردن ایمیل الزامیست.",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}?$/i,
              message: "ایمیل وارد شده صحیح نمی باشد.",
            },
          }}
          errors={formState.errors}
        />
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              name="role"
              id="OWNER"
              className="form-radio h-4 w-4 cursor-pointer text-primary-900 focus:ring-primary-900"
              register={register}
              checked={watch("role") === "OWNER"}
              validationSchema={{ required: "مشخص کردن نقشِ فرد الزامیست." }}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              name="role"
              id="FREELANCER"
              className="form-radio h-4 w-4 cursor-pointer text-primary-900 focus:ring-primary-900"
              register={register}
              checked={watch("role") === "FREELANCER"}
              validationSchema={{ required: "مشخص کردن نقشِ فرد الزامیست." }}
            />
          </div>
          {formState.errors?.["role"] && (
            <p className="mt-1 text-center text-xs text-error">
              {formState.errors?.["role"].message}
            </p>
          )}
        </div>
        {isPending ? (
          <div className="mt-2 text-center">
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
