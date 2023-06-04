import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { PATH } from "../constants";

const Root = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === PATH.ROOT) navigate(PATH.TODO);
  }, [navigate, pathname]);

  return <Outlet />;
};

export default Root;
