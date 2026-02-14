import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Advantages from "./pages/Advantages";
import Pricing from "./pages/Pricing";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/advantages", element: <Advantages /> },
  { path: "/pricing", element: <Pricing /> },
]);
