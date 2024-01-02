import { HiFolderOpen, HiHome, HiOutlineHand } from "react-icons/hi";
import CustomNavLink from "../ui/CustomNavLink";
import Sidebar from "../ui/Sidebar";
import MainLayout from "./MainLayout";

const SIDEBAR_LINKS = [
  { id: 1, name: "خانه", path: "dashboard", icon: <HiHome /> },
  { id: 2, name: "پروژه ها", path: "projects", icon: <HiFolderOpen /> },
  { id: 3, name: "درخواست ها", path: "proposals", icon: <HiOutlineHand /> },
];

const FreelancerLayout = () => {
  return (
    <MainLayout>
      <Sidebar>
        {SIDEBAR_LINKS.map((item) => (
          <CustomNavLink key={item.id} item={item}>
            {item.icon}
            {item.name}
          </CustomNavLink>
        ))}
      </Sidebar>
    </MainLayout>
  );
};

export default FreelancerLayout;
