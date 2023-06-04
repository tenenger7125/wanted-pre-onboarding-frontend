import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Root, SignIn, SignUp, Todo } from "./pages";
import { PrivateRoute, PublicRoute } from "./components/common";
import { PATH } from "./constants";

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <Root />,
    children: [
      {
        path: PATH.SIGN_IN,
        element: <PublicRoute element={<SignIn />} redirectTo={PATH.TODO} restricted />,
      },
      {
        path: PATH.SIGN_UP,
        element: <PublicRoute element={<SignUp />} redirectTo={PATH.TODO} restricted />,
      },
      {
        path: PATH.TODO,
        element: <PrivateRoute element={<Todo />} redirectTo={PATH.SIGN_IN} />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
