import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ open, onClose, children, title }) => {
    return createPortal(
        <div
            onClick={onClose}
            className={`fixed inset-0 flex backdrop-blur-sm justify-center items-center transition-colors z-50 ${
                open ? "visible bg-black/30" : "invisible"
            }`}
        >
            <div
                className={`bg-white rounded-xl shadow p-5 w-[calc(100vw-1rem)] max-w-screen-sm sm:min-w-[350px] sm:w-auto transition-all max-h-[calc(100vh-1rem)] overflow-y-auto ${
                    open ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-b-secondary-200 pb-2">
                    <h3 className="text-lg truncate font-medium">{title}</h3>
                    <button
                        className="p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 text-2xl duration-300"
                        onClick={onClose}
                    >
                        <HiOutlineX />
                    </button>
                </div>
                <div className="mt-5">{children}</div>
            </div>
        </div>,
        document.getElementById("root-modal-wrapper")
    );
};

export default Modal;
