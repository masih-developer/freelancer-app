import { NavLink } from "react-router-dom";

const CustomNavLink = ({ item, children }) => {
  return (
    <li>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          isActive ? "sidebar__links sidebar__links--active" : "sidebar__links"
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
