import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Frame75 from "./pages/Frame75";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Frame75", element: <Frame75 /> },
  { path: "/Home", element: <Home /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
