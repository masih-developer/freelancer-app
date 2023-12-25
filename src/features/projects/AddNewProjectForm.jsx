import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

const REQUIRED_FIELD_TEXT = "پر کردن این فیلد الزامیست.";

const AddNewProjectForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitFormHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col sm:w-[500px] gap-y-3"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: REQUIRED_FIELD_TEXT,
          minLength: {
            value: 5,
            message: "عنوان پروژه می بایست حداقل 5 کاراکتر باشد.",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: REQUIRED_FIELD_TEXT,
          minLength: {
            value: 10,
            message: "توضیحات پروژه می بایست حداقل 10 کاراکتر باشد.",
          },
        }}
        errors={errors}
      />
      <TextField
        label="قیمت(تومان)"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: REQUIRED_FIELD_TEXT,
          pattern: {
            value: /^[1-9]\d{4,9}?$/i,
            message: "قیمت پروژه می بایست حداقل 10,000 تومان باشد.",
          },
        }}
        errors={errors}
      />
      <button type="submit" className="app-btn">
        تایید
      </button>
    </form>
  );
};

export default AddNewProjectForm;
