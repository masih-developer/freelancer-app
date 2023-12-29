import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ open, onClose, children, title }) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog open={open} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-110"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-h-[calc(100vh-1rem)] w-[calc(100vw-1rem)] max-w-screen-sm scale-100 overflow-y-auto rounded-xl bg-white p-5 opacity-100 shadow sm:w-auto sm:min-w-[350px]">
              <Dialog.Title>
                <div className="flex items-center justify-between border-b border-b-secondary-200 pb-2">
                  <h3 className="truncate text-lg font-medium">{title}</h3>
                  <button
                    className="rounded-lg bg-white p-1 text-2xl text-gray-400 duration-300 hover:bg-gray-50 hover:text-gray-600"
                    onClick={onClose}
                  >
                    <HiOutlineX />
                  </button>
                </div>
              </Dialog.Title>
              <div className="mt-5">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
