import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./page";
import reportWebVitals from "../../old/src/reportWebVitals";
import HomePage from "./Components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import NotFoundPage from "./NotFoundPage";
import ProfilePages from "./ProfilePages";
import InfoPage from "./Components/InfoPage";
import FAQPage from "./Components/FAQPage";
import HeaderContent from "./Components/HeaderContent";
import Layout from "./Components/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/profiles",
        element: <ProfilePages />,
      },
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
      {
        path: "/info",
        element: <InfoPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/pvm",
        element: <InfoPage />,
      },
    ],
  },
]);
const router2 = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilePages />,
  },
  {
    path: "/profiles/:profileId",
    element: <ProfilePage />,
  },
  {
    path: "/info",
    element: <InfoPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
]);
root.render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
