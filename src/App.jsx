// rrd imports
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// components

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// layouts
import RootLayout from "./layouts/RootLayout";
import ProtecterRoutes from "./components/ProtecterRoutes";

// firebase
import { onAuthStateChanged } from "firebase/auth";

// react
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import Create from "./pages/Create";
import Recipe from "./pages/Recipe";

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();
  console.log(user);
  const routest = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtecterRoutes user={user}>
          <RootLayout />
        </ProtecterRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);
  return isAuthReady && <RouterProvider router={routest} />;
}

export default App;
