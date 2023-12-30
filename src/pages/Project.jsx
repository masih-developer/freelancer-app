import ProposalsTable from "../features/project/ProposalsTable";
import ProjectHeader from "../features/project/projectHeader";
import useProject from "../features/project/useProject";
import PageLoading from "../ui/PageLoading";

const Project = () => {
  const { project, isLoading, isError, error } = useProject();

  if (isLoading) return <PageLoading />;

  if (isError)
    return <h1 className="text-center text-2xl text-error">{error}</h1>;

  return (
    <div className="my-5">
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
};

export default Project;
