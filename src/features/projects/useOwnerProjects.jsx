import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";

const useOwnerProjects = () => {
  return useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
    retry: false,
    refetchOnWindowFocus: true,
  });
};

export default useOwnerProjects;
