import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({ user, children }){
  if (user < 0) return <Navigate to="/" replace />;
  return children;
};
ProtectedRoute.propTypes = {
  user: PropTypes.number,
  children: PropTypes.node
}