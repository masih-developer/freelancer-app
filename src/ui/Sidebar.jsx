import { NavLink } from "react-router-dom";
import { HiFolderOpen, HiHome } from "react-icons/hi";

const SIDEBAR_LINKS = [
    { id: 1, name: "خانه", path: "dashboard", icon: <HiHome /> },
    { id: 2, name: "پروژه ها", path: "projects", icon: <HiFolderOpen /> },
];

const Sidebar = () => {
    return (
        <aside className="fixed shadow-md right-0 top-0 bottom-0 w-64 bg-secondary-0 overflow-y-auto p-5 lg:block hidden">
            <ul className="flex flex-col gap-2">
                {SIDEBAR_LINKS.map((item) => (
                    <li key={item.id}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar__links sidebar__links--active"
                                    : "sidebar__links"
                            }
                        >
                            {item.icon}
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
