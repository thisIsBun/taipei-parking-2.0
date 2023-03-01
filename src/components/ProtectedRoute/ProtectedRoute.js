import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({ user, children }) {
  const location = useLocation();
  if (location.pathname === "/save") {
    return children;
  } else if (user < 0) {
    return <Navigate to="/" replace />;
  }
  return children;
}
ProtectedRoute.propTypes = {
  user: PropTypes.number,
  children: PropTypes.node,
};
