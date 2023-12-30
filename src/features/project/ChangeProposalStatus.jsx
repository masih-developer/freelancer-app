import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loading from "../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const { projectId } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { changingProposalStatus, isChanging } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const submitFormHandler = (data) => {
    changingProposalStatus(
      { id: proposalId, proposal: data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["project", projectId]);
          onClose();
          reset();
        },
      },
    );
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
      {isChanging ? (
        <div className="mt-5 text-center">
          <Loading />
        </div>
      ) : (
        <button className="app-btn mt-5">ثبت</button>
      )}
    </form>
  );
};

export default ChangeProposalStatus;
