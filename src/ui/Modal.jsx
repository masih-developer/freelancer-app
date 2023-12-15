import { HiOutlineX } from "react-icons/hi";

const Modal = ({ open, onClose, children }) => {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex backdrop-blur-sm justify-center items-center transition-colors z-50 ${
                open ? "visible bg-black/30" : "invisible"
            }`}
        >
            <div
                className={`bg-white rounded-xl shadow p-6 transition-all ${
                    open ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 text-xl duration-300"
                    onClick={onClose}
                >
                    <HiOutlineX />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
