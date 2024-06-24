import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Profile from "./pages/Profile";

function App() {
  function ProtectedRoutes({ children }) {
    const { users } = useSelector((state) => state.login);

    return users ? children : <Navigate to="/login" />;
  }
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
