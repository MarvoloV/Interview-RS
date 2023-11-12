import { createBrowserRouter } from "react-router-dom";
import { HomePage, QuotePage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/quote",
    element: <QuotePage />,
  },
]);
