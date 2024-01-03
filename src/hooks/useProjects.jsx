import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

const useProjects = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, ...rest };
};

export default useProjects;
