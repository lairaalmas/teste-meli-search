import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import SearchResultPage from "./pages/SearchResultPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import "./css/App.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement
    children: [
      { path: "items/:id", element: <ProductDetailPage /> },
      { path: "items/search/:query", element: <SearchResultPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
