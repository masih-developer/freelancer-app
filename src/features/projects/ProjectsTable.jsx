import { useState } from "react";
import useOwnerProjects from "./useOwnerProjects";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import ConfirmDelete from "../../ui/ConfirmDelete";
import toast from "react-hot-toast";
import useRemoveProject from "./useRemoveProject";
import AddNewProjectForm from "./AddNewProjectForm";
import PageLoading from "../../ui/PageLoading";
import ProjectTableRow from "./ProjectTableRow";

const ProjectsTable = () => {
  const { data, isLoading } = useOwnerProjects();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [projectIden, setProjectIden] = useState({});

  const { removeProject, isDeleting } = useRemoveProject();

  const acceptDeleteHandler = () => {
    removeProject(projectIden.id, {
      onSuccess: ({ message }) => {
        toast.success(message);
        setIsDeleteOpen(false);
      },
    });
  };

  if (isLoading) {
    return <PageLoading />;
  }

  if (!data?.projects.length) {
    return (
      <div className="mt-5 text-center text-2xl font-bold text-red-500">
        هیچ پروژه ای تعریف نشده است
      </div>
    );
  }

  return (
    <>
      <Table className="w-full text-secondary-700">
        <Table.Header>
          <Table.Row className="thead-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست ها</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.projects.map((project, index) => (
            <ProjectTableRow
              key={project._id}
              className="tbody-row"
              index={index}
              project={project}
              setIsEditOpen={setIsEditOpen}
              setIsDeleteOpen={setIsDeleteOpen}
              setProjectIden={setProjectIden}
            />
          ))}
        </Table.Body>
      </Table>
      {/* edit modal */}
      <Modal
        open={isEditOpen}
        title="ویرایش پروژه"
        onClose={() => setIsEditOpen(false)}
      >
        <AddNewProjectForm
          projectToEdit={projectIden}
          onClose={() => setIsEditOpen(false)}
        />
      </Modal>
      {/* delete modal */}
      <Modal
        title={projectIden.title}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          title={projectIden.title}
          onAccept={acceptDeleteHandler}
          onClose={() => setIsDeleteOpen(false)}
          isPending={isDeleting}
        />
      </Modal>
    </>
  );
};

export default ProjectsTable;
