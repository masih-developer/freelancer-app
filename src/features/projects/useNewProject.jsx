import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

const useNewProject = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewProject, isPending: isCreating } = useMutation({
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

  return { createNewProject, isCreating };
};

export default useNewProject;
