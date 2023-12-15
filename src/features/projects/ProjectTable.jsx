import { useState } from "react";
import Loading from "../../ui/Loading";
import toLocaleShortDate from "../../utils/toLocaleShortDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import turncateText from "../../utils/turncateText";
import useOwnerProjects from "./useOwnerProjects";
import Modal from "../../ui/Modal";
import { HiOutlineTrash } from "react-icons/hi";

const ProjectTable = () => {
    const { data, isLoading } = useOwnerProjects();
    const [isOpen, setIsOpen] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const deleteProjectHandler = () => {
        setDeleteLoading(true);

        setTimeout(() => {
            setDeleteLoading(false);
            setIsOpen(false);
        }, 2000);
    };

    if (isLoading) return <Loading />;

    // if (!data.projects.length) return <div>ProjectTable</div>;

    return (
        <div className="mx-auto p-5 mt-5 rounded-lg overflow-x-auto">
            <table className="text-secondary-700 w-full">
                <thead className="">
                    <tr className="">
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            #
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            عنوان پروژه
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            دسته بندی پروژه
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            بودجه
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            ددلاین
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            تگ ها
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            فریلنسر
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            وضعیت
                        </th>
                        <th className="text-center px-2 pb-3 whitespace-nowrap">
                            عملیات
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {/* {data.projects.map((project, index) => (
                        <tr key={project.id}>
                            <td className="">{index + 1}</td>
                            <td className="">{project.title}</td>
                            <td className="">{project.category.title}</td>
                            <td className="">{project.budget}</td>
                            <td className="">{project.deadline}</td>
                            <td className="">{project.tags.join("-")}</td>
                            <td className="">
                                {project?.freelancer?.name || "-"}
                            </td>
                            <td className="">
                                {project.status === "OPEN" ? (
                                    <span>باز</span>
                                ) : (
                                    <span>بسته</span>
                                )}
                            </td>
                        </tr>
                    ))} */}
                    <tr>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            1
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            پروژه اول
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            برنامه نویسی
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            100000
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            2023-11-15T11:04:18.276Z
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            <div className="flex max-w-[200px] flex-wrap justify-center items-center mx-auto gap-2">
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    فرانت اند
                                </span>
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    برنامه نویسی
                                </span>
                            </div>
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            نام تستی
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            <span className="badge badge--success">باز</span>
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            <button
                                className="text-white flex items-center justify-center bg-red-500 p-3 rounded-md"
                                onClick={() => setIsOpen(true)}
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            2
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            پیاده سازی بکند
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            برنامه نویسی
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            {toPersianNumbersWithComma(350000)}
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            2023-11-15T11:04:18.276Z
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            <div className="flex max-w-[200px] flex-wrap justify-center items-center mx-auto gap-2">
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    برنامه نویسی
                                </span>
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    بک اند
                                </span>
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    توسعه وب
                                </span>
                            </div>
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            -
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            <span className="badge badge--error">بسته</span>
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            ...
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            3
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            {turncateText("طراحی رابط کاربری", 30)}
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            طراحی
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            450000
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            {toLocaleShortDate("2023-11-15T11:04:18.276Z")}
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            <div className="flex max-w-[200px] flex-wrap justify-center items-center mx-auto gap-2">
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    ui
                                </span>
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    ux
                                </span>
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    رابط کاربری
                                </span>
                                <span className="badge--gray rounded-full py-1 px-2 text-xs">
                                    ui/ux
                                </span>
                            </div>
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            -
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            <span className="badge badge--success">باز</span>
                        </td>
                        <td className="text-center py-3 bg-white px-1 whitespace-nowrap text-sm">
                            ...
                        </td>
                    </tr>
                </tbody>
            </table>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-center w-56">
                    <HiOutlineTrash className="mx-auto text-6xl text-red-500" />
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-bold to-gray-800">
                            Confirm Delete
                        </h3>
                        <p className="tesm text-gray-500">
                            Are you sure to want to delete this item?
                        </p>
                    </div>
                    <div className="flex gap-4 mx-auto justify-center items-center">
                        <button className="shadow-md px-6 rounded-lg py-2">
                            Cancel
                        </button>
                        {deleteLoading ? (
                            <Loading size={10} color="red" />
                        ) : (
                            <button
                                className="bg-red-500 text-white px-6 rounded-lg py-2 shadow-md shadow-red-300"
                                onClick={deleteProjectHandler}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProjectTable;
