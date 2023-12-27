import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

const useNewProject = () => {
  const queryClient = useQueryClient();

  useMutation({
    mutationFn: addNewProjectApi,
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
};

export default useNewProject;
