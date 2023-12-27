import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ open, onClose, children, title }) => {
  return createPortal(
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors ${
        open ? "visible bg-black/40" : "invisible"
      }`}
    >
      <div
        className={`max-h-[calc(100vh-1rem)] w-[calc(100vw-1rem)] max-w-screen-sm overflow-y-auto rounded-xl bg-white p-5 shadow transition-all sm:w-auto sm:min-w-[350px] ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-b-secondary-200 pb-2">
          <h3 className="truncate text-lg font-medium">{title}</h3>
          <button
            className="rounded-lg bg-white p-1 text-2xl text-gray-400 duration-300 hover:bg-gray-50 hover:text-gray-600"
            onClick={onClose}
          >
            <HiOutlineX />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>,
    document.getElementById("root-modal-wrapper"),
  );
};

export default Modal;
