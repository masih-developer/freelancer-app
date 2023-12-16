import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

const useRemoveProject = () => {
    const queryClient = useQueryClient();

    const { mutate: removeProject, isPending: isDeleting } = useMutation({
        mutationFn: removeProjectApi,
        onSuccess: () => {
            return queryClient.invalidateQueries({
                queryKey: ["owner-projects"],
            });
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || err.message);
        },
    });

    return { removeProject, isDeleting };
};

export default useRemoveProject;
