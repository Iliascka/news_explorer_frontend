import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const ProtectedRoute = ({ isLoggedIn, authCheck, children }) => {
  const { setActiveModal } = useContext(CurrentUserContext);
  useEffect(() => {
    if (!authCheck && !isLoggedIn) {
      setActiveModal("logIn");
    }
  }, [authCheck, isLoggedIn, setActiveModal]);

  if (authCheck) return null;
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
