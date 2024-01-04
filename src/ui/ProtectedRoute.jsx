import { Navigate, useLocation } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import WrapperLoading from "./WrapperLoading";

const ProtectedRoute = ({ allowedRoles, children }) => {
  // 1. load the authenticate
  // 2. check if is authorized or not, check authenticated or not
  // 3. when it was to authenticated or not, show a loading
  // 4. is user authenticated and authorized, continue => render children
  // 5.
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) return <WrapperLoading />;

  return allowedRoles.find((role) => role === user?.role) ? (
    children
  ) : user?.role ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
