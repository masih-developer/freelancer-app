import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
    return (
        <main>
            <aside>sidebar</aside>
            <div>
                <Outlet />
            </div>
        </main>
    );
};

export default OwnerLayout;
