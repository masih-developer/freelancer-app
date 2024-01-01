import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      {children}
      <main className="mt-14 min-h-[calc(100vh-56px)] w-full max-w-full bg-secondary-100 px-5 lg:mr-64 lg:w-[calc(100%-256px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
