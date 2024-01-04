import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerLayout from "./layouts/OwnerLayout";
import Home from "./pages/Home";
import OwnerDashboard from "./pages/OwnerDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./layouts/FreelancerLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

const ROLES = {
  freelancer: "FREELANCER",
  owner: "OWNER",
  admin: "ADMIN",
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="" element={<Home />} />

        {/* owner layout Routes */}
        <Route
          path="/owner"
          element={
            <ProtectedRoute allowedRoles={[ROLES.owner]}>
              <OwnerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":projectId" element={<Project />} />
          </Route>
        </Route>

        {/* freelancer layout Routes */}
        <Route
          path="/freelancer"
          element={
            <ProtectedRoute allowedRoles={[ROLES.freelancer]}>
              <FreelancerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<FreelancerDashboard />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="projects" element={<SubmittedProjects />} />
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
