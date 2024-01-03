import ProjectTable from "../features/freelancer/project/ProjectTable";
import ProjectHeader from "../features/freelancer/project/projectHeader";

const SubmittedProjects = () => {
  return (
    <div className="mt-5">
      <ProjectHeader />
      <ProjectTable />
    </div>
  );
};

export default SubmittedProjects;
