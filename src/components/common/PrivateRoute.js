import { Navigate } from "react-router-dom";

import { getLocalStorage } from "../../utils/localStorage";

const PrivateRoute = ({ element, redirectTo }) => {
  const authenticated = getLocalStorage("access_token");

  return authenticated ? element : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
