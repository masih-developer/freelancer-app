import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Owner from "./pages/Owner";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerLayout from "./layouts/OwnerLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="" element={<Home />} />

        {/* owner layout Routes */}
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Owner />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":projectId" element={<Project />} />
          </Route>
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
