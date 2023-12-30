import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalServices";
import toast from "react-hot-toast";

const useChangeProposalStatus = () => {
  const { mutate: changingProposalStatus, isPending: isChanging } = useMutation(
    {
      mutationFn: changeProposalStatusApi,
      onSuccess: ({ message }) => {
        toast.success(message);
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message || err.message);
      },
    },
  );

  return { changingProposalStatus, isChanging };
};

export default useChangeProposalStatus;
