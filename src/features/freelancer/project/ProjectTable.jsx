import useProjects from "../../../hooks/useProjects";
import ErrorTitle from "../../../ui/ErrorTitle";
import PageLoading from "../../../ui/PageLoading";
import Table from "../../../ui/Table";
import ProjectTableRow from "./ProjectRow";

const ProjectTable = () => {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <PageLoading offsetTop={156} />;

  if (!projects.length) {
    return <ErrorTitle title="هنوز هیچ پروژه ای به ثبت نرسیده است." />;
  }

  return (
    <Table className="w-full text-secondary-700">
      <Table.Header>
        <Table.Row className="thead-row">
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectTableRow key={project._id} index={index} project={project} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectTable;
