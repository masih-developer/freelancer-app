import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

const REQUIRED_FIELD_TEXT = "پر کردن این فیلد الزامیست.";

const CreateProposal = ({ projectId, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { createNewProposal, isCreating } = useCreateProposal();

  const submitFormHandler = (data) => {
    createNewProposal(
      { projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          reset();
        },
      },
    );
  };

  return (
    <form className="sm:w-[500px]" onSubmit={handleSubmit(submitFormHandler)}>
      <div className="flex flex-col gap-y-3">
        <TextField
          label="توضیحات"
          name="description"
          type="textarea"
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
          name="price"
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
        <TextField
          label="مدت زمان (روز)"
          name="duration"
          register={register}
          required
          validationSchema={{
            required: REQUIRED_FIELD_TEXT,
          }}
          errors={errors}
        />
      </div>
      {isCreating ? (
        <div className="mt-5 text-center">
          <Loading />
        </div>
      ) : (
        <button type="submit" className="app-btn mt-5">
          تایید
        </button>
      )}
    </form>
  );
};

export default CreateProposal;
