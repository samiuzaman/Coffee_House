import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import CoffeeCards from "../components/CoffeeCards";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("../coffees.json"),
            element: <CoffeeCards></CoffeeCards>,
          },
          {
            path: "/category/:category",
            loader: () => fetch("../coffees.json"),
            element: <CoffeeCards></CoffeeCards>,
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
