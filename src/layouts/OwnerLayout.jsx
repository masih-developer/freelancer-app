import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";

const OwnerLayout = () => {
  return (
    <div className="flex">
      <header className="fixed left-auto right-0 top-0 z-30 h-14 w-full bg-blue-300 lg:mr-64">
        app header
      </header>
      <Sidebar />
      <main className="mt-14 min-h-[calc(100vh-56px)] w-full max-w-full bg-secondary-100 px-5 lg:mr-64 lg:w-[calc(100%-256px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerLayout;
