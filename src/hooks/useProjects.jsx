import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";

const useProjects = () => {
  const { search } = useLocation();
  const searchParams = Object.fromEntries(new URLSearchParams(search));

  const { data, ...rest } = useQuery({
    queryKey: ["projects", searchParams],
    queryFn: () => getProjectsApi(searchParams),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, ...rest };
};

export default useProjects;
