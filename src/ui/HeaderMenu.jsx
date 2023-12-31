import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  HiFolderOpen,
  HiMenu,
  HiOutlineHome,
  HiOutlineLogout,
  HiOutlineSun,
} from "react-icons/hi";
import { useState } from "react";
import Modal from "./Modal";
import ConfirmableModal from "./ConfirmableModal";
import useLogout from "../features/authentication/useLogout";

const MENU_LINKES = [
  {
    id: 1,
    label: "تم",
    icon: (
      <HiOutlineSun className="text-lg text-secondary-700 duration-300 group-hover:text-primary-900" />
    ),
  },
  {
    id: 2,
    label: "حساب کاربری",
    icon: (
      <HiOutlineHome className="text-lg text-secondary-700 duration-300 group-hover:text-primary-900" />
    ),
  },
  {
    id: 3,
    label: "دوره های من",
    icon: (
      <HiFolderOpen className="text-lg text-secondary-700 duration-300 group-hover:text-primary-900" />
    ),
  },
];

const HeaderMenu = () => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const { userLogouting, isLogouting } = useLogout();

  const userLogoutHandler = () => {
    userLogouting();
  };

  return (
    <div className="ltr relative">
      <Menu>
        <Menu.Button className="app-btn flex w-14 items-center justify-between px-1.5 py-1">
          منو
          <HiMenu />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute left-5 top-2 flex w-60 flex-col gap-y-2 rounded-lg bg-secondary-50 p-2 shadow-lg">
            {MENU_LINKES.map((item) => (
              <Menu.Item key={item.id}>
                <Link
                  className={`group flex items-center gap-x-2 rounded-lg p-2 text-secondary-700 duration-300 hover:bg-secondary-100 hover:text-primary-900 hover:shadow-md`}
                  to="/owner-project"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item>
              <button
                className={`group flex items-center gap-x-2 rounded-lg p-2 text-secondary-700 duration-300 hover:bg-secondary-100 hover:text-error hover:shadow-md`}
                onClick={() => setIsOpenLogout(true)}
              >
                <HiOutlineLogout className="text-lg text-secondary-700 duration-300 group-hover:text-error" />
                خروج
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      <Modal
        title="خروج از حساب کاربری"
        open={isOpenLogout}
        onClose={() => setIsOpenLogout(false)}
      >
        <ConfirmableModal
          title={
            <span className="text-xl font-medium text-error">
              آیا از خروج حساب کاربری خود اطمینان دارید؟
            </span>
          }
          onClose={() => setIsOpenLogout(false)}
          onAccept={userLogoutHandler}
          isPending={isLogouting}
        />
      </Modal>
    </div>
  );
};

export default HeaderMenu;
