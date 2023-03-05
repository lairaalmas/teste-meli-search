import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import SearchLayout from "./pages/SearchLayout";
import ErrorPage from "./pages/ErrorPage";
import SearchResultPage from "./pages/SearchResultPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
import { loadProductDetails, loadSearchItems } from "./loaders/";

import "./css/App.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "items",
        element: <SearchLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <SearchResultPage />,
            loader: loadSearchItems,
          },
          // {
          //   path: ":id",
          //   element: <ProductDetailPage />,
          //   loader: loadProductDetails,
          // },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
