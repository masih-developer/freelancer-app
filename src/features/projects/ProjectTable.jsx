import { useState } from "react";
import Loading from "../../ui/Loading";
import toLocaleShortDate from "../../utils/toLocaleShortDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import useOwnerProjects from "./useOwnerProjects";
import Modal from "../../ui/Modal";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import ConfirmDelete from "../../ui/ConfirmDelete";
import toast from "react-hot-toast";
import useRemoveProject from "./useRemoveProject";

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

    if (isLoading)
        return (
            <div className="w-full min-h-[calc(100vh-56px)] flex items-center justify-center">
                <Loading size={18} />
            </div>
        );

    if (!data.projects.length)
        return (
            <div className="text-center text-red-500 text-2xl font-bold mt-5">
                هیچ پروژه ای تعریف نشده است
            </div>
        );

    return (
        <>
            <Table className="text-secondary-700 w-full">
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
                                <div className="flex max-w-[200px] flex-wrap justify-center items-center mx-auto gap-2 ring-1 ring-secondary-100 shadow-sm p-2 rounded-lg">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="badge--gray rounded-full py-1 px-2 text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td>{project?.freelancer?.name || "-"}</td>
                            <td>
                                {project.status === "OPEN" ? (
                                    <span className="badge badge--success">
                                        باز
                                    </span>
                                ) : (
                                    <span className="badge badge--error">
                                        بسته
                                    </span>
                                )}
                            </td>
                            <td>
                                <div className="flex items-center justify-center gap-x-5">
                                    <button
                                        className="text-xl text-blue-500"
                                        onClick={() => {
                                            setIsEditOpen(true);
                                            setProjectIden((prev) => ({
                                                ...prev,
                                                title: project.title,
                                                id: project._id,
                                            }));
                                        }}
                                    >
                                        <TbPencilMinus />
                                    </button>
                                    <button
                                        className="text-xl text-red-500"
                                        onClick={() => {
                                            setIsDeleteOpen(true);
                                            setProjectIden((prev) => ({
                                                ...prev,
                                                title: project.title,
                                                id: project._id,
                                            }));
                                        }}
                                    >
                                        <HiOutlineTrash />
                                    </button>
                                </div>
                            </td>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            {/* edit modal */}
            <Modal open={isEditOpen} onClose={() => setIsEditOpen(false)}>
                <div className="">
                    <h3 className="text-lg font-medium">
                        ویرایش {projectIden.title}؟
                    </h3>
                </div>
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
