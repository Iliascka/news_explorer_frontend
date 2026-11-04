import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn, authCheck, children }) => {
  if (authCheck) return null;
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
