import { HiOutlinePlusSm } from "react-icons/hi";
import Modal from "../../ui/Modal";
import AddNewProjectForm from "./AddNewProjectForm";
import { useState } from "react";

const AddNewProjectSec = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="mb-10 mt-5 flex items-center justify-between">
      <h2 className="text-xl font-bold text-secondary-700">پروژه های شما</h2>
      <button
        className="app-btn flex w-fit items-center justify-center gap-1"
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
        <AddNewProjectForm onClose={() => setIsOpenForm(false)} />
      </Modal>
    </div>
  );
};

export default AddNewProjectSec;
