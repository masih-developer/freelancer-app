import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";

const useToggleProjectStatus = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleProjectStatus, isPending: isToggling } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      return queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { toggleProjectStatus, isToggling };
};

export default useToggleProjectStatus;
