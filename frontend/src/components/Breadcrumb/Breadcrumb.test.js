import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import SearchLayout from "../../pages/SearchLayout";
import ErrorPage from "../../pages/ErrorPage";
import ProductDetailPage from "../../pages/ProductDetailPage";
import SearchResultPage from "../../pages/SearchResultPage";

const getRouter = (dataSearch, dataProduct) => {
  const routes = [
    {
      path: "/items",
      element: <SearchLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <SearchResultPage />,
          loader: () => dataSearch,
        },
        {
          path: ":id",
          element: <ProductDetailPage />,
          loader: () => dataProduct,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/items?search=PRODUCT"],
  });

  return router;
};

describe("Breadcrumb component", () => {
  it("receives categories via props from SearchResultsPage", async () => {
    const user = userEvent.setup();

    const DUMMY_DATA_SEARCH = {
      author: {
        name: "",
        lastname: "",
      },
      categories: ["Category 1", "Category 2"],
      items: [
        {
          id: "ML123",
          title: "Product Name",
          price: {
            currency: "ARS",
            amount: 100,
            decimals: "00",
          },
          picture: "",
          condition: "",
          free_shipping: false,
        },
      ],
    };
    const DUMMY_DATA_PRODUCT = {
      author: {
        name: "",
        lastname: "",
      },
      item: {
        id: "ML123",
        title: "Product Name",
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
    const router = getRouter(DUMMY_DATA_SEARCH, DUMMY_DATA_PRODUCT);
    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toEqual("/items");
    expect(router.state.location.search).toEqual("?search=PRODUCT");

    const product = await screen.findByText("Product Name");
    await waitFor(() => user.click(product));

    expect(router.state.location.pathname).toEqual("/items/ML123");

    const breadcrumb = await waitFor(() => screen.findByRole("navigation"));
    const category = screen.getByText("Category 1");

    expect(breadcrumb).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });
});
