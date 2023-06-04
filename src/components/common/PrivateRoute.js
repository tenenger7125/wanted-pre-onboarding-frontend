import { Navigate } from "react-router-dom";

import { localStorages } from "../../utils";

const { getLocalStorage } = localStorages;

const PrivateRoute = ({ element, redirectTo }) => {
  const authenticated = getLocalStorage("access_token");

  return authenticated ? element : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
