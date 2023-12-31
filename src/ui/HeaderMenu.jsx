import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineLogout,
} from "react-icons/hi";
import { useState } from "react";
import Modal from "./Modal";
import ConfirmableModal from "./ConfirmableModal";
import useLogout from "../features/authentication/useLogout";
import useDarkMode from "../hooks/useDarkMode";

const HeaderMenu = () => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const { userLogouting, isLogouting } = useLogout();
  const { isDarkMode, toggleDarkModeHandler } = useDarkMode();

  const userLogoutHandler = () => {
    userLogouting();
  };

  return (
    <div className="ltr relative">
      <ul className="flex items-center gap-x-2">
        <li>
          <Link className="flex size-10 items-center justify-center rounded-full text-2xl text-secondary-600 duration-300 hover:bg-secondary-100 hover:text-primary-900">
            <HiOutlineUser />
          </Link>
        </li>
        <li>
          <Link
            className={`flex size-10 items-center justify-center rounded-full text-2xl text-secondary-600 duration-300 hover:bg-secondary-100 hover:text-secondary-500 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-500`}
            onClick={toggleDarkModeHandler}
          >
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </Link>
        </li>
        <li>
          <Link className="flex size-10 items-center justify-center rounded-full text-2xl text-secondary-600 duration-300 hover:bg-red-500/10 hover:text-error">
            <HiOutlineLogout />
          </Link>
        </li>
      </ul>
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
