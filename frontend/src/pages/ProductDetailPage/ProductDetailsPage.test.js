import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import ProductDetailPage from ".";
import SearchResultItem from "../SearchResultPage/SearchResultItem";

const getRouter = (data) => {
  const routes = [
    {
      path: "/items",
      element: <SearchResultItem />,
      loader: () => [],
    },
    {
      path: "/items/:id",
      element: <ProductDetailPage />,
      loader: () => data,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/items/", "/items/PRODUCT_ID"],
    initialIndex: 1,
  });

  return router;
};

describe("ProductDetailsPage component", () => {
  it("renders feedback msg if data object is empty", async () => {
    const DUMMY_DATA = {};
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const feedback = await screen.findByText(
      "No se encontraron detalles del productos"
    );
    expect(feedback).toBeInTheDocument();
  });

  it("renders feedback msg if data object is null", async () => {
    const DUMMY_DATA = null;
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const feedback = await screen.findByText(
      "No se encontraron detalles del productos"
    );
    expect(feedback).toBeInTheDocument();
  });

  it("renders page if data object is set", async () => {
    const DUMMY_DATA = {
      author: {
        name: "",
        lastname: "",
      },
      item: {
        id: "PRODUCT_ID",
        title: "Product Title",
        price: {
          currency: "ARS",
          amount: 100,
          decimals: "00",
        },
        picture: "",
        condition: "",
        free_shipping: true,
        sold_quantity: "",
        description: "",
      },
    };
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const productTitle = await waitFor(() =>
      screen.findByText("Product Title")
    );
    expect(productTitle).toBeInTheDocument();
  });
});
