import ErrorTitle from "../../ui/ErrorTitle";
import PageLoading from "../../ui/PageLoading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { data, isLoading, isError, error } = useOwnerProjects();

  if (isLoading) return <PageLoading />;

  if (isError) return <ErrorTitle title={error.message} />;

  return (
    <div className="mt-5">
      <DashboardHeader />
      <Stats projects={data.projects} />
    </div>
  );
};

export default DashboardLayout;
