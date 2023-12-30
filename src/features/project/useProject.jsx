import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

const useProject = () => {
  const { projectId } = useParams();

  const { data, ...rest } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectApi(projectId),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { project } = data || {};

  return { project, ...rest };
};

export default useProject;
