import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "./main.css";
import Layout from "./routes/layout";
import { loader as logLoader } from "./routes/layout";
import Overview from "./routes/overview";
import TopPlayers from "./routes/topPlayers";
import Details from "./routes/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:logId",
    element: <Layout />,
    loader: logLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "topplayers",
        element: <TopPlayers />,
        loader: logLoader,
      },
      {
        path: "details",
        element: <Details />,
        loader: logLoader,
      },
      {
        index: true,
        element: <Overview />,
        loader: logLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
