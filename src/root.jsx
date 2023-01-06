import {
    createBrowserRouter,
  } from "react-router-dom";
  import "./index.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/dashboard/:id",
        element: <Dashboard />,
      },
  ]);
  export default router