import ErrorTitle from "../../ui/ErrorTitle";
import PageLoading from "../../ui/PageLoading";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { proposals, isLoading, isError, error } = useProposals();

  if (isLoading) return <PageLoading />;

  if (isError) return <ErrorTitle title={error.message} />;

  return (
    <div className="mt-5">
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
};

export default DashboardLayout;
