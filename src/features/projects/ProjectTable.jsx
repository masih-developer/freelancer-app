import { useState } from "react";
import Loading from "../../ui/Loading";
import toLocaleShortDate from "../../utils/toLocaleShortDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import useOwnerProjects from "./useOwnerProjects";
import Modal from "../../ui/Modal";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import ConfirmDelete from "../../ui/ConfirmDelete";
import toast from "react-hot-toast";
import useRemoveProject from "./useRemoveProject";
import AddNewProjectForm from "./AddNewProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

const ProjectTable = () => {
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
    return (
      <div className="flex min-h-[calc(100vh-56px)] w-full items-center justify-center">
        <Loading size={18} />
      </div>
    );
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
            <Table.Row className="tbody-row" key={project._id}>
              <td>{index + 1}</td>
              <td className="whitespace-pre-wrap">
                {truncateText(project.title, 30)}
              </td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocaleShortDate(project.deadline)}</td>
              <td>
                <div className="mx-auto flex max-h-[80px] max-w-[200px] flex-wrap items-center justify-center gap-2 overflow-y-auto rounded-lg p-2 shadow-sm ring-1 ring-secondary-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge--gray rounded-full px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project?.freelancer?.name || "-"}</td>
              <td>
                <ToggleProjectStatus project={project} />
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-5">
                  <button
                    className="text-xl text-blue-500"
                    onClick={() => {
                      setIsEditOpen(true);
                      setProjectIden(project);
                    }}
                  >
                    <TbPencilMinus />
                  </button>
                  <button
                    className="text-xl text-red-500"
                    onClick={() => {
                      setIsDeleteOpen(true);
                      setProjectIden(project);
                    }}
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              </td>
              <td>
                <Link
                  to={project._id}
                  className="flex items-center justify-center text-xl text-primary-900"
                >
                  <HiEye />
                </Link>
              </td>
            </Table.Row>
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

export default ProjectTable;
