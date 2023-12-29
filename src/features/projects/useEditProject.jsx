import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

const useEditProject = () => {
  const queryClient = useQueryClient();

  const { mutate: editProject, isPending: isEditing } = useMutation({
    mutationFn: editProjectApi,
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

  return { editProject, isEditing };
};

export default useEditProject;
