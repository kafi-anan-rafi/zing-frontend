import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import SignIn from "./routes/Signin.jsx";
import SignOut from "./routes/SignOut.jsx";
import Profile from "./routes/Profile.jsx";
import Search from "./routes/Search.jsx";
import NavBar from "./components/Header/NavBar.jsx";
import Cart from "./components/Product/Cart";
import ProductDetails from "./components/Product/ProductDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <div>About world!</div>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signout",
        element: <SignOut />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
