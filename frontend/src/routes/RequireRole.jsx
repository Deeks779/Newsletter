import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";

export default function RequireRole({ role, children }) {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
