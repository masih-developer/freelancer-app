import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Auth from "./pages/Auth";

const App = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="" element={<MainLayout />}>
                <Route index element={""} />
            </Route>
        </Routes>
    );
};

export default App;
