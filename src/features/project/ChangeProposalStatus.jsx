import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitFormHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitFormHandler)}>
      <RHFSelect
        name="status"
        label="تغییر وضعیت"
        register={register}
        errors={errors}
        validationSchema={{ required: "لطفا یک وضعیت را انتخاب کنید." }}
        required
        options={options}
      />
      <button className="app-btn mt-5">ثبت</button>
    </form>
  );
};

export default ChangeProposalStatus;
