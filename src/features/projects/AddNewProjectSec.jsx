import { HiOutlinePlusSm } from "react-icons/hi";
import Modal from "../../ui/Modal";
import AddNewProjectForm from "./AddNewProjectForm";
import { useState } from "react";

const AddNewProjectSec = () => {
    const [isOpenForm, setIsOpenForm] = useState(false);

    return (
        <div className="flex items-center justify-between mt-5 mb-10">
            <h2 className="text-xl font-bold text-secondary-700">
                پروژه های شما
            </h2>
            <button
                className="app-btn w-fit flex items-center justify-center gap-1"
                onClick={() => setIsOpenForm(true)}
            >
                <HiOutlinePlusSm className="text-xl" />
                <span>اضافه کردن پروژه</span>
            </button>
            <Modal
                title="اضافه کردن پروژه جدید"
                open={isOpenForm}
                onClose={() => setIsOpenForm(false)}
            >
                <AddNewProjectForm />
            </Modal>
        </div>
    );
};

export default AddNewProjectSec;
