import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import OwnerLayout from "./layouts/OwnerLayout";
import Owner from "./pages/Owner";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/complete-profile" element={<CompleteProfile />} />
                <Route path="" element={<MainLayout />}>
                    <Route index element={""} />
                </Route>
                <Route path="/owner" element={<OwnerLayout />}>
                    <Route index element={<Owner />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster
                toastOptions={{
                    duration: 3000,
                    className: "w-auto max-w-screen-sm",
                }}
            />
        </>
    );
};

export default App;
