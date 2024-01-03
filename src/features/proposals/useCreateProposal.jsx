import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../../services/proposalServices";
import toast from "react-hot-toast";

const useCreateProposal = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries(["proposals"]);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { createNewProposal, isCreating };
};

export default useCreateProposal;
