import { createBrowserRouter, Routes } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default routes;
