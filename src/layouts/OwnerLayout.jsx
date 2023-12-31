import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

const OwnerLayout = () => {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <main className="mt-14 min-h-[calc(100vh-56px)] w-full max-w-full bg-secondary-100 px-5 lg:mr-64 lg:w-[calc(100%-256px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerLayout;
