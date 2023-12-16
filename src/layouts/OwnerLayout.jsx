import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";

const OwnerLayout = () => {
    return (
        <div className="flex">
            <header className="lg:mr-64 h-14 bg-blue-300 fixed top-0 z-30 w-full left-auto right-0">
                app header
            </header>
            <Sidebar />
            <main className="min-h-[calc(100vh-56px)] bg-secondary-100 lg:mr-64 w-full lg:w-[calc(100%-256px)] max-w-full px-5 mt-14">
                <Outlet />
            </main>
        </div>
    );
};

export default OwnerLayout;
