import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({ user, children }) {
  const location = useLocation();
  if (user && location.pathname === "/save") {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}
ProtectedRoute.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node,
};
