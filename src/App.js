import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import SearchResultPage from "./pages/SearchResultPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import "./css/App.min.css";
import { loader as searchLoader } from "./components/SearchBar";
import SearchLayout from "./pages/SearchLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        path: "items",
        element: <SearchLayout />,
        loader: searchLoader,
        children: [
          {
            path: ":id",
            element: <ProductDetailPage />,
          },
          {
            path: "?search=:query",
            element: <SearchResultPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
