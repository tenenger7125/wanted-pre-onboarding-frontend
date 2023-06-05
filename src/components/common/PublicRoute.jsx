import { Navigate } from "react-router-dom";

import { localStorages } from "../../utils";

const { getLocalStorage } = localStorages;

const PublicRoute = ({ element, redirectTo, restricted = false }) => {
  const authenticated = getLocalStorage("access_token");

  return authenticated && restricted ? <Navigate to={redirectTo} /> : element;
};

export default PublicRoute;
